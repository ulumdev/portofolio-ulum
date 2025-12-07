<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogPostRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of blog posts
     */
    public function index(Request $request)
    {
        $query = BlogPost::with('user', 'category', 'tags');

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%");
            });
        }

        // Filter by status
        if ($request->has('status') && $request->status != '') {
            $query->where('status', $request->status);
        }

        // Filter by category
        if ($request->has('category') && $request->category != '') {
            $query->where('category_id', $request->category);
        }

        $posts = $query->latest()->paginate(10);
        $categories = Category::all();

        return view('admin.blog.index', compact('posts', 'categories'));
    }

    /**
     * Show the form for creating a new blog post
     */
    public function create()
    {
        $categories = Category::all();
        $tags = Tag::all();
        return view('admin.blog.create', compact('categories', 'tags'));
    }

    /**
     * Store a newly created blog post
     */
    public function store(StoreBlogPostRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = auth()->id();

        // Handle image upload
        if ($request->hasFile('featured_image')) {
            $data['featured_image'] = $request->file('featured_image')
                ->store('blog', 'public');
        }

        // Set published_at if status is published
        if ($data['status'] === 'published' && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        $post = BlogPost::create($data);

        // Sync tags
        if ($request->has('tags')) {
            $post->tags()->sync($request->tags);
        }

        return redirect()->route('admin.blog.index')
            ->with('success', 'Blog post created successfully!');
    }

    /**
     * Display the specified blog post
     */
    public function show(BlogPost $blog)
    {
        $blog->load('user', 'category', 'tags');
        return view('admin.blog.show', compact('blog'));
    }

    /**
     * Show the form for editing the specified blog post
     */
    public function edit(BlogPost $blog)
    {
        $categories = Category::all();
        $tags = Tag::all();
        $blog->load('tags');
        return view('admin.blog.edit', compact('blog', 'categories', 'tags'));
    }

    /**
     * Update the specified blog post
     */
    public function update(UpdateBlogPostRequest $request, BlogPost $blog)
    {
        $data = $request->validated();

        // Handle image upload
        if ($request->hasFile('featured_image')) {
            // Delete old image
            if ($blog->featured_image) {
                Storage::disk('public')->delete($blog->featured_image);
            }

            $data['featured_image'] = $request->file('featured_image')
                ->store('blog', 'public');
        }

        // Set published_at if status is published
        if ($data['status'] === 'published' && empty($blog->published_at)) {
            $data['published_at'] = now();
        }

        $blog->update($data);

        // Sync tags
        if ($request->has('tags')) {
            $blog->tags()->sync($request->tags);
        } else {
            $blog->tags()->detach();
        }

        return redirect()->route('admin.blog.index')
            ->with('success', 'Blog post updated successfully!');
    }

    /**
     * Remove the specified blog post
     */
    public function destroy(BlogPost $blog)
    {
        // Delete image
        if ($blog->featured_image) {
            Storage::disk('public')->delete($blog->featured_image);
        }

        $blog->delete();

        return redirect()->route('admin.blog.index')
            ->with('success', 'Blog post deleted successfully!');
    }
}

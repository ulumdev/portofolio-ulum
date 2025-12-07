<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display list of blog posts
     */
    public function index(Request $request)
    {
        $query = BlogPost::published()->with('category', 'user', 'tags');

        // Search
        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        $posts = $query->latest('published_at')->paginate(9);
        $categories = Category::withCount('blogPosts')->get();
        $popularTags = Tag::withCount('blogPosts')
            ->orderBy('blog_posts_count', 'desc')
            ->take(10)
            ->get();

        return view('blog.index', compact('posts', 'categories', 'popularTags'));
    }

    /**
     * Display single blog post
     */
    public function show(BlogPost $post)
    {
        // Only show published posts
        if ($post->status !== 'published') {
            abort(404);
        }

        $post->load('category', 'user', 'tags');

        // Increment views
        $post->incrementViews();

        // Get related posts (same category or tags)
        $relatedPosts = BlogPost::published()
            ->where('id', '!=', $post->id)
            ->where(function($q) use ($post) {
                $q->where('category_id', $post->category_id)
                  ->orWhereHas('tags', function($q2) use ($post) {
                      $q2->whereIn('tags.id', $post->tags->pluck('id'));
                  });
            })
            ->with('category')
            ->take(3)
            ->get();

        return view('blog.show', compact('post', 'relatedPosts'));
    }

    /**
     * Display posts by category
     */
    public function category(Category $category)
    {
        $posts = BlogPost::published()
            ->where('category_id', $category->id)
            ->with('category', 'user', 'tags')
            ->latest('published_at')
            ->paginate(9);

        $categories = Category::withCount('blogPosts')->get();
        $popularTags = Tag::withCount('blogPosts')
            ->orderBy('blog_posts_count', 'desc')
            ->take(10)
            ->get();

        return view('blog.index', compact('posts', 'category', 'categories', 'popularTags'));
    }

    /**
     * Display posts by tag
     */
    public function tag(Tag $tag)
    {
        $posts = $tag->blogPosts()
            ->published()
            ->with('category', 'user', 'tags')
            ->latest('published_at')
            ->paginate(9);

        $categories = Category::withCount('blogPosts')->get();
        $popularTags = Tag::withCount('blogPosts')
            ->orderBy('blog_posts_count', 'desc')
            ->take(10)
            ->get();

        return view('blog.index', compact('posts', 'tag', 'categories', 'popularTags'));
    }

    /**
     * Search blog posts
     */
    public function search(Request $request)
    {
        return $this->index($request);
    }
}

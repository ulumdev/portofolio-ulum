<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of categories
     */
    public function index()
    {
        // $categories = Category::withCount('blogPosts')->latest()->paginate(15);
        // return view('admin.categories.index', compact('categories'));
        // $categories = Category::withCount('blogPosts')->orderBy('name')->get();
        // $categories = Category::withCount('blogPosts')->latest()->paginate(15);
        $categories = Category::withCount('blogPosts')->orderBy('name')->get();

        return Inertia::render('Admin/Categories/Index', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new category
     */
    public function create()
    {
        // return view('admin.categories.create');
        return Inertia::render('Admin/Categories/Create');
    }

    /**
     * Store a newly created category
     */
    public function store(StoreCategoryRequest $request)
    {
        Category::create($request->validated());

        return redirect()->route('admin.categories.index')
            ->with('success', 'Category created successfully!');
    }

    /**
     * Display the specified category
     */
    public function show(Category $category)
    {
        $category->loadCount('blogPosts');
        // return view('admin.categories.show', compact('category'));
        return Inertia::render('Admin/Categories/Show', [
            'category' => $category,
        ]);
    }

    /**
     * Show the form for editing the specified category
     */
    public function edit(Category $category)
    {
        // return view('admin.categories.edit', compact('category'));
        return Inertia::render('Admin/Categories/Edit', [
            'category' => $category,
        ]);
    }

    /**
     * Update the specified category
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update($request->validated());

        return redirect()->route('admin.categories.index')
            ->with('success', 'Category updated successfully!');
    }

    /**
     * Remove the specified category
     */
    public function destroy(Category $category)
    {
        // Check if category has blog posts
        if ($category->blogPosts()->count() > 0) {
            return redirect()->route('admin.categories.index')
                ->with('error', 'Cannot delete category with existing blog posts!');
        }

        $category->delete();

        return redirect()->route('admin.categories.index')
            ->with('success', 'Category deleted successfully! ');
    }
}

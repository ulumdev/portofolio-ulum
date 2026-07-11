<?php

namespace Tests\Feature\Admin;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;
    private Category $category;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create([
            'role' => 'admin'
        ]);
        $this->category = Category::create([
            'name' => 'Tech',
            'slug' => 'tech',
            'description' => 'Technology'
        ]);
    }

    public function test_admin_can_view_blogs_index(): void
    {
        BlogPost::create([
            'user_id' => $this->admin->id,
            'category_id' => $this->category->id,
            'title' => 'Test Blog',
            'slug' => 'test-blog',
            'content' => 'Test Content',
            'status' => 'draft'
        ]);

        $response = $this->actingAs($this->admin)->get('/admin/blog');

        $response->assertStatus(200);
    }

    public function test_admin_can_create_blog(): void
    {
        $response = $this->actingAs($this->admin)->post('/admin/blog', [
            'title' => 'New Blog',
            'slug' => 'new-blog',
            'category_id' => $this->category->id,
            'content' => 'Some content here',
            'status' => 'draft'
        ]);

        $response->assertRedirect(route('admin.blog.index'));
        $this->assertDatabaseHas('blog_posts', [
            'title' => 'New Blog',
            'slug' => 'new-blog'
        ]);
    }

    public function test_admin_can_update_blog(): void
    {
        $blog = BlogPost::create([
            'user_id' => $this->admin->id,
            'category_id' => $this->category->id,
            'title' => 'Old Blog',
            'slug' => 'old-blog',
            'content' => 'Old content',
            'status' => 'draft'
        ]);

        $response = $this->actingAs($this->admin)->put("/admin/blog/{$blog->slug}", [
            'title' => 'Updated Blog',
            'slug' => 'updated-blog',
            'category_id' => $this->category->id,
            'content' => 'Updated content',
            'status' => 'published'
        ]);

        $response->assertRedirect(route('admin.blog.index'));
        $this->assertDatabaseHas('blog_posts', [
            'id' => $blog->id,
            'title' => 'Updated Blog',
            'status' => 'published'
        ]);
    }

    public function test_admin_can_delete_blog(): void
    {
        $blog = BlogPost::create([
            'user_id' => $this->admin->id,
            'category_id' => $this->category->id,
            'title' => 'Delete Blog',
            'slug' => 'delete-blog',
            'content' => 'Delete content',
            'status' => 'draft'
        ]);

        $response = $this->actingAs($this->admin)->delete("/admin/blog/{$blog->slug}");

        $response->assertRedirect(route('admin.blog.index'));
        $this->assertDatabaseMissing('blog_posts', [
            'id' => $blog->id,
            'deleted_at' => null
        ]);
    }
}

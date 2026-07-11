<?php

namespace Tests\Feature\Admin;

use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create([
            'role' => 'admin'
        ]);
    }

    public function test_admin_can_view_categories(): void
    {
        Category::create(['name' => 'Cat 1', 'slug' => 'cat-1', 'description' => 'Desc 1']);

        $response = $this->actingAs($this->admin)->get('/admin/categories');

        $response->assertStatus(200);
    }

    public function test_admin_can_create_category(): void
    {
        $response = $this->actingAs($this->admin)->post('/admin/categories', [
            'name' => 'New Category',
            'slug' => 'new-category',
            'description' => 'A new category description'
        ]);

        $response->assertRedirect(route('admin.categories.index'));
        $this->assertDatabaseHas('categories', [
            'name' => 'New Category',
            'slug' => 'new-category'
        ]);
    }

    public function test_admin_can_update_category(): void
    {
        $category = Category::create([
            'name' => 'Old Name',
            'slug' => 'old-name'
        ]);

        $response = $this->actingAs($this->admin)->put("/admin/categories/{$category->slug}", [
            'name' => 'Updated Name',
            'slug' => 'updated-name',
            'description' => 'Updated description'
        ]);

        $response->assertRedirect(route('admin.categories.index'));
        $this->assertDatabaseHas('categories', [
            'id' => $category->id,
            'name' => 'Updated Name',
            'slug' => 'updated-name'
        ]);
    }

    public function test_admin_can_delete_category(): void
    {
        $category = Category::create([
            'name' => 'Delete Me',
            'slug' => 'delete-me'
        ]);

        $response = $this->actingAs($this->admin)->delete("/admin/categories/{$category->slug}");

        $response->assertRedirect(route('admin.categories.index'));
        // check if soft deleted or deleted
        $this->assertDatabaseMissing('categories', [
            'id' => $category->id,
            'deleted_at' => null // assuming soft deletes are used
        ]);
    }
}

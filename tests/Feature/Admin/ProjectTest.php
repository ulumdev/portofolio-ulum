<?php

namespace Tests\Feature\Admin;

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectTest extends TestCase
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

    public function test_admin_can_view_projects_index(): void
    {
        Project::create([
            'user_id' => $this->admin->id,
            'title' => 'Test Project',
            'slug' => 'test-project',
            'description' => 'Test',
            'content' => 'Test Content',
            'status' => 'draft'
        ]);

        $response = $this->actingAs($this->admin)->get('/admin/projects');

        $response->assertStatus(200);
    }

    public function test_admin_can_create_project(): void
    {
        $response = $this->actingAs($this->admin)->post('/admin/projects', [
            'title' => 'New Project',
            'slug' => 'new-project',
            'description' => 'A new project',
            'content' => 'Some content here',
            'status' => 'draft'
        ]);

        $response->assertRedirect(route('admin.projects.index'));
        $this->assertDatabaseHas('projects', [
            'title' => 'New Project',
            'slug' => 'new-project'
        ]);
    }

    public function test_admin_can_update_project(): void
    {
        $project = Project::create([
            'user_id' => $this->admin->id,
            'title' => 'Old Project',
            'slug' => 'old-project',
            'description' => 'Old',
            'content' => 'Old',
            'status' => 'draft'
        ]);

        $response = $this->actingAs($this->admin)->put("/admin/projects/{$project->slug}", [
            'title' => 'Updated Project',
            'slug' => 'updated-project',
            'description' => 'Updated',
            'content' => 'Updated content',
            'status' => 'published'
        ]);

        $response->assertRedirect(route('admin.projects.index'));
        $this->assertDatabaseHas('projects', [
            'id' => $project->id,
            'title' => 'Updated Project',
            'status' => 'published'
        ]);
    }

    public function test_admin_can_delete_project(): void
    {
        $project = Project::create([
            'user_id' => $this->admin->id,
            'title' => 'Delete Project',
            'slug' => 'delete-project',
            'description' => 'Delete',
            'content' => 'Delete',
            'status' => 'draft'
        ]);

        $response = $this->actingAs($this->admin)->delete("/admin/projects/{$project->slug}");

        $response->assertRedirect(route('admin.projects.index'));
        $this->assertDatabaseMissing('projects', [
            'id' => $project->id,
            'deleted_at' => null
        ]);
    }
}

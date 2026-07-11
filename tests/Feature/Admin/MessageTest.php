<?php

namespace Tests\Feature\Admin;

use App\Models\ContactMessage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MessageTest extends TestCase
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

    public function test_admin_can_view_messages_index(): void
    {
        ContactMessage::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'subject' => 'Hello',
            'message' => 'Test message'
        ]);

        $response = $this->actingAs($this->admin)->get('/admin/messages');

        $response->assertStatus(200);
    }

    public function test_admin_can_view_single_message_and_it_is_marked_as_read(): void
    {
        $message = ContactMessage::create([
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'subject' => 'Hello',
            'message' => 'Test message',
            'is_read' => false
        ]);

        $response = $this->actingAs($this->admin)->get("/admin/messages/{$message->id}");

        $response->assertStatus(200);
        $this->assertDatabaseHas('contact_messages', [
            'id' => $message->id,
            'is_read' => true
        ]);
    }

    public function test_admin_can_delete_message(): void
    {
        $message = ContactMessage::create([
            'name' => 'Delete Me',
            'email' => 'del@example.com',
            'subject' => 'Hello',
            'message' => 'Test message'
        ]);

        $response = $this->actingAs($this->admin)->delete("/admin/messages/{$message->id}");

        $response->assertRedirect(route('admin.messages.index'));
        $this->assertDatabaseMissing('contact_messages', [
            'id' => $message->id,
            'deleted_at' => null
        ]);
    }
}

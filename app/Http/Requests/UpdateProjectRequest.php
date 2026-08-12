<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->isAdmin();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'required|string',
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5096',
            'demo_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'status' => 'required|in:draft,published',
            'published_at' => 'nullable|date',
            'created_at' => 'nullable|date',
            'order' => 'nullable|integer|min:0',
            'skills' => 'nullable|array',
            'skills.*' => 'exists:skills,id',
        ];
    }

    /**
     * Get custom error messages
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Project title is required.',
            'description.required' => 'Project description is required.',
            'content.required' => 'Project content is required.',
            'featured_image.image' => 'The file must be an image.',
            'featured_image.max' => 'Image size must not exceed 5MB.',
            'demo_url.url' => 'Demo URL must be a valid URL.',
            'github_url.url' => 'GitHub URL must be a valid URL.',
            'status.in' => 'Status must be either draft or published.',
            'skills.*.exists' => 'Selected skill does not exist.',
        ];
    }
}

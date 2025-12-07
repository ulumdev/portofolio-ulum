<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSkillRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'proficiency' => 'required|in:beginner,intermediate,advanced,expert',
            'category' => 'nullable|string|max:255',
            'order' => 'nullable|integer|min:0',
        ];
    }

    /**
     * Get custom error messages
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Skill name is required.',
            'proficiency.required' => 'Proficiency level is required.',
            'proficiency.min' => 'Proficiency must be at least 1.',
            'proficiency.max' => 'Proficiency must not exceed 100.',
        ];
    }
}

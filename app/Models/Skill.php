<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Skill extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'icon',
        'proficiency',
        'category',
        'order',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    /**
     * Scope to order skills by 'order' column
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }

    /**
     * Get all projects using this skill
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}

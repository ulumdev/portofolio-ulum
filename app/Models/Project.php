<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Project extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'description',
        'content',
        'featured_image',
        'demo_url',
        'github_url',
        'status',
        'published_at',
        'order',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        // Auto-generate slug from title
        static::creating(function ($project) {
            if (empty($project->slug)) {
                $slug = Str::slug($project->title);
                $count = static::where('slug', 'LIKE', "$slug%")->count();
                $project->slug = $count ?  "$slug-$count" : $slug;
            }
        });
    }

    /**
     * Scope to get only published projects
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published')
                    ->whereNotNull('published_at')
                    ->where('published_at', '<=', now());
    }

    /**
     * Scope to order projects by 'order' column
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }

    /**
     * Get the user who created this project
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all skills for this project
     */
    public function skills()
    {
        return $this->belongsToMany(Skill::class);
    }
}

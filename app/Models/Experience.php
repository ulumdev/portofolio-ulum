<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Experience extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'position',
        'company',
        'company_url',
        'location',
        'employment_type',
        'start_date',
        'end_date',
        'is_current',
        'description',
        'responsibilities',
        'technologies',
        'company_logo',
        'order',
        'is_featured',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'responsibilities' => 'array',
        'technologies' => 'array',
        'is_current' => 'boolean',
        'is_featured' => 'boolean',
    ];

    // Get formatted date range
    public function getDateRangeAttribute(): string
    {
        $start = $this->start_date->format('M Y');
        $end = $this->is_current ? 'Present' : $this->end_date?->format('M Y');
        return "{$start} - {$end}";
    }

    // Get duration in months
    public function getDurationAttribute(): string
    {
        $start = $this->start_date;
        $end = $this->is_current ? now() : $this->end_date;

        $months = $start->diffInMonths($end);
        $years = floor($months / 12);
        $remainingMonths = $months % 12;

        if ($years > 0 && $remainingMonths > 0) {
            return "{$years} yr {$remainingMonths} mos";
        } elseif ($years > 0) {
            return "{$years} yr";
        } else {
            return "{$remainingMonths} mos";
        }
    }

    // Scope for ordering
    public function scopeOrdered($query)
    {
        return $query->orderBy('is_current', 'desc')
                    ->orderBy('start_date', 'desc')
                    ->orderBy('order', 'asc');
    }

    // Scope for featured
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
};

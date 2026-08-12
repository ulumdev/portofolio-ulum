<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Education extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'institution',
        'degree',
        'field_of_study',
        'location',
        'start_date',
        'end_date',
        'is_current',
        'grade',
        'activities',
        'description',
        'institution_logo',
        'order',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_current' => 'boolean',
    ];

    protected $appends = [
        'date_range',
    ];

    public function getDateRangeAttribute(): string
    {
        $start = $this->start_date->format('Y');
        $end = $this->is_current ? 'Present' : $this->end_date?->format('Y');
        if ($start === $end) return $start;
        return "{$start} - {$end}";
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('is_current', 'desc')
                    ->orderBy('start_date', 'desc')
                    ->orderBy('order', 'asc');
    }
}

<?php

use App\Models\Setting;
use Illuminate\Support\Str;

if (! function_exists('setting')) {
    /**
     * Get setting value by key
     *
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    function setting(string $key, $default = null)
    {
        return Setting::get($key, $default);
    }
}

if (! function_exists('excerpt')) {
    /**
     * Generate excerpt from text
     *
     * @param string $text
     * @param int $length
     * @return string
     */
    function excerpt(string $text, int $length = 150): string
    {
        return Str::limit(strip_tags($text), $length);
    }
}

if (! function_exists('format_number')) {
    /**
     * Format number with abbreviation
     *
     * @param int $number
     * @return string
     */
    function format_number(int $number): string
    {
        if ($number >= 1000000) {
            return round($number / 1000000, 1) . 'M';
        } elseif ($number >= 1000) {
            return round($number / 1000, 1) . 'K';
        }

        return (string) $number;
    }
}

if (! function_exists('reading_time')) {
    /**
     * Calculate reading time for content
     *
     * @param string $content
     * @param int $wpm Words per minute
     * @return string
     */
    function reading_time(string $content, int $wpm = 200): string
    {
        $wordCount = str_word_count(strip_tags($content));
        $minutes = ceil($wordCount / $wpm);

        return $minutes . ' min read';
    }
}

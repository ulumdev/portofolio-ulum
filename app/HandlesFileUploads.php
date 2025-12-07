<?php

namespace App;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HandlesFileUploads
{
    /**
     * Upload a file to storage
     *
     * @param UploadedFile $file
     * @param string $directory
     * @param string $disk
     * @return string Path to uploaded file
     */
    public function uploadFile(UploadedFile $file, string $directory = 'uploads', string $disk = 'public'): string
    {
        return $file->store($directory, $disk);
    }

    /**
     * Delete a file from storage
     *
     * @param string|null $path
     * @param string $disk
     * @return bool
     */
    public function deleteFile(?string $path, string $disk = 'public'): bool
    {
        if ($path && Storage::disk($disk)->exists($path)) {
            return Storage::disk($disk)->delete($path);
        }

        return false;
    }

    /**
     * Upload and replace old file
     *
     * @param UploadedFile $file
     * @param string|null $oldPath
     * @param string $directory
     * @param string $disk
     * @return string
     */
    public function uploadAndReplace(UploadedFile $file, ?string $oldPath, string $directory = 'uploads', string $disk = 'public'): string
    {
        // Delete old file if exists
        if ($oldPath) {
            $this->deleteFile($oldPath, $disk);
        }

        // Upload new file
        return $this->uploadFile($file, $directory, $disk);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TheoryMaterial extends Model
{
    use HasFactory;

    protected $fillable = [
        'module_id', 'title', 'slug', 'content', 
        'estimated_read_time', 'order_number', 
        'is_published', 'created_by'
    ];

    // Otomatis buat slug saat title diisi (opsional tapi membantu)
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($material) {
            $material->slug = Str::slug($material->title);
        });
    }

    public function module() {
        return $this->belongsTo(TheoryModule::class);
    }
}
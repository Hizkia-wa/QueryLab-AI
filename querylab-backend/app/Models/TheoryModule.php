<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TheoryModule extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 
        'order_number', 'is_published', 'created_by'
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(fn ($model) => $model->slug = Str::slug($model->title));
    }

    // Relasi: Satu modul punya banyak materi
    public function materials()
    {
        return $this->hasMany(TheoryMaterial::class, 'module_id')->orderBy('order_number');
    }
}
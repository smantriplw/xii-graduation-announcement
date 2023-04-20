<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GraduatedStudent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'nisn',
        'birth',
        'graduate_year',
        'photo_path',
    ];

    protected $hidden = ['nisn'];

    protected $casts = [
        'birth' => 'date:dd-MM-YYYY',
    ];
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('graduated_students', function(Blueprint $table) {
            $table->id();
            $table->integer('nisn');
            $table->string('name');
            $table->date('birth');
            $table->string('photo_path')->nullable();
            $table->integer('graduate_year');
            
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('graduated_students');
    }
};

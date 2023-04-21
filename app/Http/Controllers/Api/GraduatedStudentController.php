<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GraduatedStudent;

class GraduatedStudentController extends Controller
{
  public function show(int $nisn)
  {
    $student = GraduatedStudent::where('nisn', $nisn);
    if (!$student->exists()) {
      return response()->json([
        "error" => "NISN Siswa tidak ditemukan",
      ], 404);
    }

    return response()->json([
      "error" => null,
      "message" => "Sukses mendapatkan data siswa",
      "data" => $student->get(),
    ]);
  }
}

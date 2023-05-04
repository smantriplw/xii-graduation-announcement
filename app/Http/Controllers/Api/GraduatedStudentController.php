<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddGraduatedStudentRequest;
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

  public function all() {
    $students = GraduatedStudent::all();

    return response()->json([
      'error' => null,
      'message' => 'Succesfuly retrieved all graduated students data',
      'data' => $students,
    ]);
  }

  public function store(AddGraduatedStudentRequest $request) {
    $input = $request->all();

    $student = GraduatedStudent::upsert($input, ['nisn'], ['name', 'graduate_year', 'birth']);

    return response()->json([
      'error' => null,
      'data' => $student->get(),
    ]);
  }
}

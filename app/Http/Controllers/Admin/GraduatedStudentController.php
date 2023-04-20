<?php
namespace App\Http\Contrrollers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GraduatedStudent;
use Illuminate\Http\Request;

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
  public function uploadPhoto(Request $request, int $nisn)
  {
    $student = GraduatedStudent::where('nisn', $nisn);
    if (!$student->exists()) {
      return response()->json(array(
        "error" => "NISN siswa tidak ditemukan!",
      ), 404);
    }

    $photo = $request->file('file');
    if (!$photo->isValid() || !in_array(strtolower($photo->getExtension()), array('jpg', 'png', 'jpeg')) || !$photo->isFile()) {
      return response()->json(array(
        "error" => "File foto tidak valid atau ekstensi file tidak mendukung!",
      ), 400);
    }

    $file = $photo->move(public_path(), md5(strval($nisn)));

    $student->update([
      "photo_path" => $file->getPath(),
    ]);

    return response()->json([
      "error" => null,
      "message" => "Data siswa berhasil diperbarui, dan foto telah terupload!",
      "data" => [
        "file" => $file->getPath(),
        "siswa" => $student->first()->nisn,
      ],
    ]);
  }
}

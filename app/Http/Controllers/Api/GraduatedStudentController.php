<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Imports\GraduatedStudentImport;
use App\Models\GraduatedStudent;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

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

  public function excelUpsert(Request $request)
  {
    $excel_file = $request->file('file');
    if (!$excel_file->isValid() || $excel_file->isFile() || !in_array(strtolower($excel_file->getExtension()), ['xlsx', 'csv', 'tsv', 'ods', 'xls', 'slk'])) {
      return response()->json([
        "error" => "File tidak valid atau format tidak didukung"
      ], 400);
    }

    try {
      Excel::import(new GraduatedStudentImport, $excel_file);
    } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
      return response()->json([
        "error" => $e->getMessage(),
        "errors" => $e->failures(),
      ]);
    }

    return response()->json([
      "error" => null,
      "message" => "Data siswa berhasil di import",
    ]);
  }
}

<?php
namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Imports\GraduatedStudentImport;
use App\Models\GraduatedStudent;
use Maatwebsite\Excel\Facades\Excel;

class GraduatedStudentController extends Controller
{
	public function uploadPhoto(Request $request, int $nisn)
  {
    $request->validate([
        'file' => 'required|mimes:png,jpg,jpeg|max:1024',
    ]);
    $student = GraduatedStudent::where('nisn', $nisn);
    if (!$student->exists()) {
      return redirect()->back()->with('flash', [
        'error' => 'NISN Siswa tidak ditemukan!'
      ]);
    }

    $photo = $request->file('file');
    if (!$photo->isValid() || !$photo->isFile()) {
      return redirect()->back()->with('flash', [
        'error' => 'File foto tidak valid atau ekstensi file tidak mendukung!',
      ]);
    }

    $file = $photo->move(public_path(), md5(strval($nisn)));

    $student->update([
      "photo_path" => $file->getPath(),
    ]);

    return redirect()->back()->with('flash', [
      'error' => null,
      'message' => 'Data siswa berhasil diperbarui, dan foto telah terupload',
      'data' => [
        'file' => $file->getPath(),
        'siswa' => $student->first(),
      ],
    ]);
  }

  public function excelUpsert(Request $request)
  {
    $request->validate([
      'file' => 'required|mimes:tsv,ods,xls,xlsx,slk,csv',
    ]);
    $excel_file = $request->file('file');
    if (!$excel_file->isValid() || !$excel_file->isFile()) {
      return redirect()->back()->withErrors([
        'excel_file' => 'File excel Anda (' . $excel_file->getClientOriginalName() . ') tidak valid atau ekstensi file tidak mendukung!',
      ]);
    }

    try {
      Excel::import(new GraduatedStudentImport, $excel_file);
    } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
      return redirect()->back()->withErrors([
        'excel_file' => $e->getMessage(),
      ]);
    }

    return redirect()->back()->with('flash', [
      'excel_file' => 'Sukses di upload dan di impor',
    ]);
  }
}
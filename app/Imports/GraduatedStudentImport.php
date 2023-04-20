<?php

namespace App\Imports;

use App\Models\GraduatedStudent;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class GraduatedStudentImport implements ToModel, WithValidation, WithHeadingRow
{
    use Importable;
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new GraduatedStudent([
            'name' => $row['nama'],
            'nisn' => $row['nisn'],
            'birth' => $row['tanggal_lahir'],
            'graduated_year' => $row['tahun_lulus'], 
        ]);
    }

    public function rules(): array
    {
      return [
        'nisn' => 'integer|gt:0',
        'tahun_lulus' => 'integer',
        'tanggal_lahir' => 'date',
      ];
    }
}

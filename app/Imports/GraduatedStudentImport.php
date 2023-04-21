<?php

namespace App\Imports;

use App\Models\GraduatedStudent;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithUpserts;

class GraduatedStudentImport implements ToModel, WithValidation, WithHeadingRow, SkipsEmptyRows, WithUpserts, WithBatchInserts
{
    use Importable, SkipsErrors;
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
            'birth' => Carbon::parse($row['tanggal_lahir'])->format('Y-m-d'),
            'graduate_year' => $row['tahun_lulus'], 
        ]);
  }

  public function batchSize(): int
  {
    return 50;
  }

  public function rules(): array
    {
      return [
        'nisn' => ['integer', 'gt:0'],
        'tahun_lulus' => 'integer',
        'tanggal_lahir' => 'date',
      ];
    }

    public function uniqueBy(): string
    {
      return 'nisn';
    }
}

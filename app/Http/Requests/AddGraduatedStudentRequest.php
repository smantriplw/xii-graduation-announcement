<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddGraduatedStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
      return [
        'nisn' => ['integer', 'gt:0', 'required'],
        'graduate_year' => 'required|integer',
        'birth' => 'required|date',
        'name' => 'required',
      ];
    }
}

<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Carbon\Carbon;
use Closure;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
            'token_registration' => ['required', 'string', 'min:6', 'max:6', function(string $attr, mixed $val, Closure $fail) {
                if ($val !== CreateNewUser::generate_token()) {
                    $fail('Wrong registration token');
                }
            }],
        ])->validate();

        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
    }

    public static function generate_token(): string
    {
        $current_time = Carbon::now();

        return substr(md5(config('tokenSecret') . strval($current_time->minute + $current_time->hour) . "smanti"), 0, 6);
    }
}

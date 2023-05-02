<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        $credentials = $request->all();

        if (auth()->attempt($credentials)) {
            $user = auth()->user();

            return response()->json([
                'error' => null,
                'message' => 'Successfuly logged in',
                'data' => [
                    'token' => $user->createToken('auth:api', ['read', 'write'])->plainTextToken,
                ],
            ]);
        } else {
            return response()->json([
                'error' => 'login fail because the credentials is invalid',
            ], 401);
        }
    }

    public function profile(Request $request) {
        return response()->json([
            'error' => null,
            'data' => $request->user(),
        ]);
    }

    public function logout(Request $request) {
        if ($request->user()->currentAccessToken()->delete()) {
            return response()->json([
                'error' => 'couldn\'t revoke the token',
            ], 500);
        } else {
            return response()->json([
                'error' => null,
                'message' => 'revoked',
            ]);
        }
    }
}
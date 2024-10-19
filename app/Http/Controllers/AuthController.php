<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('auth-token');

        return response()->json([
            'authorisation' => $token->plainTextToken,
            'user' => $user,
        ], 200);
    }
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|min:1|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
        ]);
        $validated['password'] = Hash::make($validated['password']);
        $user = User::create($validated);

        return response()->json([
            'user' => $user
        ], 201);
    }
}

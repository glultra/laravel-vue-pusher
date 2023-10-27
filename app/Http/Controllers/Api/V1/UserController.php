<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        if($request->user() || $request->user || $request->token){
            return response([
                'message' => 'user already signed in.',
                'user' => $request->user() ?? $request->user,
                'token' => $request->token,
            ]);
        }
        // Create new user.
        return $this->register($request);
    }

    public function register(Request $request)
    {
        $user = User::create([
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => 'admin', // password
            'remember_token' => Str::random(10),
        ]);

        // Create a Sanctum token for the user
        $token = $user->createToken('Api token of ' . $user->remember_token);

        return response()->json([
            'message' => 'Random user created.',
            'user' => $user,
            'token' => $token->plainTextToken,
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }



}

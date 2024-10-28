<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Providers\RouteServiceProvider;
use App\Repositories\UserRepository;
use Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Redirect;

class AuthenticatedSessionController extends Controller
{
    protected $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    public function create(): Response
    {
        return Inertia::render('Auth/Login');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        try {
            $user = $this->userRepository->findByEmail($request->email);
            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                Auth::login($user);
                return Redirect::intended(RouteServiceProvider::HOME);
            }
            return Redirect::route('login')->withErrors(['alert' => 'Invalid Credentials']);
        } catch (\Exception $e) {
            return Redirect::route('login')->withErrors(['alert' => $e->getMessage()]);
        }
    }
    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Redirect::to(RouteServiceProvider::HOME);
    }

}

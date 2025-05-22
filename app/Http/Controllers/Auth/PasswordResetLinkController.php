<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
   public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email',
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (!$user) {
            throw ValidationException::withMessages([
                'email' => ['Aucun utilisateur trouvé avec cette adresse e-mail.'],
            ]);
        }
    
        $tempPassword = bin2hex(random_bytes(4)) . '!A'; 
    
        $user->password = Hash::make($tempPassword);
        $user->save();
    
        Mail::raw("Bonjour {$user->prenom},\n\nVoici votre nouveau mot de passe temporaire : $tempPassword\n\nConnectez-vous et changez-le dès que possible.", function ($message) use ($user) {
            $message->to($user->email)
                    ->subject('Votre mot de passe temporaire');
        });
    
        return back()->with('status', 'Mot de passe temporaire envoyé par e-mail.');
    }
}

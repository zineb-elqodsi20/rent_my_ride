<?php
use App\Http\Controllers\ReservationController;
use Illuminate\Routing\Route;

Route::post('/send-verification-email', [ReservationController::class, 'sendVerificationEmail']);
Route::get('/verify-email/{email}', [ReservationController::class, 'verifyEmail']);
Route::post('/reservations', [ReservationController::class, 'store']);

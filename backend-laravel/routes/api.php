<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
  return response()->json([
      'user' => [
          'nama' => 'Kemal',
          'email' => 'kemal@gmail.com',
          'kelas' => 'XII RPL'
      ]
  ]);
});
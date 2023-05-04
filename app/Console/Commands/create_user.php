<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class create_user extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create_user {email}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create new user with command';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $user = User::where('email', $this->argument('email'));
        if ($user->exists()) {
            $this->error('The user with this email is already registered');
            return;
        }

        $username = $this->ask('What username of user you want?');
        
        $user = User::where('name', strtolower($username));
        if ($user->exists()) {
            $this->warn('An user with this username is already exists');
            $this->info('Choosing another username...');

            $username .= '_' . Str::random(4);
        }
        
        $password = $this->ask('And, the password?');
        $user = User::create([
            'name' => strtolower($username),
            'password' => Hash::make($password),
            'email' => $this->argument('email'),
        ]);

        $this->info('User created');
        $this->info('Username: ' . $user->name);
        $this->info('Email: ' . $user->email);
        $this->info('Password: ' . $password);
    }
}

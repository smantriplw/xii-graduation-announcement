<?php

namespace App\Console\Commands;

use App\Actions\Fortify\CreateNewUser;
use Illuminate\Console\Command;

class see_token extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:see_token';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Melihat token pendaftaran';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Token: ' . CreateNewUser::generate_token());
    }
}

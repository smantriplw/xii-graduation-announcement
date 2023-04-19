<?php
namespace SMANTI\App\Controllers\Api\Auth;

use SMANTI\App\Controllers\BaseController;
use SMANTI\App\Response;

class LoginController extends BaseController
{
    public function handle(): Response
    {
        return $this->response()->setBody("this is login");
    }
}
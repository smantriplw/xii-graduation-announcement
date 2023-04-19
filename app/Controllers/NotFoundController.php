<?php
namespace SMANTI\App\Controllers;

use SMANTI\App\Response;

class NotFoundController extends BaseController
{
    public function handle(): Response
    {
        return $this->response()->status(404)->setBody("404 Not Found");
    }
}
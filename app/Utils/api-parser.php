<?php
namespace SMANTI\App\Utils;

use SMANTI\App\Controllers\Api\Auth\LoginController;
use SMANTI\App\Controllers\BaseController;

use SMANTI\App\Exception\MissingException;
use SMANTI\App\Request;

class APIParser
{
    public static function parse(): BaseController | null
    {
        $action = @$_GET['action'];
        if (!isset($action) || !isset($_SERVER['x-token'])) {
            throw new MissingException("action, x-token");
        }
        
        switch(array($action, $_SERVER['REQUEST_METHOD']))
        {
            case array('login', 'POST'):
                return new LoginController(new Request());
            default:
                return null;
        }
    }
}
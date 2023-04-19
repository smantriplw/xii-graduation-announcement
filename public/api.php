<?php
use SMANTI\App\Controllers\NotFoundController;
use SMANTI\App\Exception\BaseException;
use SMANTI\App\Request;
use SMANTI\App\Utils;

Utils\init_web(true);

try {
    $controller = Utils\APIParser::parse();
    if (!isset($controller)) {
        $controller = new NotFoundController(new Request());
    }

    return $controller->handle()->send();
} catch (BaseException $exception) {
    return $exception->view()->send();
}
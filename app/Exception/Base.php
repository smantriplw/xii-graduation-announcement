<?php
namespace SMANTI\App\Exception;

use Exception;

class BaseException extends Exception
{
    public function view(): \SMANTI\App\Response
    {
        return (new \SMANTI\App\Response())->status(500)->setBody(array(
            "error" => self::class,
            "message" => $this->getMessage(),
            "exception" => array(
                "line" => $this->getLine(),
                "file" => $this->getFile(),
            ),
        ), true);
    }
}
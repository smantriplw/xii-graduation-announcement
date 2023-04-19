<?php
namespace SMANTI\App\Exception;

class MissingException extends BaseException
{
    public function __construct(string $name)
    {
        parent::__construct("Missing $name for Request");
    }
}
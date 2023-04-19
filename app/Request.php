<?php
namespace SMANTI\App;

use SMANTI\App\Exception\MissingException;

class Request
{
    /** @var string */
    public $method;

    /** @var array */
    protected $headers;

    public function __construct()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->headers = getallheaders();

        if ($this->headers === false)
        {
            throw new MissingException("'headers'");
        }
    }

    public function hasHeader(string $key): bool
    {
        return array_key_exists($key, $this->headers);
    }

    public function getQuery(string $key): string | null {
        return @$_GET[$key];
    }

    public function getPayload(string $key)
    {
        return @$_POST[$key];
    }

    public function getHeader(string $key): string | null
    {
        $value = $this->headers[$key];
        return isset($value) ? $value : null;
    }
}
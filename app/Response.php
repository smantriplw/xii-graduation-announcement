<?php
namespace SMANTI\App;

class Response
{
    /** @var int */
    private $status_code = 200;
    
    private $data;
    
    public function __construct() {}

    public function status(int $code): Response
    {
        $this->status_code = $code;
        return $this;
    }

    public function setHeader(string $key, string $value): Response
    {
        header($key . ":" . urlencode($value));

        return $this;
    }

    public function setBody($data, bool $is_json = true): Response
    {
        if ($is_json) {
            $this->data = json_encode($data);
        } else {
            $this->data = $data;
        }

        return $this;
    }

    public function send()
    {
        http_response_code($this->status_code);
        return $this->data;
    }
}
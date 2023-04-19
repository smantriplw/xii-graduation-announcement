<?php
namespace SMANTI\App\Utils;

function init_web(bool $is_api)
{
    session_start();
    if ($is_api)
    {
        header("Content-Type: application/json", true);
    }
}
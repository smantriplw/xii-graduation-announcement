<?php
namespace SMANTI\App\Controllers;

class BaseController
{
    /** @var \PDO */
    public $pdo;

    /** @var \SMANTI\App\Request */
    public $request;

    public function __construct(\SMANTI\App\Request $request)
    {
        $this->pdo = \SMANTI\app\DB::pdo();
        $this->request = $request;
    }

    public function response(): \SMANTI\App\Response
    {
        return new \SMANTI\App\Response();
    }

    public function handle(): \SMANTI\App\Response
    {
        return $this->response()->setBody("hello world from " . self::class);
    }
}
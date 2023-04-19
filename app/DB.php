<?php
namespace SMANTI\App;

use SMANTI\Config as config;

final class DB {
    /**
     * @return \PDO
     */
    public static function pdo(): \PDO {
        return new \PDO(
            "mysql:host=" . config\DatabaseConfig::host . ";port=" . config\DatabaseConfig::port . ";dbname=" . config\DatabaseConfig::db,
            config\DatabaseConfig::user,
            config\DatabaseConfig::password,
            array(
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
            ),
        );
    }
}
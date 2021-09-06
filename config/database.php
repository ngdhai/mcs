<?php return array (
  'default' => 'sqlite',
  'connections' => 
  array (
    'sqlite' => 
    array (
      'driver' => 'sqlite',
      'url' => NULL,
      'database' => storage_path().DIRECTORY_SEPARATOR.'localhost.sqlite',
      'prefix' => 'localhost_',
      'foreign_key_constraints' => true,
      'host' => '',
      'username' => 'haind@acaziasoft.com',
      'password' => '1',
    ),
    'mysql' => 
    array (
      'driver' => 'mysql',
      'url' => NULL,
      'host' => 'localhost:8081',
      'port' => '3306',
      'database' => 'cms',
      'username' => 'root',
      'password' => '123456',
      'unix_socket' => '',
      'charset' => 'utf8mb4',
      'collation' => 'utf8mb4_unicode_ci',
      'prefix' => 'localhost_',
      'prefix_indexes' => true,
      'strict' => true,
      'engine' => NULL,
      'options' => 
      array (
      ),
    ),
    'pgsql' => 
    array (
      'driver' => 'pgsql',
      'url' => NULL,
      'host' => 'mysql5',
      'port' => '3306',
      'database' => 'cms',
      'username' => 'cms',
      'password' => '123456',
      'charset' => 'utf8',
      'prefix' => '',
      'prefix_indexes' => true,
      'schema' => 'public',
      'sslmode' => 'prefer',
    ),
    'sqlsrv' => 
    array (
      'driver' => 'sqlsrv',
      'url' => NULL,
      'host' => 'mysql5',
      'port' => '3306',
      'database' => 'cms',
      'username' => 'cms',
      'password' => '123456',
      'charset' => 'utf8',
      'prefix' => '',
      'prefix_indexes' => true,
    ),
  ),
  'migrations' => 'migrations',
  'redis' => 
  array (
    'client' => 'phpredis',
    'options' => 
    array (
      'cluster' => 'redis',
      'prefix' => 'laravel_database_',
    ),
    'default' => 
    array (
      'url' => NULL,
      'host' => '127.0.0.1',
      'password' => NULL,
      'port' => '6379',
      'database' => '0',
    ),
    'cache' => 
    array (
      'url' => NULL,
      'host' => '127.0.0.1',
      'password' => NULL,
      'port' => '6379',
      'database' => '1',
    ),
  ),
);
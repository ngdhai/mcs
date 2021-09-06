<?php
$config = array();
$config['name'] = "starter";
$config['author'] = "Your name";
$config['version'] = "0.1";
$config['ui'] = true;
$config['ui_admin'] = true;
$config['position'] = "98";
$config['tables'] = array(
    'paintings' => array(
        'id' => 'integer',
        'name' => 'string',
        'price' => 'float',
        'description' => 'text',
        'created_by' => 'integer',
        'created_at' => 'dateTime',
    )
);

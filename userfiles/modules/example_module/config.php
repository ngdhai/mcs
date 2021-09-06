<?php
$config = array();
$config['name'] = "My Paintings";
$config['author'] = "Pablo Picasso";
$config['ui'] = true;
$config['ui_admin'] = true;
$config['position'] = "98";
$config['version'] = "0.01";
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

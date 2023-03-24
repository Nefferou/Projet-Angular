<?php
require '/var/www/html/vendor/autoload.php';

$db=$client->GroupeB;
$collection = $db->listCollections();
echo $collection;

?>
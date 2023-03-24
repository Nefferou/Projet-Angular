<?php

require '/var/www/html/vendor/autoload.php';
$client=new MongoDB\Client("mongodb://root:GroupeB@mongodb:27017");
$db=$client->GroupeB;
$collections = $db->listColle->listCollections();
echo $collections;
?>
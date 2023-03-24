<?php

require '/var/www/html/vendor/autoload.php';
$client=new MongoDB\Client("mongodb://root:GroupeB@mongodb:27017");
$collection=$client->GroupeB->find();

foreach ($collection as $user) {
    echo($user);
}
?>
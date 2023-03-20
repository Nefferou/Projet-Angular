<?php
$collection = (new MongoDB\Client)->admin->system->users;
echo $collection->find();

?>
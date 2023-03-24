<?php
            require_once '../back/connexionbdd.php';
            
            $collection = $client->selectCollection('GroupeB', 'user');
            $user = $collection->findOne([
                'name'=>$_GET['name'],
                'password'=>$_GET['password']
            ]);

            if(is_null($user)){
                require("../index.php");
            }else{
                require("../pages/listRestau.php");
            }

?>
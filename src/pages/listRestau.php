<?php include "header.php" ?>
<body>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Groupe B">
    <title>Projet NoSQL</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1 id="AppName">RESTOP</h1>
    </header>
    <div id="Screen">
        <div class="controller">
            <a href="./listFav.php"><button class="btn favBtn">Mes favoris</button></a>
        </div>
        <div id="List">
            <!-- foreach -->

            <?php
            require_once '../back/connexionbdd.php';
            
            $restaurant = $client->selectCollection('ynov', 'restaurants');

            // on récupère tous les types de cuisine différents
            $cuisine = $restaurant->distinct('cuisine');
            // on fais une liste déroulante avec tous les types de cuisine
            echo '<form method="post" action="listRestau.php">
            <select name="cuisine" id="cuisine">
            <option value="all">Tous les types de cuisine</option>';
            foreach ($cuisine as $entry)
            {
                echo '<option value="'.$entry.'">'.$entry.'</option>';
            }
            echo '</select>
            <button class="btn cuisineBtn" name="cuisineBtn">Filtrer</button>
            </form>';

            // on récupère tous les arrondissements différents
            $arrondissement = $restaurant->distinct('address.street');
            // on fais une liste déroulante avec tous les arrondissements
            echo '<form method="post" action="listRestau.php">
            <select name="arrondissement" id="arrondissement">
            <option value="all">Tous les arrondissements</option>';
            foreach ($arrondissement as $entry)
            {
                echo '<option value="'.$entry.'">'.$entry.'</option>';
            }
            echo '</select>
            <button class="btn arrondissementBtn" name="arrondissementBtn">Filtrer</button>
            </form>';

            // on récupère tous les codes postaux différents
            $code = $restaurant->distinct('address.zipcode');
            // on fais une liste déroulante avec tous les codes postaux
            echo '<form method="post" action="listRestau.php">
            <select name="code" id="code">
            <option value="all">Tous les codes postaux</option>';
            foreach ($code as $entry)
            {
                echo '<option value="'.$entry.'">'.$entry.'</option>';
            }
            echo '</select>
            <button class="btn codeBtn" name="codeBtn">Filtrer</button>
            </form>';

            // création des boutons de tri
            echo '<form method="post" action="listRestau.php">
            <button class="btn alphaBtn" name="alphaBtn">Tri par ordre alphabétique</button>
            <button class="btn idBtn" name="idBtn">Tri par id</button>
            <button class="btn insertBtn" name="insertBtn">Tri par ordre d\'insertion</button>
            </form>';
            
            // bouton tri ordre alphabétique
            if (isset($_POST['alphaBtn']))
            {
                $document = $restaurant->find([], ['sort' => ['name' => 1]]);
                foreach ($document as $entry)
                {
                    echo '<div class="item"><h1>'.$entry['name'].'</h1><button class="favBtn">Favoris</button></div>';
                }
            }
            // bouton tri par id
            if (isset($_POST['idBtn']))
            {
                $document = $restaurant->find([], ['sort' => ['_id' => 1]]);
                foreach ($document as $entry)
                {
                    echo '<div class="item"><h1>'.$entry['name'].'</h1><button class="favBtn">Favoris</button></div>';
                }
            }
            // bouton tri par ordre d'insertion
            if (isset($_POST['insertBtn']))
            {
                $document = $restaurant->find([], ['sort' => ['_id' => -1]]);
                foreach ($document as $entry)
                {
                    echo '<div class="item"><h1>'.$entry['name'].'</h1><button class="favBtn">Favoris</button></div>';
                }
            }
            // bouton tri par type de cuisine
            if (isset($_POST['cuisineBtn']))
            {
                $document = $restaurant->find(['cuisine' => $_POST['cuisine']], ['sort' => ['name' => 1]]);
                foreach ($document as $entry)
                {
                    echo '<div class="item"><h1>'.$entry['name'].'</h1><button class="favBtn">Favoris</button></div>';
                }
            }
            // bouton tri par arrondissement
            if (isset($_POST['arrondissementBtn']))
            {
                $document = $restaurant->find(['address.street' => $_POST['arrondissement']], ['sort' => ['name' => 1]]);
                foreach ($document as $entry)
                {
                    echo '<div class="item"><h1>'.$entry['name'].'</h1><button class="favBtn">Favoris</button></div>';
                }
            }
            // bouton tri par code postal
            if (isset($_POST['codeBtn']))
            {
                $document = $restaurant->find(['address.zipcode' => $_POST['code']], ['sort' => ['name' => 1]]);
                foreach ($document as $entry)
                {
                    echo '<div class="item"><h1>'.$entry['name'].'</h1><button class="favBtn">Favoris</button></div>';
                }
            }
            ?>
            <!-- end foreach -->
        </div>
        
    </div>
</body>
</body>


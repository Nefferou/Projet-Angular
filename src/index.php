<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Groupe B">
        <title>Projet NoSQL</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header>
            <h1 id="AppName">RESTOP</h1>
        </header>
        <div id="LogScreen">
            <form id="LogForm" class="controller" action="./back/connexion.php" method="get">
                <h2 class="noMarg">Connectez-vous pour continuer</h2>
                <input type="text" placeholder="username" name="name">
                <input type="password" placeholder="Mot de passe" name="password">
                <a href="./pages/listRestau.php"><input id="SubmitBtn" type="submit" name="submit" value="Connection" class="btn logBtn"></a>
            </form>
        </div>
    </body>
</html>
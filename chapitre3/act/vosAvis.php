<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Palace hotel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--css-->
    <link rel="stylesheet" href="Assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <!--js-->
    
</head>
<body>
    <!--la barre de navigation-->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <!--le header-->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php"><span class="glyphicon glyphicon-home"></span> PALACE HOTEL</a>
            </div>
            <!--la navigation-->
            <div id="menu" class="collapse navbar-collapse">
                <ul class=" liens nav navbar-nav">
                    <li><a href="index.php">ACCUEIL</a></li>
                    <li><a href="chambres.php">CHAMBRES</a></li>
                    <li class="active"><a href="vosAvis.php">VOS AVIS</a></li>
                    <li><a href="reservations.php">RESERVATIONS</a></li>
                    <li><a href="index.php#contact">CONTACT</a></li>
                </ul>
            
            <!--login-->
            
            <ul class="nav navbar-nav navbar-right ">
                <?php if (isset($_SESSION["user_connected"]) && $_SESSION["user_connected"]==true) {
                   echo('
                   <li><a href="#"><span class="glyphicon glyphicon-user"></span>'.$_SESSION["username"].'</a></li>
                   <li><a href="logout.php"><span class="glyphicon glyphicon-log-in"></span>Dconnexion</a></li>');
               }else{
                   echo('
                   <li><a href="inscription.php"><span class="glyphicon glyphicon-user"></span> Inscriptions</a></li>
                   <li><a href="connexion.php"><span class="glyphicon glyphicon-log-in"></span> Connexion</a></li>');
               }
                  
               ?>
                </ul>
            </div>
        </div>
    </nav>
    <!-- le header de notre page-->
    <section id="about" class="container-fluid">
            <!--insertion du logo-->
        <div class="row">
            <div class="profile-picture">
                <p>
                   <a href="images/logo.png"><img src="images/logo_mini.png"
                     alt="logo" title="logo"></a>
                </p>
            </div>
            <!-- l'entete-->
            <div class="heading">
                <h1><em>Palace Hotel <br />Bejaia 06</em></h1>
                <h3>25 rue de la liberté</h3>
            </div>
            <a class="button1" href="reservations.php">Reserver</a>
        </div>   
    </section>
    <!--about-->
    <div class="container">
        <h2 class="heading-title  text-center">Vos avis</h2>
        <div id="avis" class="avis">
                <form id="formulaire" class="form-inline" method="post" action="tratementavis.php">
                        <div class="form-group">
                            <label for="psudo">pesudo</label>
                            <input id="psudo" type="text" name="psudo" required style="color :black;">
                        </div>
                        <div class="form-group">
                            <label for="msg">message</label>
                            <input id="msg" type="text" name="msg" required style="color :black;">
                        </div>	
                        <button id="btn" type="submit" class="btn btn-primary btn-lg">Commenter</button>
                </form>	
                <section id="commentaire" class="row">
                       <?php
                          include("connectBD.php");
                          $avis = $bdd->query("SELECT * FROM avis ORDER BY comment_date desc");
                          while($donné = $avis->fetch()){
                                echo("<h2>".$donné["pseudo"]."</h2> <p>".$donné["msg_avis"]."</p>
                                     <blockquote>".$donné["comment_date"]."</blockquote> " );
                          }
                    
                       $avis->closeCursor();
                       ?>
                </section>	
        </div>
    </div>
    <footer id="footer-page" class="footer text-center">
            <p id="textFooter">
            Tout Droit reservé. Palace Hotel 2019.
            </p>
    </footer>
    
    <script src="Assets/jquery/jquery.min.js"></script>
    <script src="Assets/js/bootstrap.min.js"></script>
</body>
</html>
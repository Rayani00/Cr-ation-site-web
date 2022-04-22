<?php
session_start();
#vérification de l'existance et de la validité des données
if (isset($_POST["pseudo"]) and $_POST["pseudo"]=="fifi"
and isset($_POST["mdp"]) and $_POST["mdp"]=="1997"){
$_SESSION["connected"]=true;
$_SESSION["username"]=$_POST["pseudo"];

	
} else {
$_SESSION["connected"]=false;	
}
header("location:secret.php")
?>
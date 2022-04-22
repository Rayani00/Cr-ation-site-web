<?php
 session_start();
include("connectBD.php");
$utilisateurs = $bdd->query("SELECT * FROM utilisateurs");
$trouve = false;

while ($user = $utilisateurs->fetch()) {

    if (isset($_POST["pseudo"]) and $_POST["pseudo"]==$user["pseudo"]
    and isset($_POST["mdp"]) and $_POST["mdp"]==$user["mdp"]){
    $_SESSION["user_connected"]=true;
    $_SESSION["username"]=$user["pseudo"];
    $trouve = true;
    } 
}

if(!$trouve){
    $_SESSION["user_connected"]=false;
    header("location:connexion.php");
}else{
    header("location:index.php");

}








?>
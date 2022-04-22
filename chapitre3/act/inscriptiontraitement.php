<?php
session_start();
include("connectBD.php");
$pseudo = $_POST["pseudo"];
$mdp = $_POST["mdp"];

try {
    $insert = $bdd->prepare("INSERT INTO utilisateurs(pseudo,mdp) VALUES(?,?)");
    $insert-> execute(array($pseudo,$mdp));
    $_SESSION["newInscription"] = true;
    header("location: connexion.php");
} catch (Exception $erreur) {
    $_SESSION["newInscription"] = false;
    header("location: inscription.php");
}



?>
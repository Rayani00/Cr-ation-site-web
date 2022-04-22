<?php
session_start();
include("connectBD.php");
$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$email =  $_POST["email"];
$tel= $_POST["tel"];
$nbr_per = $_POST["nbr"];
$jour = $_POST["date"];
$type_ch = $_POST["type"];

try {
    $resv = $bdd->prepare("INSERT INTO reservations(Nom,Prenom,Email,Tel,nb_Pers,jour,type_ch) VALUES(?,?,?,?,?,?,?)");
    $resv-> execute(array($nom,$prenom,$email,$tel,$nbr_per,$jour,$type_ch));
    $_SESSION["newreservation"] = true;
    header("location: reservations.php");
} catch (Exception $erreur) {
    $_SESSION["newreservation"] = false;
    header("location: reservations.php");
}



?>
<?php
$host = "mysql:host=localhost;dbname=palace_hotel;charset=utf8";
$user = "root";
$password ="";

try {
    
    $bdd = new PDO($host,$user,$password);
} catch (Expection $erreur) {
    die($erreur->getMessage());
    
}



?>
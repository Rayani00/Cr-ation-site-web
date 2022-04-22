<?php
include("connectBD.php");
$pseudo = $_POST["psudo"];
$message = $_POST["msg"];
date_default_timezone_set("Africa/Algiers");
$comment_date = date("Y/m/d H:i:s",time());

try {
    $insert = $bdd->prepare("INSERT INTO avis(pseudo,msg_avis,comment_date) VALUES(?,?,?)");
    $insert-> execute(array($pseudo,$message,$comment_date));
    header("location: vosAvis.php");
} catch (Exception $erreur) {
    header("location: vosAvis.php");
}



?>
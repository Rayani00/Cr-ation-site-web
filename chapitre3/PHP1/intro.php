<?php
#inclure un fichier(faire appel au fichier inclusion.php)
include("inclusion.php"); 
#affichage d'un texte
echo "BONJOUR FERIEL";
print " <br> how are you";
#LES VARIABLE EN PHP
$prenom="feriel";
$nom="djeddi";
$age=23;#int
$note1=15;#float
$note2=17.5;#float
$admis="true";#booléen
$moyen=($note1+$note2)/2;#float
echo"<br> je m'appelle   $prenom $nom  et j'ai $age ans je suis admis j'ai $moyen"; 
?>
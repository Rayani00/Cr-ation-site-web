<?php
#déclaration cookie("libelle", "valeur", la duré de vie)
setcookie("nom","feriel",time()+15);
echo $_COOKIE['nom'];

?>
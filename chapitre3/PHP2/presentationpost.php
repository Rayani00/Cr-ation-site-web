<?php


if (isset($_POST["nom"]) and isset($_POST["prenom"])) {
	echo ("bonjour " .$_POST["nom"]. "  "  .$_POST["prenom"]);
} else {
	echo "je te connais pas";
}


?>
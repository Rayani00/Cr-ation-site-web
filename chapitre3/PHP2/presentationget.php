<?php


if (isset($_GET["nom"]) and isset($_GET["prenom"])) {
	echo ("bonjour " .$_GET["nom"]. "  "  .$_GET["prenom"]);
} else {
	echo "je te connais pas";
}


?>
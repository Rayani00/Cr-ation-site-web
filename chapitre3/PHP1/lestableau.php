<?php
#tableau numiroté
$etudiants=array("feriel","djamila","sara","lotefi","liticia");
# foreach(pour chaque)
foreach ($etudiants as $etudiant) {
	echo "<p>".$etudiant."</p>";
	
}

# tableaux associatif
$personne=$arrayName = array("nom" =>"djeddi" , "prenom"=>"feriel" );
print_r($personne);
foreach ($personne as $key => $value) {
	echo "<p> $key: $value </p>";
}
?>
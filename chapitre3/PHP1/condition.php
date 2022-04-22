<?php
#condition if
$moyen=10;
if ($moyen<10) {
	echo "ajourner";
	
}
else if ($moyen>=10) {
	echo "admis";
}
else if ($moyen>=14) {
	echo "excelent";
}
#condition switch
switch ($moyen) {
	case '8':
		echo "niveau bas";
		break;
		case '10':
		echo "<br>niveau moyen";
		break;
		case '12':
		echo "<br> bon niveau";
		
		break;
	
	default:
		
		break;
}

?>
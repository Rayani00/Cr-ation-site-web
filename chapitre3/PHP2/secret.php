<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<title>Secret</title>
</head>
<body>
	<?php 
	if (isset($_SESSION["connected"]) and $_SESSION["connected"]==true ) {
		echo "bonjour" . $_SESSION["username"]. ', <a href="loginout.php">deconnexion</a>';
		
	} else {
		echo 'faux paramettre , <a href="formlogin.php">ressayer</a>';

	}
	
	
	?>

</body>
</html>
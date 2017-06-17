<?php 
	
	switch (isset($_GET['action']) ? $_GET['action'] : null) {
		case 'agregar':
				echo 'Agregando';
			break;
		
		default:
			include 'templates/index/index.php';
			break;
	}

 ?>
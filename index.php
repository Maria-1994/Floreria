<?php 
	require 'core/core.php';
	switch (isset($_GET['v']) ? true: false) {
		case true:

				if (file_exists('core/controlador/'.strtolower($_GET['v']).'Controlador.php'))
					include 'core/controlador/'.strtolower($_GET['v']).'Controlador.php';
				else
					include 'core/controlador/errorControlador.php';
		
			break;
		case false:
					include 'core/controlador/indexControlador.php';	
			break;
		default:
					include 'core/controlador/indexControlador.php';	
			break;
	}

 ?>
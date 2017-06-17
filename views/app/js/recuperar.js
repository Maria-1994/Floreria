function recuperar(){
	var correo = id('correo').value;

	if (correo != '') {

		if(validarEmail(correo) != true){
			id('recuperarHTML').innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Error!</strong> Correo inválido</div>';
		}else{
			id('recuperarHTML').innerHTML = '<div class="alert alert-success" alert-dismissable><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Correcto!</strong> Dato ingresado.</div>';	
		}				
	
	}else {		
		id('recuperarHTML').innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Error!</strong> El campo correo está vacío.</div>';
	}	
}


function enterRecuperar(s){
	if (s.keyCode == 13) {
		recuperar();
	}
}

function clickRecuperar(){
	var btnRecuperar = id('btnRecuperar');
	btnRecuperar.addEventListener('click',recuperar,false);
}

window.addEventListener('load',clickRecuperar, false);
window.addEventListener('keypress',enterRecuperar, false);
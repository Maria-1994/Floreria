function registro(){
	var email = id('email').value,
	    ciudad = id('ciudad').value,
	    telefono = id('telefono').value,
	    usuario = id('usuario').value,
	    passw = id('pass').value;

	if (email != '' && ciudad != '' &&  telefono != '' && usuario != '' && passw != '') {
		
		if(validarEmail(email)!=true){			
			id('registroHTML').innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Error!</strong> Correo inválido.</div>';			
		}else if(telefono.length != 10 || validarTelefono(telefono) != true){
			id('registroHTML').innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Error!</strong> Teléfono inválido debe tener 10 dígitos y ser numérico.</div>';			
		}else if(validarPass(passw) != true) {
			id('registroHTML').innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Error!</strong> La contraseña debe tener símbolos, números y letras. </div>';
		}else{

			id('registroHTML').innerHTML = '<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Correcto!</strong> Datos registrados.</div>';	
	
		}

	}else{		
		id('registroHTML').innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Error!</strong> Los campos están vacíos.</div>';
	}	
}


function enterReg(e){
	if (e.keyCode == 13) {
		registro();
	}
}

function clickReg(){
	var btnGuardar = id('btnGuardar');
	btnGuardar.addEventListener('click',registro,false);
}

window.addEventListener('load',clickReg, false);
window.addEventListener('keypress',enterReg, false);
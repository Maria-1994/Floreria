function acceso(){
	var user = id('usrname').value,
	    pass = id('psw').value,
	    check = id('check').checked;

	if (user != '' && pass != '') {

		id('html').innerHTML = '<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Correcto!</strong> Datos ingresados.</div>';	
	
	}else{
		id('html').innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>Error!</strong> Los campos están vacíos.</div>';
	}	
}


function enter(e){
	if (e.keyCode == 13) {
		acceso();
	}
}

function click(){
	var btnEntrar = id('btnEntrar');
	btnEntrar.addEventListener('click',acceso,false);
}

window.addEventListener('load',click, false);
window.addEventListener('keypress',enter, false);
var email = document.getElementById('email');
var password = document.getElementById('password');
var errorEmail = document.getElementById('errorEmail')
var errorPassword = document.getElementById('errorPassword')

errorEmail.style.color = 'red';
errorEmail.style.fontFamily = 'serif';
errorPassword.style.color = 'red';
errorPassword.style.fontFamily = 'serif';


function enviarFormulario() {
    //console.log('Enviando formulario...')

    var mensajesEmail = [];
    var mensajesPassword = [];
    if (email.value === null || email.value === '') {       
        mensajesEmail.push('Ingresa tu e-mail');
        console.log("falta email")
    }

    if (password.value === null || password.value === '') {
        mensajesPassword.push('Ingresa tu contraseña');
        console.log("falta contraseña")
      
    }

    errorEmail.innerHTML = mensajesEmail.join(', ');
    
    errorPassword.innerHTML = mensajesPassword.join(', ');
    
    var checkPassword = document.getElementById('password').value;
    var checkEmail = document.getElementById('email').value;
    if(checkEmail.length && checkPassword.length> 0) {
       window.location = 'home.html';
        return;
      }
    
    return false;
}
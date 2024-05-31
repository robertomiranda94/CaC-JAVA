//se pide una validacion que no permita avanzar al usuario en caso de que
//alguno de los dos campos este vacio
function validarFormulario() {
    //capturo los elementos
    const username= document.getElementById('username');
    const password= document.getElementById('password');
    //con un condicional evito que los campos queden vacios
    if (username==="")  {
        alert("ingresa tu usuario");
        return false
    }
    if (password==="") {
        alert("ingresa tu contraseña")
        return false
    }
        return true
     } 

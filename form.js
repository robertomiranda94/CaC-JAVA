var username= document.getElementById("username");
var password= document.getElementById("password");
var error= document.getElementById("error");
error.style.color="red";

function enviarFormulario(){
console.log("enviando formulario");
  var mensajesError=[];
  if(username.value==null || username.value=="") { 
    mensajesError.push("INGRESA TU USUARIO");
    alert("¡Ingresa tu usuario!");
     }
  if(password.value==null || password.value=="") {
    mensajesError.push("INGRESA TU CONTRASEÑA");
    alert("¡Ingresa tu contraseña!");
   
  }
  error.innerHTML=mensajesError.join(" , ");
  return false;
   }

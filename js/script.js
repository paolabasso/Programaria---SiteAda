document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)



function validaFormulario(){
  if(document.getElementById("name").value != "" && 
  document.getElementById("email").value != "" && document.getElementById("tel").value != ""){
    
    alert("Pronto! Você receberá as novidades por e-mail.")
  }else{
    alert("Preencha seu nome, e-mail e celular.")
  }
}
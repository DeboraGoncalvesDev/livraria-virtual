const isenha = document.querySelector("#isenha");
const botaoMostrarSenha = document.querySelector("#botaoMostrarSenha");
const legenda = document.querySelector(".legenda");


botaoMostrarSenha.addEventListener("change", function (){
    const estadoAtualDoisenha = isenha.getAttribute("type") === "password" ? "text" : "password";

    isenha.setAttribute ("type" ,estadoAtualDoisenha );

    legenda.innerHTML = estadoAtualDoisenha === "password" ? "Mostrar senha" : "Ocultar";


});



function logar(){

    var login = document.getElementById('imail').value;
    var senha = document.getElementById('isenha').value;


    if(login == "adm@gmail.com.br" && senha == "adm123"){
        alert ('Sucesso');
    } else {
        alert ('Email ou senha incorretos');
    }


}
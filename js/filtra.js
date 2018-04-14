var campoFiltro = document.querySelector("#procurar-paciente");

campoFiltro.addEventListener("input",function() {
var pacientes = document.querySelectorAll(".paciente");

    
    if ( this.value.length > 0){

        for(var i=0; i < pacientes.length ;i++){
            var paciente = pacientes[i];
        
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;        
            var expressao = new RegExp(this.value ,"i"); //função para comparar string por string de uma forma simples
            // poderiamos utilizar aqui outro método conhecido como substr(inicio da string, fim da string) -> para comparar o nomeTd.textContent com o this.value(valor digitado)
            if(expressao.test(nome)){
            paciente.classList.remove("invisivel");
            }else{
            paciente.classList.add("invisivel")
            }
        }
    }else{
        for(var i=0; i < pacientes.length ;i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    //Armazenar todos os campos inputs em variaveis
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);  
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMsgErro(erros);
        return;
    }
    
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";

});


// FUNÇÕES FUNÇÕES FUNÇÕES FUNÇÕES FUNÇÕES FUNÇÕES FUNÇÕES FUNÇÕES FUNÇÕES FUNÇÕES
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;

}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("Por favor preencha o nome");

    if(paciente.peso.length == 0) erros.push("Por favor preencha o peso")

    if(paciente.altura.length == 0) erros.push("Por favor preencha a altura")
 
    if(paciente.gordura.length == 0) erros.push("Por favor preencha a gordura")

    if(!validaPeso(paciente.peso)) erros.push("Peso incorreto");

    if(!validaAltura(paciente.altura)) erros.push("Altura incorreta");

    return erros;//retorno de todos os erros em forma de array
}

function exibeMsgErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
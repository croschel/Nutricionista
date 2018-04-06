var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length;i++){

var tdPeso = pacientes[i].querySelector(".info-peso");
var tdAltura = pacientes[i].querySelector(".info-altura");
var tdImc = pacientes[i].querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var alturaValida = true;
var pesoValido = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!";
    pesoValido = false;
    pacientes[i].classList.add("paciente-invalido");
}
if(altura <= 0 || altura >= 3){
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida!";
    alturaValida = false;
    pacientes[i].classList.add("paciente-invalido");
}
if(pesoValido == true && alturaValida == true){
    var imc = peso/(altura*altura);
    tdImc.textContent = imc.toFixed(1);    
}

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    console.log("botão clicado");

});

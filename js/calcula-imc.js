// var titulo = document.querySelector(".titulo-principal");
// titulo.textContent = "Pedido de Viatura";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length;i++){

var tdPeso = pacientes[i].querySelector(".info-peso");
var tdAltura = pacientes[i].querySelector(".info-altura");
var tdImc = pacientes[i].querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var alturaValida = validaAltura(altura);
var pesoValido = validaPeso(peso);

    if(pesoValido && alturaValida){
        tdImc.textContent =  calculaImc(peso,altura);    
    }

}

//fUNÇÕES
function calculaImc(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(1);
}

function validaPeso(peso){
    if(peso > 0 || peso < 300){
       return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 || altura < 3){
        return true;
    }else{
        return false;
    }
}
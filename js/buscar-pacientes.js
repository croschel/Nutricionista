var botaoAjax = document.querySelector("#botao-buscar-ajax");

botaoAjax.addEventListener("click",function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacient3es");

        xhr.addEventListener("load",function(){

            if(xhr.status == 200){
            
            var pacientes = JSON.parse(xhr.responseText);
    
            pacientes.forEach(function(paciente){
                adicionarPaciente(paciente);
            });        
            }else{
                var erroAjax = document.querySelector("#erro-ajax");
                erroAjax.classList.remove("invisivel");
            }
        });

        xhr.send();    
});

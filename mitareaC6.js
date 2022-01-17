

document.querySelector("#reset1").onclick = function(event) {
    borrarIntegrantesAnteriores();
    document.querySelector("#texto-respuesta").textContent = "";
    document.querySelector("#calcular").className = "oculto";
    event.preventDefault();
}




document.querySelector("#crear-formularios").onclick = function(event) {
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value)
    borrarIntegrantesAnteriores();
    
    if(cantidadIntegrantes < 100 && cantidadIntegrantes > 0) {
        for(let i = 1; i <= cantidadIntegrantes; i++) {
            


            const $label = document.createElement("label")
            const $input = document.createElement("input")
            const $formulario = document.querySelector("#formulario")
            const $div = document.createElement("div")
            
            $formulario.appendChild($div);
            $div.appendChild($label);
            $div.appendChild($input);
            
            $label.className = "integrantes"
            $input.className = "integrantes"
            $label.textContent = `Edad del integrante numero ${i}`;
            $input.type = "number";
            $input.id = "integrante"+i
    
            console.log(i);
        }

    }
    
    document.querySelector("#calcular").className = "";
    


    event.preventDefault();
}

document.querySelector("#calcular").onclick = function(event) {
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value)
    const listaEdades = []
    for(let i = 1; i <= cantidadIntegrantes; i++) {
        edadIntegrante = Number(document.querySelector(`#integrante${i}`).value) 
        
        if(edadIntegrante !== 0) {
            listaEdades.push(edadIntegrante);
        }
       

    }
    console.log(listaEdades);
    let maximaEdad = max(listaEdades);
    let minimaEdad = min(listaEdades);
    let promedioEdad = promedio(listaEdades);
    document.querySelector("#texto-respuesta").textContent = `la edad maxima es ${maximaEdad}, la edad minima es ${minimaEdad} y el promedio es ${promedioEdad}`;
    
    event.preventDefault();

}


function max(array) {
    let max = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > max){
            max = array[i]
        }
    }

    return max;
}

function min(array) {
    let min = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < min){
            min = array[i]
        }
    }

    return min;
}

function promedio(array) {
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return Math.round(suma/array.length);
}

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrantes');
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
    }
  }











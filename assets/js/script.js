// declarando variables

let listaNombresGastos = [];
let listaValoresGastos = []; 


// creando las funciones

function clickBoton(){
    let nombreGasto=document.getElementById("nombreGasto").value;
    let valorGasto=document.getElementById("valorGasto").value;
    //
    console.log("Valor del Gasto: " + valorGasto);
    console.log("Nombre del Gasto: ", nombreGasto);
    // mirar las listas antes de agregar el dato
    console.log("Listado de Gastos: ", listaNombresGastos);
    console.log("Listado de Valores: ", listaValoresGastos);
    // agregar el dato a las listas
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(parseFloat(valorGasto));
    // limpiar los inputs
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";


    alert("Click del usuario...");
}

function actualizarListaGastos(){
    let listaHTML = "<ul>";
    for(let i=0; i<listaNombresGastos.length; i++){
        listaHTML += "<li>" + listaNombresGastos[i] + ": $" + listaValoresGastos[i] + "</li>";
    }
    listaHTML += "</ul>";
    document.getElementById("listaGastos").innerHTML = listaHTML;
}
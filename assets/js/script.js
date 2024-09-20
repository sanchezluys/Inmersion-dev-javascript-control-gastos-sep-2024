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

    actualizarListaGastos();

    //alert("Click del usuario...");
}

function actualizarListaGastos(){
    let htmlLista='';
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    //
    listaNombresGastos.forEach(
        (elemento, posicion)=>{
            const valorGasto = Number(listaValoresGastos[posicion]);
            let totalGastos= 0;
            //
            console.log(elemento);
            console.log(posicion);
            // htmlLista+="<li>"+ elemento +"</li>";
            htmlLista+=`<li> ${elemento} - USD: ${valorGasto.toFixed(2)}
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>            
            </li>`;
            console.log(htmlLista);
            // calculamos el acumulado de gastos
            totalGastos+=Number(valorGasto);
            listaElementos.innerHTML=htmlLista;
            totalElementos.innerHTML=totalGastos.toFixed(2);
            limpiar();
    
    });
}

function limpiar(){
    document.getElementById("nombreGasto").value='';
    document.getElementById("valorGasto").value='';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}
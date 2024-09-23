// declarando variables

let listaNombresGastos = [];
let listaDescripcionGastos = [];
let listaValoresGastos = []; 

// Lista de gastos comunes
const listaGastos = [
    "Alquiler",
    "Comida",
    "Transporte",
    "Servicios públicos",
    "Internet",
    "Teléfono",
    "Entretenimiento",
    "Ropa",
    "Salud",
    "Educación",
    "Ahorro",
    "Otros"
];

// Agregar event listeners a los campos
document.getElementById("nombreGasto").addEventListener("change", validarFormulario);
document.getElementById("descripcionGasto").addEventListener("input", validarFormulario);
document.getElementById("valorGasto").addEventListener("input", validarFormulario);

// Llamar a setearCampos() al inicio para asegurarse de que el botón esté deshabilitado inicialmente
setearCampos();

// creando las funciones

function clickBotonAgregar(){
    let nombreGasto=document.getElementById("nombreGasto").value;
    let descripcionGasto=document.getElementById("descripcionGasto").value;
    let valorGasto=document.getElementById("valorGasto").value;
    // agregar el dato a las listas
    listaNombresGastos.push(nombreGasto);
    listaDescripcionGastos.push(descripcionGasto);
    listaValoresGastos.push(parseFloat(valorGasto));
    // limpiar los inputs
    setearCampos();
    //
    actualizarListaGastos();
}

function actualizarListaGastos(){
    let htmlLista='';
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    //
    //alert("longitud..."+listaNombresGastos.length);
    let totalGastos= 0;
    if(Array.isArray(listaNombresGastos) && listaNombresGastos.length === 0){
        listaElementos.innerHTML='';
        totalElementos.innerHTML=0.00;
    }
    else{
        listaNombresGastos.forEach(
        (elemento, posicion)=>{
            const descripcionGasto = listaDescripcionGastos[posicion];
            const valorGasto = Number(listaValoresGastos[posicion]);
            
            // htmlLista+="<li>"+ elemento +"</li>";
            htmlLista+=`<li> ${elemento} - ${descripcionGasto}- USD: ${valorGasto.toFixed(2)}
            <button class="btn-success" onclick="modificarGasto(${posicion});">Modificar</button>
            <button class="btn-danger" onclick="eliminarGasto(${posicion});">Eliminar</button>           
            </li>`;
            
            // calculamos el acumulado de gastos
            totalGastos+=Number(valorGasto);
            listaElementos.innerHTML=htmlLista;
            totalElementos.innerHTML=totalGastos.toFixed(2);
            //limpiar();
            setearCampos();
    });
    }
}

function eliminarGasto(posicion){
    // verifico si esta vacio el array

    if (Array.isArray(listaNombresGastos) && listaNombresGastos.length === 0) 
        {
            alert("El array está vacío");
            document.getElementById("listaDeGastos")='';
            actualizarListaGastos();
        }
    else{
        alert("El gasto ha sido eliminado");
        listaNombresGastos.splice(posicion,1);
        listaDescripcionGastos.splice(posicion,1);
        listaValoresGastos.splice(posicion,1);
        actualizarListaGastos();
    }
}

// Función para poblar el select
function poblarSelectGastos() {
  const selectGasto = document.getElementById('nombreGasto');
  
  // Limpiar opciones existentes
  selectGasto.innerHTML = '<option value="">Seleccione el tipo de gasto</option>';
  
  // Agregar nuevas opciones
  listaGastos.forEach(gasto => {
    const option = document.createElement('option');
    option.value = gasto;
    option.textContent = gasto;
    selectGasto.appendChild(option);
  });
}

function setearCampos(){
    // la uso para que los 3 campos se inicialicen y el boton se inhabilite
    document.getElementById("nombreGasto").value='';
    document.getElementById("descripcionGasto").value=''; 
    document.getElementById("valorGasto").value='';
    document.getElementById("botonFormulario").disabled=true;
    // Eliminar mensaje de error si existe
    const mensajeError = document.getElementById("mensajeError");
    if (mensajeError) {
        mensajeError.remove();
    }
    
}

// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() 
    {
        poblarSelectGastos();
        setearCampos();
        
    });

function validarFormulario() {
    const nombreGasto = document.getElementById("nombreGasto").value;
    const descripcionGasto = document.getElementById("descripcionGasto").value;
    const valorGasto = document.getElementById("valorGasto").value;
    
    // Habilita el botón solo si todos los campos están llenos
    document.getElementById("botonFormulario").disabled = !(nombreGasto && descripcionGasto && valorGasto);
}
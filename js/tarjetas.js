/*
Script para la consulta de las tarjetas del usuario.Mediante estas,
sera creadas en html
*/
const tarjets_container=document.getElementsByClassName(all-tarjets);
let tarjetas = [];//Variable donde almacenaremos las tarjetas

//fetch...
fetch("http://localhost/JavaScript/ProyectosPersonales/Banco/tarjetas.php")
  .then(response => response.json()/*Json a array */ )
  .then(data => {
    tarjetas = data;      // Guardar los datos en la variable global
    cargarTarjetas();     // Llamar la función para mostrar las tarjetas
  })
  .catch(error => console.error("Error al cargar tarjetas:", error));


//Creacion de las tarjetas
const cargarTarjetas=()=>{
    tarjets_container.innerHTML="";
}




/*
<div class="tarjets"> <!--Agregar id para cada terjeta-->
                <h3 class="h3-b">Bancora</h3>
                <h3 class="h3-n">2932 1231 4982 1231</h3><!--Agregar id de tarjetas-->
                <div class="aux-vencimiento">
                    <label >Vencimiento</label>
                    <br>
                    <label id="vencimiento">03/02/2026</label><!--Agregar id vencimineto por cada tarjeta-->
                </div>
                <div class="aux-cvv">
                    <label>CVV</label><br>
                    <label class="hovercvv" id="cvv">123</label> <!-- Agregar iD diferente por cada tarjeta-->
                </div>
                <div class="aux-tarjets">
                    <h4 class="disponible" id="cantidad">$1500.96</h4><!--id difernte pór cada tarjeta-->
                    <label>Disponible</label>
                </div>
            </div>

*/
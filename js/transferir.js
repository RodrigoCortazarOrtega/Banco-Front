//Numeros de las tarjetas de user logeado
const nuestrasTarjetas=[];
const selectTargUsers=document.getElementById("select-tarjetas-user");
let tarjetas2=[];
fetch("http://localhost/JavaScript/ProyectosPersonales/Banco/tarjetas.php")
  .then(response => response.json())
  .then(data => {
    tarjetas2 = data;      // Guardar los datos en la variable global
    tarjetas2.forEach((tar)=>{
        nuestrasTarjetas.push(tar["numeroTarjeta"]);
    });
    cargarSelectTarjetasUsuario();
  })
  .catch(error => console.error("Error al cargar tarjetas:", error));

const cargarSelectTarjetasUsuario = ()=>{
    selectTargUsers.innerHTML="";
    let opciones="";
    nuestrasTarjetas.forEach((numeroT)=>{
        opciones+=`<option>${numeroT}</option>`;
    });
    selectTargUsers.innerHTML=""+opciones;
}

document.getElementById("form-transferir").addEventListener("submit", (e) => {
  e.preventDefault(); //  Detiene el comportamiento por defecto (recargar la página)
  //  Aun sin terminar logica para enviar transferencia

});




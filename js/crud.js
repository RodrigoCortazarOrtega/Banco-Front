const uTabla = document.getElementById("tabla-usuarios");

let usuarios = []; // Declaramos la variable global para almacenar los usuarios

// Fetch al archivo PHP que retorna el JSON(Por ahora es asi, ya en el backend cambienle la dir a donde solicitara)
fetch("http://localhost/JavaScript/ProyectosPersonales/Banco/usuario.php")
  .then(response => response.json()/*Json a array */ )
  .then(data => {
    usuarios = data;      // Guardar los datos en la variable global
    cargarUsuarios();     // Llamar la función para mostrar los datos en la tabla
  })
  .catch(error => console.error("Error al cargar usuarios:", error));

// Función para cargar la tabla
function cargarUsuarios() {
  uTabla.innerHTML = "";
  usuarios.forEach(user => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${user.id}</td>
      <td>${user.nombre}</td>
      <td>${user.correo}</td>
      <td>${user.usuario}</td>
      <td>
        <button onclick="editarUsuario(${user.id})">Editar</button>
        <button style="background:red" onclick="eliminarUsuario(${user.id})">Eliminar</button>
      </td>
    `;
    uTabla.appendChild(fila);
  });
}

// Simulaciones de botones
function editarUsuario(id) {
  alert("Editar usuario ID: " + id);
  //Actualizamos la tabla
  
}

function eliminarUsuario(id) {
  alert("Eliminar usuario ID: " + id);
  //Para eliminar
  //Actualizamos la tabla
  cargarUsuarios();
}
<?php
// Arreglo en PHP. Para simular la respuesta del server en user-panel
$historial = [
    
];


//Establecer el tipo de contenido a JSON
header('Content-Type: application/json');

// Convertir el array a JSON y mostrarlo
echo json_encode($historial, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

?>
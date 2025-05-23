<?php
// Arreglo en PHP
$usuarios = [
    [
        "id" => 1,
        "nombre" => "Carlos Gómez",
        "correo" => "carlos@mail.com",
        "usuario" => "cgomez"
    ],
    [
        "id" => 2,
        "nombre" => "Laura Pérez",
        "correo" => "laura@mail.com",
        "usuario" => "lperez"
    ],
    [
        "id" => 3,
        "nombre" => "Ana Torres",
        "correo" => "ana@mail.com",
        "usuario" => "atorres"
    ]
];


//Establecer el tipo de contenido a JSON
header('Content-Type: application/json');

// Convertir el array a JSON y mostrarlo
echo json_encode($usuarios, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

?>
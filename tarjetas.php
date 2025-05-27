<?php
/* 
Arreglo en PHP. Para simular la respuesta del server en user-panel para la 
consulta de los registros de las tarjeta del usuario logeado.
Seran utilizados pára la creacion dinamica de las tarjetas en la vista
*/
$tarjetas = [
    [
        "idTarjeta" => 101,
        "numeroTarjeta" => "1234-5678-9012-3456",
        "tipoTarjeta" => "Débito",
        "saldo" => 2500.75,
        "fechaEmision" => "2023-05-10",
        "fechaExpiracion" => "2026-05-10",
        "estado" => "Activa"
    ],
    [
        "idTarjeta" => 102,
        "numeroTarjeta" => "9876-5432-1098-7654",
        "tipoTarjeta" => "Crédito",
        "saldo" => 12000.00,
        "fechaEmision" => "2022-09-15",
        "fechaExpiracion" => "2025-09-15",
        "estado" => "Activa"
    ],
    [
        "idTarjeta" => 103,
        "numeroTarjeta" => "4567-1234-7890-3210",
        "tipoTarjeta" => "Débito",
        "saldo" => 0.00,
        "fechaEmision" => "2020-01-01",
        "fechaExpiracion" => "2023-01-01",
        "estado" => "Expirada"
    ]
];


//Establecer el tipo de contenido a JSON
header('Content-Type: application/json');

// Convertir el array a JSON y mostrarlo
echo json_encode($tarjetas, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

?>
<?php

$linguagens = ["PHP", "C#", "Java"];

$linguagens2 = array("PHP", "C#", "Java");

$curso = ["Curso de fundamnetos de PHP", 8.1, 40, true];

$curso = [
    "nome_curso" => "Curso de fundamentos PHP",
    "versao_ferramenta" => 8.1,
    "carga_horario" => 40,
    "status" => true
];
$numeros = [
    [1,2,3,4],     //0   
    [5,6,7,8,9],   //1
    [10,[11,12,13]]//2
];

$curso = [
    "PHP" => [
        "nome_curso" => "Curso de fundamnetos d PHP",
        "versao_ferramenta",
        "carga_horario" => 40,
        "status" => true
    ],
    "Java" => [
        "nome_curso" => "Curso de fundamentos Java",
        "versao_ferramenta" => 11,4,
        "carga_horario" => 30,
        "status" => true
    ]
    
];

echo $curso["Java"]["nome_curso"];
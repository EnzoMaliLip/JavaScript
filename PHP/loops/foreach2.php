<?php

$cursos = [
    "PHP" => [
        "nome_curso" => "Curso de fundamentos PHP",
        "versao_ferramenta" => 7.4,
        "carga_horario" => 40,
        "status" => true
    ],
    "Java" => [
        "nome_curso" => "Curso de fundamentos Java",
        "versao_ferramenta" => 11.4,
        "carga_horario" => 30,
        "status" => true
    ],
    "C#" => [
        "nome_curso" => "Curso de fundamentos C#",
        "versao_ferramenta" => 5,
        "carga_horario" => 60,
        "status" => true
    ],
    "JavaScript" => [
        "nome_curso" => "Curso de fundamentos JavaScript",
        "versao_ferramenta" => 11.4,
        "carga_horario" => 30,
        "status" => false
    ]
    
];

foreach ($cursos as $curso)
{
    if($curso['status'] == false){
        continue;
    }
    echo $curso['nome_curso'];
    echo "<br>";
    echo "versao_ferramenta :" . $curso['versao_ferramenta'];
    echo "<br>";
    echo "carga_horario :" . $curso['carga_horario'];
    echo "<br>";
    echo "status :" . $curso['status'];
    echo "<br>";
}
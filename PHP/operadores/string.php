<?php

$escola = "Nilo";
$curso = ["PHP","C#","Java"];

$frase = "Faça o uso de " . $curso . "na escola " . $escola;
$string1 = "Faça curso de {$curso[1]} na escola {$escola}";
$string2 = 'Faça curso de $curso na escola $escola';

echo $frase;
echo $string1;
echo $string2;
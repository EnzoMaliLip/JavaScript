<?php

function encontrarMaior($numeros) {
    $maior = $numeros[0];

    for ($i = 1; $i < count($numeros); $i++) {
        if ($numeros[$i] > $maior) {
            $maior = $numeros[$i];
        }
    }

    return $maior;
}

$numeros = [10, 5, 20, 8, 15];

$maiorNumero = encontrarMaior($numeros);

echo ($maiorNumero);
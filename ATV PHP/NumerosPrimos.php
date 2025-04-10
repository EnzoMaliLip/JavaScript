<?php

function ePrimo($numero) {
    if ($numero <= 1) {
        return false;
    }

    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false;
        }
    }

    return true;
}


echo "2 é primo? " . (ePrimo(2) ? "Sim" : "Não") . "\n";
echo "5 é primo? " . (ePrimo(5) ? "Sim" : "Não") . "\n";
echo "9 é primo? " . (ePrimo(9) ? "Sim" : "Não") . "\n";
echo "17 é primo? " . (ePrimo(17) ? "Sim" : "Não") . "\n";
echo "20 é primo? " . (ePrimo(20) ? "Sim" : "Não") . "\n";
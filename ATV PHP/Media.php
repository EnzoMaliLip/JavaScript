<?php

$nota1 = 8;
$nota2 = 6;
$nota3 = 7;

$media = ($nota1 + $nota2 + $nota3) / 3;

if ($media >= 7) {
    echo "Aprovado! Sua média é: $media";
} elseif ($media >= 5 && $media < 7) {
    echo "Recuperação! Sua média é: $media";
} else {
    echo "Reprovado! Sua média é: $media";
}
<?php

$nome = "Enzo";
$idade = "16";
$casado = false;
$preco = 384.90;

echo "A variavel é do tipo: ";
echo gettype($nome);

$nome = false;

echo "<br>A variavel é do tipo: ";
echo gettype($nome);
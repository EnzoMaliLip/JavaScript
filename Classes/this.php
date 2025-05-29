<?php

require_once "src/Classes/Cliente.php";

$cli = new Cliente;
$cli -> nome = "Gabriel";
$cli -> idade = 27;
$cli -> endereco = "Rua B";
$cli -> telefone = "41-XXXX-XXXX";
$cli -> comprar();

echo "<br>";

$cli2 = new Cliente;
$cli2 -> definirNome("João");
$cli2 -> idade = 30;
$cli2 -> endereco = "Rua A";
$cli2 -> telefone = "41-XXXX-XXXX";
$cli2 -> comprar();
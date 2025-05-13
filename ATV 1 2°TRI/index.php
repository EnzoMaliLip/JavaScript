<?php

require_once "src/Classes/Carro.php";
require_once "src/Classes/Cliente.php";


$prod1 = new Carro;
$prod1 -> nome = "Supra";
$prod1 -> marca = "Toyota";
$prod1 -> descricao = "Carro japonês";
$prod1 -> preco = 850000;

$prod2 = new Carro;
$prod2 -> nome = "Ferrari";
$prod1 -> marca = "Ferrari";
$prod1 -> descricao = "Carro italiano";
$prod2 -> preco = 1.90;

var_dump($prod1);
echo "<br>";
var_dump($prod2);
echo "<br>";

$cli = new Cliente;
$cli -> nome = "João";
$cli -> idade = 40;
$cli -> endereço = "Rua A";
$cli -> telefone = "41-XXXX-XXXX";

$cli ->comprar($cli);
echo "<br>";
var_dump($cli);
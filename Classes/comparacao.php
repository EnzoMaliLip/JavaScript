<?php
//Importação do arquivo Produto.php
require_once "src/Classes/Produto.php";

//Instancia do Produto
$prod1 = new Produto;
$prod1 -> titulo = "Skol";
$prod1 -> descricao = "Cerveja alemã";
$prod1 -> preco = 2.50;

$prod2 = new Produto;
$prod2 -> titulo = "Skol";
$prod2 -> descricao = "Cerveja alemã";
$prod2 -> preco = 2.50;

var_dump($prod1 == $prod2); //tipo e propriedade !=
var_dump($prod2 === $prod2); //Referência !==

$prod3 = new Produto;
$prod3 -> titulo = "Skol";
$prod3 -> descricao = "cerveja alemã";
$prod3 -> preco = 2.50;

var_dump($prod1 == $prod3); //(true)

$prod4 = $prod1;

var_dump($prod1 === $prod4); //(true)
echo"<br>";
var_dump($prod1);
echo"<br>";
var_dump($prod2);
echo"<br>";
var_dump($prod4);
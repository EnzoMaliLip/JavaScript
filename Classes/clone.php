<?php
//Importação do arquivo Produto.php
require_once "src/Classes/Produto.php";
//Importação do arquivo Cliente.php
require_once "src/Classes/Cliente.php";

//Instancia do Produto
$prod1 = new Produto;
$prod1 -> titulo = "Skol";
$prod1 -> descricao = "Cerveja alemã";
$prod1 -> preco = 2.50;

$prod2 = clone $prod1;
$prod2 -> preco = 5.50;

function alterarProduto($produto)
{
    $produto -> titulo = "Skol Litrão";
    return $produto;
}
$prod3 = alterarProduto(clone $prod1);

var_dump($prod1);
var_dump($prod2);
var_dump($prod3);

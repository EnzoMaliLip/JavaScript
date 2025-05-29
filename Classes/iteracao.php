<?php
//Importação do arquivo Produto.php
require_once "src/Classes/Produto.php";

//Instancia do Produto
$prod1 = new Produto;
$prod1 -> titulo = "Skol";
$prod1 -> descricao = "Cerveja alemã";
$prod1 -> preco = 2.50;

foreach ($prod1 as $nome => $valor) {
    echo "$nome: $valor <br>";
}
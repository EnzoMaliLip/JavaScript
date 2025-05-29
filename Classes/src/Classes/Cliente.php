<?php

class Cliente
{
    public $nome;
    public $idade;
    public $endereço;
    public $telefone;

    public function comprar()
    {
        echo "O cliente realizou uma compra";
    }
    public function definirNome($nome)
    {
        $this->nome = $nome;
    }
}
<?php
require_once __DIR__ . '/../config/database.php';

class Produto {
    public static function listarTodos() {
        global $pdo;
        $stmt = $pdo->query("SELECT * FROM produtos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function buscarPorId($id) {
        global $pdo;
        $stmt = $pdo->prepare("SELECT * FROM produtos WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public static function criar($nome, $preco) {
        global $pdo;
        $stmt = $pdo->prepare("INSERT INTO produtos (nome, preco) VALUES (?, ?)");
        return $stmt->execute([$nome, $preco]);
    }

    public static function atualizar($id, $nome, $preco) {
        global $pdo;
        $stmt = $pdo->prepare("UPDATE produtos SET nome = ?, preco = ? WHERE id = ?");
        return $stmt->execute([$nome, $preco, $id]);
    }

    public static function deletar($id) {
        global $pdo;
        $stmt = $pdo->prepare("DELETE FROM produtos WHERE id = ?");
        return $stmt->execute([$id]);
    }
}

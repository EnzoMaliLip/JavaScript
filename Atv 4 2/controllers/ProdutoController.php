<?php
require_once __DIR__ . '/../models/Produto.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        echo json_encode(Produto::listarTodos());
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        if (isset($data['id'])) {
            Produto::atualizar($data['id'], $data['nome'], $data['preco']);
        } else {
            Produto::criar($data['nome'], $data['preco']);
        }
        echo json_encode(['status' => 'ok']);
        break;

    case 'DELETE':
        parse_str(file_get_contents("php://input"), $data);
        Produto::deletar($data['id']);
        echo json_encode(['status' => 'ok']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['erro' => 'Método não permitido']);
        break;
}

<?php
namespace App\Controllers;
defined('BASEPATH') OR exit('No direct script access allowed');


class UserController extends BaseController {

    public function index()
    {
        // URL da API externa
        $url = 'https://jsonplaceholder.typicode.com/users';

        // Faz uma requisição GET para a API externa e recebe os dados
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        $response = curl_exec($ch);
        curl_close($ch);

        // Converte os dados recebidos para um objeto JSON
        $users = json_decode($response);

        // Converte os usuários para o formato desejado
        $response = array();
        foreach ($users as $user) {
            $response[] = array(
                'id' => $user->id,
                'name' => $user->name,
                'username' => $user->username,
                'email' => $user->email
            );
        }

        // Ordenar o array em ordem alfabética
        sort($array);

        // Retorna os usuários no formato JSON
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}
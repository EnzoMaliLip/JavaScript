package com.mycompany.trabalho_10;

import java.util.Scanner;

public class Trabalho_10 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Por favor, digite seu nome completo:");
        String nomeCompleto = scanner.nextLine().trim();

        String[] nomes = nomeCompleto.split(" ");

        String iniciais = "";

        for (String nome : nomes) {
            if (!nome.isEmpty()) {
                iniciais += nome.charAt(0);
            }
        }

        System.out.println("As iniciais são: " + iniciais.toUpperCase());

        scanner.close();
    }
}

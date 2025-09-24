package com.mycompany.trabalho_7;

import java.util.Scanner;

public class Trabalho_7 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("digite uma frase:");
        String frase = scanner.nextLine();

        String fraseMinuscula = frase.toLowerCase();

        int contadorVogais = 0;

        for (int i = 0; i < fraseMinuscula.length(); i++) {
            char caractere = fraseMinuscula.charAt(i);

            if (caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u') {
                contadorVogais++;
            }
        }

        System.out.println("A frase tem um total de " + contadorVogais + " vogais.");

        scanner.close();
    }
}
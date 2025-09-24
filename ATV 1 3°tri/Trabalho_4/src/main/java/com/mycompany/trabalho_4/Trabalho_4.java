package com.mycompany.trabalho_4;

import java.util.Scanner;

public class Trabalho_4 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("digite uma palavra:");
        String palavra = scanner.nextLine().toLowerCase();
        String palavraInvertida = "";

        for (int i = palavra.length() - 1; i >= 0; i--) {
            palavraInvertida += palavra.charAt(i);
        }

        if (palavra.equals(palavraInvertida)) {
            System.out.println("A palavra \"" + palavra + "\" é um palíndromo.");
        } else {
            System.out.println("A palavra " + palavra + " não é um palíndromo.");
        }

        scanner.close();
    }
}
package com.mycompany.trabalho_9;

import java.util.Scanner;

public class Trabalho_9 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("digite uma frase:");
        String frase = scanner.nextLine();

        System.out.println("digite a palavra que você quer procurar na frase:");
        String palavra = scanner.nextLine();

        if (frase.toLowerCase().contains(palavra.toLowerCase())) {
            System.out.println("A palavra \"" + palavra + "\" foi encontrada na frase.");
        } else {
            System.out.println("A palavra \"" + palavra + "\" não foi encontrada na frase.");
        }

        scanner.close();
    }
}


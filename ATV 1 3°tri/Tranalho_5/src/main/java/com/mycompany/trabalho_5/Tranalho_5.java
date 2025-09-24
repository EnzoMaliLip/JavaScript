package com.mycompany.trabalho_5;

import java.util.Scanner;

public class Tranalho_5 {

    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);

        System.out.println("digite uma frase:");
        String frase = scanner.nextLine();

        if (frase.length() >= 5) {
            String primeirosCinco = frase.substring(0, 5);
            System.out.println("Os 5 primeiros caracteres são: " + primeirosCinco);
        } else {
            System.out.println("A frase é menor que 5 caracteres. A frase completa é: " + frase);
        }

        scanner.close();
    }
}


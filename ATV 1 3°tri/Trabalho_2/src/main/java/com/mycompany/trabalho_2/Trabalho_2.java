package com.mycompany.trabalho_2;

import java.util.Scanner;

public class Trabalho_2 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("digite o primeiro nome:");
        String primeiroNome = scanner.nextLine();

        System.out.println("digite o segundo nome:");
        String segundoNome = scanner.nextLine();

        if (primeiroNome.equals(segundoNome)) {
            System.out.println("Os nomes são iguais.");
        } else {
            System.out.println("Os nomes são diferentes.");
        }

        scanner.close();
    }
}
    
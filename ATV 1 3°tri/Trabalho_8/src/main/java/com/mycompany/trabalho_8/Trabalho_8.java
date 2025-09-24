package com.mycompany.trabalho_8;

import java.util.Scanner;

public class Trabalho_8 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("digite uma:");
        String fraseOriginal = scanner.nextLine();

        String fraseSemEspacos = fraseOriginal.replace(" ", "");

        System.out.println("A frase sem espaços é: \"" + fraseSemEspacos + "\"");

        scanner.close();
    }
}

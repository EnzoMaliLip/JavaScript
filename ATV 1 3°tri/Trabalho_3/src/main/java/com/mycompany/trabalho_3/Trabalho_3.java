package com.mycompany.trabalho_3;

import java.util.Scanner;

public class Trabalho_3 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("digite uma palavra:");
        String textoOriginal = scanner.nextLine();

        String textoMaiusculo = textoOriginal.toUpperCase();

        String textoMinusculo = textoOriginal.toLowerCase();

        System.out.println("Texto Original: " + textoOriginal);
        System.out.println("Em Maiúsculas: " + textoMaiusculo);
        System.out.println("Em Minúsculas: " + textoMinusculo);

        scanner.close();
    }
}
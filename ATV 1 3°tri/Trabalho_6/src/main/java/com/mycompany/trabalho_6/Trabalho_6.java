package com.mycompany.trabalho_6;

import java.util.Scanner;

public class Trabalho_6 {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);

        System.out.println("digite uma frase:");
        String fraseOriginal = scanner.nextLine();

        String fraseModificada = fraseOriginal.replace('a', 'e').replace('A', 'E');

        System.out.println("A frase modificada é: " + fraseModificada);

        scanner.close();
    }
}
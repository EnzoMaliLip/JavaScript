package com.mycompany.trabalho_1;

import java.util.Scanner;

public class contador_caracteres {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("digite a frase:");
        String frase = scanner.nextLine();
        
        int numeroDeCaracteres = frase.length();
        
        System.out.println("A frase que você digitou tem " + numeroDeCaracteres + " caracteres.");
        
        
        scanner.close();
    }
}
    

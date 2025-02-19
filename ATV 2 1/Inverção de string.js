function reverseString(str) {
    var separar = str.split("");

    var reverter = separar.reverse();
 
    var entrar = reverter.join("");

    console.log(entrar)
}
reverseString("JavaScript");
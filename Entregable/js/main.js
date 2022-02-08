/* alert();

 */


//Desafio I - Loops y condicionales

/* alert('Vamos a calcular la suma de numeros impares seguidos')
let numero = parseFloat(prompt('¿Desde que número impar empezamos la suma?'))

let suma = 0;

//validacion
while (Number.isNaN(numero)) {
    alert('ingrese numero')
    numero = parseFloat(prompt('¿Desde que número impar empezamos la suma?'))
}

let cuantasVeces = parseFloat(prompt('Elige hasta qué número sumamos'))

for (let i = 1; i <= cuantasVeces; i+=2) {
    console.log(i)  
    suma += i; 
}



alert( 'la suma total desde el numero impar ' + numero + ' hasta ' + cuantasVeces + ' = ' + suma);
 */


/* Entrega Desafio 1 */


/*
    Escriba un programa que valide si una nota está entre 0 y 10, sino está entre 0 y 10 la nota se pedirá de nuevo hasta que la nota sea correcta.
*/

let nota = parseInt(prompt("Ingrese una nota entre 0 y 10"));

do {
    if (nota >= 0 && nota <= 10) {
        alert("La nota ingresada es " + nota);
    } else {
        nota = prompt("**ERROR** La nota debe ser entre 0 y 10");
    }
} while (nota < 0 || nota > 10);
/* alert();

 */


//Desafio I - Loops y condicionales

alert('Vamos a calcular la suma de numeros impares seguidos')
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


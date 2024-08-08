/*
1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
*/

// Actividad 1

function parImpar(num) {
  if (num % 2 === 0) {
    console.log(`El ${num} es par`);
  } else {
    console.log(`El ${num} impar`);
  }
}

// parImpar(10);

// Actividad 2

function mayorMenor(a, b) {
  if (a > b) {
    console.log(`El numero ${a} es mayor a ${b}`);
  } else if (a < b) {
    console.log(`el numero ${a} es menor a ${b}`);
  } else {
    console.log(`El numero ${a} y el numero ${b} son iguales`);
  }
}

// mayorMenor(5, 10);

// Actividad 3

function multiploCinco(num) {
  if (num % 5 === 0) {
    console.log(`El numero ${num} es multiplo de cinco`);
  } else {
    console.log(`El numero ${num} no es multiplo de cinco`);
  }
}

// multiploCinco(5);
// multiploCinco(15);
// multiploCinco(36);

// Actividad 4

function recibirNumero(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`El numero es ${i}`);
  }
}

// recibirNumero(20);

// Actividad 5

function repetirPalabra(palabra, numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(`${palabra} ${i}`);
  }
}

// repetirPalabra('Hola', 10);

// Actividad 6

let arrayNum = [1, 2, 3, 4, 5, 6];

function imprimirArray() {
  for (let numeros of arrayNum) {
    console.log(numeros);
  }
}

// imprimirArray();

// Actividadd 7

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imprimirSinQuinto() {
  for (let i = 0; i < numeros.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(numeros[i]);
  }
}

// imprimirSinQuinto(numeros);

// Actividad 8

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicarArray(array, num) {
  for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(`${arrayNumeros[i] * num}`);
  }
}

// multiplicarArray(arrayNumeros, 5);

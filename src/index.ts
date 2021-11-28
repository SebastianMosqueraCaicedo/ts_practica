//1. Agrega los números 4 y 5 al inicio del arreglo numbersList.
const numbersList: number[] = [1, 2, 3];
//Solución
numbersList.unshift(4, 5);

//2. Elimina el primer elemento del array fishArray
const fishArray: string[] = ['angel', 'clown', 'mandarin', 'surgeon'];
//Solución
fishArray.shift();

//3. Elimina el ultimo elemento del array plants
const plants: string[] = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
//Solucion
plants.pop();

//4. Guarda en indeces todos los índices donde aparezca la letra "a" en el array letters
var indices: number[] = [];
const letters: string[] = ['a', 'b', 'a', 'c', 'a', 'd'];
const element: string = 'a';

//Solución

function indicesLetters() {
  let arrayIndices: number[] = [];
  let contador = -1;
  letters.forEach(function (letras) {
    contador++;
    if (letras === element) {
      arrayIndices.push(contador)
    }
  })
  return arrayIndices;
}

indices = indicesLetters();

console.log(indices);

//5. Encuentra el índice del primer número que sea menor a 13 del array1, para esto, usa la función flecha isLargeNumber
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element: number) => element > 13;
//Solución
const indiceMayor = array1.findIndex(isLargeNumber);

//6. Junta los 3 arrays en numbersArray de manera que los números queden en orden.
const num1: number[] = [7, 8, 9];
const num2: number[] = [1, 2, 3];
const num3: number[] = [4, 5, 6];
//Solución

//7. Aplicale raiz cuadrada a todos los números del arreglo nums y guarda los resultados en squareRoot
const nums: number[] = [1, 16, 9];
var squareRoot: number[] = [];
//Solución

//8. Ahora multiplica el valor de cada número de squareRoot por 3 y guarda los resultados en numsTimesThree
var numsTimesThree: number[] = [];
//Solución

//9. Guarda todas las palabras de wordsArray que tengan más de 6 letras en wordsArrayResults
const wordsArray: string[] = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var wordsArrayResults: string[] = [];
//Solución

//10. Guarda todas los números de unfilteredNumbers que sean mayores o iguales a 10 en filteredNumbers, usa la función isLargeEnough
const unfilteredNumbers: number[] = [12, 5, 8, 130, 44];
var filteredNumbers: number[] = [];

function isLargeEnough(num: number): boolean {
  return num >= 10;
}

//Solución

//11. Guarda los nombres del array names de la posición 1 a la 3 en maleNames
const names: string[] = ['Rita', 'Pedro', 'Miguel', 'Juan', 'Vanesa'];
var maleNames: string[] = [];
//Solución

//12. Usa la función printPlanets para mostrar la posición y el nombre de cada planeta del arreglo planets
const planets: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function printPlanets(planet: string, index: number, array: string[]) {
  console.log("Planet pos: [" + index + "] = " + planet);
}

//Solución

//13. Invierte el orden del array planets
//Solución

//14. ¿Los números del arreglo numbers2 son menores a 40? usa la función flecha isBelowThreshold para responder la pregunta
const numbers2: number[] = [1, 30, 39, 29, 10, 13];

const isBelowThreshold = (currentValue: number) => currentValue < 40;
//Solución

//15. Cambia todos los datos del array numbers2 por el número 4
//Solución

//16. Cambia todos los datos del array numbers2 por el número 8 desde el indice 2
//Solución

//17. Suma todos los datos del array numbers3 y guarda el resultado en la variable numbers3Result, usa la función flecha reducer
const numbers3: number[] = [1, 2, 3, 4];
var numbers3Result: number = 0;

const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
//Solución

//18. Comprueba si en el array numbers3 hay algún número par, usa la función felcha even
const even = (element: number) => element % 2 === 0;

//Solución

//19. Comprueba si en el array fruits hay un elemento banana, usa la función flecha checkBanana
const fruits: string[] = ['apple', 'banana', 'mango', 'guava'];

const checkBanana = (element: string) => element === "banana";

//Solución

console.log(" 1452345");

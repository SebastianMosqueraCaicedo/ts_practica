import Camion from "./Camion";

/*
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
*/

// ejercisios parcial

// Informacion relevante

const VCQ392 = new Camion("VCQ-392", 2006, "Bogota", "Verde");
const BSI302 = new Camion("BSI-302", 2016, "Cali", "Rojo");
const PQO238 = new Camion("PQO-238", 2020, "Medellin", "Azul");
const AKL192 = new Camion("AKL-192", 1999, "Santa Marta", "Negro");
const REW392 = new Camion("REW-392", 1996, "Bogota", "Negro");
const APM400 = new Camion("APM-400", 2015, "Cali", "Blanco");
const GGG969 = new Camion("GGG-969", 2003, "Medellin", "Rojo");
const CAL073 = new Camion("CAL-073", 2021, "Santa Marta", "Azul");
const PRI516 = new Camion("PRI-516", 1988, "Cali", "Azul");
const MBL403 = new Camion("MBL-403", 2000, "Bogota", "Rojo");

// ingresos

const ingresos2017: Map<Camion, number> = new Map<Camion, number>();
const ingresos2018: Map<Camion, number> = new Map<Camion, number>();
const ingresos2019: Map<Camion, number> = new Map<Camion, number>();
const ingresos2020: Map<Camion, number> = new Map<Camion, number>();
const ingresos2021: Map<Camion, number> = new Map<Camion, number>();

ingresos2017.set(VCQ392, 0);
ingresos2018.set(VCQ392, 3);
ingresos2019.set(VCQ392, 1);
ingresos2020.set(VCQ392, 2);
ingresos2021.set(VCQ392, 1);

ingresos2017.set(BSI302, 1);
ingresos2018.set(BSI302, 0);
ingresos2019.set(BSI302, 2);
ingresos2020.set(BSI302, 0);
ingresos2021.set(BSI302, 2);

ingresos2017.set(PQO238, 0);
ingresos2018.set(PQO238, 0);
ingresos2019.set(PQO238, 0);
ingresos2020.set(PQO238, 0);
ingresos2021.set(PQO238, 1);

ingresos2017.set(AKL192, 1);
ingresos2018.set(AKL192, 2);
ingresos2019.set(AKL192, 0);
ingresos2020.set(AKL192, 1);
ingresos2021.set(AKL192, 2);

ingresos2017.set(REW392, 0);
ingresos2018.set(REW392, 2);
ingresos2019.set(REW392, 0);
ingresos2020.set(REW392, 2);
ingresos2021.set(REW392, 0);

ingresos2017.set(APM400, 2);
ingresos2018.set(APM400, 0);
ingresos2019.set(APM400, 1);
ingresos2020.set(APM400, 1);
ingresos2021.set(APM400, 3);

ingresos2017.set(GGG969, 1);
ingresos2018.set(GGG969, 0);
ingresos2019.set(GGG969, 0);
ingresos2020.set(GGG969, 1);
ingresos2021.set(GGG969, 0);

ingresos2017.set(CAL073, 0);
ingresos2018.set(CAL073, 0);
ingresos2019.set(CAL073, 0);
ingresos2020.set(CAL073, 0);
ingresos2021.set(CAL073, 0);

ingresos2017.set(PRI516, 4);
ingresos2018.set(PRI516, 0);
ingresos2019.set(PRI516, 1);
ingresos2020.set(PRI516, 1);
ingresos2021.set(PRI516, 1);

ingresos2017.set(MBL403, 1);
ingresos2018.set(MBL403, 1);
ingresos2019.set(MBL403, 1);
ingresos2020.set(MBL403, 1);
ingresos2021.set(MBL403, 1);

// no hay una mejor manera de hacer esto?

// Ejercisio 1

const cantidadIngresos2018 = Array.from(ingresos2018.values());
let total2018: number = 0;
cantidadIngresos2018.forEach(function (value) {
  total2018 += value;
})

// console.log(total2018);

// Ejercisio 2

const arregloIngresosTotales = [
  Array.from(ingresos2017.keys()),
  Array.from(ingresos2018.keys()),
  Array.from(ingresos2019.keys()),
  Array.from(ingresos2020.keys()),
  Array.from(ingresos2021.keys()),
]
const coloresTotales: string [] = [];
const arregloColoresTotales = arregloIngresosTotales.map(function (value) {
  value.forEach(function (valor) {
    coloresTotales.push(valor.color);
  });
});
const setColoresTotales = new Set(coloresTotales);
// console.log(setColoresTotales);

// ejercisio 3
const totalCamion: string [] = [];
const camionesRegistrados = Array.from(ingresos2019.entries()).map(function (value) {
  if (value[0].ciudad === "Bogota" && value[1] > 0) {
    totalCamion.push(value[0].placa);
  }
})

console.log(totalCamion);
// ejercisio 4

const arrayCamiones2017 = Array.from(ingresos2017.keys());
let cantidadMantenimientos2017: number = 0;
Array.from(ingresos2017.values()).map(function (value) {
  cantidadMantenimientos2017 += value;
})
const reporte2017 = [
  arrayCamiones2017,
  cantidadMantenimientos2017
];
// console.log(reporte2017);

// ejercisio 5

const camionesAntiguos2010: Camion[] = [];
Array.from(arregloIngresosTotales).map(function (value) {
  value.map(function (valor, index) {
    if (valor.ano < 2010) {
      camionesAntiguos2010.push(valor);
    }
  })
})
// console.log(camionesAntiguos2010);

const mapped = camionesAntiguos2010.map((v, i) => {
  return {i, value: v.placa};
})

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map(v => camionesAntiguos2010[v.i]);

const resultRepeat = new Set(result);

const arrayCuhngus = [
  Array.from(ingresos2017.values()),
  Array.from(ingresos2018.values()),
  Array.from(ingresos2019.values()),
  Array.from(ingresos2020.values()),
  Array.from(ingresos2021.values()),
]

let mantenimientos2117: number = 0;

arrayCuhngus.map(function (value) {
  value.map(function (valor) {
    mantenimientos2117 += valor;
  })
})

const reporte = [
  resultRepeat,
  mantenimientos2117
];
// ejercisios 6
const camionSant: Camion [] = [];
const camionReporte = Array.from(arregloIngresosTotales.values()).map(function (value) {
  value.map(function (valor) {
    if (valor.ciudad === "Santa Marta") {
      camionSant.push(valor);
    }
  })
})

const arregloIngresosTotalesInfo = [
  Array.from(ingresos2017.entries()),
  Array.from(ingresos2018.entries()),
  Array.from(ingresos2019.entries()),
  Array.from(ingresos2020.entries()),
  Array.from(ingresos2021.entries()),
]
const reporteSantaMantenimientos: Map<Camion, number> = new Map<Camion, number>();
const sumasTotales: number[] = [];
arregloIngresosTotalesInfo.map(function (value) {
  value.map(function (valor) {
    if (valor[0].ciudad === "Santa Marta") {
      sumasTotales.push()
      reporteSantaMantenimientos.set(valor[0], valor[1]);
    }
  })
})
// console.log(reporteSantaMantenimientos);

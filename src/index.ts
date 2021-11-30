import Camion from "./Camion";

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
const entradasCamiones = [
Array.from(ingresos2017.entries()),
Array.from(ingresos2018.entries()),
Array.from(ingresos2019.entries()),
Array.from(ingresos2020.entries()),
Array.from(ingresos2021.entries())
  ]

const coloresTotales: string [] = [];
const arregloColoresTotales = entradasCamiones.map(function (value) {
  value.map(function (valor){
    if (valor[1] > 0){
      coloresTotales.push(valor[0].color);
    }
  });
});
const setColoresTotales = new Set(coloresTotales);
 console.log(setColoresTotales);

// ejercisio 3
const totalCamion: string [] = [];
const camionesRegistrados = Array.from(ingresos2019.entries()).map(function (value) {
  if (value[0].ciudad === "Bogota" && value[1] > 0) {
    totalCamion.push(value[0].placa);
  }
})

// console.log(totalCamion);
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
const arregloIngresosTotales = [
  Array.from(ingresos2017.keys()),
  Array.from(ingresos2018.keys()),
  Array.from(ingresos2019.keys()),
  Array.from(ingresos2020.keys()),
  Array.from(ingresos2021.keys()),
]
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

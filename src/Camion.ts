export default class Camion {
  placa: string;
  ano: number;
  ciudad: string;
  color: string;

  constructor(placa: string, ano: number, ciudad: string, color: string) {
    this.ano = ano;
    this.ciudad = ciudad;
    this.color = color;
    this.placa = placa;
  }
}

export abstract class FiguraGeometrica {
  constructor(protected nombre : string) {}

  abstract calcularPerimetro() : number
}

import { FiguraGeometrica } from 'src/models/FiguraGeometrica'

export class Circulo extends FiguraGeometrica {

  constructor(
    nombre: string,
    private radio: number
  ) {
    super( nombre )
  }

  override calcularPerimetro(): number {
    return 2 * Math.PI * this.radio
  }
}

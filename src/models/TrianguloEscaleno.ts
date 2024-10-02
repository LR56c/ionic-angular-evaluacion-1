import { FiguraGeometrica } from 'src/models/FiguraGeometrica'

export class TrianguloEscaleno extends FiguraGeometrica{

  constructor(
    nombre: string,
    protected ladoA: number,
    protected ladoB: number,
    protected ladoC: number
  ) {
    super(nombre)
  }

    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}

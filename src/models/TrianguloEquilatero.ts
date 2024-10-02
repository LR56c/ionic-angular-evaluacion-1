import { TrianguloEscaleno } from 'src/models/TrianguloEscaleno'

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor( nombre: string, lado: number ) {
    super( nombre, lado, lado, lado )
  }
}

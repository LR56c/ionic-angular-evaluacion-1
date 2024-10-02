import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { TrianguloEscaleno } from 'src/models/TrianguloEscaleno'

@Component( {
  selector   : 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls  : [ './triangle.component.scss' ],
  imports: [
    IonicModule,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone : true

})
export class TriangleComponent   {

  constructor() { }

  perimetro : number = 0

  initialCalculation = false

  ladosForm = new FormGroup( {
    ladoA: new FormControl(0, [Validators.required, Validators.min(0)]),
    ladoB: new FormControl(0, [Validators.required, Validators.min(0)]),
    ladoC: new FormControl(0, [Validators.required, Validators.min(0)]),
})

  public calculate(): void {
    if(!this.ladosForm.valid){
      return
    }
    this.initialCalculation = true
    const triangulo = new TrianguloEscaleno('Triangulo Escaleno', this.ladoA?.value ?? 0, this.ladoB?.value ?? 0, this.ladoC?.value ?? 0)
    this.perimetro = parseFloat(triangulo.calcularPerimetro().toFixed(2))
  }

  get ladoA() {
    return this.ladosForm.get('ladoA')
  }

  get ladoB() {
    return this.ladosForm.get('ladoB')
  }

  get ladoC() {
    return this.ladosForm.get('ladoC')
  }
}

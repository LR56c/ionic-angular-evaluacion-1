import {
  CommonModule,
} from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { Circulo } from 'src/models/Circulo'

@Component( {
  selector   : 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls  : [ './circle.component.scss' ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  standalone : true
} )
export class CircleComponent {

  constructor() { }

  initialCalculation  = false
  radioValue : number = 0
  perimetro: number   = 0

  calculate(): void {
    if( this.radioValue <= 0 ){
      return
    }
    this.initialCalculation = true
    const circulo  = new Circulo( 'Circulo', this.radioValue )
    this.perimetro = parseFloat(circulo.calcularPerimetro().toFixed(2))
  }
}

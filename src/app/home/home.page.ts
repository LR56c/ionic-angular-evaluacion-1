import {
  CommonModule,
} from '@angular/common'
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone'
import { CircleComponent } from 'src/app/components/circle/circle.component'
import { TriangleComponent } from 'src/app/components/triangle/triangle.component'

const figures = ['triangulo', 'circulo', 'none'] as const
type FigureType = typeof figures[number]

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonSelect,
    IonSelectOption, CommonModule, CircleComponent, TriangleComponent,     FormsModule ]
})
export class HomePage {

  selectedType: FigureType = 'none'
  selectChange(event: CustomEvent) {
    this.selectedType = figures.includes(event.detail.value) ? event.detail.value : 'none'
  }
  constructor() {}


}

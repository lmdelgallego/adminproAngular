import { Component, OnInit } from '@angular/core';
import {Label} from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  labelsGrafic1: Label[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  labelsGrafic2: Label[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  values1 = [
    [350, 450, 100],
  ];
  values2 = [
    [150, 350, 200],
  ];
}

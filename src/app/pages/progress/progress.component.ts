import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['progress.component.css']
})
export class ProgressComponent {
  progress1: number = 15;
  progress2: number = 25;

  get getProgress1(): string {
    return `${this.progress1}%`;
  }
  get getProgress2(): string {
    return `${this.progress2}%`;
  }

  changeValue(valor: number) {
    console.log('Hey ', valor);
  }
}

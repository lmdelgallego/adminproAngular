import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input('value') progress: number = 50; // para renombrar un avariable.
  @Input('btn-class') btnClass: string = 'btn-primary';
  @Output('value') changeValue: EventEmitter<number> =
    new EventEmitter<number>();

  ngOnInit(): void {}

  get getProgress(): string {
    return `${this.progress}%`;
  }

  changeProgress(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.changeValue.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && value < 0) {
      this.changeValue.emit(0);
      return (this.progress = 0);
    }
    this.progress += value;
    this.changeValue.emit(this.progress);
    return this.progress;
  }

  onChange(value: number): void {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.changeValue.emit(this.progress);
  }
}

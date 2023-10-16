import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter {{ counter }}</h3>

    <button (click)="increaseBy(2)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter = this.counter + value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }
}

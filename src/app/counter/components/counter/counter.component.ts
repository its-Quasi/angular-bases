import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter : {{counter}}</h3>
    <button (click)="increaseBy(-1)">Decrease</button>
    <button (click)="increaseBy(+1)">Increase</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent{
  public counter : number = 0

  public increaseBy(delta : number) : void {
    this.counter += delta
  }
  public reset() : void {
    this.counter = 0
  }
}

import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'counter-tut',
  styles: [`
    .app {
        display: block;
        text-align: center;
        padding: 25px;
        background: #f5f5f5;
      }
    `],
  template: `<div>
    COUNT
    <counter [init]="hp1" (change)="myValueChange($event)"></counter>
    <counter [init]="hp2" (change)="myValueChange($event)"></counter>
    <div><h4>New HP: {{updated}}</h4></div>
    </div>
  `,
  directives: [
    CounterComponent
  ]
})

export class AppComponent {
  title = 'Angular2 Tutorial';
  public myValue:number = 2;
  public hp1:number = this.myValue;
  public hp2:number = this.myValue+10;
  public updated:number;
  myValueChange(event) {
    this.updated = event.value;
  }
}

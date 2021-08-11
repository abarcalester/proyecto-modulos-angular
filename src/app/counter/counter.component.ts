import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    styleUrls: ['../app.component.css'],
    template: `
    
    <h1>{{ title }}</h1>

    <h3>The base number is <strong>{{base}}</strong></h3>

    <button (click)="accumulate(-base)">- {{base}}</button>
    <span>{{ number }}  </span>
    <button (click)="accumulate(base)">+ {{base}}</button>
    
    `
})

export class CounterComponent {
    title: string = 'Web Developer';
    number: number = 10
    base: number = 10
  
    accumulate(values: number) {
      this.number += values
    }
}
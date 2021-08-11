import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Web Developer';
  number: number = 10
  base: number = 10

  accumulate(values: number) {
    this.number += values
  }
}

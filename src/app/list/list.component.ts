import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html', 
  styleUrls: ['../app.component.css']
})
export class ListComponent {

  heroes: string[] = ['Hulk', 'Thor', 'Ironman', 'Antman', 'Superman']
  deletedHero:string = ''

  deleteHero() {
    const deletedHero = this.heroes.pop() || ''
    this.deletedHero = deletedHero
  }

  
}

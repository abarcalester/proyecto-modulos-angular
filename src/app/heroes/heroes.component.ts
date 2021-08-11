import { Component } from "@angular/core";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['../app.component.css']
})

export class HeroesComponent {
   name:string = 'Ironman'
   years:number = 35 
   
   // No utiliza () porque es un "get"
   get capitalizeName():string {
       return this.name.toUpperCase()
    }
    
   getName(): string {
       return `${this.name} tiene ${this.years} años.`
   }
   
   changeName():void {
       this.name = 'Spiderman'
    }

   changeYears():void {
        this.years = 95
   }
}
import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];  //es la matriz de objetos de mock-heroes
  
 

  constructor(private heroService:HeroService,private messageService:MessageService) { } //enlaza con el servicio hero.service

  ngOnInit(): void {
    this.getHeroes();  //justo al cargar la página se cargará el servicio
  }



    /*    sin recibir observable (sin .subscribe)
    getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
    }
    */


    // funcion del Servicio "hero.service"
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }  


}


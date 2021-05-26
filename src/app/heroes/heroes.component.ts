import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../services/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];  //es la matriz de objetos de mock-heroes
  selectedHero?: Hero;    // por defecto no esta seleccionado el heroe
 

  constructor(private heroService:HeroService) { } //enlaza con el servicio hero.service

  ngOnInit(): void {
    this.getHeroes();  //justo al cargar la página se cargará el servicio
  }

    // cuando se selecciona un heroe

    onSelect(hero: Hero): void { 
      this.selectedHero = hero; // cuando clicas se actualiza la información automaticamente
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


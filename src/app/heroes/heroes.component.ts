import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;  //es la matriz de objetos de mock-heroes
  selectedHero?: Hero;    // por defecto no esta seleccionado el heroe


  

  constructor() { }

  ngOnInit(): void {
  }

    // cuando se selecciona un heroe

    onSelect(hero: Hero): void { 
      this.selectedHero = hero; // cuando clicas se actualiza la información automaticamente
    }
  


}


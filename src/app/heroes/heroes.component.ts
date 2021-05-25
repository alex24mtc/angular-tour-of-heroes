import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'

  };

  selectedHero?: Hero;    // por defecto no esta seleccionado
  onSelect(hero: Hero): void { 
    this.selectedHero = hero; // cuando clicas se 
  }


  heroes = HEROES;  //es la matriz de objetos de mock-heroes



  constructor() { }

  ngOnInit(): void {
  }




}


import { Injectable } from '@angular/core';
import { HEROES } from '../../mock-heroes';
import { Hero } from '../interfaces/hero';
import { Observable, of } from 'rxjs'; 
//quien recibe el observable o es subscriptor (.subscribe) es en heroes.component


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /*    sin observable
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  // con observable

  getHeroes(): Observable<Hero[]> {   //getHeroes devuelve tipo observable de la <interfaz Hero>
    const heroes = of(HEROES); // el of devuelve la matriz HEROES de mock-heroes 
    return heroes;
  }


  
}






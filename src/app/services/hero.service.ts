import { Injectable } from '@angular/core';
import { HEROES } from '../../mock-heroes';
import { Hero } from '../interfaces/hero';
import { Observable, of } from 'rxjs'; 
import { MessageService } from './message.service';

//quien recibe el observable o es subscriptor (.subscribe) es en heroes.component


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { } //MessageService se injecta en el HeroService, y éste se inyecta en el HeroesComponent

  /*    sin observable
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  // con observable

  getHeroes(): Observable<Hero[]> {   //getHeroes devuelve tipo observable de la <interfaz Hero>
    const heroes = of(HEROES); // el of devuelve la matriz HEROES de mock-heroes 
    this.messageService.add('HeroService: fetched heroes'); //se aplica el servicio message.service (despues de realizarse el hero.service)
    return heroes;
  }


  
}






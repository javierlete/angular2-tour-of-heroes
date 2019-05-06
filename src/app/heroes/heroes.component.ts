import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  
  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(
      //this.recibirHeroes
      
      //function(heroes: Hero[]) : void {
      //  this.heroes = heroes;
      //}

      heroes => this.heroes = heroes
    );
  }

  //recibirHeroes(heroes: Hero[]) : void {
  //  this.heroes = heroes;
  //}
}


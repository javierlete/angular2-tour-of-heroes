import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private heroService: HeroService) { }

  search(term: string): void {
    console.log('Evento tecla');
    this.searchTerms.next(term);
  }
  
  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
  
      // ignore new term if same as previous term
      distinctUntilChanged(),
  
      // switch to new search observable each time the term changes,
      tap( (term: string) => console.log(term)),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}

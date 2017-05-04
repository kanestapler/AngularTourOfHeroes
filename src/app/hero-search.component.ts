import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HeroSearchService } from './hero-search.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    private searchTerms = new Subject<string>();
    heroes: Observable<Hero[]>;

    constructor(private heroSearchService: HeroSearchService, private router: Router) { }

    ngOnInit(): void {
        this.heroes = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
        .catch(error => {
            console.log(error);
            return Observable.of<Hero[]>([]);
        });
    }


    search(input: string): void {
        this.searchTerms.next(input);
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(['detail', hero.id]);
    };
}
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    constructor(private heroSerice: HeroService, private router: Router) {}
    ngOnInit(): void {
        this.getHeroes();
    } 
    title = 'Tour Of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    };
    getHeroes(): void {
        this.heroSerice.getHeroes().then(heroes => this.heroes = heroes);
    };
    gotoDetail(): void {
        this.router.navigate(['detail', this.selectedHero.id]);
    }
    save(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        } else {
            this.heroSerice.addHero(name).then(hero => {this.heroes.push(hero); this.selectedHero = null});
        }
    }
}

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService){}
    heroes: Hero[] = [];
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    };
}
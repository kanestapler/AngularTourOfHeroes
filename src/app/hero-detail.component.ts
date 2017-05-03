import { HeroService } from './hero.service';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private location: Location,
        private activatedRoute: ActivatedRoute
    ){}

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero).then(() => this.goBack);
    }

    @Input() hero: Hero;

    ngOnInit(): void {
        this.activatedRoute.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
}
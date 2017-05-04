import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesURL: string = "api/heroes";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesURL).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero>{
        const url = `${this.heroesURL}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), this.headers).toPromise().then(() => hero).catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.log("An Error occured");
        return Promise.reject(error.message || error);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesURL}/${id}`;
        return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
    }

    addHero(heroName: string): Promise<Hero> {

        return this.http.post(this.heroesURL, JSON.stringify({name: heroName}), this.headers)
        .toPromise()
        .then(result => result.json().data as Hero)
        .catch(this.handleError);

    }

    removeHero(id: number): Promise<void> {
        const url = `${this.heroesURL}/${id}`;
        return this.http.delete(url, this.headers).toPromise().then(() => null).catch(this.handleError);
    }
}

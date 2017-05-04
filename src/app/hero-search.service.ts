import { Hero } from './hero';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) {}

    search(searchTerm: string): Observable<Hero[]> {
        const url = `app/heroes/?name=${searchTerm}`
        return this.http.get(url).map(response => response.json().data as Hero[]);
    }
}
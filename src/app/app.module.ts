import { HeroSearchComponent } from './hero-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [HeroService]
})
export class AppModule { }

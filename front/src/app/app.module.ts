import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe' 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { NavComponent } from './themparts/nav/nav.component';
import { FooterComponent } from './themparts/footer/footer.component';
import { PlanetNavComponent } from './themparts/planet-nav/planet-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetInfoComponent,
    NavComponent,
    FooterComponent,
    FilterPipe,
    PlanetNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

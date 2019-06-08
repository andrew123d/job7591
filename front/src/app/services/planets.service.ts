import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(
    private http: HttpClient
  ) { }

  getPlanets (index) {
    const headers = new HttpHeaders(); 
    headers.set('Content-Type', 'application/json');
    return this.http.get('https://swapi.co/api/planets/?page='+index, {headers: headers})
  }

  getPlanetInfo (index) {
    const headers = new HttpHeaders(); 
    headers.set('Content-Type', 'application/json');
    return this.http.get('https://swapi.co/api/planets/'+index, {headers: headers})
  } 
}

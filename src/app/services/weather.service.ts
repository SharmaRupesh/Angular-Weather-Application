import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY = 'fd84aea5b3e67c49b2a1162e663a805d';
  API_URL = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {
   }



  getWeatherData(city: string): Observable<WeatherData>
  {
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=fd84aea5b3e67c49b2a1162e663a805d&units=metric';
    // let baseUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<WeatherData>(baseUrl);
  }


}

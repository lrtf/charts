import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  dailyForecast(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos?_limit=6");
  }
}

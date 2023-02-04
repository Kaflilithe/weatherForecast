import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherDto } from './weather.dto';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private appid = '98fb0a364313948eb451c06701b7a5ac';

  constructor(
    private http: HttpClient
  ) {
  }

  getWeather(geo: string) {
    return this.http.get<WeatherDto>(`${this.url}?q=${geo}&units=metric&appid=${this.appid}`);
  }
}

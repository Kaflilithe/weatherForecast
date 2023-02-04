import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface WeatherDto {
  'coord':
    { 'lon': number, 'lat': number },
  'weather':
    [
      {
        'id': number,
        'main': string,
        'description': string,
        'icon': string
      }
    ],
  'base': string,
  'main':
    {
      'temp': number,
      'feels_like': number,
      'temp_min': number,
      'temp_max': number,
      'pressure': number,
      'humidity': number
    },
  'visibility': number,
  'wind': {
    'speed': number,
    'deg': number
  },
  'clouds': {
    'all': number
  },
  'dt': number,
  'sys': {
    'type': number,
    'id': number,
    'country': string,
    'sunrise': number,
    'sunset': number
  },
  'timezone': number,
  'id': number,
  'name': string,
  'cod': number
}
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

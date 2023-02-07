import { Component } from '@angular/core';
import { Cities } from './core/mock-geo';
import { WeatherService } from './core/weather.service';
import { WeatherDto } from './core/weather.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  geos = Cities;
  weather?: WeatherDto;
  selectedGeo: any
  constructor(
    private weatherService: WeatherService
  ) {
  }

  selectGeo(geo: string) {
    this.selectedGeo = geo
    this.weatherService.getWeather(geo)

      .subscribe((weather) => {
        this.weather = weather;
      });
  }

}

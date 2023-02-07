import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { WeatherService } from '../../core/weather.service';
import { WeatherDto } from '../../core/weather.dto';


@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    WeatherCardComponent,
    CitiesListComponent
  ]
})
export class WeatherPageComponent {
  weather?: WeatherDto;
  selectedCity?: string;

  constructor(
    private weatherService: WeatherService
  ) {
  }

  selectGeo(geo: string): void {
    if (geo === this.selectedCity) {
      return;
    }

    this.selectedCity = geo;
    this.weatherService.getWeather(geo)
      .subscribe((weather) => {
        this.weather = weather;
      });
  }
}

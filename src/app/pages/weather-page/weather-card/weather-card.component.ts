import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherDto } from '../../../core/weather.dto';
import { TranslateCityModule } from '../../../common/pipes/translate-city/translate-city.module';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, TranslateCityModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weather?: WeatherDto;
}

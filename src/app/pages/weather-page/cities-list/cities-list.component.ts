import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cities } from '../../../core/mock-geo';

@Component({
  selector: 'app-cities-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
  @Input() selectedCity?: string
  @Output() select = new EventEmitter();
  geos = Cities;

  constructor() {
  }
}

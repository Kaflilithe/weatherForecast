import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateCityPipe } from './translate-city.pipe';

@NgModule({
  declarations: [
    TranslateCityPipe
  ],
  exports: [
    TranslateCityPipe
  ],
  imports: [
    CommonModule
  ]
})
export class TranslateCityModule {
}

import { Pipe, PipeTransform } from '@angular/core';
import { Cities } from '../../core/mock-geo';

@Pipe({
  name: 'translateCity'
})
export class TranslateCityPipe implements PipeTransform {
  transform(value: string): string {
    if (Cities[value]) {
      return Cities[value];
    }
    return value;
  }
}

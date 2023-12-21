import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'modifier',
})
export class ModifierPipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value === 'number') {
      if (value >= 0) {
        return `+${value}`;
      }

      return `${value}`;
    }

    return value;
  }
}

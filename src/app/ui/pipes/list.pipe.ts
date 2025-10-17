import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'list',
})
export class ListPipe implements PipeTransform {
  transform<T>(value?: Array<T>, delimiter?: string): string {
    if (value && value.length > 1 && delimiter) {
      if (value.length === 2) {
        return value[0] + delimiter + value[1];
      } else {
        const copy = Array.from(value);
        const last = copy.pop();
        return copy.join(', ') + delimiter + last;
      }
    } else {
      return value?.join(', ') || '';
    }
  }
}

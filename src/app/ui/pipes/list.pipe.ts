import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'list',
})
export class ListPipe implements PipeTransform {
  transform<T>(value: Array<T>): string {
    return value.join(', ');
  }
}

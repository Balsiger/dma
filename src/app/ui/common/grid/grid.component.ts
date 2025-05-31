import { Component, computed, input } from '@angular/core';

@Component({
    selector: 'grid',
    imports: [],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss'
})
export class GridComponent {
  width = input.required<number>();
  height = input.required<number>();
  distance = input.required<number>();
  color = input('black');

  horizontalLines = computed(() => this.computeLines(this.height(), this.distance()));
  verticalLines = computed(() => this.computeLines(this.width(), this.distance()));

  private computeLines(length: number, distance: number): number[] {
    const count = Math.floor(length / distance) + 1;
    return Array.from(Array(count).keys()).map((l) => l * distance);
  }
}

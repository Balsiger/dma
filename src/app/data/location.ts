import { FilterData } from "./FilterData";
import { Miniature } from "./miniature";

export class Location {
  style = '';

  constructor(readonly name: string, color: number, readonly filters: FilterData[]) {
    this.style = this.convertColor(color);
  }

  matches(miniature: Miniature): boolean {
    for (const filter of this.filters) {
      if (miniature.matches(filter, this.name === 'G-27')) {
        return true;
      }
    }

    return false;
  }

  private convertColor(color: number): string {
    switch (color) {
      case -48060: return 'red'; 
      case -12277180: return 'green'; 
      case -11390719: return 'brown'; 
      case -12303105: return 'blue'; 
      case -5317: return 'yellow'; 
      case -6543440: return 'violet'; 
      case -26624: return 'orange'; 
      case -9047757: return 'light-green';
      case -16777216: return 'black'; 
      case -16728876: return 'light-blue';
      case -5592406: return 'green'; 

      default: return 'white';
    }
  }
}

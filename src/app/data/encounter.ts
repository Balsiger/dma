import { Adventure } from "./adventure";

export interface Data {
  id: string;
}

export class Encounter {
  constructor(public readonly adventure: Adventure, readonly name: string, readonly id: string) { }

  static fromData(adventure: Adventure, name: string, data: Data): Encounter {
    return new Encounter(adventure, name, data.id)
  }
}

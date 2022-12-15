export interface Data {
  image: string,
  levels: string[],
}

export class Character {
  constructor(readonly name: string, readonly image: string, readonly levels: string[]) {
  }

  static fromData(name: string, data: Data): Character {
    return new Character(name, data.image, data.levels);
  }

  toData(): Data {
    return {
      image: this.image,
      levels: this.levels,
    };
  }
}

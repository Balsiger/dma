
export interface Data {
  image: string;
  levels: string;
}

export class Adventure {

  constructor(readonly name: string, readonly image: string, readonly levels: string) {
  }

  static fromData(name: string, data: Data): Adventure {
    return new Adventure(name, data.image, data.levels);
  }

  toData(): Data {
    return {
      levels: this.levels,
      image: this.image,
    }
  }
}

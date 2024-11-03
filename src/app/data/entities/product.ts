import { ProductProto } from '../../proto/generated/template_pb';
import { PriceProto } from '../../proto/generated/value_pb';
import { Entity } from './entity';
import { Common } from './values/common';
import { Audience } from './values/enums/audience';
import { GameStyle } from './values/enums/game-style';
import { GameType } from './values/enums/game-type';
import { GameSystem } from './values/enums/game_system';
import { Layout } from './values/enums/layout';
import { Part } from './values/enums/part';
import { EMPTY as REFERENCES_EMPTY } from './values/reference';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Dezember',
];

export class Person {
  readonly formatted: String;

  constructor(
    readonly name: string,
    readonly job: string,
  ) {
    const parts = name.split(/\s*,\s*/);
    if (parts.length != 2) {
      this.formatted = name;
    } else {
      this.formatted = `${parts[1]} ${parts[0]}`;
    }
  }

  toString(): string {
    if (this.job) {
      return `${this.name} (${this.job})`;
    }

    return this.name;
  }

  static fromProto(proto: ProductProto.Person): Person {
    return new Person(proto.getName(), proto.getJob());
  }
}

export class ISBN {
  constructor(
    readonly group: string,
    readonly publisher: string,
    readonly title: string,
    readonly check: number,
    readonly formatted: string = `${group}-${publisher}-${title}-${check}`,
  ) {
    this.formatted = `${group}-${publisher}-${title}-${check}`;
  }

  static fromProto(proto?: ProductProto.ISBN): ISBN {
    if (!proto) {
      return ISBN_EMPTY;
    }

    return new ISBN(proto.getGroup(), proto.getPublisher(), proto.getTitle(), proto.getCheck());
  }
}

export class ISBN13 extends ISBN {
  constructor(
    readonly group13: string,
    group: string,
    publisher: string,
    title: string,
    check: number,
  ) {
    super(group, publisher, title, check, `${group13}-${group}-${publisher}-${title}-${check}`);
  }

  static override fromProto(proto?: ProductProto.ISBN13): ISBN13 {
    if (!proto) {
      return ISBN13_EMPTY;
    }

    return new ISBN13(proto.getGroup13(), proto.getGroup(), proto.getPublisher(), proto.getTitle(), proto.getCheck());
  }
}

export class Price {
  formatted: string;

  constructor(
    readonly currency: string,
    readonly number: number,
    readonly precision: number,
  ) {
    this.formatted = `${currency}${number / precision}`;
  }

  static fromProto(proto?: PriceProto): Price {
    if (!proto) {
      return PRICE_EMPTY;
    }

    return new Price(proto.getCurrency(), proto.getNumber(), proto.getPrecision());
  }
}

export class Content {
  constructor(
    readonly part: Part,
    readonly description: string,
    readonly number: number,
  ) {}

  static fromProto(proto?: ProductProto.Content): Content {
    if (!proto) {
      return CONTENT_EMPTY;
    }

    return new Content(Part.fromProto(proto.getPart()), proto.getDescription(), proto.getNumber());
  }
}

export class Product extends Entity<Product> {
  readonly formattedTitle: string;
  readonly month: string;

  constructor(
    common: Common,
    readonly title: string,
    readonly leader: string,
    readonly subtitle: string,
    readonly notes: string,
    readonly authors: Person[],
    readonly editors: Person[],
    readonly cover: Person[],
    readonly cartographers: Person[],
    readonly illustrators: Person[],
    readonly typographers: Person[],
    readonly managers: Person[],
    readonly year: number,
    readonly monthNumber: number,
    readonly isbn: ISBN,
    readonly isbn13: ISBN13,
    readonly pages: number,
    readonly system: GameSystem,
    readonly audience: Audience,
    readonly type: GameType,
    readonly style: GameStyle,
    readonly producer: string,
    readonly volume: string,
    readonly series: string[],
    readonly price: Price,
    readonly contents: Content[],
    readonly requiredRequirements: string[],
    readonly optionalRequirements: string[],
    readonly layout: Layout,
  ) {
    super(common);

    this.month = MONTHS[monthNumber - 1];
    if (leader) {
      this.formattedTitle = `${leader} ${title}`;
    } else {
      this.formattedTitle = title;
    }
  }

  resolve(bases: Product[], values: Map<string, string>): Product {
    return this;
  }

  override matches(selections: Map<string, any>): boolean {
    for (const [label, value] of selections.entries()) {
      if (label === 'Name' && typeof value === 'string') {
        if (!this.formattedTitle.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
          return false;
        }
      }

      if (label === 'ID' && typeof value === 'string') {
        if (!this.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
          return false;
        }
      }

      if (label === 'Person' && typeof value === 'string') {
        if (
          !Product.containsName(this.authors, value) &&
          !Product.containsName(this.editors, value) &&
          !Product.containsName(this.cover, value) &&
          !Product.containsName(this.cartographers, value) &&
          !Product.containsName(this.illustrators, value) &&
          !Product.containsName(this.typographers, value) &&
          !Product.containsName(this.managers, value)
        ) {
          return false;
        }
      }

      if (label === 'System' && !Entity.includes(this.system, value)) {
        return false;
      }
    }

    return true;
  }

  static containsName(persons: Person[], name: string): boolean {
    for (const person of persons) {
      if (person.formatted.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        return true;
      }
    }

    return false;
  }

  static fromProto(proto: ProductProto, productName: string, productId: string): Product {
    proto.getCommon()?.addImages(proto.getCommon()?.getName().toLocaleLowerCase() + '.webp');

    return new Product(
      Common.fromProto(proto.getCommon(), productName, productId),
      proto.getTitle(),
      proto.getLeader(),
      proto.getSubtitle(),
      proto.getNotes(),
      proto.getAuthorList().map((a) => Person.fromProto(a)),
      proto.getEditorList().map((a) => Person.fromProto(a)),
      proto.getCoverList().map((a) => Person.fromProto(a)),
      proto.getCartographerList().map((a) => Person.fromProto(a)),
      proto.getIllustratorList().map((a) => Person.fromProto(a)),
      proto.getTypographerList().map((a) => Person.fromProto(a)),
      proto.getManagerList().map((a) => Person.fromProto(a)),
      proto.getDate()?.getYear() || -1,
      proto.getDate()?.getMonth() || -1,
      ISBN.fromProto(proto.getIsbn()),
      ISBN13.fromProto(proto.getIsbn13()),
      proto.getPages(),
      GameSystem.fromProto(proto.getSystem()),
      Audience.fromProto(proto.getAudience()),
      GameType.fromProto(proto.getType()),
      GameStyle.fromProto(proto.getStyle()),
      proto.getProducer(),
      proto.getVolume(),
      proto.getSeriesList(),
      Price.fromProto(proto.getPrice()),
      proto.getContentList().map((c) => Content.fromProto(c)),
      proto.getRequiredRequirementsList(),
      proto.getOptionalRequirementsList(),
      Layout.fromProto(proto.getLayout()),
    );
  }

  static create(name: string, bases: string[] = []): Product {
    return new Product(
      new Common(name, name + 's', bases, [], '', '', [], REFERENCES_EMPTY, [], false),
      '(unknown)',
      '',
      '',
      '',
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      -1,
      -1,
      ISBN_EMPTY,
      ISBN13_EMPTY,
      -1,
      GameSystem.UNKNOWN,
      Audience.UNKNOWN,
      GameType.UNKNOWN,
      GameStyle.UNKNOWN,
      '',
      '',
      [],
      PRICE_EMPTY,
      [],
      [],
      [],
      Layout.UNKNOWN,
    );
  }
}

export const ISBN_EMPTY = new ISBN('', '', '', 0);
export const ISBN13_EMPTY = new ISBN13('', '', '', '', 0);
export const PRICE_EMPTY = new Price('', 0, 0);
export const CONTENT_EMPTY = new Content(Part.UNKNOWN, '', 0);

// package: dma
// file: value.proto

import * as jspb from "google-protobuf";

export class DiceProto extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  getDice(): number;
  setDice(value: number): void;

  getModifier(): number;
  setModifier(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiceProto.AsObject;
  static toObject(includeInstance: boolean, msg: DiceProto): DiceProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiceProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiceProto;
  static deserializeBinaryFromReader(message: DiceProto, reader: jspb.BinaryReader): DiceProto;
}

export namespace DiceProto {
  export type AsObject = {
    number: number,
    dice: number,
    modifier: number,
  }
}

export class RationalProto extends jspb.Message {
  getLeader(): number;
  setLeader(value: number): void;

  getNominator(): number;
  setNominator(value: number): void;

  getDenominator(): number;
  setDenominator(value: number): void;

  getNegative(): boolean;
  setNegative(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RationalProto.AsObject;
  static toObject(includeInstance: boolean, msg: RationalProto): RationalProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RationalProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RationalProto;
  static deserializeBinaryFromReader(message: RationalProto, reader: jspb.BinaryReader): RationalProto;
}

export namespace RationalProto {
  export type AsObject = {
    leader: number,
    nominator: number,
    denominator: number,
    negative: boolean,
  }
}

export class DistanceProto extends jspb.Message {
  hasMiles(): boolean;
  clearMiles(): void;
  getMiles(): RationalProto | undefined;
  setMiles(value?: RationalProto): void;

  hasFeet(): boolean;
  clearFeet(): void;
  getFeet(): RationalProto | undefined;
  setFeet(value?: RationalProto): void;

  hasInches(): boolean;
  clearInches(): void;
  getInches(): RationalProto | undefined;
  setInches(value?: RationalProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistanceProto.AsObject;
  static toObject(includeInstance: boolean, msg: DistanceProto): DistanceProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistanceProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistanceProto;
  static deserializeBinaryFromReader(message: DistanceProto, reader: jspb.BinaryReader): DistanceProto;
}

export namespace DistanceProto {
  export type AsObject = {
    miles?: RationalProto.AsObject,
    feet?: RationalProto.AsObject,
    inches?: RationalProto.AsObject,
  }
}

export class SpeedProto extends jspb.Message {
  getMode(): SpeedProto.ModeMap[keyof SpeedProto.ModeMap];
  setMode(value: SpeedProto.ModeMap[keyof SpeedProto.ModeMap]): void;

  getFeet(): number;
  setFeet(value: number): void;

  getHover(): boolean;
  setHover(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeedProto.AsObject;
  static toObject(includeInstance: boolean, msg: SpeedProto): SpeedProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeedProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeedProto;
  static deserializeBinaryFromReader(message: SpeedProto, reader: jspb.BinaryReader): SpeedProto;
}

export namespace SpeedProto {
  export type AsObject = {
    mode: SpeedProto.ModeMap[keyof SpeedProto.ModeMap],
    feet: number,
    hover: boolean,
  }

  export interface ModeMap {
    UNKNONW_MODE: 0;
    BURROW: 1;
    CLIMB: 2;
    FLY: 3;
    SWIM: 4;
    RUN: 5;
  }

  export const Mode: ModeMap;
}

export class ModifierProto extends jspb.Message {
  clearModifierList(): void;
  getModifierList(): Array<ModifierProto.Modifier>;
  setModifierList(value: Array<ModifierProto.Modifier>): void;
  addModifier(value?: ModifierProto.Modifier, index?: number): ModifierProto.Modifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifierProto.AsObject;
  static toObject(includeInstance: boolean, msg: ModifierProto): ModifierProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifierProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifierProto;
  static deserializeBinaryFromReader(message: ModifierProto, reader: jspb.BinaryReader): ModifierProto;
}

export namespace ModifierProto {
  export type AsObject = {
    modifierList: Array<ModifierProto.Modifier.AsObject>,
  }

  export class Modifier extends jspb.Message {
    getValue(): number;
    setValue(value: number): void;

    getType(): ModifierProto.TypeMap[keyof ModifierProto.TypeMap];
    setType(value: ModifierProto.TypeMap[keyof ModifierProto.TypeMap]): void;

    getCondition(): string;
    setCondition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Modifier.AsObject;
    static toObject(includeInstance: boolean, msg: Modifier): Modifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Modifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Modifier;
    static deserializeBinaryFromReader(message: Modifier, reader: jspb.BinaryReader): Modifier;
  }

  export namespace Modifier {
    export type AsObject = {
      value: number,
      type: ModifierProto.TypeMap[keyof ModifierProto.TypeMap],
      condition: string,
    }
  }

  export interface TypeMap {
    UNKNOWN: 0;
    DODGE: 1;
    ARMOR: 2;
    EQUIPMENT: 3;
    SHIELD: 4;
    GENERAL: 5;
    NATURAL_ARMOR: 6;
    ABILITY: 7;
    SIZE: 8;
    RACIAL: 9;
    CIRCUMSTANCE: 10;
    ENHANCEMENT: 11;
    DEFLECTION: 12;
    RAGE: 13;
    COMPETENCE: 14;
    SYNERGY: 15;
    SACRED: 16;
    LUCK: 17;
    RESISTANCE: 18;
  }

  export const Type: TypeMap;
}

export class NameAndModifierProto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasModifier(): boolean;
  clearModifier(): void;
  getModifier(): ModifierProto | undefined;
  setModifier(value?: ModifierProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameAndModifierProto.AsObject;
  static toObject(includeInstance: boolean, msg: NameAndModifierProto): NameAndModifierProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameAndModifierProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameAndModifierProto;
  static deserializeBinaryFromReader(message: NameAndModifierProto, reader: jspb.BinaryReader): NameAndModifierProto;
}

export namespace NameAndModifierProto {
  export type AsObject = {
    name: string,
    modifier?: ModifierProto.AsObject,
  }
}

export class DamageProto extends jspb.Message {
  hasDamage(): boolean;
  clearDamage(): void;
  getDamage(): DiceProto | undefined;
  setDamage(value?: DiceProto): void;

  getType(): DamageProto.DamageTypeMap[keyof DamageProto.DamageTypeMap];
  setType(value: DamageProto.DamageTypeMap[keyof DamageProto.DamageTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DamageProto.AsObject;
  static toObject(includeInstance: boolean, msg: DamageProto): DamageProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DamageProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DamageProto;
  static deserializeBinaryFromReader(message: DamageProto, reader: jspb.BinaryReader): DamageProto;
}

export namespace DamageProto {
  export type AsObject = {
    damage?: DiceProto.AsObject,
    type: DamageProto.DamageTypeMap[keyof DamageProto.DamageTypeMap],
  }

  export interface DamageTypeMap {
    UNKNOWN_DAMAGE_TYPE: 0;
    ACID: 1;
    BLUDGEONING: 2;
    COLD: 3;
    FIRE: 4;
    FORCE: 5;
    LIGHTNING: 6;
    NECROTIC: 7;
    PIERCING: 8;
    POISON: 9;
    PSYCHIC: 10;
    RADIANT: 11;
    SLASHING: 12;
    THUNDER: 13;
    BLUDGEONING_NON_MAGICAL: 14;
    PIERCING_NON_MAGICAL: 15;
    SLASHING_NON_MAGICAL: 16;
    BLUDGEONING_NON_MAGICAL_NON_SILVER: 17;
    PIERCING_NON_MAGICAL_NON_SILVER: 18;
    SLASHING_NON_MAGICAL_NON_SILVER: 19;
    BLUDGEONING_NON_MAGICAL_NON_ADAMANTINE: 20;
    PIERCING_NON_MAGICAL_NON_ADAMANTINE: 21;
    SLASHING_NON_MAGICAL_NON_ADAMANTINE: 22;
    DAMAGE_FROM_SPELLS: 23;
  }

  export const DamageType: DamageTypeMap;
}

export class ConditionalProto extends jspb.Message {
  getGeneric(): string;
  setGeneric(value: string): void;

  getWeaponStyle(): WeaponStyleMap[keyof WeaponStyleMap];
  setWeaponStyle(value: WeaponStyleMap[keyof WeaponStyleMap]): void;

  getAbility(): AbilityMap[keyof AbilityMap];
  setAbility(value: AbilityMap[keyof AbilityMap]): void;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): ConditionalProto.Limit | undefined;
  setLimit(value?: ConditionalProto.Limit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalProto.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalProto): ConditionalProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalProto;
  static deserializeBinaryFromReader(message: ConditionalProto, reader: jspb.BinaryReader): ConditionalProto;
}

export namespace ConditionalProto {
  export type AsObject = {
    generic: string,
    weaponStyle: WeaponStyleMap[keyof WeaponStyleMap],
    ability: AbilityMap[keyof AbilityMap],
    limit?: ConditionalProto.Limit.AsObject,
  }

  export class Limit extends jspb.Message {
    getOperator(): ConditionalProto.Limit.OperatorMap[keyof ConditionalProto.Limit.OperatorMap];
    setOperator(value: ConditionalProto.Limit.OperatorMap[keyof ConditionalProto.Limit.OperatorMap]): void;

    getValue(): number;
    setValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Limit.AsObject;
    static toObject(includeInstance: boolean, msg: Limit): Limit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Limit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Limit;
    static deserializeBinaryFromReader(message: Limit, reader: jspb.BinaryReader): Limit;
  }

  export namespace Limit {
    export type AsObject = {
      operator: ConditionalProto.Limit.OperatorMap[keyof ConditionalProto.Limit.OperatorMap],
      value: number,
    }

    export interface OperatorMap {
      ABOVE: 0;
      ABOVE_OR_EQUAL: 1;
      EQUAL: 2;
      BELOW_OR_EQUAL: 3;
      BELOW: 4;
    }

    export const Operator: OperatorMap;
  }
}

export class ParametersProto extends jspb.Message {
  clearDistanceList(): void;
  getDistanceList(): Array<ParametersProto.Distance>;
  setDistanceList(value: Array<ParametersProto.Distance>): void;
  addDistance(value?: ParametersProto.Distance, index?: number): ParametersProto.Distance;

  clearTextList(): void;
  getTextList(): Array<ParametersProto.Text>;
  setTextList(value: Array<ParametersProto.Text>): void;
  addText(value?: ParametersProto.Text, index?: number): ParametersProto.Text;

  clearNumberList(): void;
  getNumberList(): Array<ParametersProto.Number>;
  setNumberList(value: Array<ParametersProto.Number>): void;
  addNumber(value?: ParametersProto.Number, index?: number): ParametersProto.Number;

  clearModifierList(): void;
  getModifierList(): Array<ParametersProto.Modifier>;
  setModifierList(value: Array<ParametersProto.Modifier>): void;
  addModifier(value?: ParametersProto.Modifier, index?: number): ParametersProto.Modifier;

  clearDamageList(): void;
  getDamageList(): Array<ParametersProto.Damage>;
  setDamageList(value: Array<ParametersProto.Damage>): void;
  addDamage(value?: ParametersProto.Damage, index?: number): ParametersProto.Damage;

  clearSpellClassList(): void;
  getSpellClassList(): Array<ParametersProto.SpellClassParam>;
  setSpellClassList(value: Array<ParametersProto.SpellClassParam>): void;
  addSpellClass(value?: ParametersProto.SpellClassParam, index?: number): ParametersProto.SpellClassParam;

  clearSkillSubtypeList(): void;
  getSkillSubtypeList(): Array<ParametersProto.SkillSubtypeParam>;
  setSkillSubtypeList(value: Array<ParametersProto.SkillSubtypeParam>): void;
  addSkillSubtype(value?: ParametersProto.SkillSubtypeParam, index?: number): ParametersProto.SkillSubtypeParam;

  clearFeatTypeList(): void;
  getFeatTypeList(): Array<FeatTypeMap[keyof FeatTypeMap]>;
  setFeatTypeList(value: Array<FeatTypeMap[keyof FeatTypeMap]>): void;
  addFeatType(value: FeatTypeMap[keyof FeatTypeMap], index?: number): FeatTypeMap[keyof FeatTypeMap];

  clearFeatNameList(): void;
  getFeatNameList(): Array<string>;
  setFeatNameList(value: Array<string>): void;
  addFeatName(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParametersProto.AsObject;
  static toObject(includeInstance: boolean, msg: ParametersProto): ParametersProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParametersProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParametersProto;
  static deserializeBinaryFromReader(message: ParametersProto, reader: jspb.BinaryReader): ParametersProto;
}

export namespace ParametersProto {
  export type AsObject = {
    distanceList: Array<ParametersProto.Distance.AsObject>,
    textList: Array<ParametersProto.Text.AsObject>,
    numberList: Array<ParametersProto.Number.AsObject>,
    modifierList: Array<ParametersProto.Modifier.AsObject>,
    damageList: Array<ParametersProto.Damage.AsObject>,
    spellClassList: Array<ParametersProto.SpellClassParam.AsObject>,
    skillSubtypeList: Array<ParametersProto.SkillSubtypeParam.AsObject>,
    featTypeList: Array<FeatTypeMap[keyof FeatTypeMap]>,
    featNameList: Array<string>,
  }

  export class Distance extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): DistanceProto | undefined;
    setDistance(value?: DistanceProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Distance.AsObject;
    static toObject(includeInstance: boolean, msg: Distance): Distance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Distance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Distance;
    static deserializeBinaryFromReader(message: Distance, reader: jspb.BinaryReader): Distance;
  }

  export namespace Distance {
    export type AsObject = {
      name: string,
      distance?: DistanceProto.AsObject,
    }
  }

  export class Text extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getText(): string;
    setText(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Text.AsObject;
    static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Text;
    static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
  }

  export namespace Text {
    export type AsObject = {
      name: string,
      text: string,
    }
  }

  export class Number extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getNumber(): number;
    setNumber(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Number.AsObject;
    static toObject(includeInstance: boolean, msg: Number): Number.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Number, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Number;
    static deserializeBinaryFromReader(message: Number, reader: jspb.BinaryReader): Number;
  }

  export namespace Number {
    export type AsObject = {
      name: string,
      number: number,
    }
  }

  export class Modifier extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasModifier(): boolean;
    clearModifier(): void;
    getModifier(): ModifierProto | undefined;
    setModifier(value?: ModifierProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Modifier.AsObject;
    static toObject(includeInstance: boolean, msg: Modifier): Modifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Modifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Modifier;
    static deserializeBinaryFromReader(message: Modifier, reader: jspb.BinaryReader): Modifier;
  }

  export namespace Modifier {
    export type AsObject = {
      name: string,
      modifier?: ModifierProto.AsObject,
    }
  }

  export class Damage extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasDamage(): boolean;
    clearDamage(): void;
    getDamage(): DamageProto | undefined;
    setDamage(value?: DamageProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Damage.AsObject;
    static toObject(includeInstance: boolean, msg: Damage): Damage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Damage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Damage;
    static deserializeBinaryFromReader(message: Damage, reader: jspb.BinaryReader): Damage;
  }

  export namespace Damage {
    export type AsObject = {
      name: string,
      damage?: DamageProto.AsObject,
    }
  }

  export class SpellClassParam extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getSpellClass(): SpellClassMap[keyof SpellClassMap];
    setSpellClass(value: SpellClassMap[keyof SpellClassMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpellClassParam.AsObject;
    static toObject(includeInstance: boolean, msg: SpellClassParam): SpellClassParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpellClassParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpellClassParam;
    static deserializeBinaryFromReader(message: SpellClassParam, reader: jspb.BinaryReader): SpellClassParam;
  }

  export namespace SpellClassParam {
    export type AsObject = {
      name: string,
      spellClass: SpellClassMap[keyof SpellClassMap],
    }
  }

  export class SkillSubtypeParam extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getSkillSubtype(): SkillSubtypeMap[keyof SkillSubtypeMap];
    setSkillSubtype(value: SkillSubtypeMap[keyof SkillSubtypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SkillSubtypeParam.AsObject;
    static toObject(includeInstance: boolean, msg: SkillSubtypeParam): SkillSubtypeParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SkillSubtypeParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SkillSubtypeParam;
    static deserializeBinaryFromReader(message: SkillSubtypeParam, reader: jspb.BinaryReader): SkillSubtypeParam;
  }

  export namespace SkillSubtypeParam {
    export type AsObject = {
      name: string,
      skillSubtype: SkillSubtypeMap[keyof SkillSubtypeMap],
    }
  }
}

export class ReferenceProto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  clearPagesList(): void;
  getPagesList(): Array<RangeProto>;
  setPagesList(value: Array<RangeProto>): void;
  addPages(value?: RangeProto, index?: number): RangeProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceProto.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceProto): ReferenceProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceProto;
  static deserializeBinaryFromReader(message: ReferenceProto, reader: jspb.BinaryReader): ReferenceProto;
}

export namespace ReferenceProto {
  export type AsObject = {
    name: string,
    id: string,
    pagesList: Array<RangeProto.AsObject>,
  }
}

export class RangeProto extends jspb.Message {
  getLow(): number;
  setLow(value: number): void;

  getHigh(): number;
  setHigh(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeProto.AsObject;
  static toObject(includeInstance: boolean, msg: RangeProto): RangeProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeProto;
  static deserializeBinaryFromReader(message: RangeProto, reader: jspb.BinaryReader): RangeProto;
}

export namespace RangeProto {
  export type AsObject = {
    low: number,
    high: number,
  }
}

export class ExpressionProto extends jspb.Message {
  getOperator(): ExpressionProto.OperatorMap[keyof ExpressionProto.OperatorMap];
  setOperator(value: ExpressionProto.OperatorMap[keyof ExpressionProto.OperatorMap]): void;

  clearOperandList(): void;
  getOperandList(): Array<ExpressionProto>;
  setOperandList(value: Array<ExpressionProto>): void;
  addOperand(value?: ExpressionProto, index?: number): ExpressionProto;

  hasLiteral(): boolean;
  clearLiteral(): void;
  getLiteral(): ExpressionProto.Literal | undefined;
  setLiteral(value?: ExpressionProto.Literal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpressionProto.AsObject;
  static toObject(includeInstance: boolean, msg: ExpressionProto): ExpressionProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpressionProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpressionProto;
  static deserializeBinaryFromReader(message: ExpressionProto, reader: jspb.BinaryReader): ExpressionProto;
}

export namespace ExpressionProto {
  export type AsObject = {
    operator: ExpressionProto.OperatorMap[keyof ExpressionProto.OperatorMap],
    operandList: Array<ExpressionProto.AsObject>,
    literal?: ExpressionProto.Literal.AsObject,
  }

  export class Literal extends jspb.Message {
    getVariable(): string;
    setVariable(value: string): void;

    getInteger(): number;
    setInteger(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Literal.AsObject;
    static toObject(includeInstance: boolean, msg: Literal): Literal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Literal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Literal;
    static deserializeBinaryFromReader(message: Literal, reader: jspb.BinaryReader): Literal;
  }

  export namespace Literal {
    export type AsObject = {
      variable: string,
      integer: number,
    }
  }

  export interface OperatorMap {
    NONE: 0;
    ADD: 1;
    SUBTRACT: 2;
    MULTIPLY: 3;
    DIVIDE: 4;
    MODULO: 5;
    MIN: 6;
    MAX: 7;
  }

  export const Operator: OperatorMap;
}

export class CalendarProto extends jspb.Message {
  clearYearList(): void;
  getYearList(): Array<CalendarProto.Year>;
  setYearList(value: Array<CalendarProto.Year>): void;
  addYear(value?: CalendarProto.Year, index?: number): CalendarProto.Year;

  clearMonthList(): void;
  getMonthList(): Array<CalendarProto.Month>;
  setMonthList(value: Array<CalendarProto.Month>): void;
  addMonth(value?: CalendarProto.Month, index?: number): CalendarProto.Month;

  getDaysPerWeek(): number;
  setDaysPerWeek(value: number): void;

  getHoursPerDay(): number;
  setHoursPerDay(value: number): void;

  getMinutesPerHour(): number;
  setMinutesPerHour(value: number): void;

  getSecondsPerMinute(): number;
  setSecondsPerMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalendarProto.AsObject;
  static toObject(includeInstance: boolean, msg: CalendarProto): CalendarProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalendarProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalendarProto;
  static deserializeBinaryFromReader(message: CalendarProto, reader: jspb.BinaryReader): CalendarProto;
}

export namespace CalendarProto {
  export type AsObject = {
    yearList: Array<CalendarProto.Year.AsObject>,
    monthList: Array<CalendarProto.Month.AsObject>,
    daysPerWeek: number,
    hoursPerDay: number,
    minutesPerHour: number,
    secondsPerMinute: number,
  }

  export class Year extends jspb.Message {
    getStart(): number;
    setStart(value: number): void;

    getEnd(): number;
    setEnd(value: number): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Year.AsObject;
    static toObject(includeInstance: boolean, msg: Year): Year.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Year, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Year;
    static deserializeBinaryFromReader(message: Year, reader: jspb.BinaryReader): Year;
  }

  export namespace Year {
    export type AsObject = {
      start: number,
      end: number,
      name: string,
    }
  }

  export class Month extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDays(): number;
    setDays(value: number): void;

    getLeapYears(): number;
    setLeapYears(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Month.AsObject;
    static toObject(includeInstance: boolean, msg: Month): Month.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Month, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Month;
    static deserializeBinaryFromReader(message: Month, reader: jspb.BinaryReader): Month;
  }

  export namespace Month {
    export type AsObject = {
      name: string,
      days: number,
      leapYears: number,
    }
  }
}

export class DurationProto extends jspb.Message {
  getRounds(): number;
  setRounds(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getHours(): number;
  setHours(value: number): void;

  getDays(): number;
  setDays(value: number): void;

  getYears(): number;
  setYears(value: number): void;

  getStandardActions(): number;
  setStandardActions(value: number): void;

  getBonusActions(): number;
  setBonusActions(value: number): void;

  getReactions(): number;
  setReactions(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DurationProto.AsObject;
  static toObject(includeInstance: boolean, msg: DurationProto): DurationProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DurationProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DurationProto;
  static deserializeBinaryFromReader(message: DurationProto, reader: jspb.BinaryReader): DurationProto;
}

export namespace DurationProto {
  export type AsObject = {
    rounds: number,
    minutes: number,
    hours: number,
    days: number,
    years: number,
    standardActions: number,
    bonusActions: number,
    reactions: number,
  }
}

export class DateProto extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  getMonth(): number;
  setMonth(value: number): void;

  getDay(): number;
  setDay(value: number): void;

  getHour(): number;
  setHour(value: number): void;

  getMinute(): number;
  setMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateProto.AsObject;
  static toObject(includeInstance: boolean, msg: DateProto): DateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateProto;
  static deserializeBinaryFromReader(message: DateProto, reader: jspb.BinaryReader): DateProto;
}

export namespace DateProto {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
  }
}

export class ConditionValueProto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSummary(): string;
  setSummary(value: string): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): DurationProto | undefined;
  setDuration(value?: DurationProto): void;

  getEndsBeforeTurn(): boolean;
  setEndsBeforeTurn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionValueProto.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionValueProto): ConditionValueProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionValueProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionValueProto;
  static deserializeBinaryFromReader(message: ConditionValueProto, reader: jspb.BinaryReader): ConditionValueProto;
}

export namespace ConditionValueProto {
  export type AsObject = {
    name: string,
    description: string,
    summary: string,
    duration?: DurationProto.AsObject,
    endsBeforeTurn: boolean,
  }
}

export class TimedConditionProto extends jspb.Message {
  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): ConditionValueProto | undefined;
  setCondition(value?: ConditionValueProto): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getEndround(): number;
  setEndround(value: number): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): DateProto | undefined;
  setEndDate(value?: DateProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimedConditionProto.AsObject;
  static toObject(includeInstance: boolean, msg: TimedConditionProto): TimedConditionProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimedConditionProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimedConditionProto;
  static deserializeBinaryFromReader(message: TimedConditionProto, reader: jspb.BinaryReader): TimedConditionProto;
}

export namespace TimedConditionProto {
  export type AsObject = {
    condition?: ConditionValueProto.AsObject,
    sourceId: string,
    endround: number,
    endDate?: DateProto.AsObject,
  }
}

export class TargetedTimedConditionProto extends jspb.Message {
  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): TimedConditionProto | undefined;
  setCondition(value?: TimedConditionProto): void;

  clearTargetIdList(): void;
  getTargetIdList(): Array<string>;
  setTargetIdList(value: Array<string>): void;
  addTargetId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetedTimedConditionProto.AsObject;
  static toObject(includeInstance: boolean, msg: TargetedTimedConditionProto): TargetedTimedConditionProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetedTimedConditionProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetedTimedConditionProto;
  static deserializeBinaryFromReader(message: TargetedTimedConditionProto, reader: jspb.BinaryReader): TargetedTimedConditionProto;
}

export namespace TargetedTimedConditionProto {
  export type AsObject = {
    condition?: TimedConditionProto.AsObject,
    targetIdList: Array<string>,
  }
}

export class MoneyProto extends jspb.Message {
  getCopper(): number;
  setCopper(value: number): void;

  getSilver(): number;
  setSilver(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  getPlatinum(): number;
  setPlatinum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyProto.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyProto): MoneyProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoneyProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyProto;
  static deserializeBinaryFromReader(message: MoneyProto, reader: jspb.BinaryReader): MoneyProto;
}

export namespace MoneyProto {
  export type AsObject = {
    copper: number,
    silver: number,
    gold: number,
    platinum: number,
  }
}

export class WeightProto extends jspb.Message {
  hasPounds(): boolean;
  clearPounds(): void;
  getPounds(): RationalProto | undefined;
  setPounds(value?: RationalProto): void;

  hasOunces(): boolean;
  clearOunces(): void;
  getOunces(): RationalProto | undefined;
  setOunces(value?: RationalProto): void;

  hasCarats(): boolean;
  clearCarats(): void;
  getCarats(): RationalProto | undefined;
  setCarats(value?: RationalProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightProto.AsObject;
  static toObject(includeInstance: boolean, msg: WeightProto): WeightProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeightProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightProto;
  static deserializeBinaryFromReader(message: WeightProto, reader: jspb.BinaryReader): WeightProto;
}

export namespace WeightProto {
  export type AsObject = {
    pounds?: RationalProto.AsObject,
    ounces?: RationalProto.AsObject,
    carats?: RationalProto.AsObject,
  }
}

export class CriticalProto extends jspb.Message {
  hasThreat(): boolean;
  clearThreat(): void;
  getThreat(): RangeProto | undefined;
  setThreat(value?: RangeProto): void;

  getMultiplier(): number;
  setMultiplier(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriticalProto.AsObject;
  static toObject(includeInstance: boolean, msg: CriticalProto): CriticalProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CriticalProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriticalProto;
  static deserializeBinaryFromReader(message: CriticalProto, reader: jspb.BinaryReader): CriticalProto;
}

export namespace CriticalProto {
  export type AsObject = {
    threat?: RangeProto.AsObject,
    multiplier: number,
  }
}

export class RandomDurationProto extends jspb.Message {
  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): DurationProto | undefined;
  setDuration(value?: DurationProto): void;

  clearDiceList(): void;
  getDiceList(): Array<DiceProto>;
  setDiceList(value: Array<DiceProto>): void;
  addDice(value?: DiceProto, index?: number): DiceProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomDurationProto.AsObject;
  static toObject(includeInstance: boolean, msg: RandomDurationProto): RandomDurationProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RandomDurationProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RandomDurationProto;
  static deserializeBinaryFromReader(message: RandomDurationProto, reader: jspb.BinaryReader): RandomDurationProto;
}

export namespace RandomDurationProto {
  export type AsObject = {
    duration?: DurationProto.AsObject,
    diceList: Array<DiceProto.AsObject>,
  }
}

export class AreaProto extends jspb.Message {
  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): AreaProto.Metric | undefined;
  setMetric(value?: AreaProto.Metric): void;

  hasImperial(): boolean;
  clearImperial(): void;
  getImperial(): AreaProto.Imperial | undefined;
  setImperial(value?: AreaProto.Imperial): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AreaProto.AsObject;
  static toObject(includeInstance: boolean, msg: AreaProto): AreaProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AreaProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AreaProto;
  static deserializeBinaryFromReader(message: AreaProto, reader: jspb.BinaryReader): AreaProto;
}

export namespace AreaProto {
  export type AsObject = {
    metric?: AreaProto.Metric.AsObject,
    imperial?: AreaProto.Imperial.AsObject,
  }

  export class Metric extends jspb.Message {
    hasSquareMeters(): boolean;
    clearSquareMeters(): void;
    getSquareMeters(): RationalProto | undefined;
    setSquareMeters(value?: RationalProto): void;

    hasSquareDecimeters(): boolean;
    clearSquareDecimeters(): void;
    getSquareDecimeters(): RationalProto | undefined;
    setSquareDecimeters(value?: RationalProto): void;

    hasSquareCentimeters(): boolean;
    clearSquareCentimeters(): void;
    getSquareCentimeters(): RationalProto | undefined;
    setSquareCentimeters(value?: RationalProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metric.AsObject;
    static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metric;
    static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
  }

  export namespace Metric {
    export type AsObject = {
      squareMeters?: RationalProto.AsObject,
      squareDecimeters?: RationalProto.AsObject,
      squareCentimeters?: RationalProto.AsObject,
    }
  }

  export class Imperial extends jspb.Message {
    hasSquareYards(): boolean;
    clearSquareYards(): void;
    getSquareYards(): RationalProto | undefined;
    setSquareYards(value?: RationalProto): void;

    hasSquareFeet(): boolean;
    clearSquareFeet(): void;
    getSquareFeet(): RationalProto | undefined;
    setSquareFeet(value?: RationalProto): void;

    hasSquareInches(): boolean;
    clearSquareInches(): void;
    getSquareInches(): RationalProto | undefined;
    setSquareInches(value?: RationalProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Imperial.AsObject;
    static toObject(includeInstance: boolean, msg: Imperial): Imperial.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Imperial, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Imperial;
    static deserializeBinaryFromReader(message: Imperial, reader: jspb.BinaryReader): Imperial;
  }

  export namespace Imperial {
    export type AsObject = {
      squareYards?: RationalProto.AsObject,
      squareFeet?: RationalProto.AsObject,
      squareInches?: RationalProto.AsObject,
    }
  }
}

export class VolumeProto extends jspb.Message {
  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): VolumeProto.Metric | undefined;
  setMetric(value?: VolumeProto.Metric): void;

  hasImperial(): boolean;
  clearImperial(): void;
  getImperial(): VolumeProto.Imperial | undefined;
  setImperial(value?: VolumeProto.Imperial): void;

  hasGallons(): boolean;
  clearGallons(): void;
  getGallons(): VolumeProto.Gallons | undefined;
  setGallons(value?: VolumeProto.Gallons): void;

  hasLiters(): boolean;
  clearLiters(): void;
  getLiters(): VolumeProto.Liters | undefined;
  setLiters(value?: VolumeProto.Liters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeProto.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeProto): VolumeProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeProto;
  static deserializeBinaryFromReader(message: VolumeProto, reader: jspb.BinaryReader): VolumeProto;
}

export namespace VolumeProto {
  export type AsObject = {
    metric?: VolumeProto.Metric.AsObject,
    imperial?: VolumeProto.Imperial.AsObject,
    gallons?: VolumeProto.Gallons.AsObject,
    liters?: VolumeProto.Liters.AsObject,
  }

  export class Metric extends jspb.Message {
    hasCubicMeters(): boolean;
    clearCubicMeters(): void;
    getCubicMeters(): RationalProto | undefined;
    setCubicMeters(value?: RationalProto): void;

    hasCubicDecimeters(): boolean;
    clearCubicDecimeters(): void;
    getCubicDecimeters(): RationalProto | undefined;
    setCubicDecimeters(value?: RationalProto): void;

    hasCubicCentimeters(): boolean;
    clearCubicCentimeters(): void;
    getCubicCentimeters(): RationalProto | undefined;
    setCubicCentimeters(value?: RationalProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metric.AsObject;
    static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metric;
    static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
  }

  export namespace Metric {
    export type AsObject = {
      cubicMeters?: RationalProto.AsObject,
      cubicDecimeters?: RationalProto.AsObject,
      cubicCentimeters?: RationalProto.AsObject,
    }
  }

  export class Imperial extends jspb.Message {
    hasCubicFeet(): boolean;
    clearCubicFeet(): void;
    getCubicFeet(): RationalProto | undefined;
    setCubicFeet(value?: RationalProto): void;

    hasCubicInches(): boolean;
    clearCubicInches(): void;
    getCubicInches(): RationalProto | undefined;
    setCubicInches(value?: RationalProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Imperial.AsObject;
    static toObject(includeInstance: boolean, msg: Imperial): Imperial.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Imperial, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Imperial;
    static deserializeBinaryFromReader(message: Imperial, reader: jspb.BinaryReader): Imperial;
  }

  export namespace Imperial {
    export type AsObject = {
      cubicFeet?: RationalProto.AsObject,
      cubicInches?: RationalProto.AsObject,
    }
  }

  export class Gallons extends jspb.Message {
    hasGallons(): boolean;
    clearGallons(): void;
    getGallons(): RationalProto | undefined;
    setGallons(value?: RationalProto): void;

    hasQuarts(): boolean;
    clearQuarts(): void;
    getQuarts(): RationalProto | undefined;
    setQuarts(value?: RationalProto): void;

    hasPints(): boolean;
    clearPints(): void;
    getPints(): RationalProto | undefined;
    setPints(value?: RationalProto): void;

    hasCups(): boolean;
    clearCups(): void;
    getCups(): RationalProto | undefined;
    setCups(value?: RationalProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Gallons.AsObject;
    static toObject(includeInstance: boolean, msg: Gallons): Gallons.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Gallons, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Gallons;
    static deserializeBinaryFromReader(message: Gallons, reader: jspb.BinaryReader): Gallons;
  }

  export namespace Gallons {
    export type AsObject = {
      gallons?: RationalProto.AsObject,
      quarts?: RationalProto.AsObject,
      pints?: RationalProto.AsObject,
      cups?: RationalProto.AsObject,
    }
  }

  export class Liters extends jspb.Message {
    hasLiters(): boolean;
    clearLiters(): void;
    getLiters(): RationalProto | undefined;
    setLiters(value?: RationalProto): void;

    hasDeciliters(): boolean;
    clearDeciliters(): void;
    getDeciliters(): RationalProto | undefined;
    setDeciliters(value?: RationalProto): void;

    hasCentiliters(): boolean;
    clearCentiliters(): void;
    getCentiliters(): RationalProto | undefined;
    setCentiliters(value?: RationalProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Liters.AsObject;
    static toObject(includeInstance: boolean, msg: Liters): Liters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Liters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Liters;
    static deserializeBinaryFromReader(message: Liters, reader: jspb.BinaryReader): Liters;
  }

  export namespace Liters {
    export type AsObject = {
      liters?: RationalProto.AsObject,
      deciliters?: RationalProto.AsObject,
      centiliters?: RationalProto.AsObject,
    }
  }
}

export class RestrictionProto extends jspb.Message {
  getGeneric(): string;
  setGeneric(value: string): void;

  getWeaponStyle(): WeaponStyleMap[keyof WeaponStyleMap];
  setWeaponStyle(value: WeaponStyleMap[keyof WeaponStyleMap]): void;

  getAbility(): AbilityMap[keyof AbilityMap];
  setAbility(value: AbilityMap[keyof AbilityMap]): void;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): RestrictionProto.Limit | undefined;
  setLimit(value?: RestrictionProto.Limit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestrictionProto.AsObject;
  static toObject(includeInstance: boolean, msg: RestrictionProto): RestrictionProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestrictionProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestrictionProto;
  static deserializeBinaryFromReader(message: RestrictionProto, reader: jspb.BinaryReader): RestrictionProto;
}

export namespace RestrictionProto {
  export type AsObject = {
    generic: string,
    weaponStyle: WeaponStyleMap[keyof WeaponStyleMap],
    ability: AbilityMap[keyof AbilityMap],
    limit?: RestrictionProto.Limit.AsObject,
  }

  export class Limit extends jspb.Message {
    getOperator(): RestrictionProto.Limit.OperatorMap[keyof RestrictionProto.Limit.OperatorMap];
    setOperator(value: RestrictionProto.Limit.OperatorMap[keyof RestrictionProto.Limit.OperatorMap]): void;

    getValue(): number;
    setValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Limit.AsObject;
    static toObject(includeInstance: boolean, msg: Limit): Limit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Limit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Limit;
    static deserializeBinaryFromReader(message: Limit, reader: jspb.BinaryReader): Limit;
  }

  export namespace Limit {
    export type AsObject = {
      operator: RestrictionProto.Limit.OperatorMap[keyof RestrictionProto.Limit.OperatorMap],
      value: number,
    }

    export interface OperatorMap {
      ABOVE: 0;
      ABOVE_OR_EQUAL: 1;
      EQUAL: 2;
      BELOW_OR_EQUAL: 3;
      BELOW: 4;
    }

    export const Operator: OperatorMap;
  }
}

export class FeatSelection extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearQualifierList(): void;
  getQualifierList(): Array<string>;
  setQualifierList(value: Array<string>): void;
  addQualifier(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatSelection.AsObject;
  static toObject(includeInstance: boolean, msg: FeatSelection): FeatSelection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatSelection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatSelection;
  static deserializeBinaryFromReader(message: FeatSelection, reader: jspb.BinaryReader): FeatSelection;
}

export namespace FeatSelection {
  export type AsObject = {
    name: string,
    qualifierList: Array<string>,
  }
}

export class PriceProto extends jspb.Message {
  getCurrency(): string;
  setCurrency(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  getPrecision(): number;
  setPrecision(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceProto.AsObject;
  static toObject(includeInstance: boolean, msg: PriceProto): PriceProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceProto;
  static deserializeBinaryFromReader(message: PriceProto, reader: jspb.BinaryReader): PriceProto;
}

export namespace PriceProto {
  export type AsObject = {
    currency: string,
    number: number,
    precision: number,
  }
}

export interface SizeProtoMap {
  UNKNOWN_SIZE: 0;
  TINY: 1;
  SMALL: 2;
  MEDIUM: 3;
  LARGE: 4;
  HUGE: 5;
  GARGANTUAN: 6;
}

export const SizeProto: SizeProtoMap;

export interface WeaponStyleMap {
  UNKNOWN_STYLE: 0;
  TWOHANDED_MELEE: 1;
  ONEHANDED_MELEE: 2;
  LIGHT_MELEE: 3;
  UNARMED: 4;
  RANGED_TOUCH: 5;
  RANGED: 6;
  THROWN_TOUCH: 7;
  THROWN: 8;
  TOUCH: 9;
  THROWN_TWO_HANDED: 10;
}

export const WeaponStyle: WeaponStyleMap;

export interface AbilityMap {
  UNKNOWN: 0;
  STRENGTH: 1;
  DEXTERITY: 2;
  CONSTITUTION: 3;
  INTELLIGENCE: 4;
  WISDOM: 5;
  CHARISMA: 6;
  NONE: 7;
}

export const Ability: AbilityMap;

export interface SpellClassMap {
  UNKNOWN_SPELL_CLASS: 0;
  BARD: 1;
  CLERIC: 2;
  DRUID: 3;
  PALADIN: 4;
  RANGER: 5;
  SORCERER: 6;
  WARLOCK: 7;
  WIZARD: 8;
}

export const SpellClass: SpellClassMap;

export interface SkillSubtypeMap {
  UNKNOWN_SKILL_SUBTYPE: 0;
  DROW_RELIGION: 1;
  RELIGION: 2;
  ARCANA: 3;
  ALCHEMY: 4;
  ANY_ONE: 5;
}

export const SkillSubtype: SkillSubtypeMap;

export interface ProficiencyMap {
  UNKNOWN_PROFICIENCY: 0;
  SIMPLE: 1;
  MARTIAL: 2;
  EXOCTIC: 3;
  IMPROVISED: 4;
  NONE_PROFICIENCY: 5;
}

export const Proficiency: ProficiencyMap;

export interface ArmorTypeMap {
  UNKNOWN_ARMOR: 0;
  LIGHT_ARMOR: 1;
  MEDIUM_ARMOR: 2;
  HEAVY_ARMOR: 3;
  SHIELD: 4;
  TOWER_SHIELD: 5;
  NONE_ARMOR: 6;
}

export const ArmorType: ArmorTypeMap;

export interface AlignmentProtoMap {
  UNKNOWN_ALIGNMENT: 0;
  LAWFUL_GOOD: 1;
  NEUTRAL_GOOD: 2;
  CHAOTIC_GOOD: 3;
  LAWFUL_NEUTRAL: 4;
  TRUE_NEUTRAL: 5;
  CHAOTIC_NEUTRAL: 6;
  LAWFUL_EVIL: 7;
  NEUTRAL_EVIL: 8;
  CHAOTIC_EVIL: 9;
  ANY_CHAOTIC: 10;
  ANY_EVIL: 11;
  ANY_GOOD: 12;
  ANY_LAWFUL: 13;
  ANY_ALIGNMENT: 14;
  UNALIGNED: 15;
  ANY_NON_LAWFUL: 16;
}

export const AlignmentProto: AlignmentProtoMap;

export interface AlignmentStatusMap {
  UNKNOWN_ALIGNMENT_STATUS: 0;
  ALWAYS: 1;
  USUALLY: 2;
  OFTEN: 3;
}

export const AlignmentStatus: AlignmentStatusMap;

export interface GenderMap {
  UNKNOWN_GENDER: 0;
  FEMALE: 1;
  MALE: 2;
  NONE_GENDER: 3;
}

export const Gender: GenderMap;

export interface BattleStatusMap {
  ENDED: 0;
  STARTING: 1;
  SURPRISED: 2;
  ONGOING: 3;
}

export const BattleStatus: BattleStatusMap;

export interface FeatTypeMap {
  UNKNOWN_FEAT_TYPE: 0;
  GENERAL: 1;
  ITEM_CREATION: 2;
  METAMAGIC: 3;
  REGIONAL: 4;
  SPECIAL: 5;
  FIGHTER: 6;
}

export const FeatType: FeatTypeMap;

export interface MonsterTypeProtoMap {
  UNKNOWN_MONSTER_TYPE: 0;
  ABERRATION: 1;
  BEAST: 2;
  CELESTIAL: 3;
  CONSTRUCT: 4;
  DRAGON: 5;
  ELEMENTAL: 6;
  FEY: 7;
  FIEND: 8;
  GIANT: 9;
  HUMANOID: 10;
  MONSTROSITY: 11;
  OOZE: 12;
  PLANT: 13;
  UNDEAD: 14;
}

export const MonsterTypeProto: MonsterTypeProtoMap;

export interface MonsterTagProtoMap {
  UNKNOWN_MONSTER_TAG: 0;
  SHAPECHANGER: 1;
  ANY_RACE: 2;
  DEVIL: 3;
  HUMAN: 4;
  HALF_ELF: 5;
  GNOME: 6;
  HALF_ORC: 7;
  DRAGONBORN: 8;
  HALFLING: 9;
  TIEFLING: 10;
  ELF: 11;
  DWARF: 12;
  GOBLINOID: 13;
  SWARM: 14;
  DEMON: 15;
  KOBOLD: 16;
  TROGLODYTE: 17;
  ORC: 18;
  KUO_TOA: 19;
  BULLYWUG: 20;
  KENKU: 21;
  LIZARDFOLK: 22;
  QUAGGOTH: 23;
  DROW: 24;
  SAHUAGIN: 25;
  GENASI: 26;
}

export const MonsterTagProto: MonsterTagProtoMap;

export interface MetaMagicMap {
  UNKNOWN_META_MAGIC: 0;
  EMPOWERED: 1;
  ENLARGED: 2;
  EXTENDED: 3;
  HEIGHTENED: 4;
  MAXIMIZED: 5;
  QUICKENED: 6;
  SILENT: 7;
  STILL: 8;
  WIDENED: 9;
}

export const MetaMagic: MetaMagicMap;


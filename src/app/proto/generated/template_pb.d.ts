// package: dma
// file: template.proto

import * as jspb from "google-protobuf";
import * as value_pb from "./value_pb";

export class CommonProto extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearBaseList(): void;
  getBaseList(): Array<string>;
  setBaseList(value: Array<string>): void;
  addBase(value: string, index?: number): string;

  clearCategoriesList(): void;
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  addCategories(value: string, index?: number): string;

  clearSynonymsList(): void;
  getSynonymsList(): Array<string>;
  setSynonymsList(value: Array<string>): void;
  addSynonyms(value: string, index?: number): string;

  clearReferencesList(): void;
  getReferencesList(): Array<value_pb.ReferenceProto>;
  setReferencesList(value: Array<value_pb.ReferenceProto>): void;
  addReferences(value?: value_pb.ReferenceProto, index?: number): value_pb.ReferenceProto;

  clearWorldsList(): void;
  getWorldsList(): Array<string>;
  setWorldsList(value: Array<string>): void;
  addWorlds(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getShortDescription(): string;
  setShortDescription(value: string): void;

  getIncomplete(): string;
  setIncomplete(value: string): void;

  getBaseOnly(): boolean;
  setBaseOnly(value: boolean): void;

  getNaming(): CommonProto.NamingMap[keyof CommonProto.NamingMap];
  setNaming(value: CommonProto.NamingMap[keyof CommonProto.NamingMap]): void;

  getComposedName(): string;
  setComposedName(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonProto.AsObject;
  static toObject(includeInstance: boolean, msg: CommonProto): CommonProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonProto;
  static deserializeBinaryFromReader(message: CommonProto, reader: jspb.BinaryReader): CommonProto;
}

export namespace CommonProto {
  export type AsObject = {
    id: string,
    name: string,
    baseList: Array<string>,
    categoriesList: Array<string>,
    synonymsList: Array<string>,
    referencesList: Array<value_pb.ReferenceProto.AsObject>,
    worldsList: Array<string>,
    description: string,
    shortDescription: string,
    incomplete: string,
    baseOnly: boolean,
    naming: CommonProto.NamingMap[keyof CommonProto.NamingMap],
    composedName: string,
    image: string,
  }

  export interface NamingMap {
    INFIX: 0;
    POSTFIX: 1;
    PREFIX: 2;
    IGNORE: 3;
  }

  export const Naming: NamingMap;
}

export class WorldTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  hasCalendar(): boolean;
  clearCalendar(): void;
  getCalendar(): value_pb.CalendarProto | undefined;
  setCalendar(value?: value_pb.CalendarProto): void;

  clearNamesList(): void;
  getNamesList(): Array<WorldTemplateProto.Names>;
  setNamesList(value: Array<WorldTemplateProto.Names>): void;
  addNames(value?: WorldTemplateProto.Names, index?: number): WorldTemplateProto.Names;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: WorldTemplateProto): WorldTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldTemplateProto;
  static deserializeBinaryFromReader(message: WorldTemplateProto, reader: jspb.BinaryReader): WorldTemplateProto;
}

export namespace WorldTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    calendar?: value_pb.CalendarProto.AsObject,
    namesList: Array<WorldTemplateProto.Names.AsObject>,
  }

  export class Names extends jspb.Message {
    getRace(): string;
    setRace(value: string): void;

    getRegion(): string;
    setRegion(value: string): void;

    clearMaleList(): void;
    getMaleList(): Array<string>;
    setMaleList(value: Array<string>): void;
    addMale(value: string, index?: number): string;

    clearFemaleList(): void;
    getFemaleList(): Array<string>;
    setFemaleList(value: Array<string>): void;
    addFemale(value: string, index?: number): string;

    clearSurenameList(): void;
    getSurenameList(): Array<string>;
    setSurenameList(value: Array<string>): void;
    addSurename(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Names.AsObject;
    static toObject(includeInstance: boolean, msg: Names): Names.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Names, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Names;
    static deserializeBinaryFromReader(message: Names, reader: jspb.BinaryReader): Names;
  }

  export namespace Names {
    export type AsObject = {
      race: string,
      region: string,
      maleList: Array<string>,
      femaleList: Array<string>,
      surenameList: Array<string>,
    }
  }
}

export class MonsterProto extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): CommonProto | undefined;
  setCommon(value?: CommonProto): void;

  getSize(): value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap];
  setSize(value: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap]): void;

  getType(): value_pb.MonsterTypeProtoMap[keyof value_pb.MonsterTypeProtoMap];
  setType(value: value_pb.MonsterTypeProtoMap[keyof value_pb.MonsterTypeProtoMap]): void;

  clearTagsList(): void;
  getTagsList(): Array<value_pb.MonsterTagProtoMap[keyof value_pb.MonsterTagProtoMap]>;
  setTagsList(value: Array<value_pb.MonsterTagProtoMap[keyof value_pb.MonsterTagProtoMap]>): void;
  addTags(value: value_pb.MonsterTagProtoMap[keyof value_pb.MonsterTagProtoMap], index?: number): value_pb.MonsterTagProtoMap[keyof value_pb.MonsterTagProtoMap];

  getAlignment(): value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap];
  setAlignment(value: value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap]): void;

  getNaturalArmor(): number;
  setNaturalArmor(value: number): void;

  getHitDiceNumber(): number;
  setHitDiceNumber(value: number): void;

  clearSpeedList(): void;
  getSpeedList(): Array<value_pb.SpeedProto>;
  setSpeedList(value: Array<value_pb.SpeedProto>): void;
  addSpeed(value?: value_pb.SpeedProto, index?: number): value_pb.SpeedProto;

  hasAbilities(): boolean;
  clearAbilities(): void;
  getAbilities(): MonsterProto.Abilities | undefined;
  setAbilities(value?: MonsterProto.Abilities): void;

  clearProficientSkillsList(): void;
  getProficientSkillsList(): Array<MonsterProto.SkillMap[keyof MonsterProto.SkillMap]>;
  setProficientSkillsList(value: Array<MonsterProto.SkillMap[keyof MonsterProto.SkillMap]>): void;
  addProficientSkills(value: MonsterProto.SkillMap[keyof MonsterProto.SkillMap], index?: number): MonsterProto.SkillMap[keyof MonsterProto.SkillMap];

  clearDamageImmunitiesList(): void;
  getDamageImmunitiesList(): Array<MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap]>;
  setDamageImmunitiesList(value: Array<MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap]>): void;
  addDamageImmunities(value: MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap], index?: number): MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap];

  clearConditionImmunitiesList(): void;
  getConditionImmunitiesList(): Array<MonsterProto.ConditionTypeMap[keyof MonsterProto.ConditionTypeMap]>;
  setConditionImmunitiesList(value: Array<MonsterProto.ConditionTypeMap[keyof MonsterProto.ConditionTypeMap]>): void;
  addConditionImmunities(value: MonsterProto.ConditionTypeMap[keyof MonsterProto.ConditionTypeMap], index?: number): MonsterProto.ConditionTypeMap[keyof MonsterProto.ConditionTypeMap];

  hasSenses(): boolean;
  clearSenses(): void;
  getSenses(): MonsterProto.Senses | undefined;
  setSenses(value?: MonsterProto.Senses): void;

  hasLanguages(): boolean;
  clearLanguages(): void;
  getLanguages(): MonsterProto.Languages | undefined;
  setLanguages(value?: MonsterProto.Languages): void;

  hasChallenge(): boolean;
  clearChallenge(): void;
  getChallenge(): value_pb.RationalProto | undefined;
  setChallenge(value?: value_pb.RationalProto): void;

  clearTraitsList(): void;
  getTraitsList(): Array<MonsterProto.Trait>;
  setTraitsList(value: Array<MonsterProto.Trait>): void;
  addTraits(value?: MonsterProto.Trait, index?: number): MonsterProto.Trait;

  clearAttacksList(): void;
  getAttacksList(): Array<MonsterProto.Attack>;
  setAttacksList(value: Array<MonsterProto.Attack>): void;
  addAttacks(value?: MonsterProto.Attack, index?: number): MonsterProto.Attack;

  clearActionsList(): void;
  getActionsList(): Array<MonsterProto.Action>;
  setActionsList(value: Array<MonsterProto.Action>): void;
  addActions(value?: MonsterProto.Action, index?: number): MonsterProto.Action;

  getTreasure(): MonsterProto.TreasureMap[keyof MonsterProto.TreasureMap];
  setTreasure(value: MonsterProto.TreasureMap[keyof MonsterProto.TreasureMap]): void;

  getLevelAdjustment(): number;
  setLevelAdjustment(value: number): void;

  getMainRace(): boolean;
  setMainRace(value: boolean): void;

  clearPossessionList(): void;
  getPossessionList(): Array<MonsterProto.Possession>;
  setPossessionList(value: Array<MonsterProto.Possession>): void;
  addPossession(value?: MonsterProto.Possession, index?: number): MonsterProto.Possession;

  clearProficiencyList(): void;
  getProficiencyList(): Array<string>;
  setProficiencyList(value: Array<string>): void;
  addProficiency(value: string, index?: number): string;

  getQuadruped(): boolean;
  setQuadruped(value: boolean): void;

  clearQualityList(): void;
  getQualityList(): Array<ParametrizedTemplateProto>;
  setQualityList(value: Array<ParametrizedTemplateProto>): void;
  addQuality(value?: ParametrizedTemplateProto, index?: number): ParametrizedTemplateProto;

  hasMaleHeight(): boolean;
  clearMaleHeight(): void;
  getMaleHeight(): MonsterProto.Height | undefined;
  setMaleHeight(value?: MonsterProto.Height): void;

  hasFemaleHeight(): boolean;
  clearFemaleHeight(): void;
  getFemaleHeight(): MonsterProto.Height | undefined;
  setFemaleHeight(value?: MonsterProto.Height): void;

  hasMaleWeight(): boolean;
  clearMaleWeight(): void;
  getMaleWeight(): MonsterProto.Weight | undefined;
  setMaleWeight(value?: MonsterProto.Weight): void;

  hasFemaleWeight(): boolean;
  clearFemaleWeight(): void;
  getFemaleWeight(): MonsterProto.Weight | undefined;
  setFemaleWeight(value?: MonsterProto.Weight): void;

  hasAge(): boolean;
  clearAge(): void;
  getAge(): MonsterProto.Age | undefined;
  setAge(value?: MonsterProto.Age): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonsterProto.AsObject;
  static toObject(includeInstance: boolean, msg: MonsterProto): MonsterProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonsterProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonsterProto;
  static deserializeBinaryFromReader(message: MonsterProto, reader: jspb.BinaryReader): MonsterProto;
}

export namespace MonsterProto {
  export type AsObject = {
    common?: CommonProto.AsObject,
    size: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap],
    type: value_pb.MonsterTypeProtoMap[keyof value_pb.MonsterTypeProtoMap],
    tagsList: Array<value_pb.MonsterTagProtoMap[keyof value_pb.MonsterTagProtoMap]>,
    alignment: value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap],
    naturalArmor: number,
    hitDiceNumber: number,
    speedList: Array<value_pb.SpeedProto.AsObject>,
    abilities?: MonsterProto.Abilities.AsObject,
    proficientSkillsList: Array<MonsterProto.SkillMap[keyof MonsterProto.SkillMap]>,
    damageImmunitiesList: Array<MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap]>,
    conditionImmunitiesList: Array<MonsterProto.ConditionTypeMap[keyof MonsterProto.ConditionTypeMap]>,
    senses?: MonsterProto.Senses.AsObject,
    languages?: MonsterProto.Languages.AsObject,
    challenge?: value_pb.RationalProto.AsObject,
    traitsList: Array<MonsterProto.Trait.AsObject>,
    attacksList: Array<MonsterProto.Attack.AsObject>,
    actionsList: Array<MonsterProto.Action.AsObject>,
    treasure: MonsterProto.TreasureMap[keyof MonsterProto.TreasureMap],
    levelAdjustment: number,
    mainRace: boolean,
    possessionList: Array<MonsterProto.Possession.AsObject>,
    proficiencyList: Array<string>,
    quadruped: boolean,
    qualityList: Array<ParametrizedTemplateProto.AsObject>,
    maleHeight?: MonsterProto.Height.AsObject,
    femaleHeight?: MonsterProto.Height.AsObject,
    maleWeight?: MonsterProto.Weight.AsObject,
    femaleWeight?: MonsterProto.Weight.AsObject,
    age?: MonsterProto.Age.AsObject,
  }

  export class Abilities extends jspb.Message {
    getStrength(): number;
    setStrength(value: number): void;

    getDexterity(): number;
    setDexterity(value: number): void;

    getConstitution(): number;
    setConstitution(value: number): void;

    getWisdom(): number;
    setWisdom(value: number): void;

    getIntelligence(): number;
    setIntelligence(value: number): void;

    getCharisma(): number;
    setCharisma(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Abilities.AsObject;
    static toObject(includeInstance: boolean, msg: Abilities): Abilities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Abilities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Abilities;
    static deserializeBinaryFromReader(message: Abilities, reader: jspb.BinaryReader): Abilities;
  }

  export namespace Abilities {
    export type AsObject = {
      strength: number,
      dexterity: number,
      constitution: number,
      wisdom: number,
      intelligence: number,
      charisma: number,
    }
  }

  export class Senses extends jspb.Message {
    getBlindsightFeet(): number;
    setBlindsightFeet(value: number): void;

    getDarkvisionFeet(): number;
    setDarkvisionFeet(value: number): void;

    getTremorsenseFeet(): number;
    setTremorsenseFeet(value: number): void;

    getTruesightFeet(): number;
    setTruesightFeet(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Senses.AsObject;
    static toObject(includeInstance: boolean, msg: Senses): Senses.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Senses, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Senses;
    static deserializeBinaryFromReader(message: Senses, reader: jspb.BinaryReader): Senses;
  }

  export namespace Senses {
    export type AsObject = {
      blindsightFeet: number,
      darkvisionFeet: number,
      tremorsenseFeet: number,
      truesightFeet: number,
    }
  }

  export class Languages extends jspb.Message {
    clearNamesList(): void;
    getNamesList(): Array<MonsterProto.Languages.NameMap[keyof MonsterProto.Languages.NameMap]>;
    setNamesList(value: Array<MonsterProto.Languages.NameMap[keyof MonsterProto.Languages.NameMap]>): void;
    addNames(value: MonsterProto.Languages.NameMap[keyof MonsterProto.Languages.NameMap], index?: number): MonsterProto.Languages.NameMap[keyof MonsterProto.Languages.NameMap];

    getSpecial(): string;
    setSpecial(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Languages.AsObject;
    static toObject(includeInstance: boolean, msg: Languages): Languages.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Languages, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Languages;
    static deserializeBinaryFromReader(message: Languages, reader: jspb.BinaryReader): Languages;
  }

  export namespace Languages {
    export type AsObject = {
      namesList: Array<MonsterProto.Languages.NameMap[keyof MonsterProto.Languages.NameMap]>,
      special: string,
    }

    export interface NameMap {
      UNKNOWN_LANGUAGE: 0;
      COMMON: 1;
      DWARVISH: 2;
      ELVISH: 3;
      GIANT: 4;
      GNOMISH: 5;
      GOBLIN: 6;
      HALFLING: 7;
      ORC: 8;
      ABYSSAL: 9;
      CELESTIAL: 10;
      DRACONIC: 11;
      DEEP_SPEECH: 12;
      INFERNAL: 13;
      PRIMORDIAL: 14;
      SYLVAN: 15;
      UNDERCOMMON: 16;
    }

    export const Name: NameMap;
  }

  export class Trait extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trait.AsObject;
    static toObject(includeInstance: boolean, msg: Trait): Trait.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trait, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trait;
    static deserializeBinaryFromReader(message: Trait, reader: jspb.BinaryReader): Trait;
  }

  export namespace Trait {
    export type AsObject = {
      name: string,
      description: string,
    }
  }

  export class Attack extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getType(): MonsterProto.Attack.TypeMap[keyof MonsterProto.Attack.TypeMap];
    setType(value: MonsterProto.Attack.TypeMap[keyof MonsterProto.Attack.TypeMap]): void;

    getReachFeet(): number;
    setReachFeet(value: number): void;

    getTargets(): number;
    setTargets(value: number): void;

    getCanTarget(): boolean;
    setCanTarget(value: boolean): void;

    clearHitsList(): void;
    getHitsList(): Array<MonsterProto.Attack.Effect>;
    setHitsList(value: Array<MonsterProto.Attack.Effect>): void;
    addHits(value?: MonsterProto.Attack.Effect, index?: number): MonsterProto.Attack.Effect;

    clearMissesList(): void;
    getMissesList(): Array<MonsterProto.Attack.Effect>;
    setMissesList(value: Array<MonsterProto.Attack.Effect>): void;
    addMisses(value?: MonsterProto.Attack.Effect, index?: number): MonsterProto.Attack.Effect;

    getSpecial(): string;
    setSpecial(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attack.AsObject;
    static toObject(includeInstance: boolean, msg: Attack): Attack.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attack, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attack;
    static deserializeBinaryFromReader(message: Attack, reader: jspb.BinaryReader): Attack;
  }

  export namespace Attack {
    export type AsObject = {
      name: string,
      type: MonsterProto.Attack.TypeMap[keyof MonsterProto.Attack.TypeMap],
      reachFeet: number,
      targets: number,
      canTarget: boolean,
      hitsList: Array<MonsterProto.Attack.Effect.AsObject>,
      missesList: Array<MonsterProto.Attack.Effect.AsObject>,
      special: string,
    }

    export class Effect extends jspb.Message {
      hasDamage(): boolean;
      clearDamage(): void;
      getDamage(): value_pb.DiceProto | undefined;
      setDamage(value?: value_pb.DiceProto): void;

      getType(): MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap];
      setType(value: MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap]): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Effect.AsObject;
      static toObject(includeInstance: boolean, msg: Effect): Effect.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Effect, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Effect;
      static deserializeBinaryFromReader(message: Effect, reader: jspb.BinaryReader): Effect;
    }

    export namespace Effect {
      export type AsObject = {
        damage?: value_pb.DiceProto.AsObject,
        type: MonsterProto.DamageTypeMap[keyof MonsterProto.DamageTypeMap],
      }
    }

    export interface TypeMap {
      UKNOWN_ATTACK_TYPE: 0;
      MELEE_WEAPON: 1;
      RANGED_WEAPON: 2;
    }

    export const Type: TypeMap;
  }

  export class Action extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
  }

  export namespace Action {
    export type AsObject = {
      name: string,
      description: string,
    }
  }

  export class AttackOld extends jspb.Message {
    hasAttacks(): boolean;
    clearAttacks(): void;
    getAttacks(): value_pb.DiceProto | undefined;
    setAttacks(value?: value_pb.DiceProto): void;

    getMode(): MonsterProto.AttackOld.ModeMap[keyof MonsterProto.AttackOld.ModeMap];
    setMode(value: MonsterProto.AttackOld.ModeMap[keyof MonsterProto.AttackOld.ModeMap]): void;

    getStyle(): MonsterProto.AttackOld.StyleMap[keyof MonsterProto.AttackOld.StyleMap];
    setStyle(value: MonsterProto.AttackOld.StyleMap[keyof MonsterProto.AttackOld.StyleMap]): void;

    hasDamage(): boolean;
    clearDamage(): void;
    getDamage(): value_pb.DamageProto | undefined;
    setDamage(value?: value_pb.DamageProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttackOld.AsObject;
    static toObject(includeInstance: boolean, msg: AttackOld): AttackOld.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttackOld, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttackOld;
    static deserializeBinaryFromReader(message: AttackOld, reader: jspb.BinaryReader): AttackOld;
  }

  export namespace AttackOld {
    export type AsObject = {
      attacks?: value_pb.DiceProto.AsObject,
      mode: MonsterProto.AttackOld.ModeMap[keyof MonsterProto.AttackOld.ModeMap],
      style: MonsterProto.AttackOld.StyleMap[keyof MonsterProto.AttackOld.StyleMap],
      damage?: value_pb.DamageProto.AsObject,
    }

    export interface ModeMap {
      UNKNOWN_MODE: 0;
      TENTACLE: 1;
      CLAW: 2;
      BITE: 3;
      FIST: 4;
      QUILL: 5;
      WEAPON: 6;
      TOUCH: 7;
      INCORPOREAL_TOUCH: 8;
      SLAM: 9;
      STING: 10;
      SWARM: 11;
      RAY: 12;
      HOOF: 13;
      SNAKES: 14;
      WEB: 15;
    }

    export const Mode: ModeMap;

    export interface StyleMap {
      UNKNOWN_STYLE: 0;
      MELEE: 1;
      RANGED: 2;
    }

    export const Style: StyleMap;
  }

  export class Possession extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getText(): string;
    setText(value: string): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): value_pb.DiceProto | undefined;
    setCount(value?: value_pb.DiceProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Possession.AsObject;
    static toObject(includeInstance: boolean, msg: Possession): Possession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Possession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Possession;
    static deserializeBinaryFromReader(message: Possession, reader: jspb.BinaryReader): Possession;
  }

  export namespace Possession {
    export type AsObject = {
      name: string,
      text: string,
      count?: value_pb.DiceProto.AsObject,
    }
  }

  export class Height extends jspb.Message {
    getInches(): number;
    setInches(value: number): void;

    hasModifier(): boolean;
    clearModifier(): void;
    getModifier(): value_pb.DiceProto | undefined;
    setModifier(value?: value_pb.DiceProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Height.AsObject;
    static toObject(includeInstance: boolean, msg: Height): Height.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Height, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Height;
    static deserializeBinaryFromReader(message: Height, reader: jspb.BinaryReader): Height;
  }

  export namespace Height {
    export type AsObject = {
      inches: number,
      modifier?: value_pb.DiceProto.AsObject,
    }
  }

  export class Weight extends jspb.Message {
    getPounds(): number;
    setPounds(value: number): void;

    hasModifier(): boolean;
    clearModifier(): void;
    getModifier(): value_pb.DiceProto | undefined;
    setModifier(value?: value_pb.DiceProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Weight.AsObject;
    static toObject(includeInstance: boolean, msg: Weight): Weight.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Weight, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Weight;
    static deserializeBinaryFromReader(message: Weight, reader: jspb.BinaryReader): Weight;
  }

  export namespace Weight {
    export type AsObject = {
      pounds: number,
      modifier?: value_pb.DiceProto.AsObject,
    }
  }

  export class Age extends jspb.Message {
    getStart(): number;
    setStart(value: number): void;

    getMiddle(): number;
    setMiddle(value: number): void;

    getOld(): number;
    setOld(value: number): void;

    getVenerable(): number;
    setVenerable(value: number): void;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): value_pb.DiceProto | undefined;
    setMax(value?: value_pb.DiceProto): void;

    hasShort(): boolean;
    clearShort(): void;
    getShort(): value_pb.DiceProto | undefined;
    setShort(value?: value_pb.DiceProto): void;

    hasMedium(): boolean;
    clearMedium(): void;
    getMedium(): value_pb.DiceProto | undefined;
    setMedium(value?: value_pb.DiceProto): void;

    hasLong(): boolean;
    clearLong(): void;
    getLong(): value_pb.DiceProto | undefined;
    setLong(value?: value_pb.DiceProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Age.AsObject;
    static toObject(includeInstance: boolean, msg: Age): Age.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Age, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Age;
    static deserializeBinaryFromReader(message: Age, reader: jspb.BinaryReader): Age;
  }

  export namespace Age {
    export type AsObject = {
      start: number,
      middle: number,
      old: number,
      venerable: number,
      max?: value_pb.DiceProto.AsObject,
      pb_short?: value_pb.DiceProto.AsObject,
      medium?: value_pb.DiceProto.AsObject,
      pb_long?: value_pb.DiceProto.AsObject,
    }
  }

  export interface SkillMap {
    UNKNOWN_SKILL: 0;
    ATHLETICS: 1;
    ACROBATICS: 2;
    SLEIGHT_OF_HAND: 3;
    STEALTH: 4;
    ARCANA: 5;
    HISTORY: 6;
    INVESTIGATION: 7;
    NATURE: 8;
    RELIGTION: 9;
    ANIMAL_HANDLING: 10;
    INSIGHT: 11;
    MEDICINE: 12;
    PERCEPTION: 13;
    SURVIVAL: 14;
    DECEPTION: 15;
    INTIMIDATION: 16;
    PERFORMANCE: 17;
    PERSUASION: 18;
  }

  export const Skill: SkillMap;

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
  }

  export const DamageType: DamageTypeMap;

  export interface ConditionTypeMap {
    UNKNOWN_CONDITION: 0;
    BLINDED: 1;
    CHARMED: 2;
    DEAFENED: 3;
    FRIGHTENED: 4;
    GRAPPLED: 5;
    ICNAPACITATED: 6;
    INVISIBLE: 7;
    PARALYZED: 8;
    PETRIFIED: 9;
    POISONED: 10;
    PRONE: 11;
    RESTRAINED: 12;
    STUNNED: 13;
    UNCONSCIOUS: 14;
  }

  export const ConditionType: ConditionTypeMap;

  export interface TreasureMap {
    UNKNOWN_TREADSURE: 0;
    NONE_TREASURE: 1;
    STANDARD: 2;
    DOUBLE: 3;
    TRIPLE: 4;
    QUADRUPLE: 5;
  }

  export const Treasure: TreasureMap;
}

export class MonstersProto extends jspb.Message {
  clearMonstersList(): void;
  getMonstersList(): Array<MonsterProto>;
  setMonstersList(value: Array<MonsterProto>): void;
  addMonsters(value?: MonsterProto, index?: number): MonsterProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonstersProto.AsObject;
  static toObject(includeInstance: boolean, msg: MonstersProto): MonstersProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonstersProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonstersProto;
  static deserializeBinaryFromReader(message: MonstersProto, reader: jspb.BinaryReader): MonstersProto;
}

export namespace MonstersProto {
  export type AsObject = {
    monstersList: Array<MonsterProto.AsObject>,
  }
}

export class ItemTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): value_pb.MoneyProto | undefined;
  setValue(value?: value_pb.MoneyProto): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): value_pb.WeightProto | undefined;
  setWeight(value?: value_pb.WeightProto): void;

  getProbability(): ItemTemplateProto.ProbabilityMap[keyof ItemTemplateProto.ProbabilityMap];
  setProbability(value: ItemTemplateProto.ProbabilityMap[keyof ItemTemplateProto.ProbabilityMap]): void;

  getSize(): value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap];
  setSize(value: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap]): void;

  getHardness(): number;
  setHardness(value: number): void;

  getHitPoints(): number;
  setHitPoints(value: number): void;

  clearAppearanceList(): void;
  getAppearanceList(): Array<ItemTemplateProto.Appearance>;
  setAppearanceList(value: Array<ItemTemplateProto.Appearance>): void;
  addAppearance(value?: ItemTemplateProto.Appearance, index?: number): ItemTemplateProto.Appearance;

  hasSubstance(): boolean;
  clearSubstance(): void;
  getSubstance(): ItemTemplateProto.Substance | undefined;
  setSubstance(value?: ItemTemplateProto.Substance): void;

  getBreakDc(): number;
  setBreakDc(value: number): void;

  getPlayerName(): string;
  setPlayerName(value: string): void;

  getMonetary(): boolean;
  setMonetary(value: boolean): void;

  hasWeapon(): boolean;
  clearWeapon(): void;
  getWeapon(): WeaponTemplateProto | undefined;
  setWeapon(value?: WeaponTemplateProto): void;

  hasWearable(): boolean;
  clearWearable(): void;
  getWearable(): WearableTemplateProto | undefined;
  setWearable(value?: WearableTemplateProto): void;

  hasIncomplete(): boolean;
  clearIncomplete(): void;
  getIncomplete(): IncompleteTemplateProto | undefined;
  setIncomplete(value?: IncompleteTemplateProto): void;

  hasMagic(): boolean;
  clearMagic(): void;
  getMagic(): MagicTemplateProto | undefined;
  setMagic(value?: MagicTemplateProto): void;

  hasCounted(): boolean;
  clearCounted(): void;
  getCounted(): CountedTemplateProto | undefined;
  setCounted(value?: CountedTemplateProto): void;

  hasMultiple(): boolean;
  clearMultiple(): void;
  getMultiple(): MultipleTemplateProto | undefined;
  setMultiple(value?: MultipleTemplateProto): void;

  hasMultiuse(): boolean;
  clearMultiuse(): void;
  getMultiuse(): MultiuseTemplateProto | undefined;
  setMultiuse(value?: MultiuseTemplateProto): void;

  hasTimed(): boolean;
  clearTimed(): void;
  getTimed(): TimedTemplateProto | undefined;
  setTimed(value?: TimedTemplateProto): void;

  hasCommodity(): boolean;
  clearCommodity(): void;
  getCommodity(): CommodityTemplateProto | undefined;
  setCommodity(value?: CommodityTemplateProto): void;

  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): ContainerTemplateProto | undefined;
  setContainer(value?: ContainerTemplateProto): void;

  hasArmor(): boolean;
  clearArmor(): void;
  getArmor(): ArmorTemplateProto | undefined;
  setArmor(value?: ArmorTemplateProto): void;

  hasLight(): boolean;
  clearLight(): void;
  getLight(): LightTemplateProto | undefined;
  setLight(value?: LightTemplateProto): void;

  hasComposite(): boolean;
  clearComposite(): void;
  getComposite(): CompositeTemplateProto | undefined;
  setComposite(value?: CompositeTemplateProto): void;

  clearQualitiesList(): void;
  getQualitiesList(): Array<ParametrizedTemplateProto>;
  setQualitiesList(value: Array<ParametrizedTemplateProto>): void;
  addQualities(value?: ParametrizedTemplateProto, index?: number): ParametrizedTemplateProto;

  clearRandomList(): void;
  getRandomList(): Array<ItemTemplateProto.Random>;
  setRandomList(value: Array<ItemTemplateProto.Random>): void;
  addRandom(value?: ItemTemplateProto.Random, index?: number): ItemTemplateProto.Random;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): ItemTemplateProto.Material | undefined;
  setMaterial(value?: ItemTemplateProto.Material): void;

  clearLoreList(): void;
  getLoreList(): Array<ItemTemplateProto.Lore>;
  setLoreList(value: Array<ItemTemplateProto.Lore>): void;
  addLore(value?: ItemTemplateProto.Lore, index?: number): ItemTemplateProto.Lore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: ItemTemplateProto): ItemTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemTemplateProto;
  static deserializeBinaryFromReader(message: ItemTemplateProto, reader: jspb.BinaryReader): ItemTemplateProto;
}

export namespace ItemTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    value?: value_pb.MoneyProto.AsObject,
    weight?: value_pb.WeightProto.AsObject,
    probability: ItemTemplateProto.ProbabilityMap[keyof ItemTemplateProto.ProbabilityMap],
    size: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap],
    hardness: number,
    hitPoints: number,
    appearanceList: Array<ItemTemplateProto.Appearance.AsObject>,
    substance?: ItemTemplateProto.Substance.AsObject,
    breakDc: number,
    playerName: string,
    monetary: boolean,
    weapon?: WeaponTemplateProto.AsObject,
    wearable?: WearableTemplateProto.AsObject,
    incomplete?: IncompleteTemplateProto.AsObject,
    magic?: MagicTemplateProto.AsObject,
    counted?: CountedTemplateProto.AsObject,
    multiple?: MultipleTemplateProto.AsObject,
    multiuse?: MultiuseTemplateProto.AsObject,
    timed?: TimedTemplateProto.AsObject,
    commodity?: CommodityTemplateProto.AsObject,
    container?: ContainerTemplateProto.AsObject,
    armor?: ArmorTemplateProto.AsObject,
    light?: LightTemplateProto.AsObject,
    composite?: CompositeTemplateProto.AsObject,
    qualitiesList: Array<ParametrizedTemplateProto.AsObject>,
    randomList: Array<ItemTemplateProto.Random.AsObject>,
    material?: ItemTemplateProto.Material.AsObject,
    loreList: Array<ItemTemplateProto.Lore.AsObject>,
  }

  export class Appearance extends jspb.Message {
    getProbability(): ItemTemplateProto.ProbabilityMap[keyof ItemTemplateProto.ProbabilityMap];
    setProbability(value: ItemTemplateProto.ProbabilityMap[keyof ItemTemplateProto.ProbabilityMap]): void;

    getAppearance(): string;
    setAppearance(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Appearance.AsObject;
    static toObject(includeInstance: boolean, msg: Appearance): Appearance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Appearance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Appearance;
    static deserializeBinaryFromReader(message: Appearance, reader: jspb.BinaryReader): Appearance;
  }

  export namespace Appearance {
    export type AsObject = {
      probability: ItemTemplateProto.ProbabilityMap[keyof ItemTemplateProto.ProbabilityMap],
      appearance: string,
    }
  }

  export class Substance extends jspb.Message {
    getMaterial(): ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap];
    setMaterial(value: ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap]): void;

    hasThickness(): boolean;
    clearThickness(): void;
    getThickness(): value_pb.DistanceProto | undefined;
    setThickness(value?: value_pb.DistanceProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Substance.AsObject;
    static toObject(includeInstance: boolean, msg: Substance): Substance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Substance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Substance;
    static deserializeBinaryFromReader(message: Substance, reader: jspb.BinaryReader): Substance;
  }

  export namespace Substance {
    export type AsObject = {
      material: ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap],
      thickness?: value_pb.DistanceProto.AsObject,
    }

    export interface MaterialMap {
      UNKNOWN: 0;
      PAPER: 1;
      CLOTH: 2;
      ROPE: 3;
      GLASS: 4;
      ICE: 5;
      LEATHER: 6;
      HIDE: 7;
      WOOD: 8;
      STONE: 9;
      IRON: 10;
      STEEL: 11;
      CRYSTAL: 12;
      MITHRAL: 13;
      ADAMANTINE: 14;
      BONE: 15;
    }

    export const Material: MaterialMap;
  }

  export class Random extends jspb.Message {
    getType(): ItemTemplateProto.Random.TypeMap[keyof ItemTemplateProto.Random.TypeMap];
    setType(value: ItemTemplateProto.Random.TypeMap[keyof ItemTemplateProto.Random.TypeMap]): void;

    hasMultiple(): boolean;
    clearMultiple(): void;
    getMultiple(): value_pb.DiceProto | undefined;
    setMultiple(value?: value_pb.DiceProto): void;

    clearItemList(): void;
    getItemList(): Array<string>;
    setItemList(value: Array<string>): void;
    addItem(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Random.AsObject;
    static toObject(includeInstance: boolean, msg: Random): Random.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Random, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Random;
    static deserializeBinaryFromReader(message: Random, reader: jspb.BinaryReader): Random;
  }

  export namespace Random {
    export type AsObject = {
      type: ItemTemplateProto.Random.TypeMap[keyof ItemTemplateProto.Random.TypeMap],
      multiple?: value_pb.DiceProto.AsObject,
      itemList: Array<string>,
    }

    export interface TypeMap {
      UNKNOWN: 0;
      MUNDANE: 1;
    }

    export const Type: TypeMap;
  }

  export class Material extends jspb.Message {
    hasValue(): boolean;
    clearValue(): void;
    getValue(): value_pb.MoneyProto | undefined;
    setValue(value?: value_pb.MoneyProto): void;

    getValueType(): ItemTemplateProto.Material.ValueTypeMap[keyof ItemTemplateProto.Material.ValueTypeMap];
    setValueType(value: ItemTemplateProto.Material.ValueTypeMap[keyof ItemTemplateProto.Material.ValueTypeMap]): void;

    getHpPerInch(): number;
    setHpPerInch(value: number): void;

    hasWeightMultiplier(): boolean;
    clearWeightMultiplier(): void;
    getWeightMultiplier(): value_pb.RationalProto | undefined;
    setWeightMultiplier(value?: value_pb.RationalProto): void;

    hasHpMultiplier(): boolean;
    clearHpMultiplier(): void;
    getHpMultiplier(): value_pb.RationalProto | undefined;
    setHpMultiplier(value?: value_pb.RationalProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Material.AsObject;
    static toObject(includeInstance: boolean, msg: Material): Material.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Material, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Material;
    static deserializeBinaryFromReader(message: Material, reader: jspb.BinaryReader): Material;
  }

  export namespace Material {
    export type AsObject = {
      value?: value_pb.MoneyProto.AsObject,
      valueType: ItemTemplateProto.Material.ValueTypeMap[keyof ItemTemplateProto.Material.ValueTypeMap],
      hpPerInch: number,
      weightMultiplier?: value_pb.RationalProto.AsObject,
      hpMultiplier?: value_pb.RationalProto.AsObject,
    }

    export interface ValueTypeMap {
      UNKNOWN: 0;
      PER_POUND: 1;
    }

    export const ValueType: ValueTypeMap;
  }

  export class Lore extends jspb.Message {
    clearChecksList(): void;
    getChecksList(): Array<ItemTemplateProto.Lore.Check>;
    setChecksList(value: Array<ItemTemplateProto.Lore.Check>): void;
    addChecks(value?: ItemTemplateProto.Lore.Check, index?: number): ItemTemplateProto.Lore.Check;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Lore.AsObject;
    static toObject(includeInstance: boolean, msg: Lore): Lore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Lore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Lore;
    static deserializeBinaryFromReader(message: Lore, reader: jspb.BinaryReader): Lore;
  }

  export namespace Lore {
    export type AsObject = {
      checksList: Array<ItemTemplateProto.Lore.Check.AsObject>,
      description: string,
    }

    export class Check extends jspb.Message {
      getSkill(): string;
      setSkill(value: string): void;

      getDc(): number;
      setDc(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Check.AsObject;
      static toObject(includeInstance: boolean, msg: Check): Check.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Check, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Check;
      static deserializeBinaryFromReader(message: Check, reader: jspb.BinaryReader): Check;
    }

    export namespace Check {
      export type AsObject = {
        skill: string,
        dc: number,
      }
    }
  }

  export interface ProbabilityMap {
    UNKNOWN: 0;
    COMMON: 1;
    UNCOMMON: 2;
    RARE: 3;
    VERY_RARE: 4;
    UNIQUE: 5;
  }

  export const Probability: ProbabilityMap;
}

export class ItemLookupProto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearTemplatesList(): void;
  getTemplatesList(): Array<string>;
  setTemplatesList(value: Array<string>): void;
  addTemplates(value: string, index?: number): string;

  clearCategoryOrList(): void;
  getCategoryOrList(): Array<string>;
  setCategoryOrList(value: Array<string>): void;
  addCategoryOr(value: string, index?: number): string;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): value_pb.MoneyProto | undefined;
  setValue(value?: value_pb.MoneyProto): void;

  hasValueMin(): boolean;
  clearValueMin(): void;
  getValueMin(): value_pb.MoneyProto | undefined;
  setValueMin(value?: value_pb.MoneyProto): void;

  hasValueMax(): boolean;
  clearValueMax(): void;
  getValueMax(): value_pb.MoneyProto | undefined;
  setValueMax(value?: value_pb.MoneyProto): void;

  hasWeightMin(): boolean;
  clearWeightMin(): void;
  getWeightMin(): value_pb.WeightProto | undefined;
  setWeightMin(value?: value_pb.WeightProto): void;

  hasWeightMax(): boolean;
  clearWeightMax(): void;
  getWeightMax(): value_pb.WeightProto | undefined;
  setWeightMax(value?: value_pb.WeightProto): void;

  clearSizeOrList(): void;
  getSizeOrList(): Array<value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap]>;
  setSizeOrList(value: Array<value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap]>): void;
  addSizeOr(value: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap], index?: number): value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap];

  clearMaterialOrList(): void;
  getMaterialOrList(): Array<ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap]>;
  setMaterialOrList(value: Array<ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap]>): void;
  addMaterialOr(value: ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap], index?: number): ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap];

  getHp(): number;
  setHp(value: number): void;

  getAppearance(): string;
  setAppearance(value: string): void;

  getDmNotes(): string;
  setDmNotes(value: string): void;

  getMultiple(): number;
  setMultiple(value: number): void;

  getMultiuse(): number;
  setMultiuse(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  hasTimeLeft(): boolean;
  clearTimeLeft(): void;
  getTimeLeft(): value_pb.DurationProto | undefined;
  setTimeLeft(value?: value_pb.DurationProto): void;

  clearContentList(): void;
  getContentList(): Array<ItemLookupProto>;
  setContentList(value: Array<ItemLookupProto>): void;
  addContent(value?: ItemLookupProto, index?: number): ItemLookupProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemLookupProto.AsObject;
  static toObject(includeInstance: boolean, msg: ItemLookupProto): ItemLookupProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemLookupProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemLookupProto;
  static deserializeBinaryFromReader(message: ItemLookupProto, reader: jspb.BinaryReader): ItemLookupProto;
}

export namespace ItemLookupProto {
  export type AsObject = {
    name: string,
    templatesList: Array<string>,
    categoryOrList: Array<string>,
    value?: value_pb.MoneyProto.AsObject,
    valueMin?: value_pb.MoneyProto.AsObject,
    valueMax?: value_pb.MoneyProto.AsObject,
    weightMin?: value_pb.WeightProto.AsObject,
    weightMax?: value_pb.WeightProto.AsObject,
    sizeOrList: Array<value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap]>,
    materialOrList: Array<ItemTemplateProto.Substance.MaterialMap[keyof ItemTemplateProto.Substance.MaterialMap]>,
    hp: number,
    appearance: string,
    dmNotes: string,
    multiple: number,
    multiuse: number,
    count: number,
    timeLeft?: value_pb.DurationProto.AsObject,
    contentList: Array<ItemLookupProto.AsObject>,
  }
}

export class LevelTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  getAbbreviation(): string;
  setAbbreviation(value: string): void;

  getAdventures(): string;
  setAdventures(value: string): void;

  getCharacteristics(): string;
  setCharacteristics(value: string): void;

  getAlignmentOptions(): string;
  setAlignmentOptions(value: string): void;

  getReligion(): string;
  setReligion(value: string): void;

  getBackground(): string;
  setBackground(value: string): void;

  getRaces(): string;
  setRaces(value: string): void;

  getOtherclasses(): string;
  setOtherclasses(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getImportantAbilities(): string;
  setImportantAbilities(value: string): void;

  clearAllowedAlignmentList(): void;
  getAllowedAlignmentList(): Array<value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap]>;
  setAllowedAlignmentList(value: Array<value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap]>): void;
  addAllowedAlignment(value: value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap], index?: number): value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap];

  hasHitDice(): boolean;
  clearHitDice(): void;
  getHitDice(): value_pb.DiceProto | undefined;
  setHitDice(value?: value_pb.DiceProto): void;

  getSkillPoints(): number;
  setSkillPoints(value: number): void;

  clearClassSkillList(): void;
  getClassSkillList(): Array<string>;
  setClassSkillList(value: Array<string>): void;
  addClassSkill(value: string, index?: number): string;

  getClassSkillsAny(): number;
  setClassSkillsAny(value: number): void;

  clearWeaponProficiencyList(): void;
  getWeaponProficiencyList(): Array<value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap]>;
  setWeaponProficiencyList(value: Array<value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap]>): void;
  addWeaponProficiency(value: value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap], index?: number): value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap];

  clearIndividualWeaponProficiencyList(): void;
  getIndividualWeaponProficiencyList(): Array<string>;
  setIndividualWeaponProficiencyList(value: Array<string>): void;
  addIndividualWeaponProficiency(value: string, index?: number): string;

  clearArmorProficiencyList(): void;
  getArmorProficiencyList(): Array<value_pb.ArmorTypeMap[keyof value_pb.ArmorTypeMap]>;
  setArmorProficiencyList(value: Array<value_pb.ArmorTypeMap[keyof value_pb.ArmorTypeMap]>): void;
  addArmorProficiency(value: value_pb.ArmorTypeMap[keyof value_pb.ArmorTypeMap], index?: number): value_pb.ArmorTypeMap[keyof value_pb.ArmorTypeMap];

  clearQualityList(): void;
  getQualityList(): Array<LeveledTemplateProto>;
  setQualityList(value: Array<LeveledTemplateProto>): void;
  addQuality(value?: LeveledTemplateProto, index?: number): LeveledTemplateProto;

  clearBaseAttackList(): void;
  getBaseAttackList(): Array<number>;
  setBaseAttackList(value: Array<number>): void;
  addBaseAttack(value: number, index?: number): number;

  getGoodFortitudeSave(): boolean;
  setGoodFortitudeSave(value: boolean): void;

  getGoodWillSave(): boolean;
  setGoodWillSave(value: boolean): void;

  getGoodReflexSave(): boolean;
  setGoodReflexSave(value: boolean): void;

  clearBonusFeatList(): void;
  getBonusFeatList(): Array<LeveledTemplateProto>;
  setBonusFeatList(value: Array<LeveledTemplateProto>): void;
  addBonusFeat(value?: LeveledTemplateProto, index?: number): LeveledTemplateProto;

  getSpellAbility(): value_pb.AbilityMap[keyof value_pb.AbilityMap];
  setSpellAbility(value: value_pb.AbilityMap[keyof value_pb.AbilityMap]): void;

  clearSpellsPerDayList(): void;
  getSpellsPerDayList(): Array<LevelTemplateProto.PerLevel>;
  setSpellsPerDayList(value: Array<LevelTemplateProto.PerLevel>): void;
  addSpellsPerDay(value?: LevelTemplateProto.PerLevel, index?: number): LevelTemplateProto.PerLevel;

  clearSpellsKnownList(): void;
  getSpellsKnownList(): Array<LevelTemplateProto.PerLevel>;
  setSpellsKnownList(value: Array<LevelTemplateProto.PerLevel>): void;
  addSpellsKnown(value?: LevelTemplateProto.PerLevel, index?: number): LevelTemplateProto.PerLevel;

  clearAutomaticFeatList(): void;
  getAutomaticFeatList(): Array<string>;
  setAutomaticFeatList(value: Array<string>): void;
  addAutomaticFeat(value: string, index?: number): string;

  clearRequirementList(): void;
  getRequirementList(): Array<LevelTemplateProto.Requirement>;
  setRequirementList(value: Array<LevelTemplateProto.Requirement>): void;
  addRequirement(value?: LevelTemplateProto.Requirement, index?: number): LevelTemplateProto.Requirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LevelTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: LevelTemplateProto): LevelTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LevelTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LevelTemplateProto;
  static deserializeBinaryFromReader(message: LevelTemplateProto, reader: jspb.BinaryReader): LevelTemplateProto;
}

export namespace LevelTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    abbreviation: string,
    adventures: string,
    characteristics: string,
    alignmentOptions: string,
    religion: string,
    background: string,
    races: string,
    otherclasses: string,
    role: string,
    importantAbilities: string,
    allowedAlignmentList: Array<value_pb.AlignmentProtoMap[keyof value_pb.AlignmentProtoMap]>,
    hitDice?: value_pb.DiceProto.AsObject,
    skillPoints: number,
    classSkillList: Array<string>,
    classSkillsAny: number,
    weaponProficiencyList: Array<value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap]>,
    individualWeaponProficiencyList: Array<string>,
    armorProficiencyList: Array<value_pb.ArmorTypeMap[keyof value_pb.ArmorTypeMap]>,
    qualityList: Array<LeveledTemplateProto.AsObject>,
    baseAttackList: Array<number>,
    goodFortitudeSave: boolean,
    goodWillSave: boolean,
    goodReflexSave: boolean,
    bonusFeatList: Array<LeveledTemplateProto.AsObject>,
    spellAbility: value_pb.AbilityMap[keyof value_pb.AbilityMap],
    spellsPerDayList: Array<LevelTemplateProto.PerLevel.AsObject>,
    spellsKnownList: Array<LevelTemplateProto.PerLevel.AsObject>,
    automaticFeatList: Array<string>,
    requirementList: Array<LevelTemplateProto.Requirement.AsObject>,
  }

  export class PerLevel extends jspb.Message {
    clearValueList(): void;
    getValueList(): Array<number>;
    setValueList(value: Array<number>): void;
    addValue(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerLevel.AsObject;
    static toObject(includeInstance: boolean, msg: PerLevel): PerLevel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerLevel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerLevel;
    static deserializeBinaryFromReader(message: PerLevel, reader: jspb.BinaryReader): PerLevel;
  }

  export namespace PerLevel {
    export type AsObject = {
      valueList: Array<number>,
    }
  }

  export class Requirement extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Requirement.AsObject;
    static toObject(includeInstance: boolean, msg: Requirement): Requirement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Requirement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Requirement;
    static deserializeBinaryFromReader(message: Requirement, reader: jspb.BinaryReader): Requirement;
  }

  export namespace Requirement {
    export type AsObject = {
      description: string,
    }
  }
}

export class QualityTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  getType(): QualityTemplateProto.TypeMap[keyof QualityTemplateProto.TypeMap];
  setType(value: QualityTemplateProto.TypeMap[keyof QualityTemplateProto.TypeMap]): void;

  hasSpeed(): boolean;
  clearSpeed(): void;
  getSpeed(): value_pb.SpeedProto | undefined;
  setSpeed(value?: value_pb.SpeedProto): void;

  hasSpeedExpression(): boolean;
  clearSpeedExpression(): void;
  getSpeedExpression(): value_pb.ExpressionProto | undefined;
  setSpeedExpression(value?: value_pb.ExpressionProto): void;

  clearAbilityModifierList(): void;
  getAbilityModifierList(): Array<QualityTemplateProto.AbilityModifier>;
  setAbilityModifierList(value: Array<QualityTemplateProto.AbilityModifier>): void;
  addAbilityModifier(value?: QualityTemplateProto.AbilityModifier, index?: number): QualityTemplateProto.AbilityModifier;

  clearImmunityList(): void;
  getImmunityList(): Array<QualityTemplateProto.ImmunityMap[keyof QualityTemplateProto.ImmunityMap]>;
  setImmunityList(value: Array<QualityTemplateProto.ImmunityMap[keyof QualityTemplateProto.ImmunityMap]>): void;
  addImmunity(value: QualityTemplateProto.ImmunityMap[keyof QualityTemplateProto.ImmunityMap], index?: number): QualityTemplateProto.ImmunityMap[keyof QualityTemplateProto.ImmunityMap];

  hasReflexModifier(): boolean;
  clearReflexModifier(): void;
  getReflexModifier(): value_pb.ModifierProto | undefined;
  setReflexModifier(value?: value_pb.ModifierProto): void;

  hasWillModifier(): boolean;
  clearWillModifier(): void;
  getWillModifier(): value_pb.ModifierProto | undefined;
  setWillModifier(value?: value_pb.ModifierProto): void;

  hasFortitudeModifier(): boolean;
  clearFortitudeModifier(): void;
  getFortitudeModifier(): value_pb.ModifierProto | undefined;
  setFortitudeModifier(value?: value_pb.ModifierProto): void;

  clearSkillModifierList(): void;
  getSkillModifierList(): Array<QualityTemplateProto.KeyedModifier>;
  setSkillModifierList(value: Array<QualityTemplateProto.KeyedModifier>): void;
  addSkillModifier(value?: QualityTemplateProto.KeyedModifier, index?: number): QualityTemplateProto.KeyedModifier;

  hasAttackModifier(): boolean;
  clearAttackModifier(): void;
  getAttackModifier(): value_pb.ModifierProto | undefined;
  setAttackModifier(value?: value_pb.ModifierProto): void;

  hasDamageModifier(): boolean;
  clearDamageModifier(): void;
  getDamageModifier(): value_pb.ModifierProto | undefined;
  setDamageModifier(value?: value_pb.ModifierProto): void;

  clearBonusFeatList(): void;
  getBonusFeatList(): Array<string>;
  setBonusFeatList(value: Array<string>): void;
  addBonusFeat(value: string, index?: number): string;

  getNameFormat(): string;
  setNameFormat(value: string): void;

  hasAcModifier(): boolean;
  clearAcModifier(): void;
  getAcModifier(): value_pb.ModifierProto | undefined;
  setAcModifier(value?: value_pb.ModifierProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QualityTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: QualityTemplateProto): QualityTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QualityTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QualityTemplateProto;
  static deserializeBinaryFromReader(message: QualityTemplateProto, reader: jspb.BinaryReader): QualityTemplateProto;
}

export namespace QualityTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    type: QualityTemplateProto.TypeMap[keyof QualityTemplateProto.TypeMap],
    speed?: value_pb.SpeedProto.AsObject,
    speedExpression?: value_pb.ExpressionProto.AsObject,
    abilityModifierList: Array<QualityTemplateProto.AbilityModifier.AsObject>,
    immunityList: Array<QualityTemplateProto.ImmunityMap[keyof QualityTemplateProto.ImmunityMap]>,
    reflexModifier?: value_pb.ModifierProto.AsObject,
    willModifier?: value_pb.ModifierProto.AsObject,
    fortitudeModifier?: value_pb.ModifierProto.AsObject,
    skillModifierList: Array<QualityTemplateProto.KeyedModifier.AsObject>,
    attackModifier?: value_pb.ModifierProto.AsObject,
    damageModifier?: value_pb.ModifierProto.AsObject,
    bonusFeatList: Array<string>,
    nameFormat: string,
    acModifier?: value_pb.ModifierProto.AsObject,
  }

  export class AbilityModifier extends jspb.Message {
    getAbility(): value_pb.AbilityMap[keyof value_pb.AbilityMap];
    setAbility(value: value_pb.AbilityMap[keyof value_pb.AbilityMap]): void;

    hasModifier(): boolean;
    clearModifier(): void;
    getModifier(): value_pb.ModifierProto | undefined;
    setModifier(value?: value_pb.ModifierProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbilityModifier.AsObject;
    static toObject(includeInstance: boolean, msg: AbilityModifier): AbilityModifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbilityModifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbilityModifier;
    static deserializeBinaryFromReader(message: AbilityModifier, reader: jspb.BinaryReader): AbilityModifier;
  }

  export namespace AbilityModifier {
    export type AsObject = {
      ability: value_pb.AbilityMap[keyof value_pb.AbilityMap],
      modifier?: value_pb.ModifierProto.AsObject,
    }
  }

  export class KeyedModifier extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    hasModifier(): boolean;
    clearModifier(): void;
    getModifier(): value_pb.ModifierProto | undefined;
    setModifier(value?: value_pb.ModifierProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyedModifier.AsObject;
    static toObject(includeInstance: boolean, msg: KeyedModifier): KeyedModifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyedModifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyedModifier;
    static deserializeBinaryFromReader(message: KeyedModifier, reader: jspb.BinaryReader): KeyedModifier;
  }

  export namespace KeyedModifier {
    export type AsObject = {
      key: string,
      modifier?: value_pb.ModifierProto.AsObject,
    }
  }

  export interface TypeMap {
    UNKNOWN: 0;
    EXTRAORDINARY: 1;
    SPELL_LIKE: 2;
    SUPERNATURAL: 3;
  }

  export const Type: TypeMap;

  export interface ImmunityMap {
    UNKNOWN_IMMUNITY: 0;
    SLEEP_SPELLS: 1;
    SLEEP_EFFECTS: 2;
  }

  export const Immunity: ImmunityMap;
}

export class ParametrizedTemplateProto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): value_pb.ParametersProto | undefined;
  setParameters(value?: value_pb.ParametersProto): void;

  getPerDay(): number;
  setPerDay(value: number): void;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): value_pb.ConditionalProto | undefined;
  setCondition(value?: value_pb.ConditionalProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParametrizedTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: ParametrizedTemplateProto): ParametrizedTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParametrizedTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParametrizedTemplateProto;
  static deserializeBinaryFromReader(message: ParametrizedTemplateProto, reader: jspb.BinaryReader): ParametrizedTemplateProto;
}

export namespace ParametrizedTemplateProto {
  export type AsObject = {
    name: string,
    title: string,
    parameters?: value_pb.ParametersProto.AsObject,
    perDay: number,
    condition?: value_pb.ConditionalProto.AsObject,
  }
}

export class LeveledTemplateProto extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): ParametrizedTemplateProto | undefined;
  setTemplate(value?: ParametrizedTemplateProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeveledTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: LeveledTemplateProto): LeveledTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeveledTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeveledTemplateProto;
  static deserializeBinaryFromReader(message: LeveledTemplateProto, reader: jspb.BinaryReader): LeveledTemplateProto;
}

export namespace LeveledTemplateProto {
  export type AsObject = {
    level: number,
    template?: ParametrizedTemplateProto.AsObject,
  }
}

export class WeaponTemplateProto extends jspb.Message {
  hasDamage(): boolean;
  clearDamage(): void;
  getDamage(): value_pb.DamageProto | undefined;
  setDamage(value?: value_pb.DamageProto): void;

  hasSecondaryDamage(): boolean;
  clearSecondaryDamage(): void;
  getSecondaryDamage(): value_pb.DamageProto | undefined;
  setSecondaryDamage(value?: value_pb.DamageProto): void;

  hasSplash(): boolean;
  clearSplash(): void;
  getSplash(): value_pb.DamageProto | undefined;
  setSplash(value?: value_pb.DamageProto): void;

  getType(): WeaponTemplateProto.TypeMap[keyof WeaponTemplateProto.TypeMap];
  setType(value: WeaponTemplateProto.TypeMap[keyof WeaponTemplateProto.TypeMap]): void;

  hasCritical(): boolean;
  clearCritical(): void;
  getCritical(): value_pb.CriticalProto | undefined;
  setCritical(value?: value_pb.CriticalProto): void;

  getStyle(): value_pb.WeaponStyleMap[keyof value_pb.WeaponStyleMap];
  setStyle(value: value_pb.WeaponStyleMap[keyof value_pb.WeaponStyleMap]): void;

  getProficiency(): value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap];
  setProficiency(value: value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap]): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): value_pb.DistanceProto | undefined;
  setRange(value?: value_pb.DistanceProto): void;

  hasReach(): boolean;
  clearReach(): void;
  getReach(): value_pb.DistanceProto | undefined;
  setReach(value?: value_pb.DistanceProto): void;

  getMaxAttacks(): number;
  setMaxAttacks(value: number): void;

  getFinesse(): boolean;
  setFinesse(value: boolean): void;

  getAmmunition(): boolean;
  setAmmunition(value: boolean): void;

  clearAmmunitionNeededList(): void;
  getAmmunitionNeededList(): Array<string>;
  setAmmunitionNeededList(value: Array<string>): void;
  addAmmunitionNeeded(value: string, index?: number): string;

  getWielderSize(): value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap];
  setWielderSize(value: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeaponTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: WeaponTemplateProto): WeaponTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeaponTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeaponTemplateProto;
  static deserializeBinaryFromReader(message: WeaponTemplateProto, reader: jspb.BinaryReader): WeaponTemplateProto;
}

export namespace WeaponTemplateProto {
  export type AsObject = {
    damage?: value_pb.DamageProto.AsObject,
    secondaryDamage?: value_pb.DamageProto.AsObject,
    splash?: value_pb.DamageProto.AsObject,
    type: WeaponTemplateProto.TypeMap[keyof WeaponTemplateProto.TypeMap],
    critical?: value_pb.CriticalProto.AsObject,
    style: value_pb.WeaponStyleMap[keyof value_pb.WeaponStyleMap],
    proficiency: value_pb.ProficiencyMap[keyof value_pb.ProficiencyMap],
    range?: value_pb.DistanceProto.AsObject,
    reach?: value_pb.DistanceProto.AsObject,
    maxAttacks: number,
    finesse: boolean,
    ammunition: boolean,
    ammunitionNeededList: Array<string>,
    wielderSize: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap],
  }

  export interface TypeMap {
    UNKNOWN: 0;
    PIERCING_OR_SLASHING: 1;
    BLUDGEONING_OR_PIERCING: 2;
    BLUDGEONING_AND_PIERCING: 3;
    SLASHING_OR_PIERCING: 4;
    SLASHING: 5;
    BLUDGEONING: 6;
    PIERCING: 7;
    GRENADE: 8;
    NONE: 9;
  }

  export const Type: TypeMap;
}

export class WearableTemplateProto extends jspb.Message {
  getSlot(): WearableTemplateProto.SlotMap[keyof WearableTemplateProto.SlotMap];
  setSlot(value: WearableTemplateProto.SlotMap[keyof WearableTemplateProto.SlotMap]): void;

  hasWear(): boolean;
  clearWear(): void;
  getWear(): value_pb.RandomDurationProto | undefined;
  setWear(value?: value_pb.RandomDurationProto): void;

  hasWearHastily(): boolean;
  clearWearHastily(): void;
  getWearHastily(): value_pb.RandomDurationProto | undefined;
  setWearHastily(value?: value_pb.RandomDurationProto): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): value_pb.RandomDurationProto | undefined;
  setRemove(value?: value_pb.RandomDurationProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WearableTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: WearableTemplateProto): WearableTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WearableTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WearableTemplateProto;
  static deserializeBinaryFromReader(message: WearableTemplateProto, reader: jspb.BinaryReader): WearableTemplateProto;
}

export namespace WearableTemplateProto {
  export type AsObject = {
    slot: WearableTemplateProto.SlotMap[keyof WearableTemplateProto.SlotMap],
    wear?: value_pb.RandomDurationProto.AsObject,
    wearHastily?: value_pb.RandomDurationProto.AsObject,
    remove?: value_pb.RandomDurationProto.AsObject,
  }

  export interface SlotMap {
    UNKNOWN: 0;
    HEAD: 1;
    NECK: 2;
    TORSO: 3;
    BODY: 4;
    WAIST: 5;
    SHOULDERS: 6;
    HANDS: 7;
    HAND: 8;
    FINGER: 9;
    WRISTS: 10;
    FEET: 11;
    EYES: 12;
  }

  export const Slot: SlotMap;
}

export class IncompleteTemplateProto extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncompleteTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: IncompleteTemplateProto): IncompleteTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncompleteTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncompleteTemplateProto;
  static deserializeBinaryFromReader(message: IncompleteTemplateProto, reader: jspb.BinaryReader): IncompleteTemplateProto;
}

export namespace IncompleteTemplateProto {
  export type AsObject = {
    text: string,
  }
}

export class MagicTemplateProto extends jspb.Message {
  clearModifierList(): void;
  getModifierList(): Array<MagicTemplateProto.Modifier>;
  setModifierList(value: Array<MagicTemplateProto.Modifier>): void;
  addModifier(value?: MagicTemplateProto.Modifier, index?: number): MagicTemplateProto.Modifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MagicTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: MagicTemplateProto): MagicTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MagicTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MagicTemplateProto;
  static deserializeBinaryFromReader(message: MagicTemplateProto, reader: jspb.BinaryReader): MagicTemplateProto;
}

export namespace MagicTemplateProto {
  export type AsObject = {
    modifierList: Array<MagicTemplateProto.Modifier.AsObject>,
  }

  export class Modifier extends jspb.Message {
    getType(): MagicTemplateProto.TypeMap[keyof MagicTemplateProto.TypeMap];
    setType(value: MagicTemplateProto.TypeMap[keyof MagicTemplateProto.TypeMap]): void;

    hasModifier(): boolean;
    clearModifier(): void;
    getModifier(): value_pb.ModifierProto | undefined;
    setModifier(value?: value_pb.ModifierProto): void;

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
      type: MagicTemplateProto.TypeMap[keyof MagicTemplateProto.TypeMap],
      modifier?: value_pb.ModifierProto.AsObject,
    }
  }

  export interface TypeMap {
    UNKNOWN: 0;
    STRENGTH: 1;
    DEXTERITY: 2;
    CONSTITUTION: 3;
    INTELLIGENCE: 4;
    WISDOM: 5;
    CHARISMA: 6;
    ATTACK: 7;
    DAMAGE: 8;
    ARMOR_CLASS: 9;
    HIDE: 10;
    MOVE_SILENTLY: 11;
    REFLEX: 12;
    WILL: 13;
    FORTITUDE: 14;
  }

  export const Type: TypeMap;
}

export class CountedTemplateProto extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getUnit(): CountedTemplateProto.UnitMap[keyof CountedTemplateProto.UnitMap];
  setUnit(value: CountedTemplateProto.UnitMap[keyof CountedTemplateProto.UnitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountedTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: CountedTemplateProto): CountedTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountedTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountedTemplateProto;
  static deserializeBinaryFromReader(message: CountedTemplateProto, reader: jspb.BinaryReader): CountedTemplateProto;
}

export namespace CountedTemplateProto {
  export type AsObject = {
    count: number,
    unit: CountedTemplateProto.UnitMap[keyof CountedTemplateProto.UnitMap],
  }

  export interface UnitMap {
    UNKNOWN: 0;
    DAY: 1;
    PIECE: 2;
    SHEET: 3;
    USE: 4;
    PAGE: 5;
    CHARGE: 6;
    APPLICATION: 7;
    DAMAGE: 8;
  }

  export const Unit: UnitMap;
}

export class MultipleTemplateProto extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getUnit(): CountedTemplateProto.UnitMap[keyof CountedTemplateProto.UnitMap];
  setUnit(value: CountedTemplateProto.UnitMap[keyof CountedTemplateProto.UnitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleTemplateProto): MultipleTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultipleTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleTemplateProto;
  static deserializeBinaryFromReader(message: MultipleTemplateProto, reader: jspb.BinaryReader): MultipleTemplateProto;
}

export namespace MultipleTemplateProto {
  export type AsObject = {
    count: number,
    unit: CountedTemplateProto.UnitMap[keyof CountedTemplateProto.UnitMap],
  }
}

export class MultiuseTemplateProto extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiuseTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: MultiuseTemplateProto): MultiuseTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiuseTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiuseTemplateProto;
  static deserializeBinaryFromReader(message: MultiuseTemplateProto, reader: jspb.BinaryReader): MultiuseTemplateProto;
}

export namespace MultiuseTemplateProto {
  export type AsObject = {
    count: number,
  }
}

export class TimedTemplateProto extends jspb.Message {
  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): value_pb.RandomDurationProto | undefined;
  setDuration(value?: value_pb.RandomDurationProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimedTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: TimedTemplateProto): TimedTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimedTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimedTemplateProto;
  static deserializeBinaryFromReader(message: TimedTemplateProto, reader: jspb.BinaryReader): TimedTemplateProto;
}

export namespace TimedTemplateProto {
  export type AsObject = {
    duration?: value_pb.RandomDurationProto.AsObject,
  }
}

export class CommodityTemplateProto extends jspb.Message {
  hasArea(): boolean;
  clearArea(): void;
  getArea(): value_pb.AreaProto | undefined;
  setArea(value?: value_pb.AreaProto): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): value_pb.DistanceProto | undefined;
  setLength(value?: value_pb.DistanceProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommodityTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: CommodityTemplateProto): CommodityTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommodityTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommodityTemplateProto;
  static deserializeBinaryFromReader(message: CommodityTemplateProto, reader: jspb.BinaryReader): CommodityTemplateProto;
}

export namespace CommodityTemplateProto {
  export type AsObject = {
    area?: value_pb.AreaProto.AsObject,
    length?: value_pb.DistanceProto.AsObject,
  }
}

export class ContainerTemplateProto extends jspb.Message {
  hasCapacity(): boolean;
  clearCapacity(): void;
  getCapacity(): value_pb.VolumeProto | undefined;
  setCapacity(value?: value_pb.VolumeProto): void;

  getState(): ContainerTemplateProto.StateMap[keyof ContainerTemplateProto.StateMap];
  setState(value: ContainerTemplateProto.StateMap[keyof ContainerTemplateProto.StateMap]): void;

  getFixedWeight(): boolean;
  setFixedWeight(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerTemplateProto): ContainerTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerTemplateProto;
  static deserializeBinaryFromReader(message: ContainerTemplateProto, reader: jspb.BinaryReader): ContainerTemplateProto;
}

export namespace ContainerTemplateProto {
  export type AsObject = {
    capacity?: value_pb.VolumeProto.AsObject,
    state: ContainerTemplateProto.StateMap[keyof ContainerTemplateProto.StateMap],
    fixedWeight: boolean,
  }

  export interface StateMap {
    UNKNOWN: 0;
    SOLID: 1;
    GRANULAR: 2;
    LIQUID: 3;
    GASEOUS: 4;
  }

  export const State: StateMap;
}

export class ArmorTemplateProto extends jspb.Message {
  hasAcBonus(): boolean;
  clearAcBonus(): void;
  getAcBonus(): value_pb.ModifierProto | undefined;
  setAcBonus(value?: value_pb.ModifierProto): void;

  getType(): ArmorTemplateProto.TypeMap[keyof ArmorTemplateProto.TypeMap];
  setType(value: ArmorTemplateProto.TypeMap[keyof ArmorTemplateProto.TypeMap]): void;

  getMaxDexterity(): number;
  setMaxDexterity(value: number): void;

  getCheckPenalty(): number;
  setCheckPenalty(value: number): void;

  getArcaneFailure(): number;
  setArcaneFailure(value: number): void;

  getSpeedFast(): number;
  setSpeedFast(value: number): void;

  getSpeedSlow(): number;
  setSpeedSlow(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmorTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: ArmorTemplateProto): ArmorTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmorTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmorTemplateProto;
  static deserializeBinaryFromReader(message: ArmorTemplateProto, reader: jspb.BinaryReader): ArmorTemplateProto;
}

export namespace ArmorTemplateProto {
  export type AsObject = {
    acBonus?: value_pb.ModifierProto.AsObject,
    type: ArmorTemplateProto.TypeMap[keyof ArmorTemplateProto.TypeMap],
    maxDexterity: number,
    checkPenalty: number,
    arcaneFailure: number,
    speedFast: number,
    speedSlow: number,
  }

  export interface TypeMap {
    UNKNOWN: 0;
    LIGHT: 1;
    MEDIUM: 2;
    HEAVY: 3;
    SHIELD: 4;
    TOWER_SHIELD: 5;
    NONE: 6;
  }

  export const Type: TypeMap;
}

export class LightTemplateProto extends jspb.Message {
  hasBright(): boolean;
  clearBright(): void;
  getBright(): LightTemplateProto.Light | undefined;
  setBright(value?: LightTemplateProto.Light): void;

  hasShadowy(): boolean;
  clearShadowy(): void;
  getShadowy(): LightTemplateProto.Light | undefined;
  setShadowy(value?: LightTemplateProto.Light): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: LightTemplateProto): LightTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LightTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightTemplateProto;
  static deserializeBinaryFromReader(message: LightTemplateProto, reader: jspb.BinaryReader): LightTemplateProto;
}

export namespace LightTemplateProto {
  export type AsObject = {
    bright?: LightTemplateProto.Light.AsObject,
    shadowy?: LightTemplateProto.Light.AsObject,
  }

  export class Light extends jspb.Message {
    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): value_pb.DistanceProto | undefined;
    setDistance(value?: value_pb.DistanceProto): void;

    getShape(): LightTemplateProto.Light.ShapeMap[keyof LightTemplateProto.Light.ShapeMap];
    setShape(value: LightTemplateProto.Light.ShapeMap[keyof LightTemplateProto.Light.ShapeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Light.AsObject;
    static toObject(includeInstance: boolean, msg: Light): Light.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Light, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Light;
    static deserializeBinaryFromReader(message: Light, reader: jspb.BinaryReader): Light;
  }

  export namespace Light {
    export type AsObject = {
      distance?: value_pb.DistanceProto.AsObject,
      shape: LightTemplateProto.Light.ShapeMap[keyof LightTemplateProto.Light.ShapeMap],
    }

    export interface ShapeMap {
      UNKNOWN: 0;
      CONE: 1;
      CYLINDER: 2;
      LINE: 3;
      SPHERE: 4;
    }

    export const Shape: ShapeMap;
  }
}

export class CompositeTemplateProto extends jspb.Message {
  clearContainsList(): void;
  getContainsList(): Array<CompositeTemplateProto.Or>;
  setContainsList(value: Array<CompositeTemplateProto.Or>): void;
  addContains(value?: CompositeTemplateProto.Or, index?: number): CompositeTemplateProto.Or;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositeTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: CompositeTemplateProto): CompositeTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositeTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositeTemplateProto;
  static deserializeBinaryFromReader(message: CompositeTemplateProto, reader: jspb.BinaryReader): CompositeTemplateProto;
}

export namespace CompositeTemplateProto {
  export type AsObject = {
    containsList: Array<CompositeTemplateProto.Or.AsObject>,
  }

  export class Or extends jspb.Message {
    clearNameList(): void;
    getNameList(): Array<string>;
    setNameList(value: Array<string>): void;
    addName(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Or.AsObject;
    static toObject(includeInstance: boolean, msg: Or): Or.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Or, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Or;
    static deserializeBinaryFromReader(message: Or, reader: jspb.BinaryReader): Or;
  }

  export namespace Or {
    export type AsObject = {
      nameList: Array<string>,
    }
  }
}

export class FeatTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  getType(): value_pb.FeatTypeMap[keyof value_pb.FeatTypeMap];
  setType(value: value_pb.FeatTypeMap[keyof value_pb.FeatTypeMap]): void;

  getBenefit(): string;
  setBenefit(value: string): void;

  getSpecial(): string;
  setSpecial(value: string): void;

  getNormal(): string;
  setNormal(value: string): void;

  getPrerequisites(): string;
  setPrerequisites(value: string): void;

  hasAttackModifier(): boolean;
  clearAttackModifier(): void;
  getAttackModifier(): value_pb.ModifierProto | undefined;
  setAttackModifier(value?: value_pb.ModifierProto): void;

  hasDamageModifier(): boolean;
  clearDamageModifier(): void;
  getDamageModifier(): value_pb.ModifierProto | undefined;
  setDamageModifier(value?: value_pb.ModifierProto): void;

  getAdditionalAttacks(): number;
  setAdditionalAttacks(value: number): void;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): value_pb.RestrictionProto | undefined;
  setCondition(value?: value_pb.RestrictionProto): void;

  hasInitiativeModifier(): boolean;
  clearInitiativeModifier(): void;
  getInitiativeModifier(): value_pb.ModifierProto | undefined;
  setInitiativeModifier(value?: value_pb.ModifierProto): void;

  clearSkillModifierList(): void;
  getSkillModifierList(): Array<value_pb.NameAndModifierProto>;
  setSkillModifierList(value: Array<value_pb.NameAndModifierProto>): void;
  addSkillModifier(value?: value_pb.NameAndModifierProto, index?: number): value_pb.NameAndModifierProto;

  hasStrengthModifier(): boolean;
  clearStrengthModifier(): void;
  getStrengthModifier(): value_pb.ModifierProto | undefined;
  setStrengthModifier(value?: value_pb.ModifierProto): void;

  hasDexterityModifier(): boolean;
  clearDexterityModifier(): void;
  getDexterityModifier(): value_pb.ModifierProto | undefined;
  setDexterityModifier(value?: value_pb.ModifierProto): void;

  hasConstitutionModifier(): boolean;
  clearConstitutionModifier(): void;
  getConstitutionModifier(): value_pb.ModifierProto | undefined;
  setConstitutionModifier(value?: value_pb.ModifierProto): void;

  hasIntelligenceModifier(): boolean;
  clearIntelligenceModifier(): void;
  getIntelligenceModifier(): value_pb.ModifierProto | undefined;
  setIntelligenceModifier(value?: value_pb.ModifierProto): void;

  hasWisdomModifier(): boolean;
  clearWisdomModifier(): void;
  getWisdomModifier(): value_pb.ModifierProto | undefined;
  setWisdomModifier(value?: value_pb.ModifierProto): void;

  hasCharismaModifier(): boolean;
  clearCharismaModifier(): void;
  getCharismaModifier(): value_pb.ModifierProto | undefined;
  setCharismaModifier(value?: value_pb.ModifierProto): void;

  hasFortitudeModifier(): boolean;
  clearFortitudeModifier(): void;
  getFortitudeModifier(): value_pb.ModifierProto | undefined;
  setFortitudeModifier(value?: value_pb.ModifierProto): void;

  hasWillModifier(): boolean;
  clearWillModifier(): void;
  getWillModifier(): value_pb.ModifierProto | undefined;
  setWillModifier(value?: value_pb.ModifierProto): void;

  hasReflexModifier(): boolean;
  clearReflexModifier(): void;
  getReflexModifier(): value_pb.ModifierProto | undefined;
  setReflexModifier(value?: value_pb.ModifierProto): void;

  getRequiresQualifier(): FeatTemplateProto.QualifierMap[keyof FeatTemplateProto.QualifierMap];
  setRequiresQualifier(value: FeatTemplateProto.QualifierMap[keyof FeatTemplateProto.QualifierMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: FeatTemplateProto): FeatTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatTemplateProto;
  static deserializeBinaryFromReader(message: FeatTemplateProto, reader: jspb.BinaryReader): FeatTemplateProto;
}

export namespace FeatTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    type: value_pb.FeatTypeMap[keyof value_pb.FeatTypeMap],
    benefit: string,
    special: string,
    normal: string,
    prerequisites: string,
    attackModifier?: value_pb.ModifierProto.AsObject,
    damageModifier?: value_pb.ModifierProto.AsObject,
    additionalAttacks: number,
    condition?: value_pb.RestrictionProto.AsObject,
    initiativeModifier?: value_pb.ModifierProto.AsObject,
    skillModifierList: Array<value_pb.NameAndModifierProto.AsObject>,
    strengthModifier?: value_pb.ModifierProto.AsObject,
    dexterityModifier?: value_pb.ModifierProto.AsObject,
    constitutionModifier?: value_pb.ModifierProto.AsObject,
    intelligenceModifier?: value_pb.ModifierProto.AsObject,
    wisdomModifier?: value_pb.ModifierProto.AsObject,
    charismaModifier?: value_pb.ModifierProto.AsObject,
    fortitudeModifier?: value_pb.ModifierProto.AsObject,
    willModifier?: value_pb.ModifierProto.AsObject,
    reflexModifier?: value_pb.ModifierProto.AsObject,
    requiresQualifier: FeatTemplateProto.QualifierMap[keyof FeatTemplateProto.QualifierMap],
  }

  export interface QualifierMap {
    UNKNOWN: 0;
    NONE: 1;
    WEAPON: 2;
    SCHOOL: 3;
    SKILL: 4;
    SPELLS: 5;
  }

  export const Qualifier: QualifierMap;
}

export class MiniatureProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  getSet(): string;
  setSet(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  getNumberAffix(): string;
  setNumberAffix(value: string): void;

  getRace(): string;
  setRace(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearSubtypeList(): void;
  getSubtypeList(): Array<string>;
  setSubtypeList(value: Array<string>): void;
  addSubtype(value: string, index?: number): string;

  clearClassList(): void;
  getClassList(): Array<string>;
  setClassList(value: Array<string>): void;
  addClass(value: string, index?: number): string;

  getSize(): value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap];
  setSize(value: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap]): void;

  getRarity(): MiniatureProto.RarityMap[keyof MiniatureProto.RarityMap];
  setRarity(value: MiniatureProto.RarityMap[keyof MiniatureProto.RarityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MiniatureProto.AsObject;
  static toObject(includeInstance: boolean, msg: MiniatureProto): MiniatureProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MiniatureProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MiniatureProto;
  static deserializeBinaryFromReader(message: MiniatureProto, reader: jspb.BinaryReader): MiniatureProto;
}

export namespace MiniatureProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    set: string,
    number: number,
    numberAffix: string,
    race: string,
    type: string,
    subtypeList: Array<string>,
    classList: Array<string>,
    size: value_pb.SizeProtoMap[keyof value_pb.SizeProtoMap],
    rarity: MiniatureProto.RarityMap[keyof MiniatureProto.RarityMap],
  }

  export interface RarityMap {
    UNKNOWN: 0;
    UNDEFINED: 1;
    COMMON: 2;
    UNCOMMON: 3;
    RARE: 4;
    ULTRA_RARE: 5;
    UNIQUE: 6;
    SPECIAL: 7;
  }

  export const Rarity: RarityMap;
}

export class MiniaturesProto extends jspb.Message {
  clearMiniaturesList(): void;
  getMiniaturesList(): Array<MiniatureProto>;
  setMiniaturesList(value: Array<MiniatureProto>): void;
  addMiniatures(value?: MiniatureProto, index?: number): MiniatureProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MiniaturesProto.AsObject;
  static toObject(includeInstance: boolean, msg: MiniaturesProto): MiniaturesProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MiniaturesProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MiniaturesProto;
  static deserializeBinaryFromReader(message: MiniaturesProto, reader: jspb.BinaryReader): MiniaturesProto;
}

export namespace MiniaturesProto {
  export type AsObject = {
    miniaturesList: Array<MiniatureProto.AsObject>,
  }
}

export class SkillTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  getAbility(): value_pb.AbilityMap[keyof value_pb.AbilityMap];
  setAbility(value: value_pb.AbilityMap[keyof value_pb.AbilityMap]): void;

  getCheck(): string;
  setCheck(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getRetry(): string;
  setRetry(value: string): void;

  getSpecial(): string;
  setSpecial(value: string): void;

  getSynergyText(): string;
  setSynergyText(value: string): void;

  getRestrictionText(): string;
  setRestrictionText(value: string): void;

  getUntrained(): string;
  setUntrained(value: string): void;

  clearRestrictionList(): void;
  getRestrictionList(): Array<SkillTemplateProto.RestrictionMap[keyof SkillTemplateProto.RestrictionMap]>;
  setRestrictionList(value: Array<SkillTemplateProto.RestrictionMap[keyof SkillTemplateProto.RestrictionMap]>): void;
  addRestriction(value: SkillTemplateProto.RestrictionMap[keyof SkillTemplateProto.RestrictionMap], index?: number): SkillTemplateProto.RestrictionMap[keyof SkillTemplateProto.RestrictionMap];

  clearModifierList(): void;
  getModifierList(): Array<SkillTemplateProto.ModifierMap[keyof SkillTemplateProto.ModifierMap]>;
  setModifierList(value: Array<SkillTemplateProto.ModifierMap[keyof SkillTemplateProto.ModifierMap]>): void;
  addModifier(value: SkillTemplateProto.ModifierMap[keyof SkillTemplateProto.ModifierMap], index?: number): SkillTemplateProto.ModifierMap[keyof SkillTemplateProto.ModifierMap];

  clearDcList(): void;
  getDcList(): Array<SkillTemplateProto.DC>;
  setDcList(value: Array<SkillTemplateProto.DC>): void;
  addDc(value?: SkillTemplateProto.DC, index?: number): SkillTemplateProto.DC;

  clearSynergyList(): void;
  getSynergyList(): Array<SkillTemplateProto.Synergy>;
  setSynergyList(value: Array<SkillTemplateProto.Synergy>): void;
  addSynergy(value?: SkillTemplateProto.Synergy, index?: number): SkillTemplateProto.Synergy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: SkillTemplateProto): SkillTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillTemplateProto;
  static deserializeBinaryFromReader(message: SkillTemplateProto, reader: jspb.BinaryReader): SkillTemplateProto;
}

export namespace SkillTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    ability: value_pb.AbilityMap[keyof value_pb.AbilityMap],
    check: string,
    action: string,
    retry: string,
    special: string,
    synergyText: string,
    restrictionText: string,
    untrained: string,
    restrictionList: Array<SkillTemplateProto.RestrictionMap[keyof SkillTemplateProto.RestrictionMap]>,
    modifierList: Array<SkillTemplateProto.ModifierMap[keyof SkillTemplateProto.ModifierMap]>,
    dcList: Array<SkillTemplateProto.DC.AsObject>,
    synergyList: Array<SkillTemplateProto.Synergy.AsObject>,
  }

  export class DC extends jspb.Message {
    getNumber(): number;
    setNumber(value: number): void;

    getText(): string;
    setText(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DC.AsObject;
    static toObject(includeInstance: boolean, msg: DC): DC.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DC, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DC;
    static deserializeBinaryFromReader(message: DC, reader: jspb.BinaryReader): DC;
  }

  export namespace DC {
    export type AsObject = {
      number: number,
      text: string,
    }
  }

  export class Synergy extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getCondition(): string;
    setCondition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Synergy.AsObject;
    static toObject(includeInstance: boolean, msg: Synergy): Synergy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Synergy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Synergy;
    static deserializeBinaryFromReader(message: Synergy, reader: jspb.BinaryReader): Synergy;
  }

  export namespace Synergy {
    export type AsObject = {
      name: string,
      condition: string,
    }
  }

  export interface RestrictionMap {
    UNKNOWN_RESTRICTION: 0;
    TRAINED_ONLY: 1;
    ARMOR_CHECK_PENALTY: 2;
    SUBTYPE_ONLY: 3;
    DOUBLE_ARMOR_CHECK_PENALTY: 4;
  }

  export const Restriction: RestrictionMap;

  export interface ModifierMap {
    UNKNOWN_MODIFIER: 0;
    SPEED: 1;
    SIZE: 2;
  }

  export const Modifier: ModifierMap;
}

export class SpellProto extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): CommonProto | undefined;
  setCommon(value?: CommonProto): void;

  getSchool(): SpellProto.SchoolMap[keyof SpellProto.SchoolMap];
  setSchool(value: SpellProto.SchoolMap[keyof SpellProto.SchoolMap]): void;

  getLevel(): number;
  setLevel(value: number): void;

  clearSpellClassList(): void;
  getSpellClassList(): Array<value_pb.SpellClassMap[keyof value_pb.SpellClassMap]>;
  setSpellClassList(value: Array<value_pb.SpellClassMap[keyof value_pb.SpellClassMap]>): void;
  addSpellClass(value: value_pb.SpellClassMap[keyof value_pb.SpellClassMap], index?: number): value_pb.SpellClassMap[keyof value_pb.SpellClassMap];

  getComponentVerbose(): boolean;
  setComponentVerbose(value: boolean): void;

  getComponentSomatic(): boolean;
  setComponentSomatic(value: boolean): void;

  getComponentMaterial(): boolean;
  setComponentMaterial(value: boolean): void;

  clearMaterialList(): void;
  getMaterialList(): Array<string>;
  setMaterialList(value: Array<string>): void;
  addMaterial(value: string, index?: number): string;

  hasCastingTime(): boolean;
  clearCastingTime(): void;
  getCastingTime(): value_pb.DurationProto | undefined;
  setCastingTime(value?: value_pb.DurationProto): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): SpellProto.Duration | undefined;
  setDuration(value?: SpellProto.Duration): void;

  getTarget(): string;
  setTarget(value: string): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): SpellProto.Range | undefined;
  setRange(value?: SpellProto.Range): void;

  getHigherLevels(): string;
  setHigherLevels(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpellProto.AsObject;
  static toObject(includeInstance: boolean, msg: SpellProto): SpellProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpellProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpellProto;
  static deserializeBinaryFromReader(message: SpellProto, reader: jspb.BinaryReader): SpellProto;
}

export namespace SpellProto {
  export type AsObject = {
    common?: CommonProto.AsObject,
    school: SpellProto.SchoolMap[keyof SpellProto.SchoolMap],
    level: number,
    spellClassList: Array<value_pb.SpellClassMap[keyof value_pb.SpellClassMap]>,
    componentVerbose: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    materialList: Array<string>,
    castingTime?: value_pb.DurationProto.AsObject,
    duration?: SpellProto.Duration.AsObject,
    target: string,
    range?: SpellProto.Range.AsObject,
    higherLevels: string,
  }

  export class Duration extends jspb.Message {
    hasTime(): boolean;
    clearTime(): void;
    getTime(): value_pb.DurationProto | undefined;
    setTime(value?: value_pb.DurationProto): void;

    getInstantaneous(): boolean;
    setInstantaneous(value: boolean): void;

    getConcentration(): boolean;
    setConcentration(value: boolean): void;

    getDispelled(): boolean;
    setDispelled(value: boolean): void;

    getTriggered(): boolean;
    setTriggered(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Duration.AsObject;
    static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Duration;
    static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
  }

  export namespace Duration {
    export type AsObject = {
      time?: value_pb.DurationProto.AsObject,
      instantaneous: boolean,
      concentration: boolean,
      dispelled: boolean,
      triggered: boolean,
    }
  }

  export class Range extends jspb.Message {
    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): value_pb.DistanceProto | undefined;
    setDistance(value?: value_pb.DistanceProto): void;

    getSelf(): boolean;
    setSelf(value: boolean): void;

    getTouch(): boolean;
    setTouch(value: boolean): void;

    getShape(): SpellProto.Range.ShapeMap[keyof SpellProto.Range.ShapeMap];
    setShape(value: SpellProto.Range.ShapeMap[keyof SpellProto.Range.ShapeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Range.AsObject;
    static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Range;
    static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
  }

  export namespace Range {
    export type AsObject = {
      distance?: value_pb.DistanceProto.AsObject,
      self: boolean,
      touch: boolean,
      shape: SpellProto.Range.ShapeMap[keyof SpellProto.Range.ShapeMap],
    }

    export interface ShapeMap {
      UNKNOWN_SHAPE: 0;
      CONE: 1;
      CUBE: 2;
      CYLINDER: 3;
      LINE: 4;
      SPHERE: 5;
    }

    export const Shape: ShapeMap;
  }

  export interface SchoolMap {
    UNKNOWN_SCHOOL: 0;
    ABJURATION: 1;
    CONJURATION: 2;
    DIVINATION: 3;
    ENCHANTMENT: 4;
    EVOCATION: 5;
    ILLUSION: 6;
    NECROMANCY: 7;
    TRANSMUTATION: 8;
  }

  export const School: SchoolMap;
}

export class SpellsProto extends jspb.Message {
  clearSpellsList(): void;
  getSpellsList(): Array<SpellProto>;
  setSpellsList(value: Array<SpellProto>): void;
  addSpells(value?: SpellProto, index?: number): SpellProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpellsProto.AsObject;
  static toObject(includeInstance: boolean, msg: SpellsProto): SpellsProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpellsProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpellsProto;
  static deserializeBinaryFromReader(message: SpellsProto, reader: jspb.BinaryReader): SpellsProto;
}

export namespace SpellsProto {
  export type AsObject = {
    spellsList: Array<SpellProto.AsObject>,
  }
}

export class AdventureTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  hasRecommendedLevel(): boolean;
  clearRecommendedLevel(): void;
  getRecommendedLevel(): AdventureTemplateProto.Level | undefined;
  setRecommendedLevel(value?: AdventureTemplateProto.Level): void;

  clearEncounterList(): void;
  getEncounterList(): Array<AdventureTemplateProto.Encounter>;
  setEncounterList(value: Array<AdventureTemplateProto.Encounter>): void;
  addEncounter(value?: AdventureTemplateProto.Encounter, index?: number): AdventureTemplateProto.Encounter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdventureTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: AdventureTemplateProto): AdventureTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdventureTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdventureTemplateProto;
  static deserializeBinaryFromReader(message: AdventureTemplateProto, reader: jspb.BinaryReader): AdventureTemplateProto;
}

export namespace AdventureTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    recommendedLevel?: AdventureTemplateProto.Level.AsObject,
    encounterList: Array<AdventureTemplateProto.Encounter.AsObject>,
  }

  export class Level extends jspb.Message {
    getMin(): number;
    setMin(value: number): void;

    getMax(): number;
    setMax(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Level.AsObject;
    static toObject(includeInstance: boolean, msg: Level): Level.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Level, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Level;
    static deserializeBinaryFromReader(message: Level, reader: jspb.BinaryReader): Level;
  }

  export namespace Level {
    export type AsObject = {
      min: number,
      max: number,
    }
  }

  export class Encounter extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearBaseList(): void;
    getBaseList(): Array<string>;
    setBaseList(value: Array<string>): void;
    addBase(value: string, index?: number): string;

    getShortName(): string;
    setShortName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getShortDescription(): string;
    setShortDescription(value: string): void;

    getEncounterLevel(): number;
    setEncounterLevel(value: number): void;

    clearLocationList(): void;
    getLocationList(): Array<string>;
    setLocationList(value: Array<string>): void;
    addLocation(value: string, index?: number): string;

    clearReadAloudList(): void;
    getReadAloudList(): Array<AdventureTemplateProto.Encounter.ReadAloud>;
    setReadAloudList(value: Array<AdventureTemplateProto.Encounter.ReadAloud>): void;
    addReadAloud(value?: AdventureTemplateProto.Encounter.ReadAloud, index?: number): AdventureTemplateProto.Encounter.ReadAloud;

    hasEnvironment(): boolean;
    clearEnvironment(): void;
    getEnvironment(): AdventureTemplateProto.Encounter.Environment | undefined;
    setEnvironment(value?: AdventureTemplateProto.Encounter.Environment): void;

    hasSenses(): boolean;
    clearSenses(): void;
    getSenses(): AdventureTemplateProto.Encounter.Senses | undefined;
    setSenses(value?: AdventureTemplateProto.Encounter.Senses): void;

    clearCreatureList(): void;
    getCreatureList(): Array<AdventureTemplateProto.Encounter.Creature>;
    setCreatureList(value: Array<AdventureTemplateProto.Encounter.Creature>): void;
    addCreature(value?: AdventureTemplateProto.Encounter.Creature, index?: number): AdventureTemplateProto.Encounter.Creature;

    clearDevelopmentList(): void;
    getDevelopmentList(): Array<string>;
    setDevelopmentList(value: Array<string>): void;
    addDevelopment(value: string, index?: number): string;

    clearTreasureList(): void;
    getTreasureList(): Array<AdventureTemplateProto.Encounter.Treasure>;
    setTreasureList(value: Array<AdventureTemplateProto.Encounter.Treasure>): void;
    addTreasure(value?: AdventureTemplateProto.Encounter.Treasure, index?: number): AdventureTemplateProto.Encounter.Treasure;

    clearSpellGroupList(): void;
    getSpellGroupList(): Array<AdventureTemplateProto.Encounter.SpellGroup>;
    setSpellGroupList(value: Array<AdventureTemplateProto.Encounter.SpellGroup>): void;
    addSpellGroup(value?: AdventureTemplateProto.Encounter.SpellGroup, index?: number): AdventureTemplateProto.Encounter.SpellGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Encounter.AsObject;
    static toObject(includeInstance: boolean, msg: Encounter): Encounter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Encounter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Encounter;
    static deserializeBinaryFromReader(message: Encounter, reader: jspb.BinaryReader): Encounter;
  }

  export namespace Encounter {
    export type AsObject = {
      name: string,
      baseList: Array<string>,
      shortName: string,
      description: string,
      shortDescription: string,
      encounterLevel: number,
      locationList: Array<string>,
      readAloudList: Array<AdventureTemplateProto.Encounter.ReadAloud.AsObject>,
      environment?: AdventureTemplateProto.Encounter.Environment.AsObject,
      senses?: AdventureTemplateProto.Encounter.Senses.AsObject,
      creatureList: Array<AdventureTemplateProto.Encounter.Creature.AsObject>,
      developmentList: Array<string>,
      treasureList: Array<AdventureTemplateProto.Encounter.Treasure.AsObject>,
      spellGroupList: Array<AdventureTemplateProto.Encounter.SpellGroup.AsObject>,
    }

    export class ReadAloud extends jspb.Message {
      getCondition(): string;
      setCondition(value: string): void;

      getText(): string;
      setText(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ReadAloud.AsObject;
      static toObject(includeInstance: boolean, msg: ReadAloud): ReadAloud.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ReadAloud, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ReadAloud;
      static deserializeBinaryFromReader(message: ReadAloud, reader: jspb.BinaryReader): ReadAloud;
    }

    export namespace ReadAloud {
      export type AsObject = {
        condition: string,
        text: string,
      }
    }

    export class Environment extends jspb.Message {
      clearFloorList(): void;
      getFloorList(): Array<AdventureTemplateProto.Encounter.Environment.Spot>;
      setFloorList(value: Array<AdventureTemplateProto.Encounter.Environment.Spot>): void;
      addFloor(value?: AdventureTemplateProto.Encounter.Environment.Spot, index?: number): AdventureTemplateProto.Encounter.Environment.Spot;

      clearCeilingList(): void;
      getCeilingList(): Array<AdventureTemplateProto.Encounter.Environment.Ceiling>;
      setCeilingList(value: Array<AdventureTemplateProto.Encounter.Environment.Ceiling>): void;
      addCeiling(value?: AdventureTemplateProto.Encounter.Environment.Ceiling, index?: number): AdventureTemplateProto.Encounter.Environment.Ceiling;

      clearWallsList(): void;
      getWallsList(): Array<AdventureTemplateProto.Encounter.Environment.Spot>;
      setWallsList(value: Array<AdventureTemplateProto.Encounter.Environment.Spot>): void;
      addWalls(value?: AdventureTemplateProto.Encounter.Environment.Spot, index?: number): AdventureTemplateProto.Encounter.Environment.Spot;

      clearDoorList(): void;
      getDoorList(): Array<AdventureTemplateProto.Encounter.Environment.Door>;
      setDoorList(value: Array<AdventureTemplateProto.Encounter.Environment.Door>): void;
      addDoor(value?: AdventureTemplateProto.Encounter.Environment.Door, index?: number): AdventureTemplateProto.Encounter.Environment.Door;

      clearTerrainList(): void;
      getTerrainList(): Array<AdventureTemplateProto.Encounter.Environment.Spot>;
      setTerrainList(value: Array<AdventureTemplateProto.Encounter.Environment.Spot>): void;
      addTerrain(value?: AdventureTemplateProto.Encounter.Environment.Spot, index?: number): AdventureTemplateProto.Encounter.Environment.Spot;

      clearTrapList(): void;
      getTrapList(): Array<AdventureTemplateProto.Encounter.Environment.Spot>;
      setTrapList(value: Array<AdventureTemplateProto.Encounter.Environment.Spot>): void;
      addTrap(value?: AdventureTemplateProto.Encounter.Environment.Spot, index?: number): AdventureTemplateProto.Encounter.Environment.Spot;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Environment.AsObject;
      static toObject(includeInstance: boolean, msg: Environment): Environment.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Environment, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Environment;
      static deserializeBinaryFromReader(message: Environment, reader: jspb.BinaryReader): Environment;
    }

    export namespace Environment {
      export type AsObject = {
        floorList: Array<AdventureTemplateProto.Encounter.Environment.Spot.AsObject>,
        ceilingList: Array<AdventureTemplateProto.Encounter.Environment.Ceiling.AsObject>,
        wallsList: Array<AdventureTemplateProto.Encounter.Environment.Spot.AsObject>,
        doorList: Array<AdventureTemplateProto.Encounter.Environment.Door.AsObject>,
        terrainList: Array<AdventureTemplateProto.Encounter.Environment.Spot.AsObject>,
        trapList: Array<AdventureTemplateProto.Encounter.Environment.Spot.AsObject>,
      }

      export class Spot extends jspb.Message {
        getName(): string;
        setName(value: string): void;

        getDescription(): string;
        setDescription(value: string): void;

        clearCheckList(): void;
        getCheckList(): Array<AdventureTemplateProto.Encounter.Environment.Spot.Check>;
        setCheckList(value: Array<AdventureTemplateProto.Encounter.Environment.Spot.Check>): void;
        addCheck(value?: AdventureTemplateProto.Encounter.Environment.Spot.Check, index?: number): AdventureTemplateProto.Encounter.Environment.Spot.Check;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spot.AsObject;
        static toObject(includeInstance: boolean, msg: Spot): Spot.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spot, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spot;
        static deserializeBinaryFromReader(message: Spot, reader: jspb.BinaryReader): Spot;
      }

      export namespace Spot {
        export type AsObject = {
          name: string,
          description: string,
          checkList: Array<AdventureTemplateProto.Encounter.Environment.Spot.Check.AsObject>,
        }

        export class Check extends jspb.Message {
          getName(): string;
          setName(value: string): void;

          getDc(): number;
          setDc(value: number): void;

          getModifier(): number;
          setModifier(value: number): void;

          clearConditionList(): void;
          getConditionList(): Array<string>;
          setConditionList(value: Array<string>): void;
          addCondition(value: string, index?: number): string;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Check.AsObject;
          static toObject(includeInstance: boolean, msg: Check): Check.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: Check, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Check;
          static deserializeBinaryFromReader(message: Check, reader: jspb.BinaryReader): Check;
        }

        export namespace Check {
          export type AsObject = {
            name: string,
            dc: number,
            modifier: number,
            conditionList: Array<string>,
          }
        }
      }

      export class Ceiling extends jspb.Message {
        getName(): string;
        setName(value: string): void;

        getDescription(): string;
        setDescription(value: string): void;

        getHeightFeet(): number;
        setHeightFeet(value: number): void;

        getMinHeightFeet(): number;
        setMinHeightFeet(value: number): void;

        getMaxHeightFeet(): number;
        setMaxHeightFeet(value: number): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Ceiling.AsObject;
        static toObject(includeInstance: boolean, msg: Ceiling): Ceiling.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Ceiling, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Ceiling;
        static deserializeBinaryFromReader(message: Ceiling, reader: jspb.BinaryReader): Ceiling;
      }

      export namespace Ceiling {
        export type AsObject = {
          name: string,
          description: string,
          heightFeet: number,
          minHeightFeet: number,
          maxHeightFeet: number,
        }
      }

      export class Door extends jspb.Message {
        getName(): string;
        setName(value: string): void;

        getDescription(): string;
        setDescription(value: string): void;

        getThicknessInches(): number;
        setThicknessInches(value: number): void;

        getHardness(): number;
        setHardness(value: number): void;

        getHp(): number;
        setHp(value: number): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Door.AsObject;
        static toObject(includeInstance: boolean, msg: Door): Door.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Door, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Door;
        static deserializeBinaryFromReader(message: Door, reader: jspb.BinaryReader): Door;
      }

      export namespace Door {
        export type AsObject = {
          name: string,
          description: string,
          thicknessInches: number,
          hardness: number,
          hp: number,
        }
      }
    }

    export class Senses extends jspb.Message {
      clearLightList(): void;
      getLightList(): Array<string>;
      setLightList(value: Array<string>): void;
      addLight(value: string, index?: number): string;

      clearSoundList(): void;
      getSoundList(): Array<string>;
      setSoundList(value: Array<string>): void;
      addSound(value: string, index?: number): string;

      clearSmellList(): void;
      getSmellList(): Array<string>;
      setSmellList(value: Array<string>): void;
      addSmell(value: string, index?: number): string;

      clearTouchList(): void;
      getTouchList(): Array<string>;
      setTouchList(value: Array<string>): void;
      addTouch(value: string, index?: number): string;

      clearFeelList(): void;
      getFeelList(): Array<string>;
      setFeelList(value: Array<string>): void;
      addFeel(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Senses.AsObject;
      static toObject(includeInstance: boolean, msg: Senses): Senses.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Senses, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Senses;
      static deserializeBinaryFromReader(message: Senses, reader: jspb.BinaryReader): Senses;
    }

    export namespace Senses {
      export type AsObject = {
        lightList: Array<string>,
        soundList: Array<string>,
        smellList: Array<string>,
        touchList: Array<string>,
        feelList: Array<string>,
      }
    }

    export class Creature extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getReason(): string;
      setReason(value: string): void;

      clearTacticsList(): void;
      getTacticsList(): Array<string>;
      setTacticsList(value: Array<string>): void;
      addTactics(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Creature.AsObject;
      static toObject(includeInstance: boolean, msg: Creature): Creature.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Creature, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Creature;
      static deserializeBinaryFromReader(message: Creature, reader: jspb.BinaryReader): Creature;
    }

    export namespace Creature {
      export type AsObject = {
        name: string,
        reason: string,
        tacticsList: Array<string>,
      }
    }

    export class Treasure extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getDescription(): string;
      setDescription(value: string): void;

      clearItemList(): void;
      getItemList(): Array<ItemLookupProto>;
      setItemList(value: Array<ItemLookupProto>): void;
      addItem(value?: ItemLookupProto, index?: number): ItemLookupProto;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Treasure.AsObject;
      static toObject(includeInstance: boolean, msg: Treasure): Treasure.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Treasure, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Treasure;
      static deserializeBinaryFromReader(message: Treasure, reader: jspb.BinaryReader): Treasure;
    }

    export namespace Treasure {
      export type AsObject = {
        name: string,
        description: string,
        itemList: Array<ItemLookupProto.AsObject>,
      }
    }

    export class SpellGroup extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getDescription(): string;
      setDescription(value: string): void;

      getCasterLevel(): number;
      setCasterLevel(value: number): void;

      getAbilityBonus(): number;
      setAbilityBonus(value: number): void;

      getSpellClass(): value_pb.SpellClassMap[keyof value_pb.SpellClassMap];
      setSpellClass(value: value_pb.SpellClassMap[keyof value_pb.SpellClassMap]): void;

      clearSpellList(): void;
      getSpellList(): Array<AdventureTemplateProto.Encounter.SpellGroup.SpellReference>;
      setSpellList(value: Array<AdventureTemplateProto.Encounter.SpellGroup.SpellReference>): void;
      addSpell(value?: AdventureTemplateProto.Encounter.SpellGroup.SpellReference, index?: number): AdventureTemplateProto.Encounter.SpellGroup.SpellReference;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SpellGroup.AsObject;
      static toObject(includeInstance: boolean, msg: SpellGroup): SpellGroup.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SpellGroup, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SpellGroup;
      static deserializeBinaryFromReader(message: SpellGroup, reader: jspb.BinaryReader): SpellGroup;
    }

    export namespace SpellGroup {
      export type AsObject = {
        name: string,
        description: string,
        casterLevel: number,
        abilityBonus: number,
        spellClass: value_pb.SpellClassMap[keyof value_pb.SpellClassMap],
        spellList: Array<AdventureTemplateProto.Encounter.SpellGroup.SpellReference.AsObject>,
      }

      export class SpellReference extends jspb.Message {
        getName(): string;
        setName(value: string): void;

        clearMetaMagicList(): void;
        getMetaMagicList(): Array<value_pb.MetaMagicMap[keyof value_pb.MetaMagicMap]>;
        setMetaMagicList(value: Array<value_pb.MetaMagicMap[keyof value_pb.MetaMagicMap]>): void;
        addMetaMagic(value: value_pb.MetaMagicMap[keyof value_pb.MetaMagicMap], index?: number): value_pb.MetaMagicMap[keyof value_pb.MetaMagicMap];

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SpellReference.AsObject;
        static toObject(includeInstance: boolean, msg: SpellReference): SpellReference.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SpellReference, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SpellReference;
        static deserializeBinaryFromReader(message: SpellReference, reader: jspb.BinaryReader): SpellReference;
      }

      export namespace SpellReference {
        export type AsObject = {
          name: string,
          metaMagicList: Array<value_pb.MetaMagicMap[keyof value_pb.MetaMagicMap]>,
        }
      }
    }
  }
}

export class ProductTemplateProto extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): CommonProto | undefined;
  setTemplate(value?: CommonProto): void;

  getTitle(): string;
  setTitle(value: string): void;

  getLeader(): string;
  setLeader(value: string): void;

  getSubtitle(): string;
  setSubtitle(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  clearAuthorList(): void;
  getAuthorList(): Array<ProductTemplateProto.Person>;
  setAuthorList(value: Array<ProductTemplateProto.Person>): void;
  addAuthor(value?: ProductTemplateProto.Person, index?: number): ProductTemplateProto.Person;

  clearEditorList(): void;
  getEditorList(): Array<ProductTemplateProto.Person>;
  setEditorList(value: Array<ProductTemplateProto.Person>): void;
  addEditor(value?: ProductTemplateProto.Person, index?: number): ProductTemplateProto.Person;

  clearCoverList(): void;
  getCoverList(): Array<ProductTemplateProto.Person>;
  setCoverList(value: Array<ProductTemplateProto.Person>): void;
  addCover(value?: ProductTemplateProto.Person, index?: number): ProductTemplateProto.Person;

  clearCartographerList(): void;
  getCartographerList(): Array<ProductTemplateProto.Person>;
  setCartographerList(value: Array<ProductTemplateProto.Person>): void;
  addCartographer(value?: ProductTemplateProto.Person, index?: number): ProductTemplateProto.Person;

  clearIllustratorList(): void;
  getIllustratorList(): Array<ProductTemplateProto.Person>;
  setIllustratorList(value: Array<ProductTemplateProto.Person>): void;
  addIllustrator(value?: ProductTemplateProto.Person, index?: number): ProductTemplateProto.Person;

  clearTypographerList(): void;
  getTypographerList(): Array<ProductTemplateProto.Person>;
  setTypographerList(value: Array<ProductTemplateProto.Person>): void;
  addTypographer(value?: ProductTemplateProto.Person, index?: number): ProductTemplateProto.Person;

  clearManagerList(): void;
  getManagerList(): Array<ProductTemplateProto.Person>;
  setManagerList(value: Array<ProductTemplateProto.Person>): void;
  addManager(value?: ProductTemplateProto.Person, index?: number): ProductTemplateProto.Person;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): ProductTemplateProto.Date | undefined;
  setDate(value?: ProductTemplateProto.Date): void;

  hasIsbn(): boolean;
  clearIsbn(): void;
  getIsbn(): ProductTemplateProto.ISBN | undefined;
  setIsbn(value?: ProductTemplateProto.ISBN): void;

  hasIsbn13(): boolean;
  clearIsbn13(): void;
  getIsbn13(): ProductTemplateProto.ISBN13 | undefined;
  setIsbn13(value?: ProductTemplateProto.ISBN13): void;

  getPages(): number;
  setPages(value: number): void;

  getSystem(): ProductTemplateProto.SystemMap[keyof ProductTemplateProto.SystemMap];
  setSystem(value: ProductTemplateProto.SystemMap[keyof ProductTemplateProto.SystemMap]): void;

  getAudience(): ProductTemplateProto.AudienceMap[keyof ProductTemplateProto.AudienceMap];
  setAudience(value: ProductTemplateProto.AudienceMap[keyof ProductTemplateProto.AudienceMap]): void;

  getType(): ProductTemplateProto.TypeMap[keyof ProductTemplateProto.TypeMap];
  setType(value: ProductTemplateProto.TypeMap[keyof ProductTemplateProto.TypeMap]): void;

  getStyle(): ProductTemplateProto.StyleMap[keyof ProductTemplateProto.StyleMap];
  setStyle(value: ProductTemplateProto.StyleMap[keyof ProductTemplateProto.StyleMap]): void;

  getProducer(): string;
  setProducer(value: string): void;

  getVolume(): string;
  setVolume(value: string): void;

  getNumber(): string;
  setNumber(value: string): void;

  clearSeriesList(): void;
  getSeriesList(): Array<string>;
  setSeriesList(value: Array<string>): void;
  addSeries(value: string, index?: number): string;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): value_pb.PriceProto | undefined;
  setPrice(value?: value_pb.PriceProto): void;

  clearContentList(): void;
  getContentList(): Array<ProductTemplateProto.Content>;
  setContentList(value: Array<ProductTemplateProto.Content>): void;
  addContent(value?: ProductTemplateProto.Content, index?: number): ProductTemplateProto.Content;

  clearRequiredRequirementsList(): void;
  getRequiredRequirementsList(): Array<string>;
  setRequiredRequirementsList(value: Array<string>): void;
  addRequiredRequirements(value: string, index?: number): string;

  clearOptionalRequirementsList(): void;
  getOptionalRequirementsList(): Array<string>;
  setOptionalRequirementsList(value: Array<string>): void;
  addOptionalRequirements(value: string, index?: number): string;

  getLayout(): ProductTemplateProto.LayoutMap[keyof ProductTemplateProto.LayoutMap];
  setLayout(value: ProductTemplateProto.LayoutMap[keyof ProductTemplateProto.LayoutMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTemplateProto.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTemplateProto): ProductTemplateProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductTemplateProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTemplateProto;
  static deserializeBinaryFromReader(message: ProductTemplateProto, reader: jspb.BinaryReader): ProductTemplateProto;
}

export namespace ProductTemplateProto {
  export type AsObject = {
    template?: CommonProto.AsObject,
    title: string,
    leader: string,
    subtitle: string,
    notes: string,
    authorList: Array<ProductTemplateProto.Person.AsObject>,
    editorList: Array<ProductTemplateProto.Person.AsObject>,
    coverList: Array<ProductTemplateProto.Person.AsObject>,
    cartographerList: Array<ProductTemplateProto.Person.AsObject>,
    illustratorList: Array<ProductTemplateProto.Person.AsObject>,
    typographerList: Array<ProductTemplateProto.Person.AsObject>,
    managerList: Array<ProductTemplateProto.Person.AsObject>,
    date?: ProductTemplateProto.Date.AsObject,
    isbn?: ProductTemplateProto.ISBN.AsObject,
    isbn13?: ProductTemplateProto.ISBN13.AsObject,
    pages: number,
    system: ProductTemplateProto.SystemMap[keyof ProductTemplateProto.SystemMap],
    audience: ProductTemplateProto.AudienceMap[keyof ProductTemplateProto.AudienceMap],
    type: ProductTemplateProto.TypeMap[keyof ProductTemplateProto.TypeMap],
    style: ProductTemplateProto.StyleMap[keyof ProductTemplateProto.StyleMap],
    producer: string,
    volume: string,
    number: string,
    seriesList: Array<string>,
    price?: value_pb.PriceProto.AsObject,
    contentList: Array<ProductTemplateProto.Content.AsObject>,
    requiredRequirementsList: Array<string>,
    optionalRequirementsList: Array<string>,
    layout: ProductTemplateProto.LayoutMap[keyof ProductTemplateProto.LayoutMap],
  }

  export class Person extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getJob(): string;
    setJob(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Person.AsObject;
    static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Person;
    static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
  }

  export namespace Person {
    export type AsObject = {
      name: string,
      job: string,
    }
  }

  export class Date extends jspb.Message {
    getYear(): number;
    setYear(value: number): void;

    getMonth(): number;
    setMonth(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Date.AsObject;
    static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Date;
    static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
  }

  export namespace Date {
    export type AsObject = {
      year: number,
      month: number,
    }
  }

  export class ISBN extends jspb.Message {
    getGroup(): string;
    setGroup(value: string): void;

    getPublisher(): string;
    setPublisher(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getCheck(): number;
    setCheck(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ISBN.AsObject;
    static toObject(includeInstance: boolean, msg: ISBN): ISBN.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ISBN, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ISBN;
    static deserializeBinaryFromReader(message: ISBN, reader: jspb.BinaryReader): ISBN;
  }

  export namespace ISBN {
    export type AsObject = {
      group: string,
      publisher: string,
      title: string,
      check: number,
    }
  }

  export class ISBN13 extends jspb.Message {
    getGroup13(): string;
    setGroup13(value: string): void;

    getGroup(): string;
    setGroup(value: string): void;

    getPublisher(): string;
    setPublisher(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getCheck(): number;
    setCheck(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ISBN13.AsObject;
    static toObject(includeInstance: boolean, msg: ISBN13): ISBN13.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ISBN13, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ISBN13;
    static deserializeBinaryFromReader(message: ISBN13, reader: jspb.BinaryReader): ISBN13;
  }

  export namespace ISBN13 {
    export type AsObject = {
      group13: string,
      group: string,
      publisher: string,
      title: string,
      check: number,
    }
  }

  export class Content extends jspb.Message {
    getPart(): ProductTemplateProto.Content.PartMap[keyof ProductTemplateProto.Content.PartMap];
    setPart(value: ProductTemplateProto.Content.PartMap[keyof ProductTemplateProto.Content.PartMap]): void;

    getDescription(): string;
    setDescription(value: string): void;

    getNumber(): number;
    setNumber(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
  }

  export namespace Content {
    export type AsObject = {
      part: ProductTemplateProto.Content.PartMap[keyof ProductTemplateProto.Content.PartMap],
      description: string,
      number: number,
    }

    export interface PartMap {
      UNKNOWN_PART: 0;
      BOARD: 1;
      BOOK: 2;
      BOOKLET: 3;
      BOX: 4;
      CARD: 5;
      CD: 6;
      COUNTER: 7;
      COVER: 8;
      DICE: 9;
      FLYER: 10;
      FOLDER: 11;
      GATEFOLD: 12;
      MAGNET: 13;
      MAP: 14;
      MINIATURE: 15;
      MISC: 16;
      OVERLAY: 17;
      PACK: 18;
      PAGE: 19;
      PLAYING_PIECE: 20;
      POSTER: 21;
      SCREEN: 22;
      SHEET: 23;
      STICKER: 24;
    }

    export const Part: PartMap;
  }

  export interface SystemMap {
    UNKNOWN_SYSTEM: 0;
    NONE: 1;
    CHAINMAIL: 2;
    DND_1ST: 3;
    ADND_1ST: 4;
    ADND_2ND: 5;
    ADND_2ND_SAGA: 6;
    ADND_REVISED: 7;
    DND_3RD: 8;
    DND_3_5: 9;
    DND_4: 10;
    DND_NEXT: 11;
    DND_5E: 49;
    D20_MODERN: 12;
    D20_FUTUTRE: 13;
    D20: 14;
    ALTERNITY: 15;
    AMAZING_ENGINE: 16;
    BLOOD_WARS: 17;
    CHAOSIUM: 18;
    DARK_HEAVEN: 19;
    DRAGON_DICE: 20;
    DRAGON_STRIKE: 21;
    DUEL_MASTER: 22;
    ENDLESS_QUEST: 23;
    FIRST_QUEST: 24;
    GAMMA_WORLD: 25;
    GANGBUSTERS: 26;
    LEGEND_OF_THE_FIVE_RINGS: 27;
    MAGIC_THE_GATHERING: 28;
    MARVEL_SUPER_DICE: 29;
    MLB_SHOWDOWN_2002: 30;
    MLB_SHOWDOWN_2003: 31;
    MLB_SHOWDOWN: 32;
    NEOPETS: 33;
    ONE_ON_ONE: 34;
    POKEMON: 35;
    SAGA: 36;
    SPECIAL: 37;
    SPELLFIRE: 38;
    STAR_WARS_TCG: 39;
    STAR_WARS: 40;
    SUPER_ENDLESS_QUEST: 41;
    SWORD_AND_SORCERY: 42;
    TERROR_TRACKS: 43;
    TERROR_TRAX: 44;
    WILD_SPACE: 45;
    WORLD_WAR_II: 46;
    XXVC: 47;
    MARVEL_SUPER_HEROES: 48;
  }

  export const System: SystemMap;

  export interface AudienceMap {
    DM: 0;
    PLAYER: 1;
    ALL: 2;
    UNKNOWN: 3;
  }

  export const Audience: AudienceMap;

  export interface TypeMap {
    UNKNOWN_TYPE: 0;
    ACCESSORY: 1;
    ADVENTURE: 2;
    BOARD_GAME: 3;
    BOOSTER_PACK: 4;
    CALENDAR: 5;
    CAMPAIGN_EXPANSION: 6;
    CAMPAIGN_SETTING: 7;
    CARD_GAME: 8;
    CARDS_TYPE: 9;
    CATALOG: 10;
    COLLECTION: 11;
    COMICS: 12;
    COOKBOOK: 13;
    DICE: 14;
    ELECTRONIC_ACCESSORY: 15;
    GUIDE: 16;
    MAGAZINE: 17;
    MINIATURE: 18;
    MONSTER_COMPENDIUM: 19;
    NOVEL: 20;
    PROMOTION: 21;
    RULEBOOK: 22;
    RULES_SUPPLEMENT: 23;
    SOFTWARE: 24;
    SOURCEBOOK: 25;
    SPECIAL_BOOK: 26;
  }

  export const Type: TypeMap;

  export interface StyleMap {
    UNKNOWN_STYLE: 0;
    BOOKLET: 1;
    BOX: 2;
    CARDS_STYLE: 3;
    FLYER: 4;
    FOLDER: 5;
    HARDCOVER: 6;
    MAP: 7;
    MEDIUM_BOX: 8;
    PACK: 9;
    PAPERBACK: 10;
    POSTER: 11;
    SCREEN: 12;
    SHEETS: 13;
    SMALL_BOX: 14;
    SOFT_COVER: 15;
    STICKER: 16;
  }

  export const Style: StyleMap;

  export interface LayoutMap {
    UNKNOWN_LAYOUT: 0;
    FULL_COLOR: 1;
    FOUR_COLOR: 2;
    TWO_COLOR: 3;
    COLOR_COVER: 4;
    BLACK_AND_WHITE: 5;
    MIXED: 6;
  }

  export const Layout: LayoutMap;
}

export class MapsProto extends jspb.Message {
  clearMapsList(): void;
  getMapsList(): Array<MapsProto.Map>;
  setMapsList(value: Array<MapsProto.Map>): void;
  addMaps(value?: MapsProto.Map, index?: number): MapsProto.Map;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapsProto.AsObject;
  static toObject(includeInstance: boolean, msg: MapsProto): MapsProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapsProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapsProto;
  static deserializeBinaryFromReader(message: MapsProto, reader: jspb.BinaryReader): MapsProto;
}

export namespace MapsProto {
  export type AsObject = {
    mapsList: Array<MapsProto.Map.AsObject>,
  }

  export class Map extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearLocationsList(): void;
    getLocationsList(): Array<string>;
    setLocationsList(value: Array<string>): void;
    addLocations(value: string, index?: number): string;

    clearLayersList(): void;
    getLayersList(): Array<string>;
    setLayersList(value: Array<string>): void;
    addLayers(value: string, index?: number): string;

    getPxPerSquare(): number;
    setPxPerSquare(value: number): void;

    getBackground(): string;
    setBackground(value: string): void;

    getWidth(): number;
    setWidth(value: number): void;

    getHeight(): number;
    setHeight(value: number): void;

    hasAttribution(): boolean;
    clearAttribution(): void;
    getAttribution(): MapsProto.Map.Attribution | undefined;
    setAttribution(value?: MapsProto.Map.Attribution): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Map.AsObject;
    static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Map;
    static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
  }

  export namespace Map {
    export type AsObject = {
      name: string,
      locationsList: Array<string>,
      layersList: Array<string>,
      pxPerSquare: number,
      background: string,
      width: number,
      height: number,
      attribution?: MapsProto.Map.Attribution.AsObject,
    }

    export class Attribution extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getUrl(): string;
      setUrl(value: string): void;

      getLicence(): MapsProto.Map.Attribution.LicenceMap[keyof MapsProto.Map.Attribution.LicenceMap];
      setLicence(value: MapsProto.Map.Attribution.LicenceMap[keyof MapsProto.Map.Attribution.LicenceMap]): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Attribution.AsObject;
      static toObject(includeInstance: boolean, msg: Attribution): Attribution.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Attribution, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Attribution;
      static deserializeBinaryFromReader(message: Attribution, reader: jspb.BinaryReader): Attribution;
    }

    export namespace Attribution {
      export type AsObject = {
        name: string,
        url: string,
        licence: MapsProto.Map.Attribution.LicenceMap[keyof MapsProto.Map.Attribution.LicenceMap],
      }

      export interface LicenceMap {
        UNKNOWN: 0;
        PUBLIC_DOMAIN: 1;
        COPYRIGHTED: 2;
      }

      export const Licence: LicenceMap;
    }
  }
}


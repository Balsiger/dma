import { CharacterSubclass as CharacterSubclassProto } from '../../../../../proto/generated/value_pb';
import { Enum } from './enum';

export class CharacterSubclass extends Enum<CharacterSubclass> {
  static readonly classes: CharacterSubclass[] = [];

  static readonly UNKNOWN = new CharacterSubclass('Unknown', CharacterSubclassProto.UNKNOWN_SUBCLASS);

  // Barbarian
  static readonly PATH_OF_THE_ANCESTRAL_GUARDIAN = new CharacterSubclass(
    'Path of the Ancestral Guardian',
    CharacterSubclassProto.BARBARIAN_PATH_OF_THE_ANCESTRAL_GUARDIAN,
  );
  static readonly PATH_OF_THE_BERSERKER = new CharacterSubclass(
    'Path of the Berserker',
    CharacterSubclassProto.BARBARIAN_PATH_OF_THE_BERSERKER,
  );
  static readonly PATH_OF_THE_STORM_HERALD = new CharacterSubclass(
    'Path of the Storm Herald',
    CharacterSubclassProto.BARBARIAN_PATH_OF_THE_STORM_HERALD,
  );
  static readonly PATH_OF_THE_WILD_HEART = new CharacterSubclass(
    'Path of the Wild Heart',
    CharacterSubclassProto.BARBARIAN_PATH_OF_THE_WILD_HEART,
  );
  static readonly PATH_OF_THE_WORLD_TREE = new CharacterSubclass(
    'Path of the World Tree',
    CharacterSubclassProto.BARBARIAN_PATH_OF_THE_WORLD_TREE,
  );
  static readonly PATH_OF_THE_ZEALOT = new CharacterSubclass(
    'Path of the Zealot',
    CharacterSubclassProto.BARBARIAN_PATH_OF_THE_ZEALOT,
  );

  // Bard
  static readonly COLLEGE_OF_DANCE = new CharacterSubclass(
    'College of Dance',
    CharacterSubclassProto.BARD_COLLEGE_OF_DANCE,
  );
  static readonly COLLEGE_OF_GLAMOUR = new CharacterSubclass(
    'College of Glamour',
    CharacterSubclassProto.BARD_COLLEGE_OF_GLAMOUR,
  );
  static readonly COLLEGE_OF_HYMNS = new CharacterSubclass(
    'College of Hymns',
    CharacterSubclassProto.BARD_COLLEGE_OF_HYMNS,
  );
  static readonly COLLEGE_OF_LORE = new CharacterSubclass(
    'College of Lore',
    CharacterSubclassProto.BARD_COLLEGE_OF_LORE,
  );
  static readonly COLLEGE_OF_SWORDS = new CharacterSubclass(
    'College of Swords',
    CharacterSubclassProto.BARD_COLLEGE_OF_SWORDS,
  );
  static readonly COLLEGE_OF_THE_MOON = new CharacterSubclass(
    'College of the Moon',
    CharacterSubclassProto.BARD_COLLEGE_OF_THE_MOON,
  );
  static readonly COLLEGE_OF_VALOR = new CharacterSubclass(
    'College of Valor',
    CharacterSubclassProto.BARD_COLLEGE_OF_VALOR,
  );
  static readonly COLLEGE_OF_WHISPERS = new CharacterSubclass(
    'College of Whispers',
    CharacterSubclassProto.BARD_COLLEGE_OF_WHISPERS,
  );

  // Cleric
  static readonly ABOMINATION_DOMAIN = new CharacterSubclass(
    'Abomination Domain',
    CharacterSubclassProto.CLERIC_ABOMINATION_DOMAIN,
  );
  static readonly FORGE_DOMAIN = new CharacterSubclass('Forge Domain', CharacterSubclassProto.CLERIC_FORGE_DOMAIN);
  static readonly GRAVE_DOMAIN = new CharacterSubclass('Grave Domain', CharacterSubclassProto.CLERIC_GRAVE_DOMAIN);
  static readonly KNOWLEDGE_DOMAIN = new CharacterSubclass(
    'Knowledge Domain',
    CharacterSubclassProto.CLERIC_KNOWLEDGE_DOMAIN,
  );
  static readonly LIFE_DOMAIN = new CharacterSubclass('Life Domain', CharacterSubclassProto.CLERIC_LIFE_DOMAIN);
  static readonly LIGHT_DOMAIN = new CharacterSubclass('Light Domain', CharacterSubclassProto.CLERIC_LIGHT_DOMAIN);
  static readonly TRICKERY_DOMAIN = new CharacterSubclass(
    'Trickery Domain',
    CharacterSubclassProto.CLERIC_TRICKERY_DOMAIN,
  );
  static readonly WAR_DOMAIN = new CharacterSubclass('War Domain', CharacterSubclassProto.CLERIC_WAR_DOMAIN);

  // Druid
  static readonly CIRCLE_OF_DREAMS = new CharacterSubclass(
    'Circle of Dreams',
    CharacterSubclassProto.DRUID_CIRCLE_OF_DREAMS,
  );
  static readonly CIRCLE_OF_THE_LAND = new CharacterSubclass(
    'Circle of the Land',
    CharacterSubclassProto.DRUID_CIRCLE_OF_THE_LAND,
  );
  static readonly CIRCLE_OF_THE_MOON = new CharacterSubclass(
    'Circle of the Moon',
    CharacterSubclassProto.DRUID_CIRCLE_OF_THE_MOON,
  );
  static readonly CIRCLE_OF_THE_SEA = new CharacterSubclass(
    'Circle of the Sea',
    CharacterSubclassProto.DRUID_CIRCLE_OF_THE_SEA,
  );
  static readonly CIRCLE_OF_THE_SHEPHERD = new CharacterSubclass(
    'Circle of the Shepherd',
    CharacterSubclassProto.DRUID_CIRCLE_OF_THE_SHEPHERD,
  );
  static readonly CIRCLE_OF_THE_STARS = new CharacterSubclass(
    'Circle of the Stars',
    CharacterSubclassProto.DRUID_CIRCLE_OF_THE_STARS,
  );

  // Fighter
  static readonly ARCANE_ARCHER = new CharacterSubclass('Arcane Archer', CharacterSubclassProto.FIGHTER_ARCANE_ARCHER);
  static readonly BANNERET = new CharacterSubclass('Banneret', CharacterSubclassProto.FIGHTER_BANNERET);
  static readonly BATTLE_MASTER = new CharacterSubclass('Battle Master', CharacterSubclassProto.FIGHTER_BATTLE_MASTER);
  static readonly CAVALIER = new CharacterSubclass('Cavalier', CharacterSubclassProto.FIGHTER_CAVALIER);
  static readonly CHAMPION = new CharacterSubclass('Champion', CharacterSubclassProto.FIGHTER_CHAMPION);
  static readonly ELDRITCH_KNIGHT = new CharacterSubclass(
    'Eldritch Knight',
    CharacterSubclassProto.FIGHTER_ELDRITCH_KNIGHT,
  );
  static readonly PSI_WARRIOR = new CharacterSubclass('Psi Warrior', CharacterSubclassProto.FIGHTER_PSI_WARRIOR);
  static readonly SAMURAI = new CharacterSubclass('Samurai', CharacterSubclassProto.FIGHTER_SAMURAI);

  // Monk
  static readonly WARRIOR_OF_MERCY = new CharacterSubclass(
    'Warrior of Mercy',
    CharacterSubclassProto.MONK_WARRIOR_OF_MERCY,
  );
  static readonly WARRIOR_OF_SHADOW = new CharacterSubclass(
    'Warrior of Shadow',
    CharacterSubclassProto.MONK_WARRIOR_OF_SHADOW,
  );
  static readonly WARRIOR_OF_THE_ELEMENTS = new CharacterSubclass(
    'Warrior of the Elements',
    CharacterSubclassProto.MONK_WARRIOR_OF_THE_ELEMENTS,
  );
  static readonly WARRIOR_OF_THE_OPEN_HAND = new CharacterSubclass(
    'Warrior of the Open Hand',
    CharacterSubclassProto.MONK_WARRIOR_OF_THE_OPEN_HAND,
  );
  static readonly WAY_OF_THE_DRUNKEN_MASTER = new CharacterSubclass(
    'Way of the Drunken Master',
    CharacterSubclassProto.MONK_WAY_OF_THE_DRUNKEN_MASTER,
  );
  static readonly WAY_OF_THE_KENSEI = new CharacterSubclass(
    'Way of the Kensei',
    CharacterSubclassProto.MONK_WAY_OF_THE_KENSEI,
  );
  static readonly WAY_OF_THE_SUN_SOUL = new CharacterSubclass(
    'Way of the Sun Soul',
    CharacterSubclassProto.MONK_WAY_OF_THE_SUN_SOUL,
  );

  // Paladin
  static readonly OATH_OF_CONQUEST = new CharacterSubclass(
    'Oath of Conquest',
    CharacterSubclassProto.PALADIN_OATH_OF_CONQUEST,
  );
  static readonly OATH_OF_DEVOTION = new CharacterSubclass(
    'Oath of Devotion',
    CharacterSubclassProto.PALADIN_OATH_OF_DEVOTION,
  );
  static readonly OATH_OF_GLORY = new CharacterSubclass('Oath of Glory', CharacterSubclassProto.PALADIN_OATH_OF_GLORY);
  static readonly OATH_OF_REDEMPTION = new CharacterSubclass(
    'Oath of Redemption',
    CharacterSubclassProto.PALADIN_OATH_OF_REDEMPTION,
  );
  static readonly OATH_OF_THE_ANCIENTS = new CharacterSubclass(
    'Oath of the Ancients',
    CharacterSubclassProto.PALADIN_OATH_OF_THE_ANCIENTS,
  );
  static readonly OATH_OF_THE_NOBLE_GENIES = new CharacterSubclass(
    'Oath of the Noble Genies',
    CharacterSubclassProto.PALADIN_OATH_OF_THE_NOBLE_GENIES,
  );
  static readonly OATH_OF_VENGEANCE = new CharacterSubclass(
    'Oath of Vengeance',
    CharacterSubclassProto.PALADIN_OATH_OF_VENGEANCE,
  );

  // Ranger
  static readonly BEAST_MASTER = new CharacterSubclass('Beast Master', CharacterSubclassProto.RANGER_BEAST_MASTER);
  static readonly FEY_WANDERER = new CharacterSubclass('Fey Wanderer', CharacterSubclassProto.RANGER_FEY_WANDERER);
  static readonly GLOOM_STALKER = new CharacterSubclass('Gloom Stalker', CharacterSubclassProto.RANGER_GLOOM_STALKER);
  static readonly HORIZON_WALKER = new CharacterSubclass(
    'Horizon Walker',
    CharacterSubclassProto.RANGER_HORIZON_WALKER,
  );
  static readonly HUNTER = new CharacterSubclass('Hunter', CharacterSubclassProto.RANGER_HUNTER);
  static readonly MANTRAPPER_CONCLAVE = new CharacterSubclass(
    'Mantrapper Conclave',
    CharacterSubclassProto.RANGER_MANTRAPPER_CONCLAVE,
  );
  static readonly MONSTER_SLAYER = new CharacterSubclass(
    'Monster Slayer',
    CharacterSubclassProto.RANGER_MONSTER_SLAYER,
  );
  static readonly WINTER_WALKER = new CharacterSubclass('Winter Walker', CharacterSubclassProto.RANGER_WINTER_WALKER);

  // Rogue
  static readonly ARCANE_TRICKSTER = new CharacterSubclass(
    'Arcane Trickster',
    CharacterSubclassProto.ROGUE_ARCANE_TRICKSTER,
  );
  static readonly ASSASSIN = new CharacterSubclass('Assassin', CharacterSubclassProto.ROGUE_ASSASSIN);
  static readonly INQUISITIVE = new CharacterSubclass('Inquisitive', CharacterSubclassProto.ROGUE_INQUISITIVE);
  static readonly MASTERMIND = new CharacterSubclass('Mastermind', CharacterSubclassProto.ROGUE_MASTERMIND);
  static readonly SCION_OF_THE_THREE = new CharacterSubclass(
    'Scion of the Three',
    CharacterSubclassProto.ROGUE_SCION_OF_THE_THREE,
  );
  static readonly SCOUT = new CharacterSubclass('Scout', CharacterSubclassProto.ROGUE_SCOUT);
  static readonly SOULKNIFE = new CharacterSubclass('Soulknife', CharacterSubclassProto.ROGUE_SOULKNIFE);
  static readonly SWASHBUCKLER = new CharacterSubclass('Swashbuckler', CharacterSubclassProto.ROGUE_SWASHBUCKLER);
  static readonly THIEF = new CharacterSubclass('Thief', CharacterSubclassProto.ROGUE_THIEF);

  // Sorcerer
  static readonly ABERRANT_SORCERY = new CharacterSubclass(
    'Aberrant Sorcery',
    CharacterSubclassProto.SORCERER_ABERRANT_SORCERY,
  );
  static readonly CLOCKWORK_SORCERY = new CharacterSubclass(
    'Clockwork Sorcery',
    CharacterSubclassProto.SORCERER_CLOCKWORK_SORCERY,
  );
  static readonly DIVINE_SOUL = new CharacterSubclass('Divine Soul', CharacterSubclassProto.SORCERER_DIVINE_SOUL);
  static readonly DRACONIC_SORCERY = new CharacterSubclass(
    'Draconic Sorcery',
    CharacterSubclassProto.SORCERER_DRACONIC_SORCERY,
  );
  static readonly SHADOW_MAGIC = new CharacterSubclass('Shadow Magic', CharacterSubclassProto.SORCERER_SHADOW_MAGIC);
  static readonly SPELLFIRE_SORCERY = new CharacterSubclass(
    'Spellfire Sorcery',
    CharacterSubclassProto.SORCERER_SPELLFIRE_SORCERY,
  );
  static readonly STORM_SORCERY = new CharacterSubclass('Storm Sorcery', CharacterSubclassProto.SORCERER_STORM_SORCERY);
  static readonly WILD_MAGIC_SORCERY = new CharacterSubclass(
    'Wild Magic Sorcery',
    CharacterSubclassProto.SORCERER_WILD_MAGIC_SORCERY,
  );

  // Warlock
  static readonly ARCHFEY_PATRON = new CharacterSubclass(
    'Archfey Patron',
    CharacterSubclassProto.WARLOCK_ARCHFEY_PATRON,
  );
  static readonly CELESTIAL_PATRON = new CharacterSubclass(
    'Celestial Patron',
    CharacterSubclassProto.WARLOCK_CELESTIAL_PATRON,
  );
  static readonly FIEND_PATRON = new CharacterSubclass('Fiend Patron', CharacterSubclassProto.WARLOCK_FIEND_PATRON);
  static readonly GREAT_OLD_ONE_PATRON = new CharacterSubclass(
    'Great Old One Patron',
    CharacterSubclassProto.WARLOCK_GREAT_OLD_ONE_PATRON,
  );
  static readonly THE_HEXBLADE = new CharacterSubclass('The Hexblade', CharacterSubclassProto.WARLOCK_THE_HEXBLADE);

  // Wizard
  static readonly ABJURER = new CharacterSubclass('Abjurer', CharacterSubclassProto.WIZARD_ABJURER);
  static readonly BLADESINGER = new CharacterSubclass('Bladesinger', CharacterSubclassProto.WIZARD_BLADESINGER);
  static readonly DIVINER = new CharacterSubclass('Diviner', CharacterSubclassProto.WIZARD_DIVINER);
  static readonly EVOKER = new CharacterSubclass('Evoker', CharacterSubclassProto.WIZARD_EVOKER);
  static readonly ILLUSIONIST = new CharacterSubclass('Illusionist', CharacterSubclassProto.WIZARD_ILLUSIONIST);
  static readonly WAR_MAGIC = new CharacterSubclass('War Magic', CharacterSubclassProto.WIZARD_WAR_MAGIC);

  constructor(name: string, proto: number) {
    super(name, proto);
    CharacterSubclass.classes.push(this);
  }

  static fromString(text: string): CharacterSubclass {
    return Enum.fromStringValue(text, CharacterSubclass.classes, CharacterSubclass.UNKNOWN);
  }

  static fromProto(proto: number | undefined): CharacterSubclass {
    return Enum.fromProtoValue(proto, CharacterSubclass.classes, CharacterSubclass.UNKNOWN);
  }
}

import { WeaponProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class WeaponProperty extends Enum<WeaponProperty> {
  static readonly properties: WeaponProperty[] = [];

  static readonly UNKNOWN = new WeaponProperty('Unknown', WeaponProto.Property.UNKNOWN_PROPERTY, '');
  static readonly AMMUNITION = new WeaponProperty(
    'Ammunition',
    WeaponProto.Property.AMMUNITION,
    'You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack. At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.\nIf you use a weapon that has the ammunition property   to make a melee attack, you treat the weapon as an improvised weapon (see "Improvised Weapons" later in the section). A sling must be loaded to deal any damage when used in this way.'
  );
  static readonly FINESSE = new WeaponProperty(
    'Finesse',
    WeaponProto.Property.FINESSE,
    'When making an attack with a finesse weapon, you use your choice o f your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
  );
  static readonly HEAVY = new WeaponProperty(
    'Heavy',
    WeaponProto.Property.HEAVY,
    "Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Sm all creature to use effectively."
  );
  static readonly LIGHT = new WeaponProperty(
    'Light',
    WeaponProto.Property.LIGHT,
    'A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons. See the rules for two-weapon fighting in chapter 9.'
  );
  static readonly LOADING = new WeaponProperty(
    'Loading',
    WeaponProto.Property.LOADING,
    'Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.'
  );
  static readonly RANGE = new WeaponProperty(
    'Range',
    WeaponProto.Property.RANGE,
    "A weapon that can be used to make a ranged attack has a range shown in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon's norm al range in feet, and the second indicates the weapon's maximum range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can't attack a target beyond the weapon's long range."
  );
  static readonly REACH = new WeaponProperty(
    'Reach',
    WeaponProto.Property.REACH,
    'This weapon adds 5 feet to your reach when you attack with it.'
  );
  static readonly SPECIAL = new WeaponProperty(
    'Special',
    WeaponProto.Property.SPECIAL,
    "A weapon with the special property has unusual rules governing its use, explained in the weapon's description."
  );
  static readonly THROWN = new WeaponProperty(
    'Thrown',
    WeaponProto.Property.THROWN,
    'If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.'
  );
  static readonly TWO_HANDED = new WeaponProperty(
    'Two Handed',
    WeaponProto.Property.TWO_HANDED,
    'This weapon requires two hands to use.'
  );
  static readonly VERSATILE = new WeaponProperty(
    'Versatile',
    WeaponProto.Property.VERSATILE,
    'This weapon can be used with one or two hands.'
  );

  constructor(name: string, proto: number, public readonly description: string) {
    super(name, proto);
    WeaponProperty.properties.push(this);
  }

  static fromString(text: string): WeaponProperty {
    return Enum.fromStringValue(text, WeaponProperty.properties, WeaponProperty.UNKNOWN);
  }

  static fromProto(proto: number | undefined): WeaponProperty {
    return Enum.fromProtoValue(proto, WeaponProperty.properties, WeaponProperty.UNKNOWN);
  }
}

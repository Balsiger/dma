// source: template.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var value_pb = require('./value_pb.js');
goog.object.extend(proto, value_pb);
goog.exportSymbol('proto.dma.AdventureTemplateProto', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Creature', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Environment', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Environment.Door', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Environment.Spot', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.ReadAloud', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Senses', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.SpellGroup', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Encounter.Treasure', null, global);
goog.exportSymbol('proto.dma.AdventureTemplateProto.Level', null, global);
goog.exportSymbol('proto.dma.ArmorProto', null, global);
goog.exportSymbol('proto.dma.ArmorProto.Type', null, global);
goog.exportSymbol('proto.dma.CommodityTemplateProto', null, global);
goog.exportSymbol('proto.dma.CommonProto', null, global);
goog.exportSymbol('proto.dma.CommonProto.Naming', null, global);
goog.exportSymbol('proto.dma.CompositeTemplateProto', null, global);
goog.exportSymbol('proto.dma.CompositeTemplateProto.Or', null, global);
goog.exportSymbol('proto.dma.ConditionProto', null, global);
goog.exportSymbol('proto.dma.ConditionsProto', null, global);
goog.exportSymbol('proto.dma.ContainerTemplateProto', null, global);
goog.exportSymbol('proto.dma.ContainerTemplateProto.State', null, global);
goog.exportSymbol('proto.dma.CountedTemplateProto', null, global);
goog.exportSymbol('proto.dma.CountedTemplateProto.Unit', null, global);
goog.exportSymbol('proto.dma.FeatTemplateProto', null, global);
goog.exportSymbol('proto.dma.FeatTemplateProto.Qualifier', null, global);
goog.exportSymbol('proto.dma.IncompleteTemplateProto', null, global);
goog.exportSymbol('proto.dma.ItemLookupProto', null, global);
goog.exportSymbol('proto.dma.ItemProto', null, global);
goog.exportSymbol('proto.dma.ItemProto.Lore', null, global);
goog.exportSymbol('proto.dma.ItemProto.Lore.Check', null, global);
goog.exportSymbol('proto.dma.ItemProto.Material', null, global);
goog.exportSymbol('proto.dma.ItemProto.Material.ValueType', null, global);
goog.exportSymbol('proto.dma.ItemProto.Random', null, global);
goog.exportSymbol('proto.dma.ItemProto.Random.Type', null, global);
goog.exportSymbol('proto.dma.ItemProto.Rarity', null, global);
goog.exportSymbol('proto.dma.ItemProto.Substance', null, global);
goog.exportSymbol('proto.dma.ItemProto.Substance.Material', null, global);
goog.exportSymbol('proto.dma.ItemProto.Subtype', null, global);
goog.exportSymbol('proto.dma.ItemProto.Type', null, global);
goog.exportSymbol('proto.dma.ItemsProto', null, global);
goog.exportSymbol('proto.dma.LevelTemplateProto', null, global);
goog.exportSymbol('proto.dma.LevelTemplateProto.PerLevel', null, global);
goog.exportSymbol('proto.dma.LevelTemplateProto.Requirement', null, global);
goog.exportSymbol('proto.dma.LeveledTemplateProto', null, global);
goog.exportSymbol('proto.dma.LightTemplateProto', null, global);
goog.exportSymbol('proto.dma.LightTemplateProto.Light', null, global);
goog.exportSymbol('proto.dma.LightTemplateProto.Light.Shape', null, global);
goog.exportSymbol('proto.dma.MagicProto', null, global);
goog.exportSymbol('proto.dma.MagicProto.Modifier', null, global);
goog.exportSymbol('proto.dma.MagicProto.Type', null, global);
goog.exportSymbol('proto.dma.MapsProto', null, global);
goog.exportSymbol('proto.dma.MapsProto.Map', null, global);
goog.exportSymbol('proto.dma.MapsProto.Map.Attribution', null, global);
goog.exportSymbol('proto.dma.MapsProto.Map.Attribution.Licence', null, global);
goog.exportSymbol('proto.dma.MiniatureProto', null, global);
goog.exportSymbol('proto.dma.MiniaturesProto', null, global);
goog.exportSymbol('proto.dma.MonsterProto', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Abilities', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Action', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Age', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Attack', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Attack.Type', null, global);
goog.exportSymbol('proto.dma.MonsterProto.ConditionType', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Height', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Languages', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Languages.Name', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Legendary', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Multiattack', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Multiattack.Attacks', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Multiattack.Attacks.Attack', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Possession', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Senses', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Skill', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Trait', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Treasure', null, global);
goog.exportSymbol('proto.dma.MonsterProto.Weight', null, global);
goog.exportSymbol('proto.dma.MonstersProto', null, global);
goog.exportSymbol('proto.dma.MultipleTemplateProto', null, global);
goog.exportSymbol('proto.dma.MultiuseTemplateProto', null, global);
goog.exportSymbol('proto.dma.NPCProto', null, global);
goog.exportSymbol('proto.dma.NPCProto.Gender', null, global);
goog.exportSymbol('proto.dma.NPCProto.History', null, global);
goog.exportSymbol('proto.dma.NPCsProto', null, global);
goog.exportSymbol('proto.dma.ParametrizedTemplateProto', null, global);
goog.exportSymbol('proto.dma.ProductProto', null, global);
goog.exportSymbol('proto.dma.ProductProto.Audience', null, global);
goog.exportSymbol('proto.dma.ProductProto.Content', null, global);
goog.exportSymbol('proto.dma.ProductProto.Content.Part', null, global);
goog.exportSymbol('proto.dma.ProductProto.Date', null, global);
goog.exportSymbol('proto.dma.ProductProto.ISBN', null, global);
goog.exportSymbol('proto.dma.ProductProto.ISBN13', null, global);
goog.exportSymbol('proto.dma.ProductProto.Layout', null, global);
goog.exportSymbol('proto.dma.ProductProto.Person', null, global);
goog.exportSymbol('proto.dma.ProductProto.Style', null, global);
goog.exportSymbol('proto.dma.ProductProto.System', null, global);
goog.exportSymbol('proto.dma.ProductProto.Type', null, global);
goog.exportSymbol('proto.dma.ProductsProto', null, global);
goog.exportSymbol('proto.dma.QualityTemplateProto', null, global);
goog.exportSymbol('proto.dma.QualityTemplateProto.AbilityModifier', null, global);
goog.exportSymbol('proto.dma.QualityTemplateProto.Immunity', null, global);
goog.exportSymbol('proto.dma.QualityTemplateProto.KeyedModifier', null, global);
goog.exportSymbol('proto.dma.QualityTemplateProto.Type', null, global);
goog.exportSymbol('proto.dma.SkillTemplateProto', null, global);
goog.exportSymbol('proto.dma.SkillTemplateProto.DC', null, global);
goog.exportSymbol('proto.dma.SkillTemplateProto.Modifier', null, global);
goog.exportSymbol('proto.dma.SkillTemplateProto.Restriction', null, global);
goog.exportSymbol('proto.dma.SkillTemplateProto.Synergy', null, global);
goog.exportSymbol('proto.dma.SpellProto', null, global);
goog.exportSymbol('proto.dma.SpellProto.Duration', null, global);
goog.exportSymbol('proto.dma.SpellProto.Range', null, global);
goog.exportSymbol('proto.dma.SpellProto.Range.Shape', null, global);
goog.exportSymbol('proto.dma.SpellProto.School', null, global);
goog.exportSymbol('proto.dma.SpellsProto', null, global);
goog.exportSymbol('proto.dma.TimedTemplateProto', null, global);
goog.exportSymbol('proto.dma.WeaponProto', null, global);
goog.exportSymbol('proto.dma.WeaponProto.Proficiency', null, global);
goog.exportSymbol('proto.dma.WeaponProto.Property', null, global);
goog.exportSymbol('proto.dma.WeaponProto.Style', null, global);
goog.exportSymbol('proto.dma.WeaponProto.Type', null, global);
goog.exportSymbol('proto.dma.WearableTemplateProto', null, global);
goog.exportSymbol('proto.dma.WearableTemplateProto.Slot', null, global);
goog.exportSymbol('proto.dma.WorldTemplateProto', null, global);
goog.exportSymbol('proto.dma.WorldTemplateProto.Names', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.CommonProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.CommonProto.repeatedFields_, null);
};
goog.inherits(proto.dma.CommonProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.CommonProto.displayName = 'proto.dma.CommonProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.WorldTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.WorldTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.WorldTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.WorldTemplateProto.displayName = 'proto.dma.WorldTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.WorldTemplateProto.Names = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.WorldTemplateProto.Names.repeatedFields_, null);
};
goog.inherits(proto.dma.WorldTemplateProto.Names, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.WorldTemplateProto.Names.displayName = 'proto.dma.WorldTemplateProto.Names';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.displayName = 'proto.dma.MonsterProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Abilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Abilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Abilities.displayName = 'proto.dma.MonsterProto.Abilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Senses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Senses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Senses.displayName = 'proto.dma.MonsterProto.Senses';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Languages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterProto.Languages.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterProto.Languages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Languages.displayName = 'proto.dma.MonsterProto.Languages';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Trait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Trait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Trait.displayName = 'proto.dma.MonsterProto.Trait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Multiattack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterProto.Multiattack.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterProto.Multiattack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Multiattack.displayName = 'proto.dma.MonsterProto.Multiattack';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Multiattack.Attacks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterProto.Multiattack.Attacks.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterProto.Multiattack.Attacks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Multiattack.Attacks.displayName = 'proto.dma.MonsterProto.Multiattack.Attacks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Multiattack.Attacks.Attack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Multiattack.Attacks.Attack.displayName = 'proto.dma.MonsterProto.Multiattack.Attacks.Attack';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Attack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterProto.Attack.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterProto.Attack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Attack.displayName = 'proto.dma.MonsterProto.Attack';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Action.displayName = 'proto.dma.MonsterProto.Action';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Legendary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterProto.Legendary.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterProto.Legendary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Legendary.displayName = 'proto.dma.MonsterProto.Legendary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Possession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Possession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Possession.displayName = 'proto.dma.MonsterProto.Possession';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Height = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Height, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Height.displayName = 'proto.dma.MonsterProto.Height';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Weight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Weight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Weight.displayName = 'proto.dma.MonsterProto.Weight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonsterProto.Age = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterProto.Age, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterProto.Age.displayName = 'proto.dma.MonsterProto.Age';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MonstersProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonstersProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MonstersProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonstersProto.displayName = 'proto.dma.MonstersProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.NPCProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.NPCProto.repeatedFields_, null);
};
goog.inherits(proto.dma.NPCProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.NPCProto.displayName = 'proto.dma.NPCProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.NPCProto.History = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.NPCProto.History, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.NPCProto.History.displayName = 'proto.dma.NPCProto.History';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.NPCsProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.NPCsProto.repeatedFields_, null);
};
goog.inherits(proto.dma.NPCsProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.NPCsProto.displayName = 'proto.dma.NPCsProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ConditionProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ConditionProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ConditionProto.displayName = 'proto.dma.ConditionProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ConditionsProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ConditionsProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ConditionsProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ConditionsProto.displayName = 'proto.dma.ConditionsProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemProto.displayName = 'proto.dma.ItemProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemProto.Substance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ItemProto.Substance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemProto.Substance.displayName = 'proto.dma.ItemProto.Substance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemProto.Random = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemProto.Random.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemProto.Random, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemProto.Random.displayName = 'proto.dma.ItemProto.Random';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemProto.Material = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ItemProto.Material, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemProto.Material.displayName = 'proto.dma.ItemProto.Material';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemProto.Lore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemProto.Lore.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemProto.Lore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemProto.Lore.displayName = 'proto.dma.ItemProto.Lore';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemProto.Lore.Check = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ItemProto.Lore.Check, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemProto.Lore.Check.displayName = 'proto.dma.ItemProto.Lore.Check';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemsProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemsProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemsProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemsProto.displayName = 'proto.dma.ItemsProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ItemLookupProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemLookupProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemLookupProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemLookupProto.displayName = 'proto.dma.ItemLookupProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.LevelTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.LevelTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.LevelTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.LevelTemplateProto.displayName = 'proto.dma.LevelTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.LevelTemplateProto.PerLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.LevelTemplateProto.PerLevel.repeatedFields_, null);
};
goog.inherits(proto.dma.LevelTemplateProto.PerLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.LevelTemplateProto.PerLevel.displayName = 'proto.dma.LevelTemplateProto.PerLevel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.LevelTemplateProto.Requirement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.LevelTemplateProto.Requirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.LevelTemplateProto.Requirement.displayName = 'proto.dma.LevelTemplateProto.Requirement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.QualityTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.QualityTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.QualityTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.QualityTemplateProto.displayName = 'proto.dma.QualityTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.QualityTemplateProto.AbilityModifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.QualityTemplateProto.AbilityModifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.QualityTemplateProto.AbilityModifier.displayName = 'proto.dma.QualityTemplateProto.AbilityModifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.QualityTemplateProto.KeyedModifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.QualityTemplateProto.KeyedModifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.QualityTemplateProto.KeyedModifier.displayName = 'proto.dma.QualityTemplateProto.KeyedModifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ParametrizedTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ParametrizedTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ParametrizedTemplateProto.displayName = 'proto.dma.ParametrizedTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.LeveledTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.LeveledTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.LeveledTemplateProto.displayName = 'proto.dma.LeveledTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.WeaponProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.WeaponProto.repeatedFields_, null);
};
goog.inherits(proto.dma.WeaponProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.WeaponProto.displayName = 'proto.dma.WeaponProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MagicProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MagicProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MagicProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MagicProto.displayName = 'proto.dma.MagicProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MagicProto.Modifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MagicProto.Modifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MagicProto.Modifier.displayName = 'proto.dma.MagicProto.Modifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.WearableTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.WearableTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.WearableTemplateProto.displayName = 'proto.dma.WearableTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.IncompleteTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.IncompleteTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.IncompleteTemplateProto.displayName = 'proto.dma.IncompleteTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.CountedTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.CountedTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.CountedTemplateProto.displayName = 'proto.dma.CountedTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MultipleTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MultipleTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MultipleTemplateProto.displayName = 'proto.dma.MultipleTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MultiuseTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MultiuseTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MultiuseTemplateProto.displayName = 'proto.dma.MultiuseTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.TimedTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.TimedTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.TimedTemplateProto.displayName = 'proto.dma.TimedTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.CommodityTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.CommodityTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.CommodityTemplateProto.displayName = 'proto.dma.CommodityTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ContainerTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ContainerTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ContainerTemplateProto.displayName = 'proto.dma.ContainerTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ArmorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ArmorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ArmorProto.displayName = 'proto.dma.ArmorProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.LightTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.LightTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.LightTemplateProto.displayName = 'proto.dma.LightTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.LightTemplateProto.Light = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.LightTemplateProto.Light, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.LightTemplateProto.Light.displayName = 'proto.dma.LightTemplateProto.Light';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.CompositeTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.CompositeTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.CompositeTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.CompositeTemplateProto.displayName = 'proto.dma.CompositeTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.CompositeTemplateProto.Or = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.CompositeTemplateProto.Or.repeatedFields_, null);
};
goog.inherits(proto.dma.CompositeTemplateProto.Or, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.CompositeTemplateProto.Or.displayName = 'proto.dma.CompositeTemplateProto.Or';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.FeatTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.FeatTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.FeatTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.FeatTemplateProto.displayName = 'proto.dma.FeatTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MiniatureProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MiniatureProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MiniatureProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MiniatureProto.displayName = 'proto.dma.MiniatureProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MiniaturesProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MiniaturesProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MiniaturesProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MiniaturesProto.displayName = 'proto.dma.MiniaturesProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.SkillTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.SkillTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.SkillTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SkillTemplateProto.displayName = 'proto.dma.SkillTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.SkillTemplateProto.DC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.SkillTemplateProto.DC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SkillTemplateProto.DC.displayName = 'proto.dma.SkillTemplateProto.DC';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.SkillTemplateProto.Synergy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.SkillTemplateProto.Synergy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SkillTemplateProto.Synergy.displayName = 'proto.dma.SkillTemplateProto.Synergy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.SpellProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.SpellProto.repeatedFields_, null);
};
goog.inherits(proto.dma.SpellProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellProto.displayName = 'proto.dma.SpellProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.SpellProto.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.SpellProto.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellProto.Duration.displayName = 'proto.dma.SpellProto.Duration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.SpellProto.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.SpellProto.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellProto.Range.displayName = 'proto.dma.SpellProto.Range';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.SpellsProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.SpellsProto.repeatedFields_, null);
};
goog.inherits(proto.dma.SpellsProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellsProto.displayName = 'proto.dma.SpellsProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.displayName = 'proto.dma.AdventureTemplateProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Level = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Level, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Level.displayName = 'proto.dma.AdventureTemplateProto.Level';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.displayName = 'proto.dma.AdventureTemplateProto.Encounter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.ReadAloud, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.ReadAloud.displayName = 'proto.dma.AdventureTemplateProto.Encounter.ReadAloud';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Environment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.Environment.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Environment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Environment.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Environment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Environment.Spot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Environment.Door, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Environment.Door.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Environment.Door';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Senses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.Senses.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Senses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Senses.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Senses';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Creature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.Creature.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Creature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Creature.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Creature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.Treasure.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.Treasure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.Treasure.displayName = 'proto.dma.AdventureTemplateProto.Encounter.Treasure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.SpellGroup.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.SpellGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.SpellGroup.displayName = 'proto.dma.AdventureTemplateProto.Encounter.SpellGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.repeatedFields_, null);
};
goog.inherits(proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.displayName = 'proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ProductProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ProductProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ProductProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductProto.displayName = 'proto.dma.ProductProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ProductProto.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductProto.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductProto.Person.displayName = 'proto.dma.ProductProto.Person';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ProductProto.Date = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductProto.Date, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductProto.Date.displayName = 'proto.dma.ProductProto.Date';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ProductProto.ISBN = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductProto.ISBN, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductProto.ISBN.displayName = 'proto.dma.ProductProto.ISBN';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ProductProto.ISBN13 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductProto.ISBN13, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductProto.ISBN13.displayName = 'proto.dma.ProductProto.ISBN13';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ProductProto.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductProto.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductProto.Content.displayName = 'proto.dma.ProductProto.Content';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.ProductsProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ProductsProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ProductsProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductsProto.displayName = 'proto.dma.ProductsProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MapsProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MapsProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MapsProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MapsProto.displayName = 'proto.dma.MapsProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MapsProto.Map = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MapsProto.Map.repeatedFields_, null);
};
goog.inherits(proto.dma.MapsProto.Map, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MapsProto.Map.displayName = 'proto.dma.MapsProto.Map';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dma.MapsProto.Map.Attribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MapsProto.Map.Attribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MapsProto.Map.Attribution.displayName = 'proto.dma.MapsProto.Map.Attribution';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.CommonProto.repeatedFields_ = [3,4,5,6,7,10,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.CommonProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.CommonProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.CommonProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CommonProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    plural: jspb.Message.getFieldWithDefault(msg, 15, ""),
    basesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    categoriesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    synonymsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    referencesList: jspb.Message.toObjectList(msg.getReferencesList(),
    value_pb.ReferenceProto.toObject, includeInstance),
    worldsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    shortDescription: jspb.Message.getFieldWithDefault(msg, 9, ""),
    incompletesList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    baseOnly: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    naming: jspb.Message.getFieldWithDefault(msg, 12, 0),
    composedName: jspb.Message.getFieldWithDefault(msg, 13, ""),
    imagesList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.CommonProto}
 */
proto.dma.CommonProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.CommonProto;
  return proto.dma.CommonProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.CommonProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.CommonProto}
 */
proto.dma.CommonProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlural(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addBases(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategories(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSynonyms(value);
      break;
    case 6:
      var value = new value_pb.ReferenceProto;
      reader.readMessage(value,value_pb.ReferenceProto.deserializeBinaryFromReader);
      msg.addReferences(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addWorlds(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortDescription(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addIncompletes(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBaseOnly(value);
      break;
    case 12:
      var value = /** @type {!proto.dma.CommonProto.Naming} */ (reader.readEnum());
      msg.setNaming(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setComposedName(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addImages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.CommonProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.CommonProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.CommonProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CommonProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlural();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getBasesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSynonymsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getReferencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      value_pb.ReferenceProto.serializeBinaryToWriter
    );
  }
  f = message.getWorldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getShortDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIncompletesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getBaseOnly();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getNaming();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getComposedName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.CommonProto.Naming = {
  INFIX: 0,
  POSTFIX: 1,
  PREFIX: 2,
  IGNORE: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.dma.CommonProto.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dma.CommonProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string plural = 15;
 * @return {string}
 */
proto.dma.CommonProto.prototype.getPlural = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setPlural = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated string bases = 3;
 * @return {!Array<string>}
 */
proto.dma.CommonProto.prototype.getBasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setBasesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.addBases = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.clearBasesList = function() {
  return this.setBasesList([]);
};


/**
 * repeated string categories = 4;
 * @return {!Array<string>}
 */
proto.dma.CommonProto.prototype.getCategoriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setCategoriesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.addCategories = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};


/**
 * repeated string synonyms = 5;
 * @return {!Array<string>}
 */
proto.dma.CommonProto.prototype.getSynonymsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setSynonymsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.addSynonyms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.clearSynonymsList = function() {
  return this.setSynonymsList([]);
};


/**
 * repeated ReferenceProto references = 6;
 * @return {!Array<!proto.dma.ReferenceProto>}
 */
proto.dma.CommonProto.prototype.getReferencesList = function() {
  return /** @type{!Array<!proto.dma.ReferenceProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.ReferenceProto, 6));
};


/**
 * @param {!Array<!proto.dma.ReferenceProto>} value
 * @return {!proto.dma.CommonProto} returns this
*/
proto.dma.CommonProto.prototype.setReferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.ReferenceProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ReferenceProto}
 */
proto.dma.CommonProto.prototype.addReferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.ReferenceProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.clearReferencesList = function() {
  return this.setReferencesList([]);
};


/**
 * repeated string worlds = 7;
 * @return {!Array<string>}
 */
proto.dma.CommonProto.prototype.getWorldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setWorldsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.addWorlds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.clearWorldsList = function() {
  return this.setWorldsList([]);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.dma.CommonProto.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string short_description = 9;
 * @return {string}
 */
proto.dma.CommonProto.prototype.getShortDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setShortDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string incompletes = 10;
 * @return {!Array<string>}
 */
proto.dma.CommonProto.prototype.getIncompletesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setIncompletesList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.addIncompletes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.clearIncompletesList = function() {
  return this.setIncompletesList([]);
};


/**
 * optional bool base_only = 11;
 * @return {boolean}
 */
proto.dma.CommonProto.prototype.getBaseOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setBaseOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional Naming naming = 12;
 * @return {!proto.dma.CommonProto.Naming}
 */
proto.dma.CommonProto.prototype.getNaming = function() {
  return /** @type {!proto.dma.CommonProto.Naming} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.dma.CommonProto.Naming} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setNaming = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string composed_name = 13;
 * @return {string}
 */
proto.dma.CommonProto.prototype.getComposedName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setComposedName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated string images = 14;
 * @return {!Array<string>}
 */
proto.dma.CommonProto.prototype.getImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.setImagesList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.addImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CommonProto} returns this
 */
proto.dma.CommonProto.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.WorldTemplateProto.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.WorldTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.WorldTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.WorldTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WorldTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    calendar: (f = msg.getCalendar()) && value_pb.CalendarProto.toObject(includeInstance, f),
    namesList: jspb.Message.toObjectList(msg.getNamesList(),
    proto.dma.WorldTemplateProto.Names.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.WorldTemplateProto}
 */
proto.dma.WorldTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.WorldTemplateProto;
  return proto.dma.WorldTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.WorldTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.WorldTemplateProto}
 */
proto.dma.WorldTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new value_pb.CalendarProto;
      reader.readMessage(value,value_pb.CalendarProto.deserializeBinaryFromReader);
      msg.setCalendar(value);
      break;
    case 3:
      var value = new proto.dma.WorldTemplateProto.Names;
      reader.readMessage(value,proto.dma.WorldTemplateProto.Names.deserializeBinaryFromReader);
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.WorldTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.WorldTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.WorldTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WorldTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getCalendar();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.CalendarProto.serializeBinaryToWriter
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dma.WorldTemplateProto.Names.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.WorldTemplateProto.Names.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.WorldTemplateProto.Names.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.WorldTemplateProto.Names.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.WorldTemplateProto.Names} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WorldTemplateProto.Names.toObject = function(includeInstance, msg) {
  var f, obj = {
    race: jspb.Message.getFieldWithDefault(msg, 1, ""),
    region: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maleList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    femaleList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    surenameList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.WorldTemplateProto.Names}
 */
proto.dma.WorldTemplateProto.Names.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.WorldTemplateProto.Names;
  return proto.dma.WorldTemplateProto.Names.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.WorldTemplateProto.Names} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.WorldTemplateProto.Names}
 */
proto.dma.WorldTemplateProto.Names.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addMale(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFemale(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSurename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.WorldTemplateProto.Names.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.WorldTemplateProto.Names.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.WorldTemplateProto.Names} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WorldTemplateProto.Names.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaleList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getFemaleList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSurenameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string race = 1;
 * @return {string}
 */
proto.dma.WorldTemplateProto.Names.prototype.getRace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.setRace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string region = 2;
 * @return {string}
 */
proto.dma.WorldTemplateProto.Names.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string male = 3;
 * @return {!Array<string>}
 */
proto.dma.WorldTemplateProto.Names.prototype.getMaleList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.setMaleList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.addMale = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.clearMaleList = function() {
  return this.setMaleList([]);
};


/**
 * repeated string female = 4;
 * @return {!Array<string>}
 */
proto.dma.WorldTemplateProto.Names.prototype.getFemaleList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.setFemaleList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.addFemale = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.clearFemaleList = function() {
  return this.setFemaleList([]);
};


/**
 * repeated string surename = 5;
 * @return {!Array<string>}
 */
proto.dma.WorldTemplateProto.Names.prototype.getSurenameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.setSurenameList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.addSurename = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.WorldTemplateProto.Names} returns this
 */
proto.dma.WorldTemplateProto.Names.prototype.clearSurenameList = function() {
  return this.setSurenameList([]);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.WorldTemplateProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.WorldTemplateProto} returns this
*/
proto.dma.WorldTemplateProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WorldTemplateProto} returns this
 */
proto.dma.WorldTemplateProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WorldTemplateProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CalendarProto calendar = 2;
 * @return {?proto.dma.CalendarProto}
 */
proto.dma.WorldTemplateProto.prototype.getCalendar = function() {
  return /** @type{?proto.dma.CalendarProto} */ (
    jspb.Message.getWrapperField(this, value_pb.CalendarProto, 2));
};


/**
 * @param {?proto.dma.CalendarProto|undefined} value
 * @return {!proto.dma.WorldTemplateProto} returns this
*/
proto.dma.WorldTemplateProto.prototype.setCalendar = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WorldTemplateProto} returns this
 */
proto.dma.WorldTemplateProto.prototype.clearCalendar = function() {
  return this.setCalendar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WorldTemplateProto.prototype.hasCalendar = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Names names = 3;
 * @return {!Array<!proto.dma.WorldTemplateProto.Names>}
 */
proto.dma.WorldTemplateProto.prototype.getNamesList = function() {
  return /** @type{!Array<!proto.dma.WorldTemplateProto.Names>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.WorldTemplateProto.Names, 3));
};


/**
 * @param {!Array<!proto.dma.WorldTemplateProto.Names>} value
 * @return {!proto.dma.WorldTemplateProto} returns this
*/
proto.dma.WorldTemplateProto.prototype.setNamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dma.WorldTemplateProto.Names=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.WorldTemplateProto.Names}
 */
proto.dma.WorldTemplateProto.prototype.addNames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dma.WorldTemplateProto.Names, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.WorldTemplateProto} returns this
 */
proto.dma.WorldTemplateProto.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonsterProto.repeatedFields_ = [4,8,11,12,13,14,15,16,17,21,23,24,25,46,27,28,29,32,33,35];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    alignment: jspb.Message.getFieldWithDefault(msg, 5, 0),
    naturalArmor: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hitDiceNumber: jspb.Message.getFieldWithDefault(msg, 7, 0),
    speedList: jspb.Message.toObjectList(msg.getSpeedList(),
    value_pb.SpeedProto.toObject, includeInstance),
    abilities: (f = msg.getAbilities()) && proto.dma.MonsterProto.Abilities.toObject(includeInstance, f),
    spellcastingAbility: jspb.Message.getFieldWithDefault(msg, 10, 0),
    savingThrowsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    proficientSkillsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    doubleProficientSkillsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    damageVulnerabilitiesList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    damageImmunitiesList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    damageResistancesList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    conditionImmunitiesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    senses: (f = msg.getSenses()) && proto.dma.MonsterProto.Senses.toObject(includeInstance, f),
    languages: (f = msg.getLanguages()) && proto.dma.MonsterProto.Languages.toObject(includeInstance, f),
    challenge: (f = msg.getChallenge()) && value_pb.RationalProto.toObject(includeInstance, f),
    traitsList: jspb.Message.toObjectList(msg.getTraitsList(),
    proto.dma.MonsterProto.Trait.toObject, includeInstance),
    multiattack: (f = msg.getMultiattack()) && proto.dma.MonsterProto.Multiattack.toObject(includeInstance, f),
    attacksList: jspb.Message.toObjectList(msg.getAttacksList(),
    proto.dma.MonsterProto.Attack.toObject, includeInstance),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.dma.MonsterProto.Action.toObject, includeInstance),
    reactionsList: jspb.Message.toObjectList(msg.getReactionsList(),
    proto.dma.MonsterProto.Action.toObject, includeInstance),
    bonusActionsList: jspb.Message.toObjectList(msg.getBonusActionsList(),
    proto.dma.MonsterProto.Action.toObject, includeInstance),
    legendary: (f = msg.getLegendary()) && proto.dma.MonsterProto.Legendary.toObject(includeInstance, f),
    itemsUsedList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
    itemsCarriedList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
    itemsRemovedList: (f = jspb.Message.getRepeatedField(msg, 29)) == null ? undefined : f,
    treasure: jspb.Message.getFieldWithDefault(msg, 220, 0),
    levelAdjustment: jspb.Message.getFieldWithDefault(msg, 124, 0),
    mainRace: jspb.Message.getBooleanFieldWithDefault(msg, 125, false),
    possessionList: jspb.Message.toObjectList(msg.getPossessionList(),
    proto.dma.MonsterProto.Possession.toObject, includeInstance),
    proficiencyList: (f = jspb.Message.getRepeatedField(msg, 33)) == null ? undefined : f,
    quadruped: jspb.Message.getBooleanFieldWithDefault(msg, 34, false),
    qualityList: jspb.Message.toObjectList(msg.getQualityList(),
    proto.dma.ParametrizedTemplateProto.toObject, includeInstance),
    maleHeight: (f = msg.getMaleHeight()) && proto.dma.MonsterProto.Height.toObject(includeInstance, f),
    femaleHeight: (f = msg.getFemaleHeight()) && proto.dma.MonsterProto.Height.toObject(includeInstance, f),
    maleWeight: (f = msg.getMaleWeight()) && proto.dma.MonsterProto.Weight.toObject(includeInstance, f),
    femaleWeight: (f = msg.getFemaleWeight()) && proto.dma.MonsterProto.Weight.toObject(includeInstance, f),
    age: (f = msg.getAge()) && proto.dma.MonsterProto.Age.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto}
 */
proto.dma.MonsterProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto;
  return proto.dma.MonsterProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto}
 */
proto.dma.MonsterProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.SizeProto} */ (reader.readEnum());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {!proto.dma.MonsterTypeProto} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.dma.MonsterTagProto>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTags(values[i]);
      }
      break;
    case 5:
      var value = /** @type {!proto.dma.AlignmentProto} */ (reader.readEnum());
      msg.setAlignment(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNaturalArmor(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHitDiceNumber(value);
      break;
    case 8:
      var value = new value_pb.SpeedProto;
      reader.readMessage(value,value_pb.SpeedProto.deserializeBinaryFromReader);
      msg.addSpeed(value);
      break;
    case 9:
      var value = new proto.dma.MonsterProto.Abilities;
      reader.readMessage(value,proto.dma.MonsterProto.Abilities.deserializeBinaryFromReader);
      msg.setAbilities(value);
      break;
    case 10:
      var value = /** @type {!proto.dma.Ability} */ (reader.readEnum());
      msg.setSpellcastingAbility(value);
      break;
    case 11:
      var values = /** @type {!Array<!proto.dma.Ability>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSavingThrows(values[i]);
      }
      break;
    case 12:
      var values = /** @type {!Array<!proto.dma.MonsterProto.Skill>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProficientSkills(values[i]);
      }
      break;
    case 13:
      var values = /** @type {!Array<!proto.dma.MonsterProto.Skill>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDoubleProficientSkills(values[i]);
      }
      break;
    case 14:
      var values = /** @type {!Array<!proto.dma.DamageProto.DamageType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDamageVulnerabilities(values[i]);
      }
      break;
    case 15:
      var values = /** @type {!Array<!proto.dma.DamageProto.DamageType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDamageImmunities(values[i]);
      }
      break;
    case 16:
      var values = /** @type {!Array<!proto.dma.DamageProto.DamageType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDamageResistances(values[i]);
      }
      break;
    case 17:
      var values = /** @type {!Array<!proto.dma.MonsterProto.ConditionType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConditionImmunities(values[i]);
      }
      break;
    case 18:
      var value = new proto.dma.MonsterProto.Senses;
      reader.readMessage(value,proto.dma.MonsterProto.Senses.deserializeBinaryFromReader);
      msg.setSenses(value);
      break;
    case 19:
      var value = new proto.dma.MonsterProto.Languages;
      reader.readMessage(value,proto.dma.MonsterProto.Languages.deserializeBinaryFromReader);
      msg.setLanguages(value);
      break;
    case 20:
      var value = new value_pb.RationalProto;
      reader.readMessage(value,value_pb.RationalProto.deserializeBinaryFromReader);
      msg.setChallenge(value);
      break;
    case 21:
      var value = new proto.dma.MonsterProto.Trait;
      reader.readMessage(value,proto.dma.MonsterProto.Trait.deserializeBinaryFromReader);
      msg.addTraits(value);
      break;
    case 22:
      var value = new proto.dma.MonsterProto.Multiattack;
      reader.readMessage(value,proto.dma.MonsterProto.Multiattack.deserializeBinaryFromReader);
      msg.setMultiattack(value);
      break;
    case 23:
      var value = new proto.dma.MonsterProto.Attack;
      reader.readMessage(value,proto.dma.MonsterProto.Attack.deserializeBinaryFromReader);
      msg.addAttacks(value);
      break;
    case 24:
      var value = new proto.dma.MonsterProto.Action;
      reader.readMessage(value,proto.dma.MonsterProto.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 25:
      var value = new proto.dma.MonsterProto.Action;
      reader.readMessage(value,proto.dma.MonsterProto.Action.deserializeBinaryFromReader);
      msg.addReactions(value);
      break;
    case 46:
      var value = new proto.dma.MonsterProto.Action;
      reader.readMessage(value,proto.dma.MonsterProto.Action.deserializeBinaryFromReader);
      msg.addBonusActions(value);
      break;
    case 26:
      var value = new proto.dma.MonsterProto.Legendary;
      reader.readMessage(value,proto.dma.MonsterProto.Legendary.deserializeBinaryFromReader);
      msg.setLegendary(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addItemsUsed(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.addItemsCarried(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.addItemsRemoved(value);
      break;
    case 220:
      var value = /** @type {!proto.dma.MonsterProto.Treasure} */ (reader.readEnum());
      msg.setTreasure(value);
      break;
    case 124:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelAdjustment(value);
      break;
    case 125:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMainRace(value);
      break;
    case 32:
      var value = new proto.dma.MonsterProto.Possession;
      reader.readMessage(value,proto.dma.MonsterProto.Possession.deserializeBinaryFromReader);
      msg.addPossession(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.addProficiency(value);
      break;
    case 34:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuadruped(value);
      break;
    case 35:
      var value = new proto.dma.ParametrizedTemplateProto;
      reader.readMessage(value,proto.dma.ParametrizedTemplateProto.deserializeBinaryFromReader);
      msg.addQuality(value);
      break;
    case 41:
      var value = new proto.dma.MonsterProto.Height;
      reader.readMessage(value,proto.dma.MonsterProto.Height.deserializeBinaryFromReader);
      msg.setMaleHeight(value);
      break;
    case 42:
      var value = new proto.dma.MonsterProto.Height;
      reader.readMessage(value,proto.dma.MonsterProto.Height.deserializeBinaryFromReader);
      msg.setFemaleHeight(value);
      break;
    case 43:
      var value = new proto.dma.MonsterProto.Weight;
      reader.readMessage(value,proto.dma.MonsterProto.Weight.deserializeBinaryFromReader);
      msg.setMaleWeight(value);
      break;
    case 44:
      var value = new proto.dma.MonsterProto.Weight;
      reader.readMessage(value,proto.dma.MonsterProto.Weight.deserializeBinaryFromReader);
      msg.setFemaleWeight(value);
      break;
    case 45:
      var value = new proto.dma.MonsterProto.Age;
      reader.readMessage(value,proto.dma.MonsterProto.Age.deserializeBinaryFromReader);
      msg.setAge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getAlignment();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getNaturalArmor();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHitDiceNumber();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getSpeedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      value_pb.SpeedProto.serializeBinaryToWriter
    );
  }
  f = message.getAbilities();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dma.MonsterProto.Abilities.serializeBinaryToWriter
    );
  }
  f = message.getSpellcastingAbility();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getSavingThrowsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      11,
      f
    );
  }
  f = message.getProficientSkillsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      12,
      f
    );
  }
  f = message.getDoubleProficientSkillsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      13,
      f
    );
  }
  f = message.getDamageVulnerabilitiesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      14,
      f
    );
  }
  f = message.getDamageImmunitiesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      15,
      f
    );
  }
  f = message.getDamageResistancesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      16,
      f
    );
  }
  f = message.getConditionImmunitiesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      17,
      f
    );
  }
  f = message.getSenses();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.dma.MonsterProto.Senses.serializeBinaryToWriter
    );
  }
  f = message.getLanguages();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.dma.MonsterProto.Languages.serializeBinaryToWriter
    );
  }
  f = message.getChallenge();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      value_pb.RationalProto.serializeBinaryToWriter
    );
  }
  f = message.getTraitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.dma.MonsterProto.Trait.serializeBinaryToWriter
    );
  }
  f = message.getMultiattack();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.dma.MonsterProto.Multiattack.serializeBinaryToWriter
    );
  }
  f = message.getAttacksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto.dma.MonsterProto.Attack.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.dma.MonsterProto.Action.serializeBinaryToWriter
    );
  }
  f = message.getReactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.dma.MonsterProto.Action.serializeBinaryToWriter
    );
  }
  f = message.getBonusActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      46,
      f,
      proto.dma.MonsterProto.Action.serializeBinaryToWriter
    );
  }
  f = message.getLegendary();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.dma.MonsterProto.Legendary.serializeBinaryToWriter
    );
  }
  f = message.getItemsUsedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getItemsCarriedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getItemsRemovedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      29,
      f
    );
  }
  f = message.getTreasure();
  if (f !== 0.0) {
    writer.writeEnum(
      220,
      f
    );
  }
  f = message.getLevelAdjustment();
  if (f !== 0) {
    writer.writeInt32(
      124,
      f
    );
  }
  f = message.getMainRace();
  if (f) {
    writer.writeBool(
      125,
      f
    );
  }
  f = message.getPossessionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      32,
      f,
      proto.dma.MonsterProto.Possession.serializeBinaryToWriter
    );
  }
  f = message.getProficiencyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      33,
      f
    );
  }
  f = message.getQuadruped();
  if (f) {
    writer.writeBool(
      34,
      f
    );
  }
  f = message.getQualityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      35,
      f,
      proto.dma.ParametrizedTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getMaleHeight();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.dma.MonsterProto.Height.serializeBinaryToWriter
    );
  }
  f = message.getFemaleHeight();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.dma.MonsterProto.Height.serializeBinaryToWriter
    );
  }
  f = message.getMaleWeight();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.dma.MonsterProto.Weight.serializeBinaryToWriter
    );
  }
  f = message.getFemaleWeight();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.dma.MonsterProto.Weight.serializeBinaryToWriter
    );
  }
  f = message.getAge();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.dma.MonsterProto.Age.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MonsterProto.Skill = {
  UNKNOWN_SKILL: 0,
  ATHLETICS: 1,
  ACROBATICS: 2,
  SLEIGHT_OF_HAND: 3,
  STEALTH: 4,
  ARCANA: 5,
  HISTORY: 6,
  INVESTIGATION: 7,
  NATURE: 8,
  RELIGION: 9,
  ANIMAL_HANDLING: 10,
  INSIGHT: 11,
  MEDICINE: 12,
  PERCEPTION: 13,
  SURVIVAL: 14,
  DECEPTION: 15,
  INTIMIDATION: 16,
  PERFORMANCE: 17,
  PERSUASION: 18
};

/**
 * @enum {number}
 */
proto.dma.MonsterProto.ConditionType = {
  UNKNOWN_CONDITION: 0,
  BLINDED: 1,
  CHARMED: 2,
  DEAFENED: 3,
  FRIGHTENED: 4,
  GRAPPLED: 5,
  ICNAPACITATED: 6,
  INVISIBLE: 7,
  PARALYZED: 8,
  PETRIFIED: 9,
  POISONED: 10,
  PRONE: 11,
  RESTRAINED: 12,
  STUNNED: 13,
  UNCONSCIOUS: 14,
  EXHAUSTION: 15
};

/**
 * @enum {number}
 */
proto.dma.MonsterProto.Treasure = {
  UNKNOWN_TREADSURE: 0,
  NONE_TREASURE: 1,
  STANDARD: 2,
  DOUBLE: 3,
  TRIPLE: 4,
  QUADRUPLE: 5
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Abilities.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Abilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Abilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Abilities.toObject = function(includeInstance, msg) {
  var f, obj = {
    strength: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dexterity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    constitution: jspb.Message.getFieldWithDefault(msg, 3, 0),
    wisdom: jspb.Message.getFieldWithDefault(msg, 4, 0),
    intelligence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    charisma: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Abilities}
 */
proto.dma.MonsterProto.Abilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Abilities;
  return proto.dma.MonsterProto.Abilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Abilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Abilities}
 */
proto.dma.MonsterProto.Abilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStrength(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDexterity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConstitution(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWisdom(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntelligence(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCharisma(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Abilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Abilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Abilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Abilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStrength();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDexterity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getConstitution();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWisdom();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getIntelligence();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCharisma();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 strength = 1;
 * @return {number}
 */
proto.dma.MonsterProto.Abilities.prototype.getStrength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Abilities} returns this
 */
proto.dma.MonsterProto.Abilities.prototype.setStrength = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 dexterity = 2;
 * @return {number}
 */
proto.dma.MonsterProto.Abilities.prototype.getDexterity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Abilities} returns this
 */
proto.dma.MonsterProto.Abilities.prototype.setDexterity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 constitution = 3;
 * @return {number}
 */
proto.dma.MonsterProto.Abilities.prototype.getConstitution = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Abilities} returns this
 */
proto.dma.MonsterProto.Abilities.prototype.setConstitution = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 wisdom = 4;
 * @return {number}
 */
proto.dma.MonsterProto.Abilities.prototype.getWisdom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Abilities} returns this
 */
proto.dma.MonsterProto.Abilities.prototype.setWisdom = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 intelligence = 5;
 * @return {number}
 */
proto.dma.MonsterProto.Abilities.prototype.getIntelligence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Abilities} returns this
 */
proto.dma.MonsterProto.Abilities.prototype.setIntelligence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 charisma = 6;
 * @return {number}
 */
proto.dma.MonsterProto.Abilities.prototype.getCharisma = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Abilities} returns this
 */
proto.dma.MonsterProto.Abilities.prototype.setCharisma = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Senses.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Senses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Senses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Senses.toObject = function(includeInstance, msg) {
  var f, obj = {
    blindsightFeet: jspb.Message.getFieldWithDefault(msg, 1, 0),
    darkvisionFeet: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tremorsenseFeet: jspb.Message.getFieldWithDefault(msg, 3, 0),
    truesightFeet: jspb.Message.getFieldWithDefault(msg, 4, 0),
    special: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Senses}
 */
proto.dma.MonsterProto.Senses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Senses;
  return proto.dma.MonsterProto.Senses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Senses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Senses}
 */
proto.dma.MonsterProto.Senses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlindsightFeet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDarkvisionFeet(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTremorsenseFeet(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTruesightFeet(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecial(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Senses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Senses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Senses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Senses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlindsightFeet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDarkvisionFeet();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTremorsenseFeet();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTruesightFeet();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSpecial();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 blindsight_feet = 1;
 * @return {number}
 */
proto.dma.MonsterProto.Senses.prototype.getBlindsightFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Senses} returns this
 */
proto.dma.MonsterProto.Senses.prototype.setBlindsightFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 darkvision_feet = 2;
 * @return {number}
 */
proto.dma.MonsterProto.Senses.prototype.getDarkvisionFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Senses} returns this
 */
proto.dma.MonsterProto.Senses.prototype.setDarkvisionFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 tremorsense_feet = 3;
 * @return {number}
 */
proto.dma.MonsterProto.Senses.prototype.getTremorsenseFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Senses} returns this
 */
proto.dma.MonsterProto.Senses.prototype.setTremorsenseFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 truesight_feet = 4;
 * @return {number}
 */
proto.dma.MonsterProto.Senses.prototype.getTruesightFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Senses} returns this
 */
proto.dma.MonsterProto.Senses.prototype.setTruesightFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string special = 5;
 * @return {string}
 */
proto.dma.MonsterProto.Senses.prototype.getSpecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Senses} returns this
 */
proto.dma.MonsterProto.Senses.prototype.setSpecial = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonsterProto.Languages.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Languages.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Languages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Languages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Languages.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    special: jspb.Message.getFieldWithDefault(msg, 2, ""),
    telepathyFeet: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Languages}
 */
proto.dma.MonsterProto.Languages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Languages;
  return proto.dma.MonsterProto.Languages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Languages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Languages}
 */
proto.dma.MonsterProto.Languages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.dma.MonsterProto.Languages.Name>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNames(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecial(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTelepathyFeet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Languages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Languages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Languages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Languages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getSpecial();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTelepathyFeet();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MonsterProto.Languages.Name = {
  UNKNOWN_LANGUAGE: 0,
  COMMON: 1,
  DWARVISH: 2,
  ELVISH: 3,
  GIANT: 4,
  GNOMISH: 5,
  GOBLIN: 6,
  HALFLING: 7,
  ORC: 8,
  ABYSSAL: 9,
  CELESTIAL: 10,
  DRACONIC: 11,
  DEEP_SPEECH: 12,
  INFERNAL: 13,
  PRIMORDIAL: 14,
  SYLVAN: 15,
  UNDERCOMMON: 16,
  THIEVES_CANT: 17,
  DROW_SIGN_LANGUAGE: 18,
  TERRAN: 19,
  TROGLODYTE: 20,
  GRELL: 21,
  SLAAD: 22,
  DRUIDIC: 23,
  AURAN: 24,
  AQUAN: 25,
  MODRON: 26,
  BULLYWUG: 27,
  OTYUGH: 28,
  WORG: 29,
  HOOK_HORROR: 30,
  SAHUAGIN: 31,
  IGNAN: 32,
  GNOLL: 33
};

/**
 * repeated Name names = 1;
 * @return {!Array<!proto.dma.MonsterProto.Languages.Name>}
 */
proto.dma.MonsterProto.Languages.prototype.getNamesList = function() {
  return /** @type {!Array<!proto.dma.MonsterProto.Languages.Name>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Languages.Name>} value
 * @return {!proto.dma.MonsterProto.Languages} returns this
 */
proto.dma.MonsterProto.Languages.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.dma.MonsterProto.Languages.Name} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Languages} returns this
 */
proto.dma.MonsterProto.Languages.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto.Languages} returns this
 */
proto.dma.MonsterProto.Languages.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * optional string special = 2;
 * @return {string}
 */
proto.dma.MonsterProto.Languages.prototype.getSpecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Languages} returns this
 */
proto.dma.MonsterProto.Languages.prototype.setSpecial = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 telepathy_feet = 3;
 * @return {number}
 */
proto.dma.MonsterProto.Languages.prototype.getTelepathyFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Languages} returns this
 */
proto.dma.MonsterProto.Languages.prototype.setTelepathyFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Trait.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Trait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Trait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Trait.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Trait}
 */
proto.dma.MonsterProto.Trait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Trait;
  return proto.dma.MonsterProto.Trait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Trait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Trait}
 */
proto.dma.MonsterProto.Trait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Trait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Trait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Trait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Trait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.MonsterProto.Trait.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Trait} returns this
 */
proto.dma.MonsterProto.Trait.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.MonsterProto.Trait.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Trait} returns this
 */
proto.dma.MonsterProto.Trait.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonsterProto.Multiattack.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Multiattack.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Multiattack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Multiattack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Multiattack.toObject = function(includeInstance, msg) {
  var f, obj = {
    attacksOrList: jspb.Message.toObjectList(msg.getAttacksOrList(),
    proto.dma.MonsterProto.Multiattack.Attacks.toObject, includeInstance),
    special: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Multiattack}
 */
proto.dma.MonsterProto.Multiattack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Multiattack;
  return proto.dma.MonsterProto.Multiattack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Multiattack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Multiattack}
 */
proto.dma.MonsterProto.Multiattack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.MonsterProto.Multiattack.Attacks;
      reader.readMessage(value,proto.dma.MonsterProto.Multiattack.Attacks.deserializeBinaryFromReader);
      msg.addAttacksOr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecial(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Multiattack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Multiattack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Multiattack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Multiattack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttacksOrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.MonsterProto.Multiattack.Attacks.serializeBinaryToWriter
    );
  }
  f = message.getSpecial();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonsterProto.Multiattack.Attacks.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Multiattack.Attacks.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Multiattack.Attacks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Multiattack.Attacks.toObject = function(includeInstance, msg) {
  var f, obj = {
    attacksAndList: jspb.Message.toObjectList(msg.getAttacksAndList(),
    proto.dma.MonsterProto.Multiattack.Attacks.Attack.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks}
 */
proto.dma.MonsterProto.Multiattack.Attacks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Multiattack.Attacks;
  return proto.dma.MonsterProto.Multiattack.Attacks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks}
 */
proto.dma.MonsterProto.Multiattack.Attacks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.MonsterProto.Multiattack.Attacks.Attack;
      reader.readMessage(value,proto.dma.MonsterProto.Multiattack.Attacks.Attack.deserializeBinaryFromReader);
      msg.addAttacksAnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Multiattack.Attacks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Multiattack.Attacks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Multiattack.Attacks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttacksAndList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.MonsterProto.Multiattack.Attacks.Attack.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Multiattack.Attacks.Attack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks.Attack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks.Attack}
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Multiattack.Attacks.Attack;
  return proto.dma.MonsterProto.Multiattack.Attacks.Attack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks.Attack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks.Attack}
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Multiattack.Attacks.Attack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks.Attack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 number = 1;
 * @return {number}
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks.Attack} returns this
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks.Attack} returns this
 */
proto.dma.MonsterProto.Multiattack.Attacks.Attack.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Attack attacks_and = 1;
 * @return {!Array<!proto.dma.MonsterProto.Multiattack.Attacks.Attack>}
 */
proto.dma.MonsterProto.Multiattack.Attacks.prototype.getAttacksAndList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Multiattack.Attacks.Attack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Multiattack.Attacks.Attack, 1));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Multiattack.Attacks.Attack>} value
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks} returns this
*/
proto.dma.MonsterProto.Multiattack.Attacks.prototype.setAttacksAndList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks.Attack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks.Attack}
 */
proto.dma.MonsterProto.Multiattack.Attacks.prototype.addAttacksAnd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.MonsterProto.Multiattack.Attacks.Attack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks} returns this
 */
proto.dma.MonsterProto.Multiattack.Attacks.prototype.clearAttacksAndList = function() {
  return this.setAttacksAndList([]);
};


/**
 * repeated Attacks attacks_or = 1;
 * @return {!Array<!proto.dma.MonsterProto.Multiattack.Attacks>}
 */
proto.dma.MonsterProto.Multiattack.prototype.getAttacksOrList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Multiattack.Attacks>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Multiattack.Attacks, 1));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Multiattack.Attacks>} value
 * @return {!proto.dma.MonsterProto.Multiattack} returns this
*/
proto.dma.MonsterProto.Multiattack.prototype.setAttacksOrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.MonsterProto.Multiattack.Attacks=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Multiattack.Attacks}
 */
proto.dma.MonsterProto.Multiattack.prototype.addAttacksOr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.MonsterProto.Multiattack.Attacks, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto.Multiattack} returns this
 */
proto.dma.MonsterProto.Multiattack.prototype.clearAttacksOrList = function() {
  return this.setAttacksOrList([]);
};


/**
 * optional string special = 2;
 * @return {string}
 */
proto.dma.MonsterProto.Multiattack.prototype.getSpecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Multiattack} returns this
 */
proto.dma.MonsterProto.Multiattack.prototype.setSpecial = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonsterProto.Attack.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Attack.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Attack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Attack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Attack.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reachFeet: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rangeFeet: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rangeMaxFeet: jspb.Message.getFieldWithDefault(msg, 5, 0),
    targets: jspb.Message.getFieldWithDefault(msg, 6, 0),
    canTarget: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    hitsList: jspb.Message.toObjectList(msg.getHitsList(),
    value_pb.DamageProto.toObject, includeInstance),
    missesList: jspb.Message.toObjectList(msg.getMissesList(),
    value_pb.DamageProto.toObject, includeInstance),
    special: jspb.Message.getFieldWithDefault(msg, 10, ""),
    attackBonus: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Attack}
 */
proto.dma.MonsterProto.Attack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Attack;
  return proto.dma.MonsterProto.Attack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Attack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Attack}
 */
proto.dma.MonsterProto.Attack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.MonsterProto.Attack.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReachFeet(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRangeFeet(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRangeMaxFeet(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargets(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanTarget(value);
      break;
    case 8:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.addHits(value);
      break;
    case 9:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.addMisses(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecial(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttackBonus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Attack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Attack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Attack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Attack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReachFeet();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRangeFeet();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRangeMaxFeet();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTargets();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCanTarget();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      value_pb.DamageProto.serializeBinaryToWriter
    );
  }
  f = message.getMissesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      value_pb.DamageProto.serializeBinaryToWriter
    );
  }
  f = message.getSpecial();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAttackBonus();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MonsterProto.Attack.Type = {
  UKNOWN_ATTACK_TYPE: 0,
  MELEE_WEAPON: 1,
  RANGED_WEAPON: 2,
  MELEE_SPELL: 3,
  RANGED_SPELL: 4,
  MELEE_WEAPON_DEX: 5,
  MELEE_WEAPON_INT: 6,
  MELEE_WEAPON_CON: 8,
  RANGED_WEAPON_STR: 7
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.MonsterProto.Attack.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.dma.MonsterProto.Attack.Type}
 */
proto.dma.MonsterProto.Attack.prototype.getType = function() {
  return /** @type {!proto.dma.MonsterProto.Attack.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.MonsterProto.Attack.Type} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 reach_feet = 3;
 * @return {number}
 */
proto.dma.MonsterProto.Attack.prototype.getReachFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setReachFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 range_feet = 4;
 * @return {number}
 */
proto.dma.MonsterProto.Attack.prototype.getRangeFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setRangeFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 range_max_feet = 5;
 * @return {number}
 */
proto.dma.MonsterProto.Attack.prototype.getRangeMaxFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setRangeMaxFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 targets = 6;
 * @return {number}
 */
proto.dma.MonsterProto.Attack.prototype.getTargets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setTargets = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool can_target = 7;
 * @return {boolean}
 */
proto.dma.MonsterProto.Attack.prototype.getCanTarget = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setCanTarget = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated DamageProto hits = 8;
 * @return {!Array<!proto.dma.DamageProto>}
 */
proto.dma.MonsterProto.Attack.prototype.getHitsList = function() {
  return /** @type{!Array<!proto.dma.DamageProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.DamageProto, 8));
};


/**
 * @param {!Array<!proto.dma.DamageProto>} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
*/
proto.dma.MonsterProto.Attack.prototype.setHitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dma.DamageProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.DamageProto}
 */
proto.dma.MonsterProto.Attack.prototype.addHits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dma.DamageProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.clearHitsList = function() {
  return this.setHitsList([]);
};


/**
 * repeated DamageProto misses = 9;
 * @return {!Array<!proto.dma.DamageProto>}
 */
proto.dma.MonsterProto.Attack.prototype.getMissesList = function() {
  return /** @type{!Array<!proto.dma.DamageProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.DamageProto, 9));
};


/**
 * @param {!Array<!proto.dma.DamageProto>} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
*/
proto.dma.MonsterProto.Attack.prototype.setMissesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.dma.DamageProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.DamageProto}
 */
proto.dma.MonsterProto.Attack.prototype.addMisses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.dma.DamageProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.clearMissesList = function() {
  return this.setMissesList([]);
};


/**
 * optional string special = 10;
 * @return {string}
 */
proto.dma.MonsterProto.Attack.prototype.getSpecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setSpecial = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 attack_bonus = 11;
 * @return {number}
 */
proto.dma.MonsterProto.Attack.prototype.getAttackBonus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Attack} returns this
 */
proto.dma.MonsterProto.Attack.prototype.setAttackBonus = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Action}
 */
proto.dma.MonsterProto.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Action;
  return proto.dma.MonsterProto.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Action}
 */
proto.dma.MonsterProto.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.MonsterProto.Action.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Action} returns this
 */
proto.dma.MonsterProto.Action.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.MonsterProto.Action.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Action} returns this
 */
proto.dma.MonsterProto.Action.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonsterProto.Legendary.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Legendary.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Legendary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Legendary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Legendary.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.dma.MonsterProto.Action.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Legendary}
 */
proto.dma.MonsterProto.Legendary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Legendary;
  return proto.dma.MonsterProto.Legendary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Legendary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Legendary}
 */
proto.dma.MonsterProto.Legendary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = new proto.dma.MonsterProto.Action;
      reader.readMessage(value,proto.dma.MonsterProto.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Legendary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Legendary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Legendary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Legendary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dma.MonsterProto.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.dma.MonsterProto.Legendary.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Legendary} returns this
 */
proto.dma.MonsterProto.Legendary.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Action actions = 2;
 * @return {!Array<!proto.dma.MonsterProto.Action>}
 */
proto.dma.MonsterProto.Legendary.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Action, 2));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Action>} value
 * @return {!proto.dma.MonsterProto.Legendary} returns this
*/
proto.dma.MonsterProto.Legendary.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dma.MonsterProto.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Action}
 */
proto.dma.MonsterProto.Legendary.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dma.MonsterProto.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto.Legendary} returns this
 */
proto.dma.MonsterProto.Legendary.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Possession.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Possession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Possession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Possession.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    count: (f = msg.getCount()) && value_pb.DiceProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Possession}
 */
proto.dma.MonsterProto.Possession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Possession;
  return proto.dma.MonsterProto.Possession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Possession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Possession}
 */
proto.dma.MonsterProto.Possession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Possession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Possession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Possession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Possession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.MonsterProto.Possession.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Possession} returns this
 */
proto.dma.MonsterProto.Possession.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.dma.MonsterProto.Possession.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterProto.Possession} returns this
 */
proto.dma.MonsterProto.Possession.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DiceProto count = 3;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterProto.Possession.prototype.getCount = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 3));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterProto.Possession} returns this
*/
proto.dma.MonsterProto.Possession.prototype.setCount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto.Possession} returns this
 */
proto.dma.MonsterProto.Possession.prototype.clearCount = function() {
  return this.setCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.Possession.prototype.hasCount = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Height.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Height.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Height} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Height.toObject = function(includeInstance, msg) {
  var f, obj = {
    inches: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modifier: (f = msg.getModifier()) && value_pb.DiceProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Height}
 */
proto.dma.MonsterProto.Height.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Height;
  return proto.dma.MonsterProto.Height.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Height} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Height}
 */
proto.dma.MonsterProto.Height.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInches(value);
      break;
    case 2:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setModifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Height.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Height.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Height} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Height.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInches();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getModifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 inches = 1;
 * @return {number}
 */
proto.dma.MonsterProto.Height.prototype.getInches = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Height} returns this
 */
proto.dma.MonsterProto.Height.prototype.setInches = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DiceProto modifier = 2;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterProto.Height.prototype.getModifier = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 2));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterProto.Height} returns this
*/
proto.dma.MonsterProto.Height.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto.Height} returns this
 */
proto.dma.MonsterProto.Height.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.Height.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Weight.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Weight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Weight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Weight.toObject = function(includeInstance, msg) {
  var f, obj = {
    pounds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modifier: (f = msg.getModifier()) && value_pb.DiceProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Weight}
 */
proto.dma.MonsterProto.Weight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Weight;
  return proto.dma.MonsterProto.Weight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Weight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Weight}
 */
proto.dma.MonsterProto.Weight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPounds(value);
      break;
    case 2:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setModifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Weight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Weight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Weight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Weight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPounds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getModifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 pounds = 1;
 * @return {number}
 */
proto.dma.MonsterProto.Weight.prototype.getPounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Weight} returns this
 */
proto.dma.MonsterProto.Weight.prototype.setPounds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DiceProto modifier = 2;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterProto.Weight.prototype.getModifier = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 2));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterProto.Weight} returns this
*/
proto.dma.MonsterProto.Weight.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto.Weight} returns this
 */
proto.dma.MonsterProto.Weight.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.Weight.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonsterProto.Age.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterProto.Age.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterProto.Age} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Age.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    middle: jspb.Message.getFieldWithDefault(msg, 2, 0),
    old: jspb.Message.getFieldWithDefault(msg, 3, 0),
    venerable: jspb.Message.getFieldWithDefault(msg, 4, 0),
    max: (f = msg.getMax()) && value_pb.DiceProto.toObject(includeInstance, f),
    pb_short: (f = msg.getShort()) && value_pb.DiceProto.toObject(includeInstance, f),
    medium: (f = msg.getMedium()) && value_pb.DiceProto.toObject(includeInstance, f),
    pb_long: (f = msg.getLong()) && value_pb.DiceProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonsterProto.Age}
 */
proto.dma.MonsterProto.Age.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterProto.Age;
  return proto.dma.MonsterProto.Age.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterProto.Age} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterProto.Age}
 */
proto.dma.MonsterProto.Age.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMiddle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOld(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVenerable(value);
      break;
    case 5:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setMax(value);
      break;
    case 6:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setShort(value);
      break;
    case 7:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setMedium(value);
      break;
    case 8:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setLong(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonsterProto.Age.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterProto.Age.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterProto.Age} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterProto.Age.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMiddle();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOld();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getVenerable();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getShort();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getMedium();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getLong();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.dma.MonsterProto.Age.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 middle = 2;
 * @return {number}
 */
proto.dma.MonsterProto.Age.prototype.getMiddle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.setMiddle = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 old = 3;
 * @return {number}
 */
proto.dma.MonsterProto.Age.prototype.getOld = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.setOld = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 venerable = 4;
 * @return {number}
 */
proto.dma.MonsterProto.Age.prototype.getVenerable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.setVenerable = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional DiceProto max = 5;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterProto.Age.prototype.getMax = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 5));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterProto.Age} returns this
*/
proto.dma.MonsterProto.Age.prototype.setMax = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.clearMax = function() {
  return this.setMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.Age.prototype.hasMax = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DiceProto short = 6;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterProto.Age.prototype.getShort = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 6));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterProto.Age} returns this
*/
proto.dma.MonsterProto.Age.prototype.setShort = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.clearShort = function() {
  return this.setShort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.Age.prototype.hasShort = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DiceProto medium = 7;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterProto.Age.prototype.getMedium = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 7));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterProto.Age} returns this
*/
proto.dma.MonsterProto.Age.prototype.setMedium = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.clearMedium = function() {
  return this.setMedium(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.Age.prototype.hasMedium = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DiceProto long = 8;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterProto.Age.prototype.getLong = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 8));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterProto.Age} returns this
*/
proto.dma.MonsterProto.Age.prototype.setLong = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto.Age} returns this
 */
proto.dma.MonsterProto.Age.prototype.clearLong = function() {
  return this.setLong(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.Age.prototype.hasLong = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.MonsterProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SizeProto size = 2;
 * @return {!proto.dma.SizeProto}
 */
proto.dma.MonsterProto.prototype.getSize = function() {
  return /** @type {!proto.dma.SizeProto} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.SizeProto} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setSize = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional MonsterTypeProto type = 3;
 * @return {!proto.dma.MonsterTypeProto}
 */
proto.dma.MonsterProto.prototype.getType = function() {
  return /** @type {!proto.dma.MonsterTypeProto} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dma.MonsterTypeProto} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated MonsterTagProto tags = 4;
 * @return {!Array<!proto.dma.MonsterTagProto>}
 */
proto.dma.MonsterProto.prototype.getTagsList = function() {
  return /** @type {!Array<!proto.dma.MonsterTagProto>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.dma.MonsterTagProto>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.dma.MonsterTagProto} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional AlignmentProto alignment = 5;
 * @return {!proto.dma.AlignmentProto}
 */
proto.dma.MonsterProto.prototype.getAlignment = function() {
  return /** @type {!proto.dma.AlignmentProto} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dma.AlignmentProto} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setAlignment = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int32 natural_armor = 6;
 * @return {number}
 */
proto.dma.MonsterProto.prototype.getNaturalArmor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setNaturalArmor = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 hit_dice_number = 7;
 * @return {number}
 */
proto.dma.MonsterProto.prototype.getHitDiceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setHitDiceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated SpeedProto speed = 8;
 * @return {!Array<!proto.dma.SpeedProto>}
 */
proto.dma.MonsterProto.prototype.getSpeedList = function() {
  return /** @type{!Array<!proto.dma.SpeedProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.SpeedProto, 8));
};


/**
 * @param {!Array<!proto.dma.SpeedProto>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setSpeedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dma.SpeedProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.SpeedProto}
 */
proto.dma.MonsterProto.prototype.addSpeed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dma.SpeedProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearSpeedList = function() {
  return this.setSpeedList([]);
};


/**
 * optional Abilities abilities = 9;
 * @return {?proto.dma.MonsterProto.Abilities}
 */
proto.dma.MonsterProto.prototype.getAbilities = function() {
  return /** @type{?proto.dma.MonsterProto.Abilities} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Abilities, 9));
};


/**
 * @param {?proto.dma.MonsterProto.Abilities|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setAbilities = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearAbilities = function() {
  return this.setAbilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasAbilities = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Ability spellcasting_ability = 10;
 * @return {!proto.dma.Ability}
 */
proto.dma.MonsterProto.prototype.getSpellcastingAbility = function() {
  return /** @type {!proto.dma.Ability} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.dma.Ability} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setSpellcastingAbility = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * repeated Ability saving_throws = 11;
 * @return {!Array<!proto.dma.Ability>}
 */
proto.dma.MonsterProto.prototype.getSavingThrowsList = function() {
  return /** @type {!Array<!proto.dma.Ability>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<!proto.dma.Ability>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setSavingThrowsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!proto.dma.Ability} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addSavingThrows = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearSavingThrowsList = function() {
  return this.setSavingThrowsList([]);
};


/**
 * repeated Skill proficient_skills = 12;
 * @return {!Array<!proto.dma.MonsterProto.Skill>}
 */
proto.dma.MonsterProto.prototype.getProficientSkillsList = function() {
  return /** @type {!Array<!proto.dma.MonsterProto.Skill>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Skill>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setProficientSkillsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!proto.dma.MonsterProto.Skill} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addProficientSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearProficientSkillsList = function() {
  return this.setProficientSkillsList([]);
};


/**
 * repeated Skill double_proficient_skills = 13;
 * @return {!Array<!proto.dma.MonsterProto.Skill>}
 */
proto.dma.MonsterProto.prototype.getDoubleProficientSkillsList = function() {
  return /** @type {!Array<!proto.dma.MonsterProto.Skill>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Skill>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setDoubleProficientSkillsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!proto.dma.MonsterProto.Skill} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addDoubleProficientSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearDoubleProficientSkillsList = function() {
  return this.setDoubleProficientSkillsList([]);
};


/**
 * repeated DamageProto.DamageType damage_vulnerabilities = 14;
 * @return {!Array<!proto.dma.DamageProto.DamageType>}
 */
proto.dma.MonsterProto.prototype.getDamageVulnerabilitiesList = function() {
  return /** @type {!Array<!proto.dma.DamageProto.DamageType>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<!proto.dma.DamageProto.DamageType>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setDamageVulnerabilitiesList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {!proto.dma.DamageProto.DamageType} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addDamageVulnerabilities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearDamageVulnerabilitiesList = function() {
  return this.setDamageVulnerabilitiesList([]);
};


/**
 * repeated DamageProto.DamageType damage_immunities = 15;
 * @return {!Array<!proto.dma.DamageProto.DamageType>}
 */
proto.dma.MonsterProto.prototype.getDamageImmunitiesList = function() {
  return /** @type {!Array<!proto.dma.DamageProto.DamageType>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<!proto.dma.DamageProto.DamageType>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setDamageImmunitiesList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {!proto.dma.DamageProto.DamageType} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addDamageImmunities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearDamageImmunitiesList = function() {
  return this.setDamageImmunitiesList([]);
};


/**
 * repeated DamageProto.DamageType damage_resistances = 16;
 * @return {!Array<!proto.dma.DamageProto.DamageType>}
 */
proto.dma.MonsterProto.prototype.getDamageResistancesList = function() {
  return /** @type {!Array<!proto.dma.DamageProto.DamageType>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<!proto.dma.DamageProto.DamageType>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setDamageResistancesList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {!proto.dma.DamageProto.DamageType} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addDamageResistances = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearDamageResistancesList = function() {
  return this.setDamageResistancesList([]);
};


/**
 * repeated ConditionType condition_immunities = 17;
 * @return {!Array<!proto.dma.MonsterProto.ConditionType>}
 */
proto.dma.MonsterProto.prototype.getConditionImmunitiesList = function() {
  return /** @type {!Array<!proto.dma.MonsterProto.ConditionType>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.ConditionType>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setConditionImmunitiesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {!proto.dma.MonsterProto.ConditionType} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addConditionImmunities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearConditionImmunitiesList = function() {
  return this.setConditionImmunitiesList([]);
};


/**
 * optional Senses senses = 18;
 * @return {?proto.dma.MonsterProto.Senses}
 */
proto.dma.MonsterProto.prototype.getSenses = function() {
  return /** @type{?proto.dma.MonsterProto.Senses} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Senses, 18));
};


/**
 * @param {?proto.dma.MonsterProto.Senses|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setSenses = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearSenses = function() {
  return this.setSenses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasSenses = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Languages languages = 19;
 * @return {?proto.dma.MonsterProto.Languages}
 */
proto.dma.MonsterProto.prototype.getLanguages = function() {
  return /** @type{?proto.dma.MonsterProto.Languages} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Languages, 19));
};


/**
 * @param {?proto.dma.MonsterProto.Languages|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setLanguages = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearLanguages = function() {
  return this.setLanguages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasLanguages = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional RationalProto challenge = 20;
 * @return {?proto.dma.RationalProto}
 */
proto.dma.MonsterProto.prototype.getChallenge = function() {
  return /** @type{?proto.dma.RationalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RationalProto, 20));
};


/**
 * @param {?proto.dma.RationalProto|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setChallenge = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearChallenge = function() {
  return this.setChallenge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasChallenge = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * repeated Trait traits = 21;
 * @return {!Array<!proto.dma.MonsterProto.Trait>}
 */
proto.dma.MonsterProto.prototype.getTraitsList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Trait>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Trait, 21));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Trait>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setTraitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.dma.MonsterProto.Trait=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Trait}
 */
proto.dma.MonsterProto.prototype.addTraits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.dma.MonsterProto.Trait, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearTraitsList = function() {
  return this.setTraitsList([]);
};


/**
 * optional Multiattack multiattack = 22;
 * @return {?proto.dma.MonsterProto.Multiattack}
 */
proto.dma.MonsterProto.prototype.getMultiattack = function() {
  return /** @type{?proto.dma.MonsterProto.Multiattack} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Multiattack, 22));
};


/**
 * @param {?proto.dma.MonsterProto.Multiattack|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setMultiattack = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearMultiattack = function() {
  return this.setMultiattack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasMultiattack = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * repeated Attack attacks = 23;
 * @return {!Array<!proto.dma.MonsterProto.Attack>}
 */
proto.dma.MonsterProto.prototype.getAttacksList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Attack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Attack, 23));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Attack>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setAttacksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.dma.MonsterProto.Attack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Attack}
 */
proto.dma.MonsterProto.prototype.addAttacks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.dma.MonsterProto.Attack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearAttacksList = function() {
  return this.setAttacksList([]);
};


/**
 * repeated Action actions = 24;
 * @return {!Array<!proto.dma.MonsterProto.Action>}
 */
proto.dma.MonsterProto.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Action, 24));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Action>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.dma.MonsterProto.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Action}
 */
proto.dma.MonsterProto.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.dma.MonsterProto.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * repeated Action reactions = 25;
 * @return {!Array<!proto.dma.MonsterProto.Action>}
 */
proto.dma.MonsterProto.prototype.getReactionsList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Action, 25));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Action>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setReactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.dma.MonsterProto.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Action}
 */
proto.dma.MonsterProto.prototype.addReactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.dma.MonsterProto.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearReactionsList = function() {
  return this.setReactionsList([]);
};


/**
 * repeated Action bonus_actions = 46;
 * @return {!Array<!proto.dma.MonsterProto.Action>}
 */
proto.dma.MonsterProto.prototype.getBonusActionsList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Action, 46));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Action>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setBonusActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 46, value);
};


/**
 * @param {!proto.dma.MonsterProto.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Action}
 */
proto.dma.MonsterProto.prototype.addBonusActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 46, opt_value, proto.dma.MonsterProto.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearBonusActionsList = function() {
  return this.setBonusActionsList([]);
};


/**
 * optional Legendary legendary = 26;
 * @return {?proto.dma.MonsterProto.Legendary}
 */
proto.dma.MonsterProto.prototype.getLegendary = function() {
  return /** @type{?proto.dma.MonsterProto.Legendary} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Legendary, 26));
};


/**
 * @param {?proto.dma.MonsterProto.Legendary|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setLegendary = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearLegendary = function() {
  return this.setLegendary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasLegendary = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * repeated string items_used = 27;
 * @return {!Array<string>}
 */
proto.dma.MonsterProto.prototype.getItemsUsedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setItemsUsedList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addItemsUsed = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearItemsUsedList = function() {
  return this.setItemsUsedList([]);
};


/**
 * repeated string items_carried = 28;
 * @return {!Array<string>}
 */
proto.dma.MonsterProto.prototype.getItemsCarriedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setItemsCarriedList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addItemsCarried = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearItemsCarriedList = function() {
  return this.setItemsCarriedList([]);
};


/**
 * repeated string items_removed = 29;
 * @return {!Array<string>}
 */
proto.dma.MonsterProto.prototype.getItemsRemovedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 29));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setItemsRemovedList = function(value) {
  return jspb.Message.setField(this, 29, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addItemsRemoved = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 29, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearItemsRemovedList = function() {
  return this.setItemsRemovedList([]);
};


/**
 * optional Treasure treasure = 220;
 * @return {!proto.dma.MonsterProto.Treasure}
 */
proto.dma.MonsterProto.prototype.getTreasure = function() {
  return /** @type {!proto.dma.MonsterProto.Treasure} */ (jspb.Message.getFieldWithDefault(this, 220, 0));
};


/**
 * @param {!proto.dma.MonsterProto.Treasure} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setTreasure = function(value) {
  return jspb.Message.setProto3EnumField(this, 220, value);
};


/**
 * optional int32 level_adjustment = 124;
 * @return {number}
 */
proto.dma.MonsterProto.prototype.getLevelAdjustment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 124, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setLevelAdjustment = function(value) {
  return jspb.Message.setProto3IntField(this, 124, value);
};


/**
 * optional bool main_race = 125;
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.getMainRace = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 125, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setMainRace = function(value) {
  return jspb.Message.setProto3BooleanField(this, 125, value);
};


/**
 * repeated Possession possession = 32;
 * @return {!Array<!proto.dma.MonsterProto.Possession>}
 */
proto.dma.MonsterProto.prototype.getPossessionList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto.Possession>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto.Possession, 32));
};


/**
 * @param {!Array<!proto.dma.MonsterProto.Possession>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setPossessionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 32, value);
};


/**
 * @param {!proto.dma.MonsterProto.Possession=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto.Possession}
 */
proto.dma.MonsterProto.prototype.addPossession = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 32, opt_value, proto.dma.MonsterProto.Possession, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearPossessionList = function() {
  return this.setPossessionList([]);
};


/**
 * repeated string proficiency = 33;
 * @return {!Array<string>}
 */
proto.dma.MonsterProto.prototype.getProficiencyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 33));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setProficiencyList = function(value) {
  return jspb.Message.setField(this, 33, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.addProficiency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 33, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearProficiencyList = function() {
  return this.setProficiencyList([]);
};


/**
 * optional bool quadruped = 34;
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.getQuadruped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.setQuadruped = function(value) {
  return jspb.Message.setProto3BooleanField(this, 34, value);
};


/**
 * repeated ParametrizedTemplateProto quality = 35;
 * @return {!Array<!proto.dma.ParametrizedTemplateProto>}
 */
proto.dma.MonsterProto.prototype.getQualityList = function() {
  return /** @type{!Array<!proto.dma.ParametrizedTemplateProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ParametrizedTemplateProto, 35));
};


/**
 * @param {!Array<!proto.dma.ParametrizedTemplateProto>} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setQualityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 35, value);
};


/**
 * @param {!proto.dma.ParametrizedTemplateProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ParametrizedTemplateProto}
 */
proto.dma.MonsterProto.prototype.addQuality = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 35, opt_value, proto.dma.ParametrizedTemplateProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearQualityList = function() {
  return this.setQualityList([]);
};


/**
 * optional Height male_height = 41;
 * @return {?proto.dma.MonsterProto.Height}
 */
proto.dma.MonsterProto.prototype.getMaleHeight = function() {
  return /** @type{?proto.dma.MonsterProto.Height} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Height, 41));
};


/**
 * @param {?proto.dma.MonsterProto.Height|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setMaleHeight = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearMaleHeight = function() {
  return this.setMaleHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasMaleHeight = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional Height female_height = 42;
 * @return {?proto.dma.MonsterProto.Height}
 */
proto.dma.MonsterProto.prototype.getFemaleHeight = function() {
  return /** @type{?proto.dma.MonsterProto.Height} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Height, 42));
};


/**
 * @param {?proto.dma.MonsterProto.Height|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setFemaleHeight = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearFemaleHeight = function() {
  return this.setFemaleHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasFemaleHeight = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional Weight male_weight = 43;
 * @return {?proto.dma.MonsterProto.Weight}
 */
proto.dma.MonsterProto.prototype.getMaleWeight = function() {
  return /** @type{?proto.dma.MonsterProto.Weight} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Weight, 43));
};


/**
 * @param {?proto.dma.MonsterProto.Weight|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setMaleWeight = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearMaleWeight = function() {
  return this.setMaleWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasMaleWeight = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional Weight female_weight = 44;
 * @return {?proto.dma.MonsterProto.Weight}
 */
proto.dma.MonsterProto.prototype.getFemaleWeight = function() {
  return /** @type{?proto.dma.MonsterProto.Weight} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Weight, 44));
};


/**
 * @param {?proto.dma.MonsterProto.Weight|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setFemaleWeight = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearFemaleWeight = function() {
  return this.setFemaleWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasFemaleWeight = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional Age age = 45;
 * @return {?proto.dma.MonsterProto.Age}
 */
proto.dma.MonsterProto.prototype.getAge = function() {
  return /** @type{?proto.dma.MonsterProto.Age} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto.Age, 45));
};


/**
 * @param {?proto.dma.MonsterProto.Age|undefined} value
 * @return {!proto.dma.MonsterProto} returns this
*/
proto.dma.MonsterProto.prototype.setAge = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterProto} returns this
 */
proto.dma.MonsterProto.prototype.clearAge = function() {
  return this.setAge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterProto.prototype.hasAge = function() {
  return jspb.Message.getField(this, 45) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonstersProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MonstersProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonstersProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonstersProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonstersProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    monstersList: jspb.Message.toObjectList(msg.getMonstersList(),
    proto.dma.MonsterProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MonstersProto}
 */
proto.dma.MonstersProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonstersProto;
  return proto.dma.MonstersProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonstersProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonstersProto}
 */
proto.dma.MonstersProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.MonsterProto;
      reader.readMessage(value,proto.dma.MonsterProto.deserializeBinaryFromReader);
      msg.addMonsters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MonstersProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonstersProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonstersProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonstersProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMonstersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.MonsterProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MonsterProto monsters = 1;
 * @return {!Array<!proto.dma.MonsterProto>}
 */
proto.dma.MonstersProto.prototype.getMonstersList = function() {
  return /** @type{!Array<!proto.dma.MonsterProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterProto, 1));
};


/**
 * @param {!Array<!proto.dma.MonsterProto>} value
 * @return {!proto.dma.MonstersProto} returns this
*/
proto.dma.MonstersProto.prototype.setMonstersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.MonsterProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterProto}
 */
proto.dma.MonstersProto.prototype.addMonsters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.MonsterProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonstersProto} returns this
 */
proto.dma.MonstersProto.prototype.clearMonstersList = function() {
  return this.setMonstersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.NPCProto.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.NPCProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.NPCProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.NPCProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.NPCProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    gender: jspb.Message.getFieldWithDefault(msg, 2, 0),
    genderSpecial: jspb.Message.getFieldWithDefault(msg, 3, ""),
    race: (f = msg.getRace()) && proto.dma.MonsterProto.toObject(includeInstance, f),
    factionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    historiesList: jspb.Message.toObjectList(msg.getHistoriesList(),
    proto.dma.NPCProto.History.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.NPCProto}
 */
proto.dma.NPCProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.NPCProto;
  return proto.dma.NPCProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.NPCProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.NPCProto}
 */
proto.dma.NPCProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.NPCProto.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGenderSpecial(value);
      break;
    case 4:
      var value = new proto.dma.MonsterProto;
      reader.readMessage(value,proto.dma.MonsterProto.deserializeBinaryFromReader);
      msg.setRace(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFactions(value);
      break;
    case 6:
      var value = new proto.dma.NPCProto.History;
      reader.readMessage(value,proto.dma.NPCProto.History.deserializeBinaryFromReader);
      msg.addHistories(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.NPCProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.NPCProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.NPCProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.NPCProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGenderSpecial();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRace();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dma.MonsterProto.serializeBinaryToWriter
    );
  }
  f = message.getFactionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getHistoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.dma.NPCProto.History.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.NPCProto.Gender = {
  UNKNOWN_GENDER: 0,
  FEMALE: 1,
  MALE: 2,
  SPECIAL: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.NPCProto.History.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.NPCProto.History.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.NPCProto.History} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.NPCProto.History.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.NPCProto.History}
 */
proto.dma.NPCProto.History.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.NPCProto.History;
  return proto.dma.NPCProto.History.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.NPCProto.History} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.NPCProto.History}
 */
proto.dma.NPCProto.History.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.NPCProto.History.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.NPCProto.History.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.NPCProto.History} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.NPCProto.History.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string date = 1;
 * @return {string}
 */
proto.dma.NPCProto.History.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.NPCProto.History} returns this
 */
proto.dma.NPCProto.History.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.dma.NPCProto.History.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.NPCProto.History} returns this
 */
proto.dma.NPCProto.History.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.NPCProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.NPCProto} returns this
*/
proto.dma.NPCProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.NPCProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Gender gender = 2;
 * @return {!proto.dma.NPCProto.Gender}
 */
proto.dma.NPCProto.prototype.getGender = function() {
  return /** @type {!proto.dma.NPCProto.Gender} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.NPCProto.Gender} value
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string gender_special = 3;
 * @return {string}
 */
proto.dma.NPCProto.prototype.getGenderSpecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.setGenderSpecial = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MonsterProto race = 4;
 * @return {?proto.dma.MonsterProto}
 */
proto.dma.NPCProto.prototype.getRace = function() {
  return /** @type{?proto.dma.MonsterProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterProto, 4));
};


/**
 * @param {?proto.dma.MonsterProto|undefined} value
 * @return {!proto.dma.NPCProto} returns this
*/
proto.dma.NPCProto.prototype.setRace = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.clearRace = function() {
  return this.setRace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.NPCProto.prototype.hasRace = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string factions = 5;
 * @return {!Array<string>}
 */
proto.dma.NPCProto.prototype.getFactionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.setFactionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.addFactions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.clearFactionsList = function() {
  return this.setFactionsList([]);
};


/**
 * repeated History histories = 6;
 * @return {!Array<!proto.dma.NPCProto.History>}
 */
proto.dma.NPCProto.prototype.getHistoriesList = function() {
  return /** @type{!Array<!proto.dma.NPCProto.History>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.NPCProto.History, 6));
};


/**
 * @param {!Array<!proto.dma.NPCProto.History>} value
 * @return {!proto.dma.NPCProto} returns this
*/
proto.dma.NPCProto.prototype.setHistoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.NPCProto.History=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.NPCProto.History}
 */
proto.dma.NPCProto.prototype.addHistories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.NPCProto.History, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.NPCProto} returns this
 */
proto.dma.NPCProto.prototype.clearHistoriesList = function() {
  return this.setHistoriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.NPCsProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.NPCsProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.NPCsProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.NPCsProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.NPCsProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    npcsList: jspb.Message.toObjectList(msg.getNpcsList(),
    proto.dma.NPCProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.NPCsProto}
 */
proto.dma.NPCsProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.NPCsProto;
  return proto.dma.NPCsProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.NPCsProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.NPCsProto}
 */
proto.dma.NPCsProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.NPCProto;
      reader.readMessage(value,proto.dma.NPCProto.deserializeBinaryFromReader);
      msg.addNpcs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.NPCsProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.NPCsProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.NPCsProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.NPCsProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNpcsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.NPCProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NPCProto npcs = 1;
 * @return {!Array<!proto.dma.NPCProto>}
 */
proto.dma.NPCsProto.prototype.getNpcsList = function() {
  return /** @type{!Array<!proto.dma.NPCProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.NPCProto, 1));
};


/**
 * @param {!Array<!proto.dma.NPCProto>} value
 * @return {!proto.dma.NPCsProto} returns this
*/
proto.dma.NPCsProto.prototype.setNpcsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.NPCProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.NPCProto}
 */
proto.dma.NPCsProto.prototype.addNpcs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.NPCProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.NPCsProto} returns this
 */
proto.dma.NPCsProto.prototype.clearNpcsList = function() {
  return this.setNpcsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ConditionProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ConditionProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ConditionProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ConditionProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ConditionProto}
 */
proto.dma.ConditionProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ConditionProto;
  return proto.dma.ConditionProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ConditionProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ConditionProto}
 */
proto.dma.ConditionProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ConditionProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ConditionProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ConditionProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ConditionProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.ConditionProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.ConditionProto} returns this
*/
proto.dma.ConditionProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ConditionProto} returns this
 */
proto.dma.ConditionProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ConditionProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ConditionsProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ConditionsProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ConditionsProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ConditionsProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ConditionsProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.dma.ConditionProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ConditionsProto}
 */
proto.dma.ConditionsProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ConditionsProto;
  return proto.dma.ConditionsProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ConditionsProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ConditionsProto}
 */
proto.dma.ConditionsProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.ConditionProto;
      reader.readMessage(value,proto.dma.ConditionProto.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ConditionsProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ConditionsProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ConditionsProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ConditionsProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.ConditionProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ConditionProto conditions = 1;
 * @return {!Array<!proto.dma.ConditionProto>}
 */
proto.dma.ConditionsProto.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.dma.ConditionProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ConditionProto, 1));
};


/**
 * @param {!Array<!proto.dma.ConditionProto>} value
 * @return {!proto.dma.ConditionsProto} returns this
*/
proto.dma.ConditionsProto.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.ConditionProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ConditionProto}
 */
proto.dma.ConditionsProto.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.ConditionProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ConditionsProto} returns this
 */
proto.dma.ConditionsProto.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemProto.repeatedFields_ = [27,28,30];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    value: (f = msg.getValue()) && value_pb.MoneyProto.toObject(includeInstance, f),
    weight: (f = msg.getWeight()) && value_pb.WeightProto.toObject(includeInstance, f),
    rarity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    size: jspb.Message.getFieldWithDefault(msg, 7, 0),
    damageThreshold: jspb.Message.getFieldWithDefault(msg, 8, 0),
    hitPoints: jspb.Message.getFieldWithDefault(msg, 9, 0),
    fragile: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    substance: (f = msg.getSubstance()) && proto.dma.ItemProto.Substance.toObject(includeInstance, f),
    playerName: jspb.Message.getFieldWithDefault(msg, 13, ""),
    monetary: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    attunement: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    weapon: (f = msg.getWeapon()) && proto.dma.WeaponProto.toObject(includeInstance, f),
    armor: (f = msg.getArmor()) && proto.dma.ArmorProto.toObject(includeInstance, f),
    magic: (f = msg.getMagic()) && proto.dma.MagicProto.toObject(includeInstance, f),
    wearable: (f = msg.getWearable()) && proto.dma.WearableTemplateProto.toObject(includeInstance, f),
    incomplete: (f = msg.getIncomplete()) && proto.dma.IncompleteTemplateProto.toObject(includeInstance, f),
    counted: (f = msg.getCounted()) && proto.dma.CountedTemplateProto.toObject(includeInstance, f),
    multiple: (f = msg.getMultiple()) && proto.dma.MultipleTemplateProto.toObject(includeInstance, f),
    multiuse: (f = msg.getMultiuse()) && proto.dma.MultiuseTemplateProto.toObject(includeInstance, f),
    timed: (f = msg.getTimed()) && proto.dma.TimedTemplateProto.toObject(includeInstance, f),
    commodity: (f = msg.getCommodity()) && proto.dma.CommodityTemplateProto.toObject(includeInstance, f),
    container: (f = msg.getContainer()) && proto.dma.ContainerTemplateProto.toObject(includeInstance, f),
    light: (f = msg.getLight()) && proto.dma.LightTemplateProto.toObject(includeInstance, f),
    composite: (f = msg.getComposite()) && proto.dma.CompositeTemplateProto.toObject(includeInstance, f),
    qualitiesList: jspb.Message.toObjectList(msg.getQualitiesList(),
    proto.dma.ParametrizedTemplateProto.toObject, includeInstance),
    randomList: jspb.Message.toObjectList(msg.getRandomList(),
    proto.dma.ItemProto.Random.toObject, includeInstance),
    material: (f = msg.getMaterial()) && proto.dma.ItemProto.Material.toObject(includeInstance, f),
    loreList: jspb.Message.toObjectList(msg.getLoreList(),
    proto.dma.ItemProto.Lore.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemProto}
 */
proto.dma.ItemProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemProto;
  return proto.dma.ItemProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemProto}
 */
proto.dma.ItemProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.ItemProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!proto.dma.ItemProto.Subtype} */ (reader.readEnum());
      msg.setSubtype(value);
      break;
    case 4:
      var value = new value_pb.MoneyProto;
      reader.readMessage(value,value_pb.MoneyProto.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 5:
      var value = new value_pb.WeightProto;
      reader.readMessage(value,value_pb.WeightProto.deserializeBinaryFromReader);
      msg.setWeight(value);
      break;
    case 6:
      var value = /** @type {!proto.dma.ItemProto.Rarity} */ (reader.readEnum());
      msg.setRarity(value);
      break;
    case 7:
      var value = /** @type {!proto.dma.SizeProto} */ (reader.readEnum());
      msg.setSize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDamageThreshold(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHitPoints(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFragile(value);
      break;
    case 12:
      var value = new proto.dma.ItemProto.Substance;
      reader.readMessage(value,proto.dma.ItemProto.Substance.deserializeBinaryFromReader);
      msg.setSubstance(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMonetary(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAttunement(value);
      break;
    case 16:
      var value = new proto.dma.WeaponProto;
      reader.readMessage(value,proto.dma.WeaponProto.deserializeBinaryFromReader);
      msg.setWeapon(value);
      break;
    case 17:
      var value = new proto.dma.ArmorProto;
      reader.readMessage(value,proto.dma.ArmorProto.deserializeBinaryFromReader);
      msg.setArmor(value);
      break;
    case 18:
      var value = new proto.dma.MagicProto;
      reader.readMessage(value,proto.dma.MagicProto.deserializeBinaryFromReader);
      msg.setMagic(value);
      break;
    case 45:
      var value = new proto.dma.WearableTemplateProto;
      reader.readMessage(value,proto.dma.WearableTemplateProto.deserializeBinaryFromReader);
      msg.setWearable(value);
      break;
    case 116:
      var value = new proto.dma.IncompleteTemplateProto;
      reader.readMessage(value,proto.dma.IncompleteTemplateProto.deserializeBinaryFromReader);
      msg.setIncomplete(value);
      break;
    case 118:
      var value = new proto.dma.CountedTemplateProto;
      reader.readMessage(value,proto.dma.CountedTemplateProto.deserializeBinaryFromReader);
      msg.setCounted(value);
      break;
    case 47:
      var value = new proto.dma.MultipleTemplateProto;
      reader.readMessage(value,proto.dma.MultipleTemplateProto.deserializeBinaryFromReader);
      msg.setMultiple(value);
      break;
    case 48:
      var value = new proto.dma.MultiuseTemplateProto;
      reader.readMessage(value,proto.dma.MultiuseTemplateProto.deserializeBinaryFromReader);
      msg.setMultiuse(value);
      break;
    case 19:
      var value = new proto.dma.TimedTemplateProto;
      reader.readMessage(value,proto.dma.TimedTemplateProto.deserializeBinaryFromReader);
      msg.setTimed(value);
      break;
    case 20:
      var value = new proto.dma.CommodityTemplateProto;
      reader.readMessage(value,proto.dma.CommodityTemplateProto.deserializeBinaryFromReader);
      msg.setCommodity(value);
      break;
    case 21:
      var value = new proto.dma.ContainerTemplateProto;
      reader.readMessage(value,proto.dma.ContainerTemplateProto.deserializeBinaryFromReader);
      msg.setContainer(value);
      break;
    case 23:
      var value = new proto.dma.LightTemplateProto;
      reader.readMessage(value,proto.dma.LightTemplateProto.deserializeBinaryFromReader);
      msg.setLight(value);
      break;
    case 24:
      var value = new proto.dma.CompositeTemplateProto;
      reader.readMessage(value,proto.dma.CompositeTemplateProto.deserializeBinaryFromReader);
      msg.setComposite(value);
      break;
    case 27:
      var value = new proto.dma.ParametrizedTemplateProto;
      reader.readMessage(value,proto.dma.ParametrizedTemplateProto.deserializeBinaryFromReader);
      msg.addQualities(value);
      break;
    case 28:
      var value = new proto.dma.ItemProto.Random;
      reader.readMessage(value,proto.dma.ItemProto.Random.deserializeBinaryFromReader);
      msg.addRandom(value);
      break;
    case 29:
      var value = new proto.dma.ItemProto.Material;
      reader.readMessage(value,proto.dma.ItemProto.Material.deserializeBinaryFromReader);
      msg.setMaterial(value);
      break;
    case 30:
      var value = new proto.dma.ItemProto.Lore;
      reader.readMessage(value,proto.dma.ItemProto.Lore.deserializeBinaryFromReader);
      msg.addLore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSubtype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      value_pb.MoneyProto.serializeBinaryToWriter
    );
  }
  f = message.getWeight();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.WeightProto.serializeBinaryToWriter
    );
  }
  f = message.getRarity();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDamageThreshold();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getHitPoints();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getFragile();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getSubstance();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.dma.ItemProto.Substance.serializeBinaryToWriter
    );
  }
  f = message.getPlayerName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMonetary();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getAttunement();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getWeapon();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.dma.WeaponProto.serializeBinaryToWriter
    );
  }
  f = message.getArmor();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.dma.ArmorProto.serializeBinaryToWriter
    );
  }
  f = message.getMagic();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.dma.MagicProto.serializeBinaryToWriter
    );
  }
  f = message.getWearable();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.dma.WearableTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getIncomplete();
  if (f != null) {
    writer.writeMessage(
      116,
      f,
      proto.dma.IncompleteTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getCounted();
  if (f != null) {
    writer.writeMessage(
      118,
      f,
      proto.dma.CountedTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getMultiple();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.dma.MultipleTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getMultiuse();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto.dma.MultiuseTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getTimed();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.dma.TimedTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getCommodity();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.dma.CommodityTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getContainer();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.dma.ContainerTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getLight();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.dma.LightTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getComposite();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.dma.CompositeTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getQualitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      27,
      f,
      proto.dma.ParametrizedTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getRandomList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      28,
      f,
      proto.dma.ItemProto.Random.serializeBinaryToWriter
    );
  }
  f = message.getMaterial();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.dma.ItemProto.Material.serializeBinaryToWriter
    );
  }
  f = message.getLoreList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      30,
      f,
      proto.dma.ItemProto.Lore.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ItemProto.Type = {
  UNKNOWN_TYPE: 0,
  ADVENTURING_GEAR: 1,
  FOOD: 2,
  DRINK: 3,
  LODGING: 4,
  POTION: 5,
  WEAPON: 6,
  ARMOR: 7,
  TOY: 8,
  WAND: 9,
  TRINKET: 10,
  ROD: 11,
  RING: 12,
  SCROLL: 13,
  STAFF: 14,
  POISON: 15,
  CIRCLET: 16,
  MISC_MAGIC: 17,
  GEM: 18,
  ART: 19,
  CLOTHING: 20
};

/**
 * @enum {number}
 */
proto.dma.ItemProto.Subtype = {
  UNKNOWN_SUBTYPE: 0,
  WONDROUS_ITEM: 2,
  WONDROUS_ARTIFACT: 3
};

/**
 * @enum {number}
 */
proto.dma.ItemProto.Rarity = {
  UNKNOWN_RARITY: 0,
  COMMON: 1,
  UNCOMMON: 2,
  RARE: 3,
  VERY_RARE: 4,
  ULTRA_RARE: 5,
  LEGENDARY: 6,
  UNIQUE: 7
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemProto.Substance.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemProto.Substance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemProto.Substance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Substance.toObject = function(includeInstance, msg) {
  var f, obj = {
    material: jspb.Message.getFieldWithDefault(msg, 1, 0),
    thickness: (f = msg.getThickness()) && value_pb.DistanceProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemProto.Substance}
 */
proto.dma.ItemProto.Substance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemProto.Substance;
  return proto.dma.ItemProto.Substance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemProto.Substance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemProto.Substance}
 */
proto.dma.ItemProto.Substance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ItemProto.Substance.Material} */ (reader.readEnum());
      msg.setMaterial(value);
      break;
    case 2:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setThickness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemProto.Substance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemProto.Substance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemProto.Substance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Substance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaterial();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getThickness();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ItemProto.Substance.Material = {
  UNKNOWN: 0,
  PAPER: 1,
  CLOTH: 2,
  ROPE: 3,
  GLASS: 4,
  ICE: 5,
  LEATHER: 6,
  HIDE: 7,
  WOOD: 8,
  STONE: 9,
  IRON: 10,
  STEEL: 11,
  CRYSTAL: 12,
  MITHRAL: 13,
  ADAMANTINE: 14,
  BONE: 15
};

/**
 * optional Material material = 1;
 * @return {!proto.dma.ItemProto.Substance.Material}
 */
proto.dma.ItemProto.Substance.prototype.getMaterial = function() {
  return /** @type {!proto.dma.ItemProto.Substance.Material} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ItemProto.Substance.Material} value
 * @return {!proto.dma.ItemProto.Substance} returns this
 */
proto.dma.ItemProto.Substance.prototype.setMaterial = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DistanceProto thickness = 2;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.ItemProto.Substance.prototype.getThickness = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 2));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.ItemProto.Substance} returns this
*/
proto.dma.ItemProto.Substance.prototype.setThickness = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto.Substance} returns this
 */
proto.dma.ItemProto.Substance.prototype.clearThickness = function() {
  return this.setThickness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.Substance.prototype.hasThickness = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemProto.Random.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemProto.Random.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemProto.Random.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemProto.Random} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Random.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    multiple: (f = msg.getMultiple()) && value_pb.DiceProto.toObject(includeInstance, f),
    itemList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemProto.Random}
 */
proto.dma.ItemProto.Random.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemProto.Random;
  return proto.dma.ItemProto.Random.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemProto.Random} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemProto.Random}
 */
proto.dma.ItemProto.Random.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ItemProto.Random.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setMultiple(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemProto.Random.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemProto.Random.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemProto.Random} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Random.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMultiple();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ItemProto.Random.Type = {
  UNKNOWN: 0,
  MUNDANE: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.dma.ItemProto.Random.Type}
 */
proto.dma.ItemProto.Random.prototype.getType = function() {
  return /** @type {!proto.dma.ItemProto.Random.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ItemProto.Random.Type} value
 * @return {!proto.dma.ItemProto.Random} returns this
 */
proto.dma.ItemProto.Random.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DiceProto multiple = 2;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.ItemProto.Random.prototype.getMultiple = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 2));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.ItemProto.Random} returns this
*/
proto.dma.ItemProto.Random.prototype.setMultiple = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto.Random} returns this
 */
proto.dma.ItemProto.Random.prototype.clearMultiple = function() {
  return this.setMultiple(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.Random.prototype.hasMultiple = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string item = 3;
 * @return {!Array<string>}
 */
proto.dma.ItemProto.Random.prototype.getItemList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ItemProto.Random} returns this
 */
proto.dma.ItemProto.Random.prototype.setItemList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemProto.Random} returns this
 */
proto.dma.ItemProto.Random.prototype.addItem = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemProto.Random} returns this
 */
proto.dma.ItemProto.Random.prototype.clearItemList = function() {
  return this.setItemList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemProto.Material.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemProto.Material.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemProto.Material} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Material.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && value_pb.MoneyProto.toObject(includeInstance, f),
    valueType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hpPerInch: jspb.Message.getFieldWithDefault(msg, 3, 0),
    weightMultiplier: (f = msg.getWeightMultiplier()) && value_pb.RationalProto.toObject(includeInstance, f),
    hpMultiplier: (f = msg.getHpMultiplier()) && value_pb.RationalProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemProto.Material}
 */
proto.dma.ItemProto.Material.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemProto.Material;
  return proto.dma.ItemProto.Material.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemProto.Material} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemProto.Material}
 */
proto.dma.ItemProto.Material.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.MoneyProto;
      reader.readMessage(value,value_pb.MoneyProto.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.ItemProto.Material.ValueType} */ (reader.readEnum());
      msg.setValueType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHpPerInch(value);
      break;
    case 4:
      var value = new value_pb.RationalProto;
      reader.readMessage(value,value_pb.RationalProto.deserializeBinaryFromReader);
      msg.setWeightMultiplier(value);
      break;
    case 5:
      var value = new value_pb.RationalProto;
      reader.readMessage(value,value_pb.RationalProto.deserializeBinaryFromReader);
      msg.setHpMultiplier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemProto.Material.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemProto.Material.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemProto.Material} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Material.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.MoneyProto.serializeBinaryToWriter
    );
  }
  f = message.getValueType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getHpPerInch();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWeightMultiplier();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      value_pb.RationalProto.serializeBinaryToWriter
    );
  }
  f = message.getHpMultiplier();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.RationalProto.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ItemProto.Material.ValueType = {
  UNKNOWN: 0,
  PER_POUND: 1
};

/**
 * optional MoneyProto value = 1;
 * @return {?proto.dma.MoneyProto}
 */
proto.dma.ItemProto.Material.prototype.getValue = function() {
  return /** @type{?proto.dma.MoneyProto} */ (
    jspb.Message.getWrapperField(this, value_pb.MoneyProto, 1));
};


/**
 * @param {?proto.dma.MoneyProto|undefined} value
 * @return {!proto.dma.ItemProto.Material} returns this
*/
proto.dma.ItemProto.Material.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto.Material} returns this
 */
proto.dma.ItemProto.Material.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.Material.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValueType value_type = 2;
 * @return {!proto.dma.ItemProto.Material.ValueType}
 */
proto.dma.ItemProto.Material.prototype.getValueType = function() {
  return /** @type {!proto.dma.ItemProto.Material.ValueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.ItemProto.Material.ValueType} value
 * @return {!proto.dma.ItemProto.Material} returns this
 */
proto.dma.ItemProto.Material.prototype.setValueType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 hp_per_inch = 3;
 * @return {number}
 */
proto.dma.ItemProto.Material.prototype.getHpPerInch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemProto.Material} returns this
 */
proto.dma.ItemProto.Material.prototype.setHpPerInch = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional RationalProto weight_multiplier = 4;
 * @return {?proto.dma.RationalProto}
 */
proto.dma.ItemProto.Material.prototype.getWeightMultiplier = function() {
  return /** @type{?proto.dma.RationalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RationalProto, 4));
};


/**
 * @param {?proto.dma.RationalProto|undefined} value
 * @return {!proto.dma.ItemProto.Material} returns this
*/
proto.dma.ItemProto.Material.prototype.setWeightMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto.Material} returns this
 */
proto.dma.ItemProto.Material.prototype.clearWeightMultiplier = function() {
  return this.setWeightMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.Material.prototype.hasWeightMultiplier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RationalProto hp_multiplier = 5;
 * @return {?proto.dma.RationalProto}
 */
proto.dma.ItemProto.Material.prototype.getHpMultiplier = function() {
  return /** @type{?proto.dma.RationalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RationalProto, 5));
};


/**
 * @param {?proto.dma.RationalProto|undefined} value
 * @return {!proto.dma.ItemProto.Material} returns this
*/
proto.dma.ItemProto.Material.prototype.setHpMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto.Material} returns this
 */
proto.dma.ItemProto.Material.prototype.clearHpMultiplier = function() {
  return this.setHpMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.Material.prototype.hasHpMultiplier = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemProto.Lore.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemProto.Lore.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemProto.Lore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemProto.Lore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Lore.toObject = function(includeInstance, msg) {
  var f, obj = {
    checksList: jspb.Message.toObjectList(msg.getChecksList(),
    proto.dma.ItemProto.Lore.Check.toObject, includeInstance),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemProto.Lore}
 */
proto.dma.ItemProto.Lore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemProto.Lore;
  return proto.dma.ItemProto.Lore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemProto.Lore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemProto.Lore}
 */
proto.dma.ItemProto.Lore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.ItemProto.Lore.Check;
      reader.readMessage(value,proto.dma.ItemProto.Lore.Check.deserializeBinaryFromReader);
      msg.addChecks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemProto.Lore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemProto.Lore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemProto.Lore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Lore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.ItemProto.Lore.Check.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemProto.Lore.Check.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemProto.Lore.Check.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemProto.Lore.Check} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Lore.Check.toObject = function(includeInstance, msg) {
  var f, obj = {
    skill: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dc: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemProto.Lore.Check}
 */
proto.dma.ItemProto.Lore.Check.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemProto.Lore.Check;
  return proto.dma.ItemProto.Lore.Check.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemProto.Lore.Check} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemProto.Lore.Check}
 */
proto.dma.ItemProto.Lore.Check.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkill(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemProto.Lore.Check.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemProto.Lore.Check.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemProto.Lore.Check} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemProto.Lore.Check.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkill();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDc();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string skill = 1;
 * @return {string}
 */
proto.dma.ItemProto.Lore.Check.prototype.getSkill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemProto.Lore.Check} returns this
 */
proto.dma.ItemProto.Lore.Check.prototype.setSkill = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 dc = 2;
 * @return {number}
 */
proto.dma.ItemProto.Lore.Check.prototype.getDc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemProto.Lore.Check} returns this
 */
proto.dma.ItemProto.Lore.Check.prototype.setDc = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Check checks = 1;
 * @return {!Array<!proto.dma.ItemProto.Lore.Check>}
 */
proto.dma.ItemProto.Lore.prototype.getChecksList = function() {
  return /** @type{!Array<!proto.dma.ItemProto.Lore.Check>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemProto.Lore.Check, 1));
};


/**
 * @param {!Array<!proto.dma.ItemProto.Lore.Check>} value
 * @return {!proto.dma.ItemProto.Lore} returns this
*/
proto.dma.ItemProto.Lore.prototype.setChecksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.ItemProto.Lore.Check=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemProto.Lore.Check}
 */
proto.dma.ItemProto.Lore.prototype.addChecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.ItemProto.Lore.Check, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemProto.Lore} returns this
 */
proto.dma.ItemProto.Lore.prototype.clearChecksList = function() {
  return this.setChecksList([]);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.ItemProto.Lore.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemProto.Lore} returns this
 */
proto.dma.ItemProto.Lore.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.ItemProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Type type = 2;
 * @return {!proto.dma.ItemProto.Type}
 */
proto.dma.ItemProto.prototype.getType = function() {
  return /** @type {!proto.dma.ItemProto.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.ItemProto.Type} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Subtype subtype = 3;
 * @return {!proto.dma.ItemProto.Subtype}
 */
proto.dma.ItemProto.prototype.getSubtype = function() {
  return /** @type {!proto.dma.ItemProto.Subtype} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dma.ItemProto.Subtype} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setSubtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional MoneyProto value = 4;
 * @return {?proto.dma.MoneyProto}
 */
proto.dma.ItemProto.prototype.getValue = function() {
  return /** @type{?proto.dma.MoneyProto} */ (
    jspb.Message.getWrapperField(this, value_pb.MoneyProto, 4));
};


/**
 * @param {?proto.dma.MoneyProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional WeightProto weight = 5;
 * @return {?proto.dma.WeightProto}
 */
proto.dma.ItemProto.prototype.getWeight = function() {
  return /** @type{?proto.dma.WeightProto} */ (
    jspb.Message.getWrapperField(this, value_pb.WeightProto, 5));
};


/**
 * @param {?proto.dma.WeightProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setWeight = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearWeight = function() {
  return this.setWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasWeight = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Rarity rarity = 6;
 * @return {!proto.dma.ItemProto.Rarity}
 */
proto.dma.ItemProto.prototype.getRarity = function() {
  return /** @type {!proto.dma.ItemProto.Rarity} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dma.ItemProto.Rarity} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setRarity = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional SizeProto size = 7;
 * @return {!proto.dma.SizeProto}
 */
proto.dma.ItemProto.prototype.getSize = function() {
  return /** @type {!proto.dma.SizeProto} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.dma.SizeProto} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setSize = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int32 damage_threshold = 8;
 * @return {number}
 */
proto.dma.ItemProto.prototype.getDamageThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setDamageThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 hit_points = 9;
 * @return {number}
 */
proto.dma.ItemProto.prototype.getHitPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setHitPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool fragile = 11;
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.getFragile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setFragile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional Substance substance = 12;
 * @return {?proto.dma.ItemProto.Substance}
 */
proto.dma.ItemProto.prototype.getSubstance = function() {
  return /** @type{?proto.dma.ItemProto.Substance} */ (
    jspb.Message.getWrapperField(this, proto.dma.ItemProto.Substance, 12));
};


/**
 * @param {?proto.dma.ItemProto.Substance|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setSubstance = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearSubstance = function() {
  return this.setSubstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasSubstance = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string player_name = 13;
 * @return {string}
 */
proto.dma.ItemProto.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool monetary = 14;
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.getMonetary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setMonetary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool attunement = 15;
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.getAttunement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.setAttunement = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional WeaponProto weapon = 16;
 * @return {?proto.dma.WeaponProto}
 */
proto.dma.ItemProto.prototype.getWeapon = function() {
  return /** @type{?proto.dma.WeaponProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.WeaponProto, 16));
};


/**
 * @param {?proto.dma.WeaponProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setWeapon = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearWeapon = function() {
  return this.setWeapon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasWeapon = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ArmorProto armor = 17;
 * @return {?proto.dma.ArmorProto}
 */
proto.dma.ItemProto.prototype.getArmor = function() {
  return /** @type{?proto.dma.ArmorProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.ArmorProto, 17));
};


/**
 * @param {?proto.dma.ArmorProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setArmor = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearArmor = function() {
  return this.setArmor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasArmor = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional MagicProto magic = 18;
 * @return {?proto.dma.MagicProto}
 */
proto.dma.ItemProto.prototype.getMagic = function() {
  return /** @type{?proto.dma.MagicProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.MagicProto, 18));
};


/**
 * @param {?proto.dma.MagicProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setMagic = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearMagic = function() {
  return this.setMagic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasMagic = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional WearableTemplateProto wearable = 45;
 * @return {?proto.dma.WearableTemplateProto}
 */
proto.dma.ItemProto.prototype.getWearable = function() {
  return /** @type{?proto.dma.WearableTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.WearableTemplateProto, 45));
};


/**
 * @param {?proto.dma.WearableTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setWearable = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearWearable = function() {
  return this.setWearable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasWearable = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional IncompleteTemplateProto incomplete = 116;
 * @return {?proto.dma.IncompleteTemplateProto}
 */
proto.dma.ItemProto.prototype.getIncomplete = function() {
  return /** @type{?proto.dma.IncompleteTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.IncompleteTemplateProto, 116));
};


/**
 * @param {?proto.dma.IncompleteTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setIncomplete = function(value) {
  return jspb.Message.setWrapperField(this, 116, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearIncomplete = function() {
  return this.setIncomplete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasIncomplete = function() {
  return jspb.Message.getField(this, 116) != null;
};


/**
 * optional CountedTemplateProto counted = 118;
 * @return {?proto.dma.CountedTemplateProto}
 */
proto.dma.ItemProto.prototype.getCounted = function() {
  return /** @type{?proto.dma.CountedTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CountedTemplateProto, 118));
};


/**
 * @param {?proto.dma.CountedTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setCounted = function(value) {
  return jspb.Message.setWrapperField(this, 118, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearCounted = function() {
  return this.setCounted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasCounted = function() {
  return jspb.Message.getField(this, 118) != null;
};


/**
 * optional MultipleTemplateProto multiple = 47;
 * @return {?proto.dma.MultipleTemplateProto}
 */
proto.dma.ItemProto.prototype.getMultiple = function() {
  return /** @type{?proto.dma.MultipleTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.MultipleTemplateProto, 47));
};


/**
 * @param {?proto.dma.MultipleTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setMultiple = function(value) {
  return jspb.Message.setWrapperField(this, 47, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearMultiple = function() {
  return this.setMultiple(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasMultiple = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional MultiuseTemplateProto multiuse = 48;
 * @return {?proto.dma.MultiuseTemplateProto}
 */
proto.dma.ItemProto.prototype.getMultiuse = function() {
  return /** @type{?proto.dma.MultiuseTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.MultiuseTemplateProto, 48));
};


/**
 * @param {?proto.dma.MultiuseTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setMultiuse = function(value) {
  return jspb.Message.setWrapperField(this, 48, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearMultiuse = function() {
  return this.setMultiuse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasMultiuse = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional TimedTemplateProto timed = 19;
 * @return {?proto.dma.TimedTemplateProto}
 */
proto.dma.ItemProto.prototype.getTimed = function() {
  return /** @type{?proto.dma.TimedTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TimedTemplateProto, 19));
};


/**
 * @param {?proto.dma.TimedTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setTimed = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearTimed = function() {
  return this.setTimed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasTimed = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CommodityTemplateProto commodity = 20;
 * @return {?proto.dma.CommodityTemplateProto}
 */
proto.dma.ItemProto.prototype.getCommodity = function() {
  return /** @type{?proto.dma.CommodityTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommodityTemplateProto, 20));
};


/**
 * @param {?proto.dma.CommodityTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setCommodity = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearCommodity = function() {
  return this.setCommodity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasCommodity = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ContainerTemplateProto container = 21;
 * @return {?proto.dma.ContainerTemplateProto}
 */
proto.dma.ItemProto.prototype.getContainer = function() {
  return /** @type{?proto.dma.ContainerTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.ContainerTemplateProto, 21));
};


/**
 * @param {?proto.dma.ContainerTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setContainer = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearContainer = function() {
  return this.setContainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasContainer = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional LightTemplateProto light = 23;
 * @return {?proto.dma.LightTemplateProto}
 */
proto.dma.ItemProto.prototype.getLight = function() {
  return /** @type{?proto.dma.LightTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.LightTemplateProto, 23));
};


/**
 * @param {?proto.dma.LightTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setLight = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearLight = function() {
  return this.setLight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasLight = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CompositeTemplateProto composite = 24;
 * @return {?proto.dma.CompositeTemplateProto}
 */
proto.dma.ItemProto.prototype.getComposite = function() {
  return /** @type{?proto.dma.CompositeTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CompositeTemplateProto, 24));
};


/**
 * @param {?proto.dma.CompositeTemplateProto|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setComposite = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearComposite = function() {
  return this.setComposite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasComposite = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * repeated ParametrizedTemplateProto qualities = 27;
 * @return {!Array<!proto.dma.ParametrizedTemplateProto>}
 */
proto.dma.ItemProto.prototype.getQualitiesList = function() {
  return /** @type{!Array<!proto.dma.ParametrizedTemplateProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ParametrizedTemplateProto, 27));
};


/**
 * @param {!Array<!proto.dma.ParametrizedTemplateProto>} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setQualitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 27, value);
};


/**
 * @param {!proto.dma.ParametrizedTemplateProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ParametrizedTemplateProto}
 */
proto.dma.ItemProto.prototype.addQualities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 27, opt_value, proto.dma.ParametrizedTemplateProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearQualitiesList = function() {
  return this.setQualitiesList([]);
};


/**
 * repeated Random random = 28;
 * @return {!Array<!proto.dma.ItemProto.Random>}
 */
proto.dma.ItemProto.prototype.getRandomList = function() {
  return /** @type{!Array<!proto.dma.ItemProto.Random>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemProto.Random, 28));
};


/**
 * @param {!Array<!proto.dma.ItemProto.Random>} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setRandomList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 28, value);
};


/**
 * @param {!proto.dma.ItemProto.Random=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemProto.Random}
 */
proto.dma.ItemProto.prototype.addRandom = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 28, opt_value, proto.dma.ItemProto.Random, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearRandomList = function() {
  return this.setRandomList([]);
};


/**
 * optional Material material = 29;
 * @return {?proto.dma.ItemProto.Material}
 */
proto.dma.ItemProto.prototype.getMaterial = function() {
  return /** @type{?proto.dma.ItemProto.Material} */ (
    jspb.Message.getWrapperField(this, proto.dma.ItemProto.Material, 29));
};


/**
 * @param {?proto.dma.ItemProto.Material|undefined} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setMaterial = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearMaterial = function() {
  return this.setMaterial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemProto.prototype.hasMaterial = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * repeated Lore lore = 30;
 * @return {!Array<!proto.dma.ItemProto.Lore>}
 */
proto.dma.ItemProto.prototype.getLoreList = function() {
  return /** @type{!Array<!proto.dma.ItemProto.Lore>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemProto.Lore, 30));
};


/**
 * @param {!Array<!proto.dma.ItemProto.Lore>} value
 * @return {!proto.dma.ItemProto} returns this
*/
proto.dma.ItemProto.prototype.setLoreList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 30, value);
};


/**
 * @param {!proto.dma.ItemProto.Lore=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemProto.Lore}
 */
proto.dma.ItemProto.prototype.addLore = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 30, opt_value, proto.dma.ItemProto.Lore, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemProto} returns this
 */
proto.dma.ItemProto.prototype.clearLoreList = function() {
  return this.setLoreList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemsProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemsProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemsProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemsProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemsProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.dma.ItemProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemsProto}
 */
proto.dma.ItemsProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemsProto;
  return proto.dma.ItemsProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemsProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemsProto}
 */
proto.dma.ItemsProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.ItemProto;
      reader.readMessage(value,proto.dma.ItemProto.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemsProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemsProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemsProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemsProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.ItemProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ItemProto items = 1;
 * @return {!Array<!proto.dma.ItemProto>}
 */
proto.dma.ItemsProto.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.dma.ItemProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemProto, 1));
};


/**
 * @param {!Array<!proto.dma.ItemProto>} value
 * @return {!proto.dma.ItemsProto} returns this
*/
proto.dma.ItemsProto.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.ItemProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemProto}
 */
proto.dma.ItemsProto.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.ItemProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemsProto} returns this
 */
proto.dma.ItemsProto.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemLookupProto.repeatedFields_ = [2,3,9,10,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ItemLookupProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemLookupProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemLookupProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemLookupProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    templatesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    categoryOrList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    value: (f = msg.getValue()) && value_pb.MoneyProto.toObject(includeInstance, f),
    valueMin: (f = msg.getValueMin()) && value_pb.MoneyProto.toObject(includeInstance, f),
    valueMax: (f = msg.getValueMax()) && value_pb.MoneyProto.toObject(includeInstance, f),
    weightMin: (f = msg.getWeightMin()) && value_pb.WeightProto.toObject(includeInstance, f),
    weightMax: (f = msg.getWeightMax()) && value_pb.WeightProto.toObject(includeInstance, f),
    sizeOrList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    materialOrList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    hp: jspb.Message.getFieldWithDefault(msg, 11, 0),
    appearance: jspb.Message.getFieldWithDefault(msg, 12, ""),
    dmNotes: jspb.Message.getFieldWithDefault(msg, 13, ""),
    multiple: jspb.Message.getFieldWithDefault(msg, 14, 0),
    multiuse: jspb.Message.getFieldWithDefault(msg, 15, 0),
    count: jspb.Message.getFieldWithDefault(msg, 18, 0),
    timeLeft: (f = msg.getTimeLeft()) && value_pb.DurationProto.toObject(includeInstance, f),
    contentList: jspb.Message.toObjectList(msg.getContentList(),
    proto.dma.ItemLookupProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ItemLookupProto}
 */
proto.dma.ItemLookupProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemLookupProto;
  return proto.dma.ItemLookupProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemLookupProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemLookupProto}
 */
proto.dma.ItemLookupProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTemplates(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategoryOr(value);
      break;
    case 4:
      var value = new value_pb.MoneyProto;
      reader.readMessage(value,value_pb.MoneyProto.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 5:
      var value = new value_pb.MoneyProto;
      reader.readMessage(value,value_pb.MoneyProto.deserializeBinaryFromReader);
      msg.setValueMin(value);
      break;
    case 6:
      var value = new value_pb.MoneyProto;
      reader.readMessage(value,value_pb.MoneyProto.deserializeBinaryFromReader);
      msg.setValueMax(value);
      break;
    case 7:
      var value = new value_pb.WeightProto;
      reader.readMessage(value,value_pb.WeightProto.deserializeBinaryFromReader);
      msg.setWeightMin(value);
      break;
    case 8:
      var value = new value_pb.WeightProto;
      reader.readMessage(value,value_pb.WeightProto.deserializeBinaryFromReader);
      msg.setWeightMax(value);
      break;
    case 9:
      var values = /** @type {!Array<!proto.dma.SizeProto>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSizeOr(values[i]);
      }
      break;
    case 10:
      var values = /** @type {!Array<!proto.dma.ItemProto.Substance.Material>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMaterialOr(values[i]);
      }
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHp(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppearance(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDmNotes(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMultiple(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMultiuse(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 16:
      var value = new value_pb.DurationProto;
      reader.readMessage(value,value_pb.DurationProto.deserializeBinaryFromReader);
      msg.setTimeLeft(value);
      break;
    case 17:
      var value = new proto.dma.ItemLookupProto;
      reader.readMessage(value,proto.dma.ItemLookupProto.deserializeBinaryFromReader);
      msg.addContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ItemLookupProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemLookupProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemLookupProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemLookupProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCategoryOrList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      value_pb.MoneyProto.serializeBinaryToWriter
    );
  }
  f = message.getValueMin();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.MoneyProto.serializeBinaryToWriter
    );
  }
  f = message.getValueMax();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      value_pb.MoneyProto.serializeBinaryToWriter
    );
  }
  f = message.getWeightMin();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      value_pb.WeightProto.serializeBinaryToWriter
    );
  }
  f = message.getWeightMax();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      value_pb.WeightProto.serializeBinaryToWriter
    );
  }
  f = message.getSizeOrList();
  if (f.length > 0) {
    writer.writePackedEnum(
      9,
      f
    );
  }
  f = message.getMaterialOrList();
  if (f.length > 0) {
    writer.writePackedEnum(
      10,
      f
    );
  }
  f = message.getHp();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getAppearance();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDmNotes();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMultiple();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getMultiuse();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getTimeLeft();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      value_pb.DurationProto.serializeBinaryToWriter
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.dma.ItemLookupProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.ItemLookupProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string templates = 2;
 * @return {!Array<string>}
 */
proto.dma.ItemLookupProto.prototype.getTemplatesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setTemplatesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.addTemplates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearTemplatesList = function() {
  return this.setTemplatesList([]);
};


/**
 * repeated string category_or = 3;
 * @return {!Array<string>}
 */
proto.dma.ItemLookupProto.prototype.getCategoryOrList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setCategoryOrList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.addCategoryOr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearCategoryOrList = function() {
  return this.setCategoryOrList([]);
};


/**
 * optional MoneyProto value = 4;
 * @return {?proto.dma.MoneyProto}
 */
proto.dma.ItemLookupProto.prototype.getValue = function() {
  return /** @type{?proto.dma.MoneyProto} */ (
    jspb.Message.getWrapperField(this, value_pb.MoneyProto, 4));
};


/**
 * @param {?proto.dma.MoneyProto|undefined} value
 * @return {!proto.dma.ItemLookupProto} returns this
*/
proto.dma.ItemLookupProto.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemLookupProto.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MoneyProto value_min = 5;
 * @return {?proto.dma.MoneyProto}
 */
proto.dma.ItemLookupProto.prototype.getValueMin = function() {
  return /** @type{?proto.dma.MoneyProto} */ (
    jspb.Message.getWrapperField(this, value_pb.MoneyProto, 5));
};


/**
 * @param {?proto.dma.MoneyProto|undefined} value
 * @return {!proto.dma.ItemLookupProto} returns this
*/
proto.dma.ItemLookupProto.prototype.setValueMin = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearValueMin = function() {
  return this.setValueMin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemLookupProto.prototype.hasValueMin = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MoneyProto value_max = 6;
 * @return {?proto.dma.MoneyProto}
 */
proto.dma.ItemLookupProto.prototype.getValueMax = function() {
  return /** @type{?proto.dma.MoneyProto} */ (
    jspb.Message.getWrapperField(this, value_pb.MoneyProto, 6));
};


/**
 * @param {?proto.dma.MoneyProto|undefined} value
 * @return {!proto.dma.ItemLookupProto} returns this
*/
proto.dma.ItemLookupProto.prototype.setValueMax = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearValueMax = function() {
  return this.setValueMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemLookupProto.prototype.hasValueMax = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WeightProto weight_min = 7;
 * @return {?proto.dma.WeightProto}
 */
proto.dma.ItemLookupProto.prototype.getWeightMin = function() {
  return /** @type{?proto.dma.WeightProto} */ (
    jspb.Message.getWrapperField(this, value_pb.WeightProto, 7));
};


/**
 * @param {?proto.dma.WeightProto|undefined} value
 * @return {!proto.dma.ItemLookupProto} returns this
*/
proto.dma.ItemLookupProto.prototype.setWeightMin = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearWeightMin = function() {
  return this.setWeightMin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemLookupProto.prototype.hasWeightMin = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WeightProto weight_max = 8;
 * @return {?proto.dma.WeightProto}
 */
proto.dma.ItemLookupProto.prototype.getWeightMax = function() {
  return /** @type{?proto.dma.WeightProto} */ (
    jspb.Message.getWrapperField(this, value_pb.WeightProto, 8));
};


/**
 * @param {?proto.dma.WeightProto|undefined} value
 * @return {!proto.dma.ItemLookupProto} returns this
*/
proto.dma.ItemLookupProto.prototype.setWeightMax = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearWeightMax = function() {
  return this.setWeightMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemLookupProto.prototype.hasWeightMax = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated SizeProto size_or = 9;
 * @return {!Array<!proto.dma.SizeProto>}
 */
proto.dma.ItemLookupProto.prototype.getSizeOrList = function() {
  return /** @type {!Array<!proto.dma.SizeProto>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<!proto.dma.SizeProto>} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setSizeOrList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!proto.dma.SizeProto} value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.addSizeOr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearSizeOrList = function() {
  return this.setSizeOrList([]);
};


/**
 * repeated ItemProto.Substance.Material material_or = 10;
 * @return {!Array<!proto.dma.ItemProto.Substance.Material>}
 */
proto.dma.ItemLookupProto.prototype.getMaterialOrList = function() {
  return /** @type {!Array<!proto.dma.ItemProto.Substance.Material>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<!proto.dma.ItemProto.Substance.Material>} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setMaterialOrList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.dma.ItemProto.Substance.Material} value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.addMaterialOr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearMaterialOrList = function() {
  return this.setMaterialOrList([]);
};


/**
 * optional int32 hp = 11;
 * @return {number}
 */
proto.dma.ItemLookupProto.prototype.getHp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setHp = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string appearance = 12;
 * @return {string}
 */
proto.dma.ItemLookupProto.prototype.getAppearance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setAppearance = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string dm_notes = 13;
 * @return {string}
 */
proto.dma.ItemLookupProto.prototype.getDmNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setDmNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 multiple = 14;
 * @return {number}
 */
proto.dma.ItemLookupProto.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setMultiple = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 multiuse = 15;
 * @return {number}
 */
proto.dma.ItemLookupProto.prototype.getMultiuse = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setMultiuse = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 count = 18;
 * @return {number}
 */
proto.dma.ItemLookupProto.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional DurationProto time_left = 16;
 * @return {?proto.dma.DurationProto}
 */
proto.dma.ItemLookupProto.prototype.getTimeLeft = function() {
  return /** @type{?proto.dma.DurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DurationProto, 16));
};


/**
 * @param {?proto.dma.DurationProto|undefined} value
 * @return {!proto.dma.ItemLookupProto} returns this
*/
proto.dma.ItemLookupProto.prototype.setTimeLeft = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearTimeLeft = function() {
  return this.setTimeLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemLookupProto.prototype.hasTimeLeft = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated ItemLookupProto content = 17;
 * @return {!Array<!proto.dma.ItemLookupProto>}
 */
proto.dma.ItemLookupProto.prototype.getContentList = function() {
  return /** @type{!Array<!proto.dma.ItemLookupProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemLookupProto, 17));
};


/**
 * @param {!Array<!proto.dma.ItemLookupProto>} value
 * @return {!proto.dma.ItemLookupProto} returns this
*/
proto.dma.ItemLookupProto.prototype.setContentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.dma.ItemLookupProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemLookupProto}
 */
proto.dma.ItemLookupProto.prototype.addContent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.dma.ItemLookupProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.clearContentList = function() {
  return this.setContentList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.LevelTemplateProto.repeatedFields_ = [12,15,17,18,19,20,21,25,27,28,29,30];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.LevelTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.LevelTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.LevelTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LevelTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    abbreviation: jspb.Message.getFieldWithDefault(msg, 2, ""),
    adventures: jspb.Message.getFieldWithDefault(msg, 3, ""),
    characteristics: jspb.Message.getFieldWithDefault(msg, 4, ""),
    alignmentOptions: jspb.Message.getFieldWithDefault(msg, 5, ""),
    religion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    background: jspb.Message.getFieldWithDefault(msg, 7, ""),
    races: jspb.Message.getFieldWithDefault(msg, 8, ""),
    otherclasses: jspb.Message.getFieldWithDefault(msg, 9, ""),
    role: jspb.Message.getFieldWithDefault(msg, 10, ""),
    importantAbilities: jspb.Message.getFieldWithDefault(msg, 11, ""),
    allowedAlignmentList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    hitDice: (f = msg.getHitDice()) && value_pb.DiceProto.toObject(includeInstance, f),
    skillPoints: jspb.Message.getFieldWithDefault(msg, 14, 0),
    classSkillList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    classSkillsAny: jspb.Message.getFieldWithDefault(msg, 16, 0),
    weaponProficiencyList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    individualWeaponProficiencyList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
    armorProficiencyList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
    qualityList: jspb.Message.toObjectList(msg.getQualityList(),
    proto.dma.LeveledTemplateProto.toObject, includeInstance),
    baseAttackList: (f = jspb.Message.getRepeatedField(msg, 21)) == null ? undefined : f,
    goodFortitudeSave: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    goodWillSave: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    goodReflexSave: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    bonusFeatList: jspb.Message.toObjectList(msg.getBonusFeatList(),
    proto.dma.LeveledTemplateProto.toObject, includeInstance),
    spellAbility: jspb.Message.getFieldWithDefault(msg, 26, 0),
    spellsPerDayList: jspb.Message.toObjectList(msg.getSpellsPerDayList(),
    proto.dma.LevelTemplateProto.PerLevel.toObject, includeInstance),
    spellsKnownList: jspb.Message.toObjectList(msg.getSpellsKnownList(),
    proto.dma.LevelTemplateProto.PerLevel.toObject, includeInstance),
    automaticFeatList: (f = jspb.Message.getRepeatedField(msg, 29)) == null ? undefined : f,
    requirementList: jspb.Message.toObjectList(msg.getRequirementList(),
    proto.dma.LevelTemplateProto.Requirement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.LevelTemplateProto}
 */
proto.dma.LevelTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.LevelTemplateProto;
  return proto.dma.LevelTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.LevelTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.LevelTemplateProto}
 */
proto.dma.LevelTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAbbreviation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdventures(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacteristics(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlignmentOptions(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReligion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackground(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaces(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtherclasses(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setImportantAbilities(value);
      break;
    case 12:
      var values = /** @type {!Array<!proto.dma.AlignmentProto>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAllowedAlignment(values[i]);
      }
      break;
    case 13:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setHitDice(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkillPoints(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addClassSkill(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClassSkillsAny(value);
      break;
    case 17:
      var values = /** @type {!Array<!proto.dma.Proficiency>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addWeaponProficiency(values[i]);
      }
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addIndividualWeaponProficiency(value);
      break;
    case 19:
      var values = /** @type {!Array<!proto.dma.ArmorType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addArmorProficiency(values[i]);
      }
      break;
    case 20:
      var value = new proto.dma.LeveledTemplateProto;
      reader.readMessage(value,proto.dma.LeveledTemplateProto.deserializeBinaryFromReader);
      msg.addQuality(value);
      break;
    case 21:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBaseAttack(values[i]);
      }
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGoodFortitudeSave(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGoodWillSave(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGoodReflexSave(value);
      break;
    case 25:
      var value = new proto.dma.LeveledTemplateProto;
      reader.readMessage(value,proto.dma.LeveledTemplateProto.deserializeBinaryFromReader);
      msg.addBonusFeat(value);
      break;
    case 26:
      var value = /** @type {!proto.dma.Ability} */ (reader.readEnum());
      msg.setSpellAbility(value);
      break;
    case 27:
      var value = new proto.dma.LevelTemplateProto.PerLevel;
      reader.readMessage(value,proto.dma.LevelTemplateProto.PerLevel.deserializeBinaryFromReader);
      msg.addSpellsPerDay(value);
      break;
    case 28:
      var value = new proto.dma.LevelTemplateProto.PerLevel;
      reader.readMessage(value,proto.dma.LevelTemplateProto.PerLevel.deserializeBinaryFromReader);
      msg.addSpellsKnown(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.addAutomaticFeat(value);
      break;
    case 30:
      var value = new proto.dma.LevelTemplateProto.Requirement;
      reader.readMessage(value,proto.dma.LevelTemplateProto.Requirement.deserializeBinaryFromReader);
      msg.addRequirement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.LevelTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.LevelTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.LevelTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LevelTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getAbbreviation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdventures();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCharacteristics();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAlignmentOptions();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReligion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBackground();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRaces();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOtherclasses();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getImportantAbilities();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAllowedAlignmentList();
  if (f.length > 0) {
    writer.writePackedEnum(
      12,
      f
    );
  }
  f = message.getHitDice();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getSkillPoints();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getClassSkillList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getClassSkillsAny();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getWeaponProficiencyList();
  if (f.length > 0) {
    writer.writePackedEnum(
      17,
      f
    );
  }
  f = message.getIndividualWeaponProficiencyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = message.getArmorProficiencyList();
  if (f.length > 0) {
    writer.writePackedEnum(
      19,
      f
    );
  }
  f = message.getQualityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.dma.LeveledTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getBaseAttackList();
  if (f.length > 0) {
    writer.writePackedInt32(
      21,
      f
    );
  }
  f = message.getGoodFortitudeSave();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getGoodWillSave();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getGoodReflexSave();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getBonusFeatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.dma.LeveledTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getSpellAbility();
  if (f !== 0.0) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = message.getSpellsPerDayList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      27,
      f,
      proto.dma.LevelTemplateProto.PerLevel.serializeBinaryToWriter
    );
  }
  f = message.getSpellsKnownList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      28,
      f,
      proto.dma.LevelTemplateProto.PerLevel.serializeBinaryToWriter
    );
  }
  f = message.getAutomaticFeatList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      29,
      f
    );
  }
  f = message.getRequirementList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      30,
      f,
      proto.dma.LevelTemplateProto.Requirement.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.LevelTemplateProto.PerLevel.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.LevelTemplateProto.PerLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.LevelTemplateProto.PerLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.LevelTemplateProto.PerLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LevelTemplateProto.PerLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.LevelTemplateProto.PerLevel}
 */
proto.dma.LevelTemplateProto.PerLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.LevelTemplateProto.PerLevel;
  return proto.dma.LevelTemplateProto.PerLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.LevelTemplateProto.PerLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.LevelTemplateProto.PerLevel}
 */
proto.dma.LevelTemplateProto.PerLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValue(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.LevelTemplateProto.PerLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.LevelTemplateProto.PerLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.LevelTemplateProto.PerLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LevelTemplateProto.PerLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 value = 1;
 * @return {!Array<number>}
 */
proto.dma.LevelTemplateProto.PerLevel.prototype.getValueList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.dma.LevelTemplateProto.PerLevel} returns this
 */
proto.dma.LevelTemplateProto.PerLevel.prototype.setValueList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto.PerLevel} returns this
 */
proto.dma.LevelTemplateProto.PerLevel.prototype.addValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto.PerLevel} returns this
 */
proto.dma.LevelTemplateProto.PerLevel.prototype.clearValueList = function() {
  return this.setValueList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.LevelTemplateProto.Requirement.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.LevelTemplateProto.Requirement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.LevelTemplateProto.Requirement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LevelTemplateProto.Requirement.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.LevelTemplateProto.Requirement}
 */
proto.dma.LevelTemplateProto.Requirement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.LevelTemplateProto.Requirement;
  return proto.dma.LevelTemplateProto.Requirement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.LevelTemplateProto.Requirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.LevelTemplateProto.Requirement}
 */
proto.dma.LevelTemplateProto.Requirement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.LevelTemplateProto.Requirement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.LevelTemplateProto.Requirement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.LevelTemplateProto.Requirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LevelTemplateProto.Requirement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.dma.LevelTemplateProto.Requirement.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto.Requirement} returns this
 */
proto.dma.LevelTemplateProto.Requirement.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.LevelTemplateProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.LevelTemplateProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string abbreviation = 2;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getAbbreviation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setAbbreviation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string adventures = 3;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getAdventures = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setAdventures = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string characteristics = 4;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getCharacteristics = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setCharacteristics = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string alignment_options = 5;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getAlignmentOptions = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setAlignmentOptions = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string religion = 6;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getReligion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setReligion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string background = 7;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getBackground = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setBackground = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string races = 8;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getRaces = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setRaces = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string otherClasses = 9;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getOtherclasses = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setOtherclasses = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string role = 10;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string important_abilities = 11;
 * @return {string}
 */
proto.dma.LevelTemplateProto.prototype.getImportantAbilities = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setImportantAbilities = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated AlignmentProto allowed_alignment = 12;
 * @return {!Array<!proto.dma.AlignmentProto>}
 */
proto.dma.LevelTemplateProto.prototype.getAllowedAlignmentList = function() {
  return /** @type {!Array<!proto.dma.AlignmentProto>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<!proto.dma.AlignmentProto>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setAllowedAlignmentList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!proto.dma.AlignmentProto} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.addAllowedAlignment = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearAllowedAlignmentList = function() {
  return this.setAllowedAlignmentList([]);
};


/**
 * optional DiceProto hit_dice = 13;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.LevelTemplateProto.prototype.getHitDice = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 13));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setHitDice = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearHitDice = function() {
  return this.setHitDice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.LevelTemplateProto.prototype.hasHitDice = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 skill_points = 14;
 * @return {number}
 */
proto.dma.LevelTemplateProto.prototype.getSkillPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setSkillPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * repeated string class_skill = 15;
 * @return {!Array<string>}
 */
proto.dma.LevelTemplateProto.prototype.getClassSkillList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setClassSkillList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.addClassSkill = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearClassSkillList = function() {
  return this.setClassSkillList([]);
};


/**
 * optional int32 class_skills_any = 16;
 * @return {number}
 */
proto.dma.LevelTemplateProto.prototype.getClassSkillsAny = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setClassSkillsAny = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * repeated Proficiency weapon_proficiency = 17;
 * @return {!Array<!proto.dma.Proficiency>}
 */
proto.dma.LevelTemplateProto.prototype.getWeaponProficiencyList = function() {
  return /** @type {!Array<!proto.dma.Proficiency>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<!proto.dma.Proficiency>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setWeaponProficiencyList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {!proto.dma.Proficiency} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.addWeaponProficiency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearWeaponProficiencyList = function() {
  return this.setWeaponProficiencyList([]);
};


/**
 * repeated string individual_weapon_proficiency = 18;
 * @return {!Array<string>}
 */
proto.dma.LevelTemplateProto.prototype.getIndividualWeaponProficiencyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setIndividualWeaponProficiencyList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.addIndividualWeaponProficiency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearIndividualWeaponProficiencyList = function() {
  return this.setIndividualWeaponProficiencyList([]);
};


/**
 * repeated ArmorType armor_proficiency = 19;
 * @return {!Array<!proto.dma.ArmorType>}
 */
proto.dma.LevelTemplateProto.prototype.getArmorProficiencyList = function() {
  return /** @type {!Array<!proto.dma.ArmorType>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<!proto.dma.ArmorType>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setArmorProficiencyList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {!proto.dma.ArmorType} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.addArmorProficiency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearArmorProficiencyList = function() {
  return this.setArmorProficiencyList([]);
};


/**
 * repeated LeveledTemplateProto quality = 20;
 * @return {!Array<!proto.dma.LeveledTemplateProto>}
 */
proto.dma.LevelTemplateProto.prototype.getQualityList = function() {
  return /** @type{!Array<!proto.dma.LeveledTemplateProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.LeveledTemplateProto, 20));
};


/**
 * @param {!Array<!proto.dma.LeveledTemplateProto>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setQualityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.dma.LeveledTemplateProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.LeveledTemplateProto}
 */
proto.dma.LevelTemplateProto.prototype.addQuality = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.dma.LeveledTemplateProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearQualityList = function() {
  return this.setQualityList([]);
};


/**
 * repeated int32 base_attack = 21;
 * @return {!Array<number>}
 */
proto.dma.LevelTemplateProto.prototype.getBaseAttackList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 21));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setBaseAttackList = function(value) {
  return jspb.Message.setField(this, 21, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.addBaseAttack = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 21, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearBaseAttackList = function() {
  return this.setBaseAttackList([]);
};


/**
 * optional bool good_fortitude_save = 22;
 * @return {boolean}
 */
proto.dma.LevelTemplateProto.prototype.getGoodFortitudeSave = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setGoodFortitudeSave = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool good_will_save = 23;
 * @return {boolean}
 */
proto.dma.LevelTemplateProto.prototype.getGoodWillSave = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setGoodWillSave = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool good_reflex_save = 24;
 * @return {boolean}
 */
proto.dma.LevelTemplateProto.prototype.getGoodReflexSave = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setGoodReflexSave = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * repeated LeveledTemplateProto bonus_feat = 25;
 * @return {!Array<!proto.dma.LeveledTemplateProto>}
 */
proto.dma.LevelTemplateProto.prototype.getBonusFeatList = function() {
  return /** @type{!Array<!proto.dma.LeveledTemplateProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.LeveledTemplateProto, 25));
};


/**
 * @param {!Array<!proto.dma.LeveledTemplateProto>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setBonusFeatList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.dma.LeveledTemplateProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.LeveledTemplateProto}
 */
proto.dma.LevelTemplateProto.prototype.addBonusFeat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.dma.LeveledTemplateProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearBonusFeatList = function() {
  return this.setBonusFeatList([]);
};


/**
 * optional Ability spell_ability = 26;
 * @return {!proto.dma.Ability}
 */
proto.dma.LevelTemplateProto.prototype.getSpellAbility = function() {
  return /** @type {!proto.dma.Ability} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.dma.Ability} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setSpellAbility = function(value) {
  return jspb.Message.setProto3EnumField(this, 26, value);
};


/**
 * repeated PerLevel spells_per_day = 27;
 * @return {!Array<!proto.dma.LevelTemplateProto.PerLevel>}
 */
proto.dma.LevelTemplateProto.prototype.getSpellsPerDayList = function() {
  return /** @type{!Array<!proto.dma.LevelTemplateProto.PerLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.LevelTemplateProto.PerLevel, 27));
};


/**
 * @param {!Array<!proto.dma.LevelTemplateProto.PerLevel>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setSpellsPerDayList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 27, value);
};


/**
 * @param {!proto.dma.LevelTemplateProto.PerLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto.PerLevel}
 */
proto.dma.LevelTemplateProto.prototype.addSpellsPerDay = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 27, opt_value, proto.dma.LevelTemplateProto.PerLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearSpellsPerDayList = function() {
  return this.setSpellsPerDayList([]);
};


/**
 * repeated PerLevel spells_known = 28;
 * @return {!Array<!proto.dma.LevelTemplateProto.PerLevel>}
 */
proto.dma.LevelTemplateProto.prototype.getSpellsKnownList = function() {
  return /** @type{!Array<!proto.dma.LevelTemplateProto.PerLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.LevelTemplateProto.PerLevel, 28));
};


/**
 * @param {!Array<!proto.dma.LevelTemplateProto.PerLevel>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setSpellsKnownList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 28, value);
};


/**
 * @param {!proto.dma.LevelTemplateProto.PerLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto.PerLevel}
 */
proto.dma.LevelTemplateProto.prototype.addSpellsKnown = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 28, opt_value, proto.dma.LevelTemplateProto.PerLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearSpellsKnownList = function() {
  return this.setSpellsKnownList([]);
};


/**
 * repeated string automatic_feat = 29;
 * @return {!Array<string>}
 */
proto.dma.LevelTemplateProto.prototype.getAutomaticFeatList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 29));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setAutomaticFeatList = function(value) {
  return jspb.Message.setField(this, 29, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.addAutomaticFeat = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 29, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearAutomaticFeatList = function() {
  return this.setAutomaticFeatList([]);
};


/**
 * repeated Requirement requirement = 30;
 * @return {!Array<!proto.dma.LevelTemplateProto.Requirement>}
 */
proto.dma.LevelTemplateProto.prototype.getRequirementList = function() {
  return /** @type{!Array<!proto.dma.LevelTemplateProto.Requirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.LevelTemplateProto.Requirement, 30));
};


/**
 * @param {!Array<!proto.dma.LevelTemplateProto.Requirement>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setRequirementList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 30, value);
};


/**
 * @param {!proto.dma.LevelTemplateProto.Requirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.LevelTemplateProto.Requirement}
 */
proto.dma.LevelTemplateProto.prototype.addRequirement = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 30, opt_value, proto.dma.LevelTemplateProto.Requirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearRequirementList = function() {
  return this.setRequirementList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.QualityTemplateProto.repeatedFields_ = [5,6,10,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.QualityTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.QualityTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.QualityTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.QualityTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    speed: (f = msg.getSpeed()) && value_pb.SpeedProto.toObject(includeInstance, f),
    speedExpression: (f = msg.getSpeedExpression()) && value_pb.ExpressionProto.toObject(includeInstance, f),
    abilityModifierList: jspb.Message.toObjectList(msg.getAbilityModifierList(),
    proto.dma.QualityTemplateProto.AbilityModifier.toObject, includeInstance),
    immunityList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    reflexModifier: (f = msg.getReflexModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    willModifier: (f = msg.getWillModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    fortitudeModifier: (f = msg.getFortitudeModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    skillModifierList: jspb.Message.toObjectList(msg.getSkillModifierList(),
    proto.dma.QualityTemplateProto.KeyedModifier.toObject, includeInstance),
    attackModifier: (f = msg.getAttackModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    damageModifier: (f = msg.getDamageModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    bonusFeatList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    nameFormat: jspb.Message.getFieldWithDefault(msg, 14, ""),
    acModifier: (f = msg.getAcModifier()) && value_pb.ModifierProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.QualityTemplateProto}
 */
proto.dma.QualityTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.QualityTemplateProto;
  return proto.dma.QualityTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.QualityTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.QualityTemplateProto}
 */
proto.dma.QualityTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.QualityTemplateProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new value_pb.SpeedProto;
      reader.readMessage(value,value_pb.SpeedProto.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 4:
      var value = new value_pb.ExpressionProto;
      reader.readMessage(value,value_pb.ExpressionProto.deserializeBinaryFromReader);
      msg.setSpeedExpression(value);
      break;
    case 5:
      var value = new proto.dma.QualityTemplateProto.AbilityModifier;
      reader.readMessage(value,proto.dma.QualityTemplateProto.AbilityModifier.deserializeBinaryFromReader);
      msg.addAbilityModifier(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.dma.QualityTemplateProto.Immunity>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addImmunity(values[i]);
      }
      break;
    case 7:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setReflexModifier(value);
      break;
    case 8:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setWillModifier(value);
      break;
    case 9:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setFortitudeModifier(value);
      break;
    case 10:
      var value = new proto.dma.QualityTemplateProto.KeyedModifier;
      reader.readMessage(value,proto.dma.QualityTemplateProto.KeyedModifier.deserializeBinaryFromReader);
      msg.addSkillModifier(value);
      break;
    case 11:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setAttackModifier(value);
      break;
    case 12:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setDamageModifier(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addBonusFeat(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameFormat(value);
      break;
    case 15:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setAcModifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.QualityTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.QualityTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.QualityTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.QualityTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      value_pb.SpeedProto.serializeBinaryToWriter
    );
  }
  f = message.getSpeedExpression();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      value_pb.ExpressionProto.serializeBinaryToWriter
    );
  }
  f = message.getAbilityModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dma.QualityTemplateProto.AbilityModifier.serializeBinaryToWriter
    );
  }
  f = message.getImmunityList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
  f = message.getReflexModifier();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getWillModifier();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getFortitudeModifier();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getSkillModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.dma.QualityTemplateProto.KeyedModifier.serializeBinaryToWriter
    );
  }
  f = message.getAttackModifier();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getDamageModifier();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getBonusFeatList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getNameFormat();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getAcModifier();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.QualityTemplateProto.Type = {
  UNKNOWN: 0,
  EXTRAORDINARY: 1,
  SPELL_LIKE: 2,
  SUPERNATURAL: 3
};

/**
 * @enum {number}
 */
proto.dma.QualityTemplateProto.Immunity = {
  UNKNOWN_IMMUNITY: 0,
  SLEEP_SPELLS: 1,
  SLEEP_EFFECTS: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.QualityTemplateProto.AbilityModifier.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.QualityTemplateProto.AbilityModifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.QualityTemplateProto.AbilityModifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.QualityTemplateProto.AbilityModifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    ability: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modifier: (f = msg.getModifier()) && value_pb.ModifierProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.QualityTemplateProto.AbilityModifier}
 */
proto.dma.QualityTemplateProto.AbilityModifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.QualityTemplateProto.AbilityModifier;
  return proto.dma.QualityTemplateProto.AbilityModifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.QualityTemplateProto.AbilityModifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.QualityTemplateProto.AbilityModifier}
 */
proto.dma.QualityTemplateProto.AbilityModifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.Ability} */ (reader.readEnum());
      msg.setAbility(value);
      break;
    case 2:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setModifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.QualityTemplateProto.AbilityModifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.QualityTemplateProto.AbilityModifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.QualityTemplateProto.AbilityModifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.QualityTemplateProto.AbilityModifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAbility();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getModifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ability ability = 1;
 * @return {!proto.dma.Ability}
 */
proto.dma.QualityTemplateProto.AbilityModifier.prototype.getAbility = function() {
  return /** @type {!proto.dma.Ability} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.Ability} value
 * @return {!proto.dma.QualityTemplateProto.AbilityModifier} returns this
 */
proto.dma.QualityTemplateProto.AbilityModifier.prototype.setAbility = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ModifierProto modifier = 2;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.AbilityModifier.prototype.getModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 2));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto.AbilityModifier} returns this
*/
proto.dma.QualityTemplateProto.AbilityModifier.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto.AbilityModifier} returns this
 */
proto.dma.QualityTemplateProto.AbilityModifier.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.AbilityModifier.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.QualityTemplateProto.KeyedModifier.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.QualityTemplateProto.KeyedModifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.QualityTemplateProto.KeyedModifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.QualityTemplateProto.KeyedModifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modifier: (f = msg.getModifier()) && value_pb.ModifierProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.QualityTemplateProto.KeyedModifier}
 */
proto.dma.QualityTemplateProto.KeyedModifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.QualityTemplateProto.KeyedModifier;
  return proto.dma.QualityTemplateProto.KeyedModifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.QualityTemplateProto.KeyedModifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.QualityTemplateProto.KeyedModifier}
 */
proto.dma.QualityTemplateProto.KeyedModifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setModifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.QualityTemplateProto.KeyedModifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.QualityTemplateProto.KeyedModifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.QualityTemplateProto.KeyedModifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.QualityTemplateProto.KeyedModifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.dma.QualityTemplateProto.KeyedModifier.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.QualityTemplateProto.KeyedModifier} returns this
 */
proto.dma.QualityTemplateProto.KeyedModifier.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ModifierProto modifier = 2;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.KeyedModifier.prototype.getModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 2));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto.KeyedModifier} returns this
*/
proto.dma.QualityTemplateProto.KeyedModifier.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto.KeyedModifier} returns this
 */
proto.dma.QualityTemplateProto.KeyedModifier.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.KeyedModifier.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.QualityTemplateProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Type type = 2;
 * @return {!proto.dma.QualityTemplateProto.Type}
 */
proto.dma.QualityTemplateProto.prototype.getType = function() {
  return /** @type {!proto.dma.QualityTemplateProto.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.QualityTemplateProto.Type} value
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SpeedProto speed = 3;
 * @return {?proto.dma.SpeedProto}
 */
proto.dma.QualityTemplateProto.prototype.getSpeed = function() {
  return /** @type{?proto.dma.SpeedProto} */ (
    jspb.Message.getWrapperField(this, value_pb.SpeedProto, 3));
};


/**
 * @param {?proto.dma.SpeedProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ExpressionProto speed_expression = 4;
 * @return {?proto.dma.ExpressionProto}
 */
proto.dma.QualityTemplateProto.prototype.getSpeedExpression = function() {
  return /** @type{?proto.dma.ExpressionProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ExpressionProto, 4));
};


/**
 * @param {?proto.dma.ExpressionProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setSpeedExpression = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearSpeedExpression = function() {
  return this.setSpeedExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasSpeedExpression = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated AbilityModifier ability_modifier = 5;
 * @return {!Array<!proto.dma.QualityTemplateProto.AbilityModifier>}
 */
proto.dma.QualityTemplateProto.prototype.getAbilityModifierList = function() {
  return /** @type{!Array<!proto.dma.QualityTemplateProto.AbilityModifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.QualityTemplateProto.AbilityModifier, 5));
};


/**
 * @param {!Array<!proto.dma.QualityTemplateProto.AbilityModifier>} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setAbilityModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dma.QualityTemplateProto.AbilityModifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.QualityTemplateProto.AbilityModifier}
 */
proto.dma.QualityTemplateProto.prototype.addAbilityModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dma.QualityTemplateProto.AbilityModifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearAbilityModifierList = function() {
  return this.setAbilityModifierList([]);
};


/**
 * repeated Immunity immunity = 6;
 * @return {!Array<!proto.dma.QualityTemplateProto.Immunity>}
 */
proto.dma.QualityTemplateProto.prototype.getImmunityList = function() {
  return /** @type {!Array<!proto.dma.QualityTemplateProto.Immunity>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.dma.QualityTemplateProto.Immunity>} value
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.setImmunityList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.dma.QualityTemplateProto.Immunity} value
 * @param {number=} opt_index
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.addImmunity = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearImmunityList = function() {
  return this.setImmunityList([]);
};


/**
 * optional ModifierProto reflex_modifier = 7;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.prototype.getReflexModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 7));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setReflexModifier = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearReflexModifier = function() {
  return this.setReflexModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasReflexModifier = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ModifierProto will_modifier = 8;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.prototype.getWillModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 8));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setWillModifier = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearWillModifier = function() {
  return this.setWillModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasWillModifier = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ModifierProto fortitude_modifier = 9;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.prototype.getFortitudeModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 9));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setFortitudeModifier = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearFortitudeModifier = function() {
  return this.setFortitudeModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasFortitudeModifier = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated KeyedModifier skill_modifier = 10;
 * @return {!Array<!proto.dma.QualityTemplateProto.KeyedModifier>}
 */
proto.dma.QualityTemplateProto.prototype.getSkillModifierList = function() {
  return /** @type{!Array<!proto.dma.QualityTemplateProto.KeyedModifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.QualityTemplateProto.KeyedModifier, 10));
};


/**
 * @param {!Array<!proto.dma.QualityTemplateProto.KeyedModifier>} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setSkillModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.dma.QualityTemplateProto.KeyedModifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.QualityTemplateProto.KeyedModifier}
 */
proto.dma.QualityTemplateProto.prototype.addSkillModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.dma.QualityTemplateProto.KeyedModifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearSkillModifierList = function() {
  return this.setSkillModifierList([]);
};


/**
 * optional ModifierProto attack_modifier = 11;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.prototype.getAttackModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 11));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setAttackModifier = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearAttackModifier = function() {
  return this.setAttackModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasAttackModifier = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ModifierProto damage_modifier = 12;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.prototype.getDamageModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 12));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setDamageModifier = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearDamageModifier = function() {
  return this.setDamageModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasDamageModifier = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated string bonus_feat = 13;
 * @return {!Array<string>}
 */
proto.dma.QualityTemplateProto.prototype.getBonusFeatList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.setBonusFeatList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.addBonusFeat = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearBonusFeatList = function() {
  return this.setBonusFeatList([]);
};


/**
 * optional string name_format = 14;
 * @return {string}
 */
proto.dma.QualityTemplateProto.prototype.getNameFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.setNameFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional ModifierProto ac_modifier = 15;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.QualityTemplateProto.prototype.getAcModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 15));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setAcModifier = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearAcModifier = function() {
  return this.setAcModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasAcModifier = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ParametrizedTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ParametrizedTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ParametrizedTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ParametrizedTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parameters: (f = msg.getParameters()) && value_pb.ParametersProto.toObject(includeInstance, f),
    perDay: jspb.Message.getFieldWithDefault(msg, 4, 0),
    condition: (f = msg.getCondition()) && value_pb.ConditionalProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ParametrizedTemplateProto}
 */
proto.dma.ParametrizedTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ParametrizedTemplateProto;
  return proto.dma.ParametrizedTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ParametrizedTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ParametrizedTemplateProto}
 */
proto.dma.ParametrizedTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = new value_pb.ParametersProto;
      reader.readMessage(value,value_pb.ParametersProto.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPerDay(value);
      break;
    case 5:
      var value = new value_pb.ConditionalProto;
      reader.readMessage(value,value_pb.ConditionalProto.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ParametrizedTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ParametrizedTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ParametrizedTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ParametrizedTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      value_pb.ParametersProto.serializeBinaryToWriter
    );
  }
  f = message.getPerDay();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.ConditionalProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.ParametrizedTemplateProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ParametrizedTemplateProto} returns this
 */
proto.dma.ParametrizedTemplateProto.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.dma.ParametrizedTemplateProto.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ParametrizedTemplateProto} returns this
 */
proto.dma.ParametrizedTemplateProto.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ParametersProto parameters = 3;
 * @return {?proto.dma.ParametersProto}
 */
proto.dma.ParametrizedTemplateProto.prototype.getParameters = function() {
  return /** @type{?proto.dma.ParametersProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ParametersProto, 3));
};


/**
 * @param {?proto.dma.ParametersProto|undefined} value
 * @return {!proto.dma.ParametrizedTemplateProto} returns this
*/
proto.dma.ParametrizedTemplateProto.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ParametrizedTemplateProto} returns this
 */
proto.dma.ParametrizedTemplateProto.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ParametrizedTemplateProto.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 per_day = 4;
 * @return {number}
 */
proto.dma.ParametrizedTemplateProto.prototype.getPerDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ParametrizedTemplateProto} returns this
 */
proto.dma.ParametrizedTemplateProto.prototype.setPerDay = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional ConditionalProto condition = 5;
 * @return {?proto.dma.ConditionalProto}
 */
proto.dma.ParametrizedTemplateProto.prototype.getCondition = function() {
  return /** @type{?proto.dma.ConditionalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ConditionalProto, 5));
};


/**
 * @param {?proto.dma.ConditionalProto|undefined} value
 * @return {!proto.dma.ParametrizedTemplateProto} returns this
*/
proto.dma.ParametrizedTemplateProto.prototype.setCondition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ParametrizedTemplateProto} returns this
 */
proto.dma.ParametrizedTemplateProto.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ParametrizedTemplateProto.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.LeveledTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.LeveledTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.LeveledTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LeveledTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0),
    template: (f = msg.getTemplate()) && proto.dma.ParametrizedTemplateProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.LeveledTemplateProto}
 */
proto.dma.LeveledTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.LeveledTemplateProto;
  return proto.dma.LeveledTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.LeveledTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.LeveledTemplateProto}
 */
proto.dma.LeveledTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 2:
      var value = new proto.dma.ParametrizedTemplateProto;
      reader.readMessage(value,proto.dma.ParametrizedTemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.LeveledTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.LeveledTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.LeveledTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LeveledTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dma.ParametrizedTemplateProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 level = 1;
 * @return {number}
 */
proto.dma.LeveledTemplateProto.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.LeveledTemplateProto} returns this
 */
proto.dma.LeveledTemplateProto.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ParametrizedTemplateProto template = 2;
 * @return {?proto.dma.ParametrizedTemplateProto}
 */
proto.dma.LeveledTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.ParametrizedTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.ParametrizedTemplateProto, 2));
};


/**
 * @param {?proto.dma.ParametrizedTemplateProto|undefined} value
 * @return {!proto.dma.LeveledTemplateProto} returns this
*/
proto.dma.LeveledTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.LeveledTemplateProto} returns this
 */
proto.dma.LeveledTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.LeveledTemplateProto.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.WeaponProto.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.WeaponProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.WeaponProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.WeaponProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WeaponProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    proficiency: jspb.Message.getFieldWithDefault(msg, 1, 0),
    style: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    damage: (f = msg.getDamage()) && value_pb.DamageProto.toObject(includeInstance, f),
    damageTwoHanded: (f = msg.getDamageTwoHanded()) && value_pb.DamageProto.toObject(includeInstance, f),
    rangeFeet: jspb.Message.getFieldWithDefault(msg, 6, 0),
    rangeMaxFeet: jspb.Message.getFieldWithDefault(msg, 7, 0),
    propertiesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.WeaponProto}
 */
proto.dma.WeaponProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.WeaponProto;
  return proto.dma.WeaponProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.WeaponProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.WeaponProto}
 */
proto.dma.WeaponProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.WeaponProto.Proficiency} */ (reader.readEnum());
      msg.setProficiency(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.WeaponProto.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 3:
      var value = /** @type {!proto.dma.WeaponProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.setDamage(value);
      break;
    case 5:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.setDamageTwoHanded(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRangeFeet(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRangeMaxFeet(value);
      break;
    case 8:
      var values = /** @type {!Array<!proto.dma.WeaponProto.Property>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProperties(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.WeaponProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.WeaponProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.WeaponProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WeaponProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProficiency();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDamage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      value_pb.DamageProto.serializeBinaryToWriter
    );
  }
  f = message.getDamageTwoHanded();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.DamageProto.serializeBinaryToWriter
    );
  }
  f = message.getRangeFeet();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getRangeMaxFeet();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.WeaponProto.Proficiency = {
  UNKNOWN_PROFICIENCY: 0,
  SIMPLE: 1,
  MARTIAL: 2
};

/**
 * @enum {number}
 */
proto.dma.WeaponProto.Style = {
  UNKNONW_STYLE: 0,
  MELEE: 1,
  RANGED: 2
};

/**
 * @enum {number}
 */
proto.dma.WeaponProto.Type = {
  UNKNOWN_TYPE: 0,
  SWORD: 1,
  PICK: 2,
  STAFF: 3,
  BOW: 4,
  POLEARM: 5,
  WHIP: 6,
  CROSSBOW: 7,
  CLUB: 8,
  SPEAR: 9,
  AXE: 10,
  FIREARM: 11,
  SLING: 12,
  DART: 13,
  NET: 14
};

/**
 * @enum {number}
 */
proto.dma.WeaponProto.Property = {
  UNKNOWN_PROPERTY: 0,
  AMMUNITION: 1,
  FINESSE: 2,
  HEAVY: 3,
  LIGHT: 4,
  LOADING: 5,
  RANGE: 6,
  REACH: 7,
  SPECIAL: 8,
  THROWN: 9,
  TWO_HANDED: 10,
  VERSATILE: 11
};

/**
 * optional Proficiency proficiency = 1;
 * @return {!proto.dma.WeaponProto.Proficiency}
 */
proto.dma.WeaponProto.prototype.getProficiency = function() {
  return /** @type {!proto.dma.WeaponProto.Proficiency} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.WeaponProto.Proficiency} value
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.setProficiency = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Style style = 2;
 * @return {!proto.dma.WeaponProto.Style}
 */
proto.dma.WeaponProto.prototype.getStyle = function() {
  return /** @type {!proto.dma.WeaponProto.Style} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.WeaponProto.Style} value
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Type type = 3;
 * @return {!proto.dma.WeaponProto.Type}
 */
proto.dma.WeaponProto.prototype.getType = function() {
  return /** @type {!proto.dma.WeaponProto.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dma.WeaponProto.Type} value
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional DamageProto damage = 4;
 * @return {?proto.dma.DamageProto}
 */
proto.dma.WeaponProto.prototype.getDamage = function() {
  return /** @type{?proto.dma.DamageProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DamageProto, 4));
};


/**
 * @param {?proto.dma.DamageProto|undefined} value
 * @return {!proto.dma.WeaponProto} returns this
*/
proto.dma.WeaponProto.prototype.setDamage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.clearDamage = function() {
  return this.setDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponProto.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DamageProto damage_two_handed = 5;
 * @return {?proto.dma.DamageProto}
 */
proto.dma.WeaponProto.prototype.getDamageTwoHanded = function() {
  return /** @type{?proto.dma.DamageProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DamageProto, 5));
};


/**
 * @param {?proto.dma.DamageProto|undefined} value
 * @return {!proto.dma.WeaponProto} returns this
*/
proto.dma.WeaponProto.prototype.setDamageTwoHanded = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.clearDamageTwoHanded = function() {
  return this.setDamageTwoHanded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponProto.prototype.hasDamageTwoHanded = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 range_feet = 6;
 * @return {number}
 */
proto.dma.WeaponProto.prototype.getRangeFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.setRangeFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 range_max_feet = 7;
 * @return {number}
 */
proto.dma.WeaponProto.prototype.getRangeMaxFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.setRangeMaxFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated Property properties = 8;
 * @return {!Array<!proto.dma.WeaponProto.Property>}
 */
proto.dma.WeaponProto.prototype.getPropertiesList = function() {
  return /** @type {!Array<!proto.dma.WeaponProto.Property>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<!proto.dma.WeaponProto.Property>} value
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.setPropertiesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!proto.dma.WeaponProto.Property} value
 * @param {number=} opt_index
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.addProperties = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.WeaponProto} returns this
 */
proto.dma.WeaponProto.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MagicProto.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MagicProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MagicProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MagicProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto.dma.MagicProto.Modifier.toObject, includeInstance),
    attackOptionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MagicProto}
 */
proto.dma.MagicProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MagicProto;
  return proto.dma.MagicProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MagicProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MagicProto}
 */
proto.dma.MagicProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.MagicProto.Modifier;
      reader.readMessage(value,proto.dma.MagicProto.Modifier.deserializeBinaryFromReader);
      msg.addModifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttackOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MagicProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MagicProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MagicProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.MagicProto.Modifier.serializeBinaryToWriter
    );
  }
  f = message.getAttackOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MagicProto.Type = {
  UNKNOWN: 0,
  ARMOR: 1,
  SKILL: 2,
  ABILITY: 3,
  SAVE: 4,
  DAMAGE: 5,
  ATTACK: 6
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MagicProto.Modifier.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MagicProto.Modifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MagicProto.Modifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicProto.Modifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MagicProto.Modifier}
 */
proto.dma.MagicProto.Modifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MagicProto.Modifier;
  return proto.dma.MagicProto.Modifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MagicProto.Modifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MagicProto.Modifier}
 */
proto.dma.MagicProto.Modifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.MagicProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MagicProto.Modifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MagicProto.Modifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MagicProto.Modifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicProto.Modifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional Type type = 1;
 * @return {!proto.dma.MagicProto.Type}
 */
proto.dma.MagicProto.Modifier.prototype.getType = function() {
  return /** @type {!proto.dma.MagicProto.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.MagicProto.Type} value
 * @return {!proto.dma.MagicProto.Modifier} returns this
 */
proto.dma.MagicProto.Modifier.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dma.MagicProto.Modifier.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MagicProto.Modifier} returns this
 */
proto.dma.MagicProto.Modifier.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 value = 3;
 * @return {number}
 */
proto.dma.MagicProto.Modifier.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MagicProto.Modifier} returns this
 */
proto.dma.MagicProto.Modifier.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Modifier modifier = 1;
 * @return {!Array<!proto.dma.MagicProto.Modifier>}
 */
proto.dma.MagicProto.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.dma.MagicProto.Modifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MagicProto.Modifier, 1));
};


/**
 * @param {!Array<!proto.dma.MagicProto.Modifier>} value
 * @return {!proto.dma.MagicProto} returns this
*/
proto.dma.MagicProto.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.MagicProto.Modifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MagicProto.Modifier}
 */
proto.dma.MagicProto.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.MagicProto.Modifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MagicProto} returns this
 */
proto.dma.MagicProto.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * repeated string attack_options = 2;
 * @return {!Array<string>}
 */
proto.dma.MagicProto.prototype.getAttackOptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MagicProto} returns this
 */
proto.dma.MagicProto.prototype.setAttackOptionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MagicProto} returns this
 */
proto.dma.MagicProto.prototype.addAttackOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MagicProto} returns this
 */
proto.dma.MagicProto.prototype.clearAttackOptionsList = function() {
  return this.setAttackOptionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.WearableTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.WearableTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.WearableTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WearableTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    wear: (f = msg.getWear()) && value_pb.RandomDurationProto.toObject(includeInstance, f),
    wearHastily: (f = msg.getWearHastily()) && value_pb.RandomDurationProto.toObject(includeInstance, f),
    remove: (f = msg.getRemove()) && value_pb.RandomDurationProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.WearableTemplateProto}
 */
proto.dma.WearableTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.WearableTemplateProto;
  return proto.dma.WearableTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.WearableTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.WearableTemplateProto}
 */
proto.dma.WearableTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.WearableTemplateProto.Slot} */ (reader.readEnum());
      msg.setSlot(value);
      break;
    case 2:
      var value = new value_pb.RandomDurationProto;
      reader.readMessage(value,value_pb.RandomDurationProto.deserializeBinaryFromReader);
      msg.setWear(value);
      break;
    case 3:
      var value = new value_pb.RandomDurationProto;
      reader.readMessage(value,value_pb.RandomDurationProto.deserializeBinaryFromReader);
      msg.setWearHastily(value);
      break;
    case 4:
      var value = new value_pb.RandomDurationProto;
      reader.readMessage(value,value_pb.RandomDurationProto.deserializeBinaryFromReader);
      msg.setRemove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.WearableTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.WearableTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.WearableTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WearableTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getWear();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.RandomDurationProto.serializeBinaryToWriter
    );
  }
  f = message.getWearHastily();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      value_pb.RandomDurationProto.serializeBinaryToWriter
    );
  }
  f = message.getRemove();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      value_pb.RandomDurationProto.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.WearableTemplateProto.Slot = {
  UNKNOWN: 0,
  HEAD: 1,
  NECK: 2,
  TORSO: 3,
  BODY: 4,
  WAIST: 5,
  SHOULDERS: 6,
  HANDS: 7,
  HAND: 8,
  FINGER: 9,
  WRISTS: 10,
  FEET: 11,
  EYES: 12
};

/**
 * optional Slot slot = 1;
 * @return {!proto.dma.WearableTemplateProto.Slot}
 */
proto.dma.WearableTemplateProto.prototype.getSlot = function() {
  return /** @type {!proto.dma.WearableTemplateProto.Slot} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.WearableTemplateProto.Slot} value
 * @return {!proto.dma.WearableTemplateProto} returns this
 */
proto.dma.WearableTemplateProto.prototype.setSlot = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RandomDurationProto wear = 2;
 * @return {?proto.dma.RandomDurationProto}
 */
proto.dma.WearableTemplateProto.prototype.getWear = function() {
  return /** @type{?proto.dma.RandomDurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RandomDurationProto, 2));
};


/**
 * @param {?proto.dma.RandomDurationProto|undefined} value
 * @return {!proto.dma.WearableTemplateProto} returns this
*/
proto.dma.WearableTemplateProto.prototype.setWear = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WearableTemplateProto} returns this
 */
proto.dma.WearableTemplateProto.prototype.clearWear = function() {
  return this.setWear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WearableTemplateProto.prototype.hasWear = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RandomDurationProto wear_hastily = 3;
 * @return {?proto.dma.RandomDurationProto}
 */
proto.dma.WearableTemplateProto.prototype.getWearHastily = function() {
  return /** @type{?proto.dma.RandomDurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RandomDurationProto, 3));
};


/**
 * @param {?proto.dma.RandomDurationProto|undefined} value
 * @return {!proto.dma.WearableTemplateProto} returns this
*/
proto.dma.WearableTemplateProto.prototype.setWearHastily = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WearableTemplateProto} returns this
 */
proto.dma.WearableTemplateProto.prototype.clearWearHastily = function() {
  return this.setWearHastily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WearableTemplateProto.prototype.hasWearHastily = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RandomDurationProto remove = 4;
 * @return {?proto.dma.RandomDurationProto}
 */
proto.dma.WearableTemplateProto.prototype.getRemove = function() {
  return /** @type{?proto.dma.RandomDurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RandomDurationProto, 4));
};


/**
 * @param {?proto.dma.RandomDurationProto|undefined} value
 * @return {!proto.dma.WearableTemplateProto} returns this
*/
proto.dma.WearableTemplateProto.prototype.setRemove = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WearableTemplateProto} returns this
 */
proto.dma.WearableTemplateProto.prototype.clearRemove = function() {
  return this.setRemove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WearableTemplateProto.prototype.hasRemove = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.IncompleteTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.IncompleteTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.IncompleteTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.IncompleteTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.IncompleteTemplateProto}
 */
proto.dma.IncompleteTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.IncompleteTemplateProto;
  return proto.dma.IncompleteTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.IncompleteTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.IncompleteTemplateProto}
 */
proto.dma.IncompleteTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.IncompleteTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.IncompleteTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.IncompleteTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.IncompleteTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.dma.IncompleteTemplateProto.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.IncompleteTemplateProto} returns this
 */
proto.dma.IncompleteTemplateProto.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.CountedTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.CountedTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.CountedTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CountedTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    unit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.CountedTemplateProto}
 */
proto.dma.CountedTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.CountedTemplateProto;
  return proto.dma.CountedTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.CountedTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.CountedTemplateProto}
 */
proto.dma.CountedTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.CountedTemplateProto.Unit} */ (reader.readEnum());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.CountedTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.CountedTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.CountedTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CountedTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.CountedTemplateProto.Unit = {
  UNKNOWN: 0,
  DAY: 1,
  PIECE: 2,
  SHEET: 3,
  USE: 4,
  PAGE: 5,
  CHARGE: 6,
  APPLICATION: 7,
  DAMAGE: 8
};

/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.dma.CountedTemplateProto.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.CountedTemplateProto} returns this
 */
proto.dma.CountedTemplateProto.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Unit unit = 2;
 * @return {!proto.dma.CountedTemplateProto.Unit}
 */
proto.dma.CountedTemplateProto.prototype.getUnit = function() {
  return /** @type {!proto.dma.CountedTemplateProto.Unit} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.CountedTemplateProto.Unit} value
 * @return {!proto.dma.CountedTemplateProto} returns this
 */
proto.dma.CountedTemplateProto.prototype.setUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MultipleTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MultipleTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MultipleTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MultipleTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    unit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MultipleTemplateProto}
 */
proto.dma.MultipleTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MultipleTemplateProto;
  return proto.dma.MultipleTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MultipleTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MultipleTemplateProto}
 */
proto.dma.MultipleTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.CountedTemplateProto.Unit} */ (reader.readEnum());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MultipleTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MultipleTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MultipleTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MultipleTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.dma.MultipleTemplateProto.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MultipleTemplateProto} returns this
 */
proto.dma.MultipleTemplateProto.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CountedTemplateProto.Unit unit = 2;
 * @return {!proto.dma.CountedTemplateProto.Unit}
 */
proto.dma.MultipleTemplateProto.prototype.getUnit = function() {
  return /** @type {!proto.dma.CountedTemplateProto.Unit} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.CountedTemplateProto.Unit} value
 * @return {!proto.dma.MultipleTemplateProto} returns this
 */
proto.dma.MultipleTemplateProto.prototype.setUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MultiuseTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MultiuseTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MultiuseTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MultiuseTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MultiuseTemplateProto}
 */
proto.dma.MultiuseTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MultiuseTemplateProto;
  return proto.dma.MultiuseTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MultiuseTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MultiuseTemplateProto}
 */
proto.dma.MultiuseTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MultiuseTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MultiuseTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MultiuseTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MultiuseTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.dma.MultiuseTemplateProto.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MultiuseTemplateProto} returns this
 */
proto.dma.MultiuseTemplateProto.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.TimedTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.TimedTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.TimedTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.TimedTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = msg.getDuration()) && value_pb.RandomDurationProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.TimedTemplateProto}
 */
proto.dma.TimedTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.TimedTemplateProto;
  return proto.dma.TimedTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.TimedTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.TimedTemplateProto}
 */
proto.dma.TimedTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.RandomDurationProto;
      reader.readMessage(value,value_pb.RandomDurationProto.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.TimedTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.TimedTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.TimedTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.TimedTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.RandomDurationProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional RandomDurationProto duration = 1;
 * @return {?proto.dma.RandomDurationProto}
 */
proto.dma.TimedTemplateProto.prototype.getDuration = function() {
  return /** @type{?proto.dma.RandomDurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RandomDurationProto, 1));
};


/**
 * @param {?proto.dma.RandomDurationProto|undefined} value
 * @return {!proto.dma.TimedTemplateProto} returns this
*/
proto.dma.TimedTemplateProto.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.TimedTemplateProto} returns this
 */
proto.dma.TimedTemplateProto.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.TimedTemplateProto.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.CommodityTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.CommodityTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.CommodityTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CommodityTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    area: (f = msg.getArea()) && value_pb.AreaProto.toObject(includeInstance, f),
    length: (f = msg.getLength()) && value_pb.DistanceProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.CommodityTemplateProto}
 */
proto.dma.CommodityTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.CommodityTemplateProto;
  return proto.dma.CommodityTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.CommodityTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.CommodityTemplateProto}
 */
proto.dma.CommodityTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.AreaProto;
      reader.readMessage(value,value_pb.AreaProto.deserializeBinaryFromReader);
      msg.setArea(value);
      break;
    case 2:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.CommodityTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.CommodityTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.CommodityTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CommodityTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArea();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.AreaProto.serializeBinaryToWriter
    );
  }
  f = message.getLength();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional AreaProto area = 1;
 * @return {?proto.dma.AreaProto}
 */
proto.dma.CommodityTemplateProto.prototype.getArea = function() {
  return /** @type{?proto.dma.AreaProto} */ (
    jspb.Message.getWrapperField(this, value_pb.AreaProto, 1));
};


/**
 * @param {?proto.dma.AreaProto|undefined} value
 * @return {!proto.dma.CommodityTemplateProto} returns this
*/
proto.dma.CommodityTemplateProto.prototype.setArea = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.CommodityTemplateProto} returns this
 */
proto.dma.CommodityTemplateProto.prototype.clearArea = function() {
  return this.setArea(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.CommodityTemplateProto.prototype.hasArea = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DistanceProto length = 2;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.CommodityTemplateProto.prototype.getLength = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 2));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.CommodityTemplateProto} returns this
*/
proto.dma.CommodityTemplateProto.prototype.setLength = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.CommodityTemplateProto} returns this
 */
proto.dma.CommodityTemplateProto.prototype.clearLength = function() {
  return this.setLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.CommodityTemplateProto.prototype.hasLength = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ContainerTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ContainerTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ContainerTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ContainerTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    capacity: (f = msg.getCapacity()) && value_pb.VolumeProto.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fixedWeight: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ContainerTemplateProto}
 */
proto.dma.ContainerTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ContainerTemplateProto;
  return proto.dma.ContainerTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ContainerTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ContainerTemplateProto}
 */
proto.dma.ContainerTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.VolumeProto;
      reader.readMessage(value,value_pb.VolumeProto.deserializeBinaryFromReader);
      msg.setCapacity(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.ContainerTemplateProto.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFixedWeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ContainerTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ContainerTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ContainerTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ContainerTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCapacity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.VolumeProto.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFixedWeight();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ContainerTemplateProto.State = {
  UNKNOWN: 0,
  SOLID: 1,
  GRANULAR: 2,
  LIQUID: 3,
  GASEOUS: 4
};

/**
 * optional VolumeProto capacity = 1;
 * @return {?proto.dma.VolumeProto}
 */
proto.dma.ContainerTemplateProto.prototype.getCapacity = function() {
  return /** @type{?proto.dma.VolumeProto} */ (
    jspb.Message.getWrapperField(this, value_pb.VolumeProto, 1));
};


/**
 * @param {?proto.dma.VolumeProto|undefined} value
 * @return {!proto.dma.ContainerTemplateProto} returns this
*/
proto.dma.ContainerTemplateProto.prototype.setCapacity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ContainerTemplateProto} returns this
 */
proto.dma.ContainerTemplateProto.prototype.clearCapacity = function() {
  return this.setCapacity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ContainerTemplateProto.prototype.hasCapacity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional State state = 2;
 * @return {!proto.dma.ContainerTemplateProto.State}
 */
proto.dma.ContainerTemplateProto.prototype.getState = function() {
  return /** @type {!proto.dma.ContainerTemplateProto.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.ContainerTemplateProto.State} value
 * @return {!proto.dma.ContainerTemplateProto} returns this
 */
proto.dma.ContainerTemplateProto.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool fixed_weight = 3;
 * @return {boolean}
 */
proto.dma.ContainerTemplateProto.prototype.getFixedWeight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.ContainerTemplateProto} returns this
 */
proto.dma.ContainerTemplateProto.prototype.setFixedWeight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ArmorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ArmorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ArmorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ArmorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ac: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxDexterity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minStrength: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stealthDisadvantage: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ArmorProto}
 */
proto.dma.ArmorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ArmorProto;
  return proto.dma.ArmorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ArmorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ArmorProto}
 */
proto.dma.ArmorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ArmorProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAc(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxDexterity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinStrength(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStealthDisadvantage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ArmorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ArmorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ArmorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ArmorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAc();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMaxDexterity();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMinStrength();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStealthDisadvantage();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ArmorProto.Type = {
  UNKNOWN: 0,
  LIGHT: 1,
  MEDIUM: 2,
  HEAVY: 3,
  SHIELD: 4,
  MAGIC: 5
};

/**
 * optional Type type = 1;
 * @return {!proto.dma.ArmorProto.Type}
 */
proto.dma.ArmorProto.prototype.getType = function() {
  return /** @type {!proto.dma.ArmorProto.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ArmorProto.Type} value
 * @return {!proto.dma.ArmorProto} returns this
 */
proto.dma.ArmorProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 ac = 2;
 * @return {number}
 */
proto.dma.ArmorProto.prototype.getAc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorProto} returns this
 */
proto.dma.ArmorProto.prototype.setAc = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 max_dexterity = 3;
 * @return {number}
 */
proto.dma.ArmorProto.prototype.getMaxDexterity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorProto} returns this
 */
proto.dma.ArmorProto.prototype.setMaxDexterity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 min_strength = 4;
 * @return {number}
 */
proto.dma.ArmorProto.prototype.getMinStrength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorProto} returns this
 */
proto.dma.ArmorProto.prototype.setMinStrength = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool stealth_disadvantage = 5;
 * @return {boolean}
 */
proto.dma.ArmorProto.prototype.getStealthDisadvantage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.ArmorProto} returns this
 */
proto.dma.ArmorProto.prototype.setStealthDisadvantage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.LightTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.LightTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.LightTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LightTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    bright: (f = msg.getBright()) && proto.dma.LightTemplateProto.Light.toObject(includeInstance, f),
    shadowy: (f = msg.getShadowy()) && proto.dma.LightTemplateProto.Light.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.LightTemplateProto}
 */
proto.dma.LightTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.LightTemplateProto;
  return proto.dma.LightTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.LightTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.LightTemplateProto}
 */
proto.dma.LightTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.LightTemplateProto.Light;
      reader.readMessage(value,proto.dma.LightTemplateProto.Light.deserializeBinaryFromReader);
      msg.setBright(value);
      break;
    case 2:
      var value = new proto.dma.LightTemplateProto.Light;
      reader.readMessage(value,proto.dma.LightTemplateProto.Light.deserializeBinaryFromReader);
      msg.setShadowy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.LightTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.LightTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.LightTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LightTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBright();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.LightTemplateProto.Light.serializeBinaryToWriter
    );
  }
  f = message.getShadowy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dma.LightTemplateProto.Light.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.LightTemplateProto.Light.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.LightTemplateProto.Light.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.LightTemplateProto.Light} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LightTemplateProto.Light.toObject = function(includeInstance, msg) {
  var f, obj = {
    distance: (f = msg.getDistance()) && value_pb.DistanceProto.toObject(includeInstance, f),
    shape: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.LightTemplateProto.Light}
 */
proto.dma.LightTemplateProto.Light.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.LightTemplateProto.Light;
  return proto.dma.LightTemplateProto.Light.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.LightTemplateProto.Light} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.LightTemplateProto.Light}
 */
proto.dma.LightTemplateProto.Light.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setDistance(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.LightTemplateProto.Light.Shape} */ (reader.readEnum());
      msg.setShape(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.LightTemplateProto.Light.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.LightTemplateProto.Light.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.LightTemplateProto.Light} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.LightTemplateProto.Light.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getShape();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.LightTemplateProto.Light.Shape = {
  UNKNOWN: 0,
  CONE: 1,
  CYLINDER: 2,
  LINE: 3,
  SPHERE: 4
};

/**
 * optional DistanceProto distance = 1;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.LightTemplateProto.Light.prototype.getDistance = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 1));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.LightTemplateProto.Light} returns this
*/
proto.dma.LightTemplateProto.Light.prototype.setDistance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.LightTemplateProto.Light} returns this
 */
proto.dma.LightTemplateProto.Light.prototype.clearDistance = function() {
  return this.setDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.LightTemplateProto.Light.prototype.hasDistance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Shape shape = 2;
 * @return {!proto.dma.LightTemplateProto.Light.Shape}
 */
proto.dma.LightTemplateProto.Light.prototype.getShape = function() {
  return /** @type {!proto.dma.LightTemplateProto.Light.Shape} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.LightTemplateProto.Light.Shape} value
 * @return {!proto.dma.LightTemplateProto.Light} returns this
 */
proto.dma.LightTemplateProto.Light.prototype.setShape = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Light bright = 1;
 * @return {?proto.dma.LightTemplateProto.Light}
 */
proto.dma.LightTemplateProto.prototype.getBright = function() {
  return /** @type{?proto.dma.LightTemplateProto.Light} */ (
    jspb.Message.getWrapperField(this, proto.dma.LightTemplateProto.Light, 1));
};


/**
 * @param {?proto.dma.LightTemplateProto.Light|undefined} value
 * @return {!proto.dma.LightTemplateProto} returns this
*/
proto.dma.LightTemplateProto.prototype.setBright = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.LightTemplateProto} returns this
 */
proto.dma.LightTemplateProto.prototype.clearBright = function() {
  return this.setBright(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.LightTemplateProto.prototype.hasBright = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Light shadowy = 2;
 * @return {?proto.dma.LightTemplateProto.Light}
 */
proto.dma.LightTemplateProto.prototype.getShadowy = function() {
  return /** @type{?proto.dma.LightTemplateProto.Light} */ (
    jspb.Message.getWrapperField(this, proto.dma.LightTemplateProto.Light, 2));
};


/**
 * @param {?proto.dma.LightTemplateProto.Light|undefined} value
 * @return {!proto.dma.LightTemplateProto} returns this
*/
proto.dma.LightTemplateProto.prototype.setShadowy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.LightTemplateProto} returns this
 */
proto.dma.LightTemplateProto.prototype.clearShadowy = function() {
  return this.setShadowy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.LightTemplateProto.prototype.hasShadowy = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.CompositeTemplateProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.CompositeTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.CompositeTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.CompositeTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CompositeTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    containsList: jspb.Message.toObjectList(msg.getContainsList(),
    proto.dma.CompositeTemplateProto.Or.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.CompositeTemplateProto}
 */
proto.dma.CompositeTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.CompositeTemplateProto;
  return proto.dma.CompositeTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.CompositeTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.CompositeTemplateProto}
 */
proto.dma.CompositeTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CompositeTemplateProto.Or;
      reader.readMessage(value,proto.dma.CompositeTemplateProto.Or.deserializeBinaryFromReader);
      msg.addContains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.CompositeTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.CompositeTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.CompositeTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CompositeTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContainsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.CompositeTemplateProto.Or.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.CompositeTemplateProto.Or.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.CompositeTemplateProto.Or.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.CompositeTemplateProto.Or.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.CompositeTemplateProto.Or} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CompositeTemplateProto.Or.toObject = function(includeInstance, msg) {
  var f, obj = {
    nameList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.CompositeTemplateProto.Or}
 */
proto.dma.CompositeTemplateProto.Or.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.CompositeTemplateProto.Or;
  return proto.dma.CompositeTemplateProto.Or.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.CompositeTemplateProto.Or} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.CompositeTemplateProto.Or}
 */
proto.dma.CompositeTemplateProto.Or.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.CompositeTemplateProto.Or.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.CompositeTemplateProto.Or.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.CompositeTemplateProto.Or} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.CompositeTemplateProto.Or.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string name = 1;
 * @return {!Array<string>}
 */
proto.dma.CompositeTemplateProto.Or.prototype.getNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.CompositeTemplateProto.Or} returns this
 */
proto.dma.CompositeTemplateProto.Or.prototype.setNameList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.CompositeTemplateProto.Or} returns this
 */
proto.dma.CompositeTemplateProto.Or.prototype.addName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CompositeTemplateProto.Or} returns this
 */
proto.dma.CompositeTemplateProto.Or.prototype.clearNameList = function() {
  return this.setNameList([]);
};


/**
 * repeated Or contains = 1;
 * @return {!Array<!proto.dma.CompositeTemplateProto.Or>}
 */
proto.dma.CompositeTemplateProto.prototype.getContainsList = function() {
  return /** @type{!Array<!proto.dma.CompositeTemplateProto.Or>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.CompositeTemplateProto.Or, 1));
};


/**
 * @param {!Array<!proto.dma.CompositeTemplateProto.Or>} value
 * @return {!proto.dma.CompositeTemplateProto} returns this
*/
proto.dma.CompositeTemplateProto.prototype.setContainsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.CompositeTemplateProto.Or=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.CompositeTemplateProto.Or}
 */
proto.dma.CompositeTemplateProto.prototype.addContains = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.CompositeTemplateProto.Or, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.CompositeTemplateProto} returns this
 */
proto.dma.CompositeTemplateProto.prototype.clearContainsList = function() {
  return this.setContainsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.FeatTemplateProto.repeatedFields_ = [13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.FeatTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.FeatTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.FeatTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.FeatTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    benefit: jspb.Message.getFieldWithDefault(msg, 3, ""),
    special: jspb.Message.getFieldWithDefault(msg, 4, ""),
    normal: jspb.Message.getFieldWithDefault(msg, 5, ""),
    prerequisites: jspb.Message.getFieldWithDefault(msg, 6, ""),
    attackModifier: (f = msg.getAttackModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    damageModifier: (f = msg.getDamageModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    additionalAttacks: jspb.Message.getFieldWithDefault(msg, 10, 0),
    condition: (f = msg.getCondition()) && value_pb.RestrictionProto.toObject(includeInstance, f),
    initiativeModifier: (f = msg.getInitiativeModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    skillModifierList: jspb.Message.toObjectList(msg.getSkillModifierList(),
    value_pb.NameAndModifierProto.toObject, includeInstance),
    strengthModifier: (f = msg.getStrengthModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    dexterityModifier: (f = msg.getDexterityModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    constitutionModifier: (f = msg.getConstitutionModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    intelligenceModifier: (f = msg.getIntelligenceModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    wisdomModifier: (f = msg.getWisdomModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    charismaModifier: (f = msg.getCharismaModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    fortitudeModifier: (f = msg.getFortitudeModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    willModifier: (f = msg.getWillModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    reflexModifier: (f = msg.getReflexModifier()) && value_pb.ModifierProto.toObject(includeInstance, f),
    requiresQualifier: jspb.Message.getFieldWithDefault(msg, 23, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.FeatTemplateProto}
 */
proto.dma.FeatTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.FeatTemplateProto;
  return proto.dma.FeatTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.FeatTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.FeatTemplateProto}
 */
proto.dma.FeatTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.FeatType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBenefit(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecial(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormal(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrerequisites(value);
      break;
    case 8:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setAttackModifier(value);
      break;
    case 9:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setDamageModifier(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdditionalAttacks(value);
      break;
    case 11:
      var value = new value_pb.RestrictionProto;
      reader.readMessage(value,value_pb.RestrictionProto.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    case 12:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setInitiativeModifier(value);
      break;
    case 13:
      var value = new value_pb.NameAndModifierProto;
      reader.readMessage(value,value_pb.NameAndModifierProto.deserializeBinaryFromReader);
      msg.addSkillModifier(value);
      break;
    case 14:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setStrengthModifier(value);
      break;
    case 15:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setDexterityModifier(value);
      break;
    case 16:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setConstitutionModifier(value);
      break;
    case 17:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setIntelligenceModifier(value);
      break;
    case 18:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setWisdomModifier(value);
      break;
    case 19:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setCharismaModifier(value);
      break;
    case 20:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setFortitudeModifier(value);
      break;
    case 21:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setWillModifier(value);
      break;
    case 22:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setReflexModifier(value);
      break;
    case 23:
      var value = /** @type {!proto.dma.FeatTemplateProto.Qualifier} */ (reader.readEnum());
      msg.setRequiresQualifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.FeatTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.FeatTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.FeatTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.FeatTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getBenefit();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpecial();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNormal();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrerequisites();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAttackModifier();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getDamageModifier();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getAdditionalAttacks();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      value_pb.RestrictionProto.serializeBinaryToWriter
    );
  }
  f = message.getInitiativeModifier();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getSkillModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      value_pb.NameAndModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getStrengthModifier();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getDexterityModifier();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getConstitutionModifier();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getIntelligenceModifier();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getWisdomModifier();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getCharismaModifier();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getFortitudeModifier();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getWillModifier();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getReflexModifier();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getRequiresQualifier();
  if (f !== 0.0) {
    writer.writeEnum(
      23,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.FeatTemplateProto.Qualifier = {
  UNKNOWN: 0,
  NONE: 1,
  WEAPON: 2,
  SCHOOL: 3,
  SKILL: 4,
  SPELLS: 5
};

/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.FeatTemplateProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FeatType type = 2;
 * @return {!proto.dma.FeatType}
 */
proto.dma.FeatTemplateProto.prototype.getType = function() {
  return /** @type {!proto.dma.FeatType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.FeatType} value
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string benefit = 3;
 * @return {string}
 */
proto.dma.FeatTemplateProto.prototype.getBenefit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.setBenefit = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string special = 4;
 * @return {string}
 */
proto.dma.FeatTemplateProto.prototype.getSpecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.setSpecial = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string normal = 5;
 * @return {string}
 */
proto.dma.FeatTemplateProto.prototype.getNormal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.setNormal = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string prerequisites = 6;
 * @return {string}
 */
proto.dma.FeatTemplateProto.prototype.getPrerequisites = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.setPrerequisites = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ModifierProto attack_modifier = 8;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getAttackModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 8));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setAttackModifier = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearAttackModifier = function() {
  return this.setAttackModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasAttackModifier = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ModifierProto damage_modifier = 9;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getDamageModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 9));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setDamageModifier = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearDamageModifier = function() {
  return this.setDamageModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasDamageModifier = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 additional_attacks = 10;
 * @return {number}
 */
proto.dma.FeatTemplateProto.prototype.getAdditionalAttacks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.setAdditionalAttacks = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional RestrictionProto condition = 11;
 * @return {?proto.dma.RestrictionProto}
 */
proto.dma.FeatTemplateProto.prototype.getCondition = function() {
  return /** @type{?proto.dma.RestrictionProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RestrictionProto, 11));
};


/**
 * @param {?proto.dma.RestrictionProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setCondition = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ModifierProto initiative_modifier = 12;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getInitiativeModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 12));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setInitiativeModifier = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearInitiativeModifier = function() {
  return this.setInitiativeModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasInitiativeModifier = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated NameAndModifierProto skill_modifier = 13;
 * @return {!Array<!proto.dma.NameAndModifierProto>}
 */
proto.dma.FeatTemplateProto.prototype.getSkillModifierList = function() {
  return /** @type{!Array<!proto.dma.NameAndModifierProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.NameAndModifierProto, 13));
};


/**
 * @param {!Array<!proto.dma.NameAndModifierProto>} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setSkillModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.dma.NameAndModifierProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.NameAndModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.addSkillModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.dma.NameAndModifierProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearSkillModifierList = function() {
  return this.setSkillModifierList([]);
};


/**
 * optional ModifierProto strength_modifier = 14;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getStrengthModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 14));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setStrengthModifier = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearStrengthModifier = function() {
  return this.setStrengthModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasStrengthModifier = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ModifierProto dexterity_modifier = 15;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getDexterityModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 15));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setDexterityModifier = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearDexterityModifier = function() {
  return this.setDexterityModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasDexterityModifier = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ModifierProto constitution_modifier = 16;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getConstitutionModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 16));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setConstitutionModifier = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearConstitutionModifier = function() {
  return this.setConstitutionModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasConstitutionModifier = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ModifierProto intelligence_modifier = 17;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getIntelligenceModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 17));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setIntelligenceModifier = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearIntelligenceModifier = function() {
  return this.setIntelligenceModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasIntelligenceModifier = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ModifierProto wisdom_modifier = 18;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getWisdomModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 18));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setWisdomModifier = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearWisdomModifier = function() {
  return this.setWisdomModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasWisdomModifier = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ModifierProto charisma_modifier = 19;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getCharismaModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 19));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setCharismaModifier = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearCharismaModifier = function() {
  return this.setCharismaModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasCharismaModifier = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ModifierProto fortitude_modifier = 20;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getFortitudeModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 20));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setFortitudeModifier = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearFortitudeModifier = function() {
  return this.setFortitudeModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasFortitudeModifier = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ModifierProto will_modifier = 21;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getWillModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 21));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setWillModifier = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearWillModifier = function() {
  return this.setWillModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasWillModifier = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ModifierProto reflex_modifier = 22;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.FeatTemplateProto.prototype.getReflexModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 22));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setReflexModifier = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearReflexModifier = function() {
  return this.setReflexModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasReflexModifier = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Qualifier requires_qualifier = 23;
 * @return {!proto.dma.FeatTemplateProto.Qualifier}
 */
proto.dma.FeatTemplateProto.prototype.getRequiresQualifier = function() {
  return /** @type {!proto.dma.FeatTemplateProto.Qualifier} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.dma.FeatTemplateProto.Qualifier} value
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.setRequiresQualifier = function(value) {
  return jspb.Message.setProto3EnumField(this, 23, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MiniatureProto.repeatedFields_ = [7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MiniatureProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MiniatureProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MiniatureProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MiniatureProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    set: jspb.Message.getFieldWithDefault(msg, 2, ""),
    number: jspb.Message.getFieldWithDefault(msg, 3, 0),
    numberAffix: jspb.Message.getFieldWithDefault(msg, 4, ""),
    race: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, ""),
    subtypeList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    classList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    size: jspb.Message.getFieldWithDefault(msg, 9, 0),
    rarity: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MiniatureProto}
 */
proto.dma.MiniatureProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MiniatureProto;
  return proto.dma.MiniatureProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MiniatureProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MiniatureProto}
 */
proto.dma.MiniatureProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSet(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumberAffix(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRace(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubtype(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addClass(value);
      break;
    case 9:
      var value = /** @type {!proto.dma.SizeProto} */ (reader.readEnum());
      msg.setSize(value);
      break;
    case 10:
      var value = /** @type {!proto.dma.ItemProto.Rarity} */ (reader.readEnum());
      msg.setRarity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MiniatureProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MiniatureProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MiniatureProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MiniatureProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getSet();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNumberAffix();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRace();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSubtypeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getClassList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getRarity();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.MiniatureProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.MiniatureProto} returns this
*/
proto.dma.MiniatureProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MiniatureProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string set = 2;
 * @return {string}
 */
proto.dma.MiniatureProto.prototype.getSet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setSet = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.dma.MiniatureProto.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string number_affix = 4;
 * @return {string}
 */
proto.dma.MiniatureProto.prototype.getNumberAffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setNumberAffix = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string race = 5;
 * @return {string}
 */
proto.dma.MiniatureProto.prototype.getRace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setRace = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string type = 6;
 * @return {string}
 */
proto.dma.MiniatureProto.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string subtype = 7;
 * @return {!Array<string>}
 */
proto.dma.MiniatureProto.prototype.getSubtypeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setSubtypeList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.addSubtype = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.clearSubtypeList = function() {
  return this.setSubtypeList([]);
};


/**
 * repeated string class = 8;
 * @return {!Array<string>}
 */
proto.dma.MiniatureProto.prototype.getClassList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setClassList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.addClass = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.clearClassList = function() {
  return this.setClassList([]);
};


/**
 * optional SizeProto size = 9;
 * @return {!proto.dma.SizeProto}
 */
proto.dma.MiniatureProto.prototype.getSize = function() {
  return /** @type {!proto.dma.SizeProto} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.dma.SizeProto} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setSize = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional ItemProto.Rarity rarity = 10;
 * @return {!proto.dma.ItemProto.Rarity}
 */
proto.dma.MiniatureProto.prototype.getRarity = function() {
  return /** @type {!proto.dma.ItemProto.Rarity} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.dma.ItemProto.Rarity} value
 * @return {!proto.dma.MiniatureProto} returns this
 */
proto.dma.MiniatureProto.prototype.setRarity = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MiniaturesProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MiniaturesProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MiniaturesProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MiniaturesProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MiniaturesProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    miniaturesList: jspb.Message.toObjectList(msg.getMiniaturesList(),
    proto.dma.MiniatureProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MiniaturesProto}
 */
proto.dma.MiniaturesProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MiniaturesProto;
  return proto.dma.MiniaturesProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MiniaturesProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MiniaturesProto}
 */
proto.dma.MiniaturesProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.MiniatureProto;
      reader.readMessage(value,proto.dma.MiniatureProto.deserializeBinaryFromReader);
      msg.addMiniatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MiniaturesProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MiniaturesProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MiniaturesProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MiniaturesProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMiniaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.MiniatureProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MiniatureProto miniatures = 1;
 * @return {!Array<!proto.dma.MiniatureProto>}
 */
proto.dma.MiniaturesProto.prototype.getMiniaturesList = function() {
  return /** @type{!Array<!proto.dma.MiniatureProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MiniatureProto, 1));
};


/**
 * @param {!Array<!proto.dma.MiniatureProto>} value
 * @return {!proto.dma.MiniaturesProto} returns this
*/
proto.dma.MiniaturesProto.prototype.setMiniaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.MiniatureProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MiniatureProto}
 */
proto.dma.MiniaturesProto.prototype.addMiniatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.MiniatureProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MiniaturesProto} returns this
 */
proto.dma.MiniaturesProto.prototype.clearMiniaturesList = function() {
  return this.setMiniaturesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.SkillTemplateProto.repeatedFields_ = [10,11,12,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.SkillTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SkillTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SkillTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SkillTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    ability: jspb.Message.getFieldWithDefault(msg, 2, 0),
    check: jspb.Message.getFieldWithDefault(msg, 3, ""),
    action: jspb.Message.getFieldWithDefault(msg, 4, ""),
    retry: jspb.Message.getFieldWithDefault(msg, 5, ""),
    special: jspb.Message.getFieldWithDefault(msg, 6, ""),
    synergyText: jspb.Message.getFieldWithDefault(msg, 7, ""),
    restrictionText: jspb.Message.getFieldWithDefault(msg, 8, ""),
    untrained: jspb.Message.getFieldWithDefault(msg, 9, ""),
    restrictionList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    modifierList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    dcList: jspb.Message.toObjectList(msg.getDcList(),
    proto.dma.SkillTemplateProto.DC.toObject, includeInstance),
    synergyList: jspb.Message.toObjectList(msg.getSynergyList(),
    proto.dma.SkillTemplateProto.Synergy.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.SkillTemplateProto}
 */
proto.dma.SkillTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SkillTemplateProto;
  return proto.dma.SkillTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SkillTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SkillTemplateProto}
 */
proto.dma.SkillTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.Ability} */ (reader.readEnum());
      msg.setAbility(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheck(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetry(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecial(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSynergyText(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestrictionText(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUntrained(value);
      break;
    case 10:
      var values = /** @type {!Array<!proto.dma.SkillTemplateProto.Restriction>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRestriction(values[i]);
      }
      break;
    case 11:
      var values = /** @type {!Array<!proto.dma.SkillTemplateProto.Modifier>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addModifier(values[i]);
      }
      break;
    case 12:
      var value = new proto.dma.SkillTemplateProto.DC;
      reader.readMessage(value,proto.dma.SkillTemplateProto.DC.deserializeBinaryFromReader);
      msg.addDc(value);
      break;
    case 13:
      var value = new proto.dma.SkillTemplateProto.Synergy;
      reader.readMessage(value,proto.dma.SkillTemplateProto.Synergy.deserializeBinaryFromReader);
      msg.addSynergy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.SkillTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SkillTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SkillTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SkillTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getAbility();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCheck();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRetry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSpecial();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSynergyText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRestrictionText();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUntrained();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRestrictionList();
  if (f.length > 0) {
    writer.writePackedEnum(
      10,
      f
    );
  }
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writePackedEnum(
      11,
      f
    );
  }
  f = message.getDcList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.dma.SkillTemplateProto.DC.serializeBinaryToWriter
    );
  }
  f = message.getSynergyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.dma.SkillTemplateProto.Synergy.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.SkillTemplateProto.Restriction = {
  UNKNOWN_RESTRICTION: 0,
  TRAINED_ONLY: 1,
  ARMOR_CHECK_PENALTY: 2,
  SUBTYPE_ONLY: 3,
  DOUBLE_ARMOR_CHECK_PENALTY: 4
};

/**
 * @enum {number}
 */
proto.dma.SkillTemplateProto.Modifier = {
  UNKNOWN_MODIFIER: 0,
  SPEED: 1,
  SIZE: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.SkillTemplateProto.DC.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SkillTemplateProto.DC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SkillTemplateProto.DC} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SkillTemplateProto.DC.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, 0),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.SkillTemplateProto.DC}
 */
proto.dma.SkillTemplateProto.DC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SkillTemplateProto.DC;
  return proto.dma.SkillTemplateProto.DC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SkillTemplateProto.DC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SkillTemplateProto.DC}
 */
proto.dma.SkillTemplateProto.DC.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.SkillTemplateProto.DC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SkillTemplateProto.DC.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SkillTemplateProto.DC} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SkillTemplateProto.DC.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 number = 1;
 * @return {number}
 */
proto.dma.SkillTemplateProto.DC.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.SkillTemplateProto.DC} returns this
 */
proto.dma.SkillTemplateProto.DC.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.dma.SkillTemplateProto.DC.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto.DC} returns this
 */
proto.dma.SkillTemplateProto.DC.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.SkillTemplateProto.Synergy.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SkillTemplateProto.Synergy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SkillTemplateProto.Synergy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SkillTemplateProto.Synergy.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    condition: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.SkillTemplateProto.Synergy}
 */
proto.dma.SkillTemplateProto.Synergy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SkillTemplateProto.Synergy;
  return proto.dma.SkillTemplateProto.Synergy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SkillTemplateProto.Synergy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SkillTemplateProto.Synergy}
 */
proto.dma.SkillTemplateProto.Synergy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.SkillTemplateProto.Synergy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SkillTemplateProto.Synergy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SkillTemplateProto.Synergy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SkillTemplateProto.Synergy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCondition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.SkillTemplateProto.Synergy.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto.Synergy} returns this
 */
proto.dma.SkillTemplateProto.Synergy.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string condition = 2;
 * @return {string}
 */
proto.dma.SkillTemplateProto.Synergy.prototype.getCondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto.Synergy} returns this
 */
proto.dma.SkillTemplateProto.Synergy.prototype.setCondition = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.SkillTemplateProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.SkillTemplateProto} returns this
*/
proto.dma.SkillTemplateProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SkillTemplateProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ability ability = 2;
 * @return {!proto.dma.Ability}
 */
proto.dma.SkillTemplateProto.prototype.getAbility = function() {
  return /** @type {!proto.dma.Ability} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.Ability} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setAbility = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string check = 3;
 * @return {string}
 */
proto.dma.SkillTemplateProto.prototype.getCheck = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setCheck = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string action = 4;
 * @return {string}
 */
proto.dma.SkillTemplateProto.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string retry = 5;
 * @return {string}
 */
proto.dma.SkillTemplateProto.prototype.getRetry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setRetry = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string special = 6;
 * @return {string}
 */
proto.dma.SkillTemplateProto.prototype.getSpecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setSpecial = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string synergy_text = 7;
 * @return {string}
 */
proto.dma.SkillTemplateProto.prototype.getSynergyText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setSynergyText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string restriction_text = 8;
 * @return {string}
 */
proto.dma.SkillTemplateProto.prototype.getRestrictionText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setRestrictionText = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string untrained = 9;
 * @return {string}
 */
proto.dma.SkillTemplateProto.prototype.getUntrained = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setUntrained = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated Restriction restriction = 10;
 * @return {!Array<!proto.dma.SkillTemplateProto.Restriction>}
 */
proto.dma.SkillTemplateProto.prototype.getRestrictionList = function() {
  return /** @type {!Array<!proto.dma.SkillTemplateProto.Restriction>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<!proto.dma.SkillTemplateProto.Restriction>} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setRestrictionList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.dma.SkillTemplateProto.Restriction} value
 * @param {number=} opt_index
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.addRestriction = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.clearRestrictionList = function() {
  return this.setRestrictionList([]);
};


/**
 * repeated Modifier modifier = 11;
 * @return {!Array<!proto.dma.SkillTemplateProto.Modifier>}
 */
proto.dma.SkillTemplateProto.prototype.getModifierList = function() {
  return /** @type {!Array<!proto.dma.SkillTemplateProto.Modifier>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<!proto.dma.SkillTemplateProto.Modifier>} value
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.setModifierList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!proto.dma.SkillTemplateProto.Modifier} value
 * @param {number=} opt_index
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.addModifier = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * repeated DC dc = 12;
 * @return {!Array<!proto.dma.SkillTemplateProto.DC>}
 */
proto.dma.SkillTemplateProto.prototype.getDcList = function() {
  return /** @type{!Array<!proto.dma.SkillTemplateProto.DC>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.SkillTemplateProto.DC, 12));
};


/**
 * @param {!Array<!proto.dma.SkillTemplateProto.DC>} value
 * @return {!proto.dma.SkillTemplateProto} returns this
*/
proto.dma.SkillTemplateProto.prototype.setDcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.dma.SkillTemplateProto.DC=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.SkillTemplateProto.DC}
 */
proto.dma.SkillTemplateProto.prototype.addDc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.dma.SkillTemplateProto.DC, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.clearDcList = function() {
  return this.setDcList([]);
};


/**
 * repeated Synergy synergy = 13;
 * @return {!Array<!proto.dma.SkillTemplateProto.Synergy>}
 */
proto.dma.SkillTemplateProto.prototype.getSynergyList = function() {
  return /** @type{!Array<!proto.dma.SkillTemplateProto.Synergy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.SkillTemplateProto.Synergy, 13));
};


/**
 * @param {!Array<!proto.dma.SkillTemplateProto.Synergy>} value
 * @return {!proto.dma.SkillTemplateProto} returns this
*/
proto.dma.SkillTemplateProto.prototype.setSynergyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.dma.SkillTemplateProto.Synergy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.SkillTemplateProto.Synergy}
 */
proto.dma.SkillTemplateProto.prototype.addSynergy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.dma.SkillTemplateProto.Synergy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.clearSynergyList = function() {
  return this.setSynergyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.SpellProto.repeatedFields_ = [5,9,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.SpellProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    school: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ritual: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0),
    spellClassList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    componentVerbose: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    componentSomatic: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    componentMaterial: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    materialList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    castingTime: (f = msg.getCastingTime()) && value_pb.DurationProto.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && proto.dma.SpellProto.Duration.toObject(includeInstance, f),
    target: jspb.Message.getFieldWithDefault(msg, 12, ""),
    range: (f = msg.getRange()) && proto.dma.SpellProto.Range.toObject(includeInstance, f),
    higherLevels: jspb.Message.getFieldWithDefault(msg, 14, ""),
    soundsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.SpellProto}
 */
proto.dma.SpellProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellProto;
  return proto.dma.SpellProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellProto}
 */
proto.dma.SpellProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.SpellProto.School} */ (reader.readEnum());
      msg.setSchool(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRitual(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.dma.SpellClass>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSpellClass(values[i]);
      }
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setComponentVerbose(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setComponentSomatic(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setComponentMaterial(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addMaterial(value);
      break;
    case 10:
      var value = new value_pb.DurationProto;
      reader.readMessage(value,value_pb.DurationProto.deserializeBinaryFromReader);
      msg.setCastingTime(value);
      break;
    case 11:
      var value = new proto.dma.SpellProto.Duration;
      reader.readMessage(value,proto.dma.SpellProto.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 13:
      var value = new proto.dma.SpellProto.Range;
      reader.readMessage(value,proto.dma.SpellProto.Range.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setHigherLevels(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addSounds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.SpellProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getSchool();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRitual();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSpellClassList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getComponentVerbose();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getComponentSomatic();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getComponentMaterial();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getMaterialList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getCastingTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      value_pb.DurationProto.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.dma.SpellProto.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.dma.SpellProto.Range.serializeBinaryToWriter
    );
  }
  f = message.getHigherLevels();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSoundsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.SpellProto.School = {
  UNKNOWN_SCHOOL: 0,
  ABJURATION: 1,
  CONJURATION: 2,
  DIVINATION: 3,
  ENCHANTMENT: 4,
  EVOCATION: 5,
  ILLUSION: 6,
  NECROMANCY: 7,
  TRANSMUTATION: 8
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.SpellProto.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellProto.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellProto.Duration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellProto.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && value_pb.DurationProto.toObject(includeInstance, f),
    instantaneous: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    concentration: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    dispelled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    triggered: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.SpellProto.Duration}
 */
proto.dma.SpellProto.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellProto.Duration;
  return proto.dma.SpellProto.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellProto.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellProto.Duration}
 */
proto.dma.SpellProto.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.DurationProto;
      reader.readMessage(value,value_pb.DurationProto.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInstantaneous(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConcentration(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDispelled(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTriggered(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.SpellProto.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellProto.Duration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellProto.Duration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellProto.Duration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.DurationProto.serializeBinaryToWriter
    );
  }
  f = message.getInstantaneous();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getConcentration();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDispelled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTriggered();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional DurationProto time = 1;
 * @return {?proto.dma.DurationProto}
 */
proto.dma.SpellProto.Duration.prototype.getTime = function() {
  return /** @type{?proto.dma.DurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DurationProto, 1));
};


/**
 * @param {?proto.dma.DurationProto|undefined} value
 * @return {!proto.dma.SpellProto.Duration} returns this
*/
proto.dma.SpellProto.Duration.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellProto.Duration} returns this
 */
proto.dma.SpellProto.Duration.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellProto.Duration.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool instantaneous = 2;
 * @return {boolean}
 */
proto.dma.SpellProto.Duration.prototype.getInstantaneous = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto.Duration} returns this
 */
proto.dma.SpellProto.Duration.prototype.setInstantaneous = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool concentration = 3;
 * @return {boolean}
 */
proto.dma.SpellProto.Duration.prototype.getConcentration = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto.Duration} returns this
 */
proto.dma.SpellProto.Duration.prototype.setConcentration = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool dispelled = 4;
 * @return {boolean}
 */
proto.dma.SpellProto.Duration.prototype.getDispelled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto.Duration} returns this
 */
proto.dma.SpellProto.Duration.prototype.setDispelled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool triggered = 5;
 * @return {boolean}
 */
proto.dma.SpellProto.Duration.prototype.getTriggered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto.Duration} returns this
 */
proto.dma.SpellProto.Duration.prototype.setTriggered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.SpellProto.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellProto.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellProto.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellProto.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
    distance: (f = msg.getDistance()) && value_pb.DistanceProto.toObject(includeInstance, f),
    self: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    touch: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    unlimited: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    shape: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.SpellProto.Range}
 */
proto.dma.SpellProto.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellProto.Range;
  return proto.dma.SpellProto.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellProto.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellProto.Range}
 */
proto.dma.SpellProto.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setDistance(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelf(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTouch(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnlimited(value);
      break;
    case 5:
      var value = /** @type {!proto.dma.SpellProto.Range.Shape} */ (reader.readEnum());
      msg.setShape(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.SpellProto.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellProto.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellProto.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellProto.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTouch();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUnlimited();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getShape();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.SpellProto.Range.Shape = {
  UNKNOWN_SHAPE: 0,
  CONE: 1,
  CUBE: 2,
  CYLINDER: 3,
  LINE: 4,
  SPHERE: 5
};

/**
 * optional DistanceProto distance = 1;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.SpellProto.Range.prototype.getDistance = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 1));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.SpellProto.Range} returns this
*/
proto.dma.SpellProto.Range.prototype.setDistance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellProto.Range} returns this
 */
proto.dma.SpellProto.Range.prototype.clearDistance = function() {
  return this.setDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellProto.Range.prototype.hasDistance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool self = 2;
 * @return {boolean}
 */
proto.dma.SpellProto.Range.prototype.getSelf = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto.Range} returns this
 */
proto.dma.SpellProto.Range.prototype.setSelf = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool touch = 3;
 * @return {boolean}
 */
proto.dma.SpellProto.Range.prototype.getTouch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto.Range} returns this
 */
proto.dma.SpellProto.Range.prototype.setTouch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool unlimited = 4;
 * @return {boolean}
 */
proto.dma.SpellProto.Range.prototype.getUnlimited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto.Range} returns this
 */
proto.dma.SpellProto.Range.prototype.setUnlimited = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Shape shape = 5;
 * @return {!proto.dma.SpellProto.Range.Shape}
 */
proto.dma.SpellProto.Range.prototype.getShape = function() {
  return /** @type {!proto.dma.SpellProto.Range.Shape} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dma.SpellProto.Range.Shape} value
 * @return {!proto.dma.SpellProto.Range} returns this
 */
proto.dma.SpellProto.Range.prototype.setShape = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.SpellProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.SpellProto} returns this
*/
proto.dma.SpellProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional School school = 2;
 * @return {!proto.dma.SpellProto.School}
 */
proto.dma.SpellProto.prototype.getSchool = function() {
  return /** @type {!proto.dma.SpellProto.School} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.SpellProto.School} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setSchool = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool ritual = 3;
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.getRitual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setRitual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 level = 4;
 * @return {number}
 */
proto.dma.SpellProto.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated SpellClass spell_class = 5;
 * @return {!Array<!proto.dma.SpellClass>}
 */
proto.dma.SpellProto.prototype.getSpellClassList = function() {
  return /** @type {!Array<!proto.dma.SpellClass>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.dma.SpellClass>} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setSpellClassList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.dma.SpellClass} value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.addSpellClass = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.clearSpellClassList = function() {
  return this.setSpellClassList([]);
};


/**
 * optional bool component_verbose = 6;
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.getComponentVerbose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setComponentVerbose = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool component_somatic = 7;
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.getComponentSomatic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setComponentSomatic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool component_material = 8;
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.getComponentMaterial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setComponentMaterial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated string material = 9;
 * @return {!Array<string>}
 */
proto.dma.SpellProto.prototype.getMaterialList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setMaterialList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.addMaterial = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.clearMaterialList = function() {
  return this.setMaterialList([]);
};


/**
 * optional DurationProto casting_time = 10;
 * @return {?proto.dma.DurationProto}
 */
proto.dma.SpellProto.prototype.getCastingTime = function() {
  return /** @type{?proto.dma.DurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DurationProto, 10));
};


/**
 * @param {?proto.dma.DurationProto|undefined} value
 * @return {!proto.dma.SpellProto} returns this
*/
proto.dma.SpellProto.prototype.setCastingTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.clearCastingTime = function() {
  return this.setCastingTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.hasCastingTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Duration duration = 11;
 * @return {?proto.dma.SpellProto.Duration}
 */
proto.dma.SpellProto.prototype.getDuration = function() {
  return /** @type{?proto.dma.SpellProto.Duration} */ (
    jspb.Message.getWrapperField(this, proto.dma.SpellProto.Duration, 11));
};


/**
 * @param {?proto.dma.SpellProto.Duration|undefined} value
 * @return {!proto.dma.SpellProto} returns this
*/
proto.dma.SpellProto.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string target = 12;
 * @return {string}
 */
proto.dma.SpellProto.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional Range range = 13;
 * @return {?proto.dma.SpellProto.Range}
 */
proto.dma.SpellProto.prototype.getRange = function() {
  return /** @type{?proto.dma.SpellProto.Range} */ (
    jspb.Message.getWrapperField(this, proto.dma.SpellProto.Range, 13));
};


/**
 * @param {?proto.dma.SpellProto.Range|undefined} value
 * @return {!proto.dma.SpellProto} returns this
*/
proto.dma.SpellProto.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellProto.prototype.hasRange = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string higher_levels = 14;
 * @return {string}
 */
proto.dma.SpellProto.prototype.getHigherLevels = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setHigherLevels = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated string sounds = 15;
 * @return {!Array<string>}
 */
proto.dma.SpellProto.prototype.getSoundsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.setSoundsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.addSounds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellProto} returns this
 */
proto.dma.SpellProto.prototype.clearSoundsList = function() {
  return this.setSoundsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.SpellsProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.SpellsProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellsProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellsProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellsProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    spellsList: jspb.Message.toObjectList(msg.getSpellsList(),
    proto.dma.SpellProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.SpellsProto}
 */
proto.dma.SpellsProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellsProto;
  return proto.dma.SpellsProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellsProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellsProto}
 */
proto.dma.SpellsProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.SpellProto;
      reader.readMessage(value,proto.dma.SpellProto.deserializeBinaryFromReader);
      msg.addSpells(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.SpellsProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellsProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellsProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellsProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.SpellProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SpellProto spells = 1;
 * @return {!Array<!proto.dma.SpellProto>}
 */
proto.dma.SpellsProto.prototype.getSpellsList = function() {
  return /** @type{!Array<!proto.dma.SpellProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.SpellProto, 1));
};


/**
 * @param {!Array<!proto.dma.SpellProto>} value
 * @return {!proto.dma.SpellsProto} returns this
*/
proto.dma.SpellsProto.prototype.setSpellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.SpellProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellProto}
 */
proto.dma.SpellsProto.prototype.addSpells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.SpellProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellsProto} returns this
 */
proto.dma.SpellsProto.prototype.clearSpellsList = function() {
  return this.setSpellsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    recommendedLevel: (f = msg.getRecommendedLevel()) && proto.dma.AdventureTemplateProto.Level.toObject(includeInstance, f),
    encounterList: jspb.Message.toObjectList(msg.getEncounterList(),
    proto.dma.AdventureTemplateProto.Encounter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto}
 */
proto.dma.AdventureTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto;
  return proto.dma.AdventureTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto}
 */
proto.dma.AdventureTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 4:
      var value = new proto.dma.AdventureTemplateProto.Level;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Level.deserializeBinaryFromReader);
      msg.setRecommendedLevel(value);
      break;
    case 5:
      var value = new proto.dma.AdventureTemplateProto.Encounter;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.deserializeBinaryFromReader);
      msg.addEncounter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getRecommendedLevel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dma.AdventureTemplateProto.Level.serializeBinaryToWriter
    );
  }
  f = message.getEncounterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dma.AdventureTemplateProto.Encounter.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Level.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Level.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Level} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Level.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: jspb.Message.getFieldWithDefault(msg, 1, 0),
    max: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Level}
 */
proto.dma.AdventureTemplateProto.Level.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Level;
  return proto.dma.AdventureTemplateProto.Level.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Level} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Level}
 */
proto.dma.AdventureTemplateProto.Level.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Level.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Level.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Level} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Level.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 min = 1;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Level.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Level} returns this
 */
proto.dma.AdventureTemplateProto.Level.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 max = 2;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Level.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Level} returns this
 */
proto.dma.AdventureTemplateProto.Level.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.repeatedFields_ = [2,7,8,11,12,13,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    baseList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    shortName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    shortDescription: jspb.Message.getFieldWithDefault(msg, 5, ""),
    encounterLevel: jspb.Message.getFieldWithDefault(msg, 6, 0),
    locationList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    readAloudList: jspb.Message.toObjectList(msg.getReadAloudList(),
    proto.dma.AdventureTemplateProto.Encounter.ReadAloud.toObject, includeInstance),
    environment: (f = msg.getEnvironment()) && proto.dma.AdventureTemplateProto.Encounter.Environment.toObject(includeInstance, f),
    senses: (f = msg.getSenses()) && proto.dma.AdventureTemplateProto.Encounter.Senses.toObject(includeInstance, f),
    creatureList: jspb.Message.toObjectList(msg.getCreatureList(),
    proto.dma.AdventureTemplateProto.Encounter.Creature.toObject, includeInstance),
    developmentList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    treasureList: jspb.Message.toObjectList(msg.getTreasureList(),
    proto.dma.AdventureTemplateProto.Encounter.Treasure.toObject, includeInstance),
    spellGroupList: jspb.Message.toObjectList(msg.getSpellGroupList(),
    proto.dma.AdventureTemplateProto.Encounter.SpellGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter}
 */
proto.dma.AdventureTemplateProto.Encounter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter;
  return proto.dma.AdventureTemplateProto.Encounter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter}
 */
proto.dma.AdventureTemplateProto.Encounter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBase(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortDescription(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEncounterLevel(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addLocation(value);
      break;
    case 8:
      var value = new proto.dma.AdventureTemplateProto.Encounter.ReadAloud;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.ReadAloud.deserializeBinaryFromReader);
      msg.addReadAloud(value);
      break;
    case 9:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.deserializeBinaryFromReader);
      msg.setEnvironment(value);
      break;
    case 10:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Senses;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Senses.deserializeBinaryFromReader);
      msg.setSenses(value);
      break;
    case 11:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Creature;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Creature.deserializeBinaryFromReader);
      msg.addCreature(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addDevelopment(value);
      break;
    case 13:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Treasure;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Treasure.deserializeBinaryFromReader);
      msg.addTreasure(value);
      break;
    case 14:
      var value = new proto.dma.AdventureTemplateProto.Encounter.SpellGroup;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.SpellGroup.deserializeBinaryFromReader);
      msg.addSpellGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBaseList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getShortName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getShortDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEncounterLevel();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLocationList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getReadAloudList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.dma.AdventureTemplateProto.Encounter.ReadAloud.serializeBinaryToWriter
    );
  }
  f = message.getEnvironment();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.serializeBinaryToWriter
    );
  }
  f = message.getSenses();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Senses.serializeBinaryToWriter
    );
  }
  f = message.getCreatureList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Creature.serializeBinaryToWriter
    );
  }
  f = message.getDevelopmentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getTreasureList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Treasure.serializeBinaryToWriter
    );
  }
  f = message.getSpellGroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.dma.AdventureTemplateProto.Encounter.SpellGroup.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.ReadAloud.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.toObject = function(includeInstance, msg) {
  var f, obj = {
    condition: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud}
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.ReadAloud;
  return proto.dma.AdventureTemplateProto.Encounter.ReadAloud.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud}
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCondition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.ReadAloud.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCondition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string condition = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.prototype.getCondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.prototype.setCondition = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.ReadAloud.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.repeatedFields_ = [1,2,3,4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Environment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.toObject = function(includeInstance, msg) {
  var f, obj = {
    floorList: jspb.Message.toObjectList(msg.getFloorList(),
    proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.toObject, includeInstance),
    ceilingList: jspb.Message.toObjectList(msg.getCeilingList(),
    proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.toObject, includeInstance),
    wallsList: jspb.Message.toObjectList(msg.getWallsList(),
    proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.toObject, includeInstance),
    doorList: jspb.Message.toObjectList(msg.getDoorList(),
    proto.dma.AdventureTemplateProto.Encounter.Environment.Door.toObject, includeInstance),
    terrainList: jspb.Message.toObjectList(msg.getTerrainList(),
    proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.toObject, includeInstance),
    trapList: jspb.Message.toObjectList(msg.getTrapList(),
    proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Environment;
  return proto.dma.AdventureTemplateProto.Encounter.Environment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment.Spot;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.deserializeBinaryFromReader);
      msg.addFloor(value);
      break;
    case 2:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.deserializeBinaryFromReader);
      msg.addCeiling(value);
      break;
    case 3:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment.Spot;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.deserializeBinaryFromReader);
      msg.addWalls(value);
      break;
    case 4:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment.Door;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.Door.deserializeBinaryFromReader);
      msg.addDoor(value);
      break;
    case 5:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment.Spot;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.deserializeBinaryFromReader);
      msg.addTerrain(value);
      break;
    case 6:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment.Spot;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.deserializeBinaryFromReader);
      msg.addTrap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Environment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFloorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.serializeBinaryToWriter
    );
  }
  f = message.getCeilingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.serializeBinaryToWriter
    );
  }
  f = message.getWallsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.serializeBinaryToWriter
    );
  }
  f = message.getDoorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.Door.serializeBinaryToWriter
    );
  }
  f = message.getTerrainList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.serializeBinaryToWriter
    );
  }
  f = message.getTrapList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    checkList: jspb.Message.toObjectList(msg.getCheckList(),
    proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Environment.Spot;
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.deserializeBinaryFromReader);
      msg.addCheck(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCheckList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dc: jspb.Message.getFieldWithDefault(msg, 2, 0),
    modifier: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conditionList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check;
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDc(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModifier(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDc();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getModifier();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 dc = 2;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.getDc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.setDc = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 modifier = 3;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.getModifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.setModifier = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string condition = 4;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.getConditionList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.setConditionList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.addCondition = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Check check = 3;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.getCheckList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check, 3));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.setCheckList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.addCheck = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.Check, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Spot.prototype.clearCheckList = function() {
  return this.setCheckList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    heightFeet: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minHeightFeet: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxHeightFeet: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling;
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeightFeet(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinHeightFeet(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxHeightFeet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeightFeet();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMinHeightFeet();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMaxHeightFeet();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 height_feet = 3;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.getHeightFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.setHeightFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 min_height_feet = 4;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.getMinHeightFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.setMinHeightFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 max_height_feet = 5;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.getMaxHeightFeet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling.prototype.setMaxHeightFeet = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Door.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    thicknessInches: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hardness: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hp: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Environment.Door;
  return proto.dma.AdventureTemplateProto.Encounter.Environment.Door.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThicknessInches(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHardness(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Environment.Door.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getThicknessInches();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHardness();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHp();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 thickness_inches = 3;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.getThicknessInches = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.setThicknessInches = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 hardness = 4;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.getHardness = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.setHardness = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 hp = 5;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.getHp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.Door.prototype.setHp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated Spot floor = 1;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.getFloorList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, 1));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.setFloorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.addFloor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.clearFloorList = function() {
  return this.setFloorList([]);
};


/**
 * repeated Ceiling ceiling = 2;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.getCeilingList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling, 2));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.setCeilingList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.addCeiling = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dma.AdventureTemplateProto.Encounter.Environment.Ceiling, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.clearCeilingList = function() {
  return this.setCeilingList([]);
};


/**
 * repeated Spot walls = 3;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.getWallsList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, 3));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.setWallsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.addWalls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.clearWallsList = function() {
  return this.setWallsList([]);
};


/**
 * repeated Door door = 4;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Door>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.getDoorList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Door>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment.Door, 4));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Door>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.setDoorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Door}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.addDoor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dma.AdventureTemplateProto.Encounter.Environment.Door, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.clearDoorList = function() {
  return this.setDoorList([]);
};


/**
 * repeated Spot terrain = 5;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.getTerrainList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, 5));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.setTerrainList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.addTerrain = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.clearTerrainList = function() {
  return this.setTerrainList([]);
};


/**
 * repeated Spot trap = 6;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.getTrapList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, 6));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.setTrapList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment.Spot}
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.addTrap = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.AdventureTemplateProto.Encounter.Environment.Spot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Environment} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Environment.prototype.clearTrapList = function() {
  return this.setTrapList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.repeatedFields_ = [1,2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Senses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Senses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.toObject = function(includeInstance, msg) {
  var f, obj = {
    lightList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    soundList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    smellList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    touchList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    feelList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Senses;
  return proto.dma.AdventureTemplateProto.Encounter.Senses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Senses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLight(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSound(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSmell(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTouch(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFeel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Senses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Senses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLightList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getSoundList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSmellList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTouchList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFeelList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * repeated string light = 1;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.getLightList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.setLightList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.addLight = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.clearLightList = function() {
  return this.setLightList([]);
};


/**
 * repeated string sound = 2;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.getSoundList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.setSoundList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.addSound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.clearSoundList = function() {
  return this.setSoundList([]);
};


/**
 * repeated string smell = 3;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.getSmellList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.setSmellList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.addSmell = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.clearSmellList = function() {
  return this.setSmellList([]);
};


/**
 * repeated string touch = 4;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.getTouchList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.setTouchList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.addTouch = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.clearTouchList = function() {
  return this.setTouchList([]);
};


/**
 * repeated string feel = 5;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.getFeelList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.setFeelList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.addFeel = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Senses} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Senses.prototype.clearFeelList = function() {
  return this.setFeelList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Creature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Creature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tacticsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature}
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Creature;
  return proto.dma.AdventureTemplateProto.Encounter.Creature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Creature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature}
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTactics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Creature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Creature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTacticsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string tactics = 3;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.getTacticsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.setTacticsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.addTactics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Creature.prototype.clearTacticsList = function() {
  return this.setTacticsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.Treasure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Treasure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    itemList: jspb.Message.toObjectList(msg.getItemList(),
    proto.dma.ItemLookupProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Treasure}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.Treasure;
  return proto.dma.AdventureTemplateProto.Encounter.Treasure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Treasure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Treasure}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.dma.ItemLookupProto;
      reader.readMessage(value,proto.dma.ItemLookupProto.deserializeBinaryFromReader);
      msg.addItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.Treasure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Treasure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dma.ItemLookupProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Treasure} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Treasure} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ItemLookupProto item = 3;
 * @return {!Array<!proto.dma.ItemLookupProto>}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.getItemList = function() {
  return /** @type{!Array<!proto.dma.ItemLookupProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemLookupProto, 3));
};


/**
 * @param {!Array<!proto.dma.ItemLookupProto>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Treasure} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.setItemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dma.ItemLookupProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemLookupProto}
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.addItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dma.ItemLookupProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Treasure} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.Treasure.prototype.clearItemList = function() {
  return this.setItemList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.SpellGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    casterLevel: jspb.Message.getFieldWithDefault(msg, 3, 0),
    abilityBonus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    spellClass: jspb.Message.getFieldWithDefault(msg, 6, 0),
    spellList: jspb.Message.toObjectList(msg.getSpellList(),
    proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.SpellGroup;
  return proto.dma.AdventureTemplateProto.Encounter.SpellGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCasterLevel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAbilityBonus(value);
      break;
    case 6:
      var value = /** @type {!proto.dma.SpellClass} */ (reader.readEnum());
      msg.setSpellClass(value);
      break;
    case 5:
      var value = new proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference;
      reader.readMessage(value,proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.deserializeBinaryFromReader);
      msg.addSpell(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.SpellGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCasterLevel();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAbilityBonus();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSpellClass();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSpellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metaMagicList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference;
  return proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.dma.MetaMagic>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMetaMagic(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetaMagicList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated MetaMagic meta_magic = 2;
 * @return {!Array<!proto.dma.MetaMagic>}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.getMetaMagicList = function() {
  return /** @type {!Array<!proto.dma.MetaMagic>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.dma.MetaMagic>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.setMetaMagicList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.dma.MetaMagic} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.addMetaMagic = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference.prototype.clearMetaMagicList = function() {
  return this.setMetaMagicList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 caster_level = 3;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.getCasterLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.setCasterLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 ability_bonus = 4;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.getAbilityBonus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.setAbilityBonus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SpellClass spell_class = 6;
 * @return {!proto.dma.SpellClass}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.getSpellClass = function() {
  return /** @type {!proto.dma.SpellClass} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dma.SpellClass} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.setSpellClass = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated SpellReference spell = 5;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference>}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.getSpellList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference, 5));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.setSpellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference}
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.addSpell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dma.AdventureTemplateProto.Encounter.SpellGroup.SpellReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.SpellGroup.prototype.clearSpellList = function() {
  return this.setSpellList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string base = 2;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getBaseList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setBaseList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.addBase = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearBaseList = function() {
  return this.setBaseList([]);
};


/**
 * optional string short_name = 3;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string short_description = 5;
 * @return {string}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getShortDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setShortDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 encounter_level = 6;
 * @return {number}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getEncounterLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setEncounterLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated string location = 7;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getLocationList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setLocationList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.addLocation = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearLocationList = function() {
  return this.setLocationList([]);
};


/**
 * repeated ReadAloud read_aloud = 8;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.ReadAloud>}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getReadAloudList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.ReadAloud>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.ReadAloud, 8));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.ReadAloud>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.prototype.setReadAloudList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.ReadAloud}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.addReadAloud = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dma.AdventureTemplateProto.Encounter.ReadAloud, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearReadAloudList = function() {
  return this.setReadAloudList([]);
};


/**
 * optional Environment environment = 9;
 * @return {?proto.dma.AdventureTemplateProto.Encounter.Environment}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getEnvironment = function() {
  return /** @type{?proto.dma.AdventureTemplateProto.Encounter.Environment} */ (
    jspb.Message.getWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Environment, 9));
};


/**
 * @param {?proto.dma.AdventureTemplateProto.Encounter.Environment|undefined} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.prototype.setEnvironment = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearEnvironment = function() {
  return this.setEnvironment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.hasEnvironment = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Senses senses = 10;
 * @return {?proto.dma.AdventureTemplateProto.Encounter.Senses}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getSenses = function() {
  return /** @type{?proto.dma.AdventureTemplateProto.Encounter.Senses} */ (
    jspb.Message.getWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Senses, 10));
};


/**
 * @param {?proto.dma.AdventureTemplateProto.Encounter.Senses|undefined} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.prototype.setSenses = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearSenses = function() {
  return this.setSenses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.hasSenses = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated Creature creature = 11;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Creature>}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getCreatureList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Creature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Creature, 11));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Creature>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.prototype.setCreatureList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Creature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Creature}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.addCreature = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.dma.AdventureTemplateProto.Encounter.Creature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearCreatureList = function() {
  return this.setCreatureList([]);
};


/**
 * repeated string development = 12;
 * @return {!Array<string>}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getDevelopmentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.setDevelopmentList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.addDevelopment = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearDevelopmentList = function() {
  return this.setDevelopmentList([]);
};


/**
 * repeated Treasure treasure = 13;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.Treasure>}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getTreasureList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.Treasure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.Treasure, 13));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.Treasure>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.prototype.setTreasureList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.Treasure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.Treasure}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.addTreasure = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.dma.AdventureTemplateProto.Encounter.Treasure, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearTreasureList = function() {
  return this.setTreasureList([]);
};


/**
 * repeated SpellGroup spell_group = 14;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter.SpellGroup>}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.getSpellGroupList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter.SpellGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter.SpellGroup, 14));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter.SpellGroup>} value
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
*/
proto.dma.AdventureTemplateProto.Encounter.prototype.setSpellGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter.SpellGroup}
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.addSpellGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.dma.AdventureTemplateProto.Encounter.SpellGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto.Encounter} returns this
 */
proto.dma.AdventureTemplateProto.Encounter.prototype.clearSpellGroupList = function() {
  return this.setSpellGroupList([]);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.AdventureTemplateProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.AdventureTemplateProto} returns this
*/
proto.dma.AdventureTemplateProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.AdventureTemplateProto} returns this
 */
proto.dma.AdventureTemplateProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.AdventureTemplateProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Level recommended_level = 4;
 * @return {?proto.dma.AdventureTemplateProto.Level}
 */
proto.dma.AdventureTemplateProto.prototype.getRecommendedLevel = function() {
  return /** @type{?proto.dma.AdventureTemplateProto.Level} */ (
    jspb.Message.getWrapperField(this, proto.dma.AdventureTemplateProto.Level, 4));
};


/**
 * @param {?proto.dma.AdventureTemplateProto.Level|undefined} value
 * @return {!proto.dma.AdventureTemplateProto} returns this
*/
proto.dma.AdventureTemplateProto.prototype.setRecommendedLevel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.AdventureTemplateProto} returns this
 */
proto.dma.AdventureTemplateProto.prototype.clearRecommendedLevel = function() {
  return this.setRecommendedLevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.AdventureTemplateProto.prototype.hasRecommendedLevel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Encounter encounter = 5;
 * @return {!Array<!proto.dma.AdventureTemplateProto.Encounter>}
 */
proto.dma.AdventureTemplateProto.prototype.getEncounterList = function() {
  return /** @type{!Array<!proto.dma.AdventureTemplateProto.Encounter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.AdventureTemplateProto.Encounter, 5));
};


/**
 * @param {!Array<!proto.dma.AdventureTemplateProto.Encounter>} value
 * @return {!proto.dma.AdventureTemplateProto} returns this
*/
proto.dma.AdventureTemplateProto.prototype.setEncounterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dma.AdventureTemplateProto.Encounter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.AdventureTemplateProto.Encounter}
 */
proto.dma.AdventureTemplateProto.prototype.addEncounter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dma.AdventureTemplateProto.Encounter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.AdventureTemplateProto} returns this
 */
proto.dma.AdventureTemplateProto.prototype.clearEncounterList = function() {
  return this.setEncounterList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ProductProto.repeatedFields_ = [6,7,8,9,10,11,12,24,26,27,28];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ProductProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.dma.CommonProto.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    leader: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    notes: jspb.Message.getFieldWithDefault(msg, 5, ""),
    authorList: jspb.Message.toObjectList(msg.getAuthorList(),
    proto.dma.ProductProto.Person.toObject, includeInstance),
    editorList: jspb.Message.toObjectList(msg.getEditorList(),
    proto.dma.ProductProto.Person.toObject, includeInstance),
    coverList: jspb.Message.toObjectList(msg.getCoverList(),
    proto.dma.ProductProto.Person.toObject, includeInstance),
    cartographerList: jspb.Message.toObjectList(msg.getCartographerList(),
    proto.dma.ProductProto.Person.toObject, includeInstance),
    illustratorList: jspb.Message.toObjectList(msg.getIllustratorList(),
    proto.dma.ProductProto.Person.toObject, includeInstance),
    typographerList: jspb.Message.toObjectList(msg.getTypographerList(),
    proto.dma.ProductProto.Person.toObject, includeInstance),
    managerList: jspb.Message.toObjectList(msg.getManagerList(),
    proto.dma.ProductProto.Person.toObject, includeInstance),
    date: (f = msg.getDate()) && proto.dma.ProductProto.Date.toObject(includeInstance, f),
    isbn: (f = msg.getIsbn()) && proto.dma.ProductProto.ISBN.toObject(includeInstance, f),
    isbn13: (f = msg.getIsbn13()) && proto.dma.ProductProto.ISBN13.toObject(includeInstance, f),
    pages: jspb.Message.getFieldWithDefault(msg, 16, 0),
    system: jspb.Message.getFieldWithDefault(msg, 17, 0),
    audience: jspb.Message.getFieldWithDefault(msg, 18, 0),
    type: jspb.Message.getFieldWithDefault(msg, 19, 0),
    style: jspb.Message.getFieldWithDefault(msg, 20, 0),
    producer: jspb.Message.getFieldWithDefault(msg, 21, ""),
    volume: jspb.Message.getFieldWithDefault(msg, 22, ""),
    number: jspb.Message.getFieldWithDefault(msg, 23, ""),
    seriesList: (f = jspb.Message.getRepeatedField(msg, 24)) == null ? undefined : f,
    price: (f = msg.getPrice()) && value_pb.PriceProto.toObject(includeInstance, f),
    contentList: jspb.Message.toObjectList(msg.getContentList(),
    proto.dma.ProductProto.Content.toObject, includeInstance),
    requiredRequirementsList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
    optionalRequirementsList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
    layout: jspb.Message.getFieldWithDefault(msg, 29, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ProductProto}
 */
proto.dma.ProductProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductProto;
  return proto.dma.ProductProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductProto}
 */
proto.dma.ProductProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.CommonProto;
      reader.readMessage(value,proto.dma.CommonProto.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeader(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 6:
      var value = new proto.dma.ProductProto.Person;
      reader.readMessage(value,proto.dma.ProductProto.Person.deserializeBinaryFromReader);
      msg.addAuthor(value);
      break;
    case 7:
      var value = new proto.dma.ProductProto.Person;
      reader.readMessage(value,proto.dma.ProductProto.Person.deserializeBinaryFromReader);
      msg.addEditor(value);
      break;
    case 8:
      var value = new proto.dma.ProductProto.Person;
      reader.readMessage(value,proto.dma.ProductProto.Person.deserializeBinaryFromReader);
      msg.addCover(value);
      break;
    case 9:
      var value = new proto.dma.ProductProto.Person;
      reader.readMessage(value,proto.dma.ProductProto.Person.deserializeBinaryFromReader);
      msg.addCartographer(value);
      break;
    case 10:
      var value = new proto.dma.ProductProto.Person;
      reader.readMessage(value,proto.dma.ProductProto.Person.deserializeBinaryFromReader);
      msg.addIllustrator(value);
      break;
    case 11:
      var value = new proto.dma.ProductProto.Person;
      reader.readMessage(value,proto.dma.ProductProto.Person.deserializeBinaryFromReader);
      msg.addTypographer(value);
      break;
    case 12:
      var value = new proto.dma.ProductProto.Person;
      reader.readMessage(value,proto.dma.ProductProto.Person.deserializeBinaryFromReader);
      msg.addManager(value);
      break;
    case 13:
      var value = new proto.dma.ProductProto.Date;
      reader.readMessage(value,proto.dma.ProductProto.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 14:
      var value = new proto.dma.ProductProto.ISBN;
      reader.readMessage(value,proto.dma.ProductProto.ISBN.deserializeBinaryFromReader);
      msg.setIsbn(value);
      break;
    case 15:
      var value = new proto.dma.ProductProto.ISBN13;
      reader.readMessage(value,proto.dma.ProductProto.ISBN13.deserializeBinaryFromReader);
      msg.setIsbn13(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPages(value);
      break;
    case 17:
      var value = /** @type {!proto.dma.ProductProto.System} */ (reader.readEnum());
      msg.setSystem(value);
      break;
    case 18:
      var value = /** @type {!proto.dma.ProductProto.Audience} */ (reader.readEnum());
      msg.setAudience(value);
      break;
    case 19:
      var value = /** @type {!proto.dma.ProductProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 20:
      var value = /** @type {!proto.dma.ProductProto.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducer(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolume(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.addSeries(value);
      break;
    case 25:
      var value = new value_pb.PriceProto;
      reader.readMessage(value,value_pb.PriceProto.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 26:
      var value = new proto.dma.ProductProto.Content;
      reader.readMessage(value,proto.dma.ProductProto.Content.deserializeBinaryFromReader);
      msg.addContent(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequiredRequirements(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.addOptionalRequirements(value);
      break;
    case 29:
      var value = /** @type {!proto.dma.ProductProto.Layout} */ (reader.readEnum());
      msg.setLayout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ProductProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.CommonProto.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLeader();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAuthorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.dma.ProductProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getEditorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.dma.ProductProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getCoverList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.dma.ProductProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getCartographerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.dma.ProductProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getIllustratorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.dma.ProductProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getTypographerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.dma.ProductProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getManagerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.dma.ProductProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.dma.ProductProto.Date.serializeBinaryToWriter
    );
  }
  f = message.getIsbn();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.dma.ProductProto.ISBN.serializeBinaryToWriter
    );
  }
  f = message.getIsbn13();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.dma.ProductProto.ISBN13.serializeBinaryToWriter
    );
  }
  f = message.getPages();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getSystem();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getAudience();
  if (f !== 0.0) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = message.getProducer();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getVolume();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getSeriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      24,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      value_pb.PriceProto.serializeBinaryToWriter
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.dma.ProductProto.Content.serializeBinaryToWriter
    );
  }
  f = message.getRequiredRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getOptionalRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getLayout();
  if (f !== 0.0) {
    writer.writeEnum(
      29,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ProductProto.System = {
  UNKNOWN_SYSTEM: 0,
  NONE: 1,
  CHAINMAIL: 2,
  DND_1ST: 3,
  ADND_1ST: 4,
  ADND_2ND: 5,
  ADND_2ND_SAGA: 6,
  ADND_REVISED: 7,
  DND_3RD: 8,
  DND_3_5: 9,
  DND_4: 10,
  DND_NEXT: 11,
  DND_5E: 49,
  D20_MODERN: 12,
  D20_FUTUTRE: 13,
  D20: 14,
  ALTERNITY: 15,
  AMAZING_ENGINE: 16,
  BLOOD_WARS: 17,
  CHAOSIUM: 18,
  DARK_HEAVEN: 19,
  DRAGON_DICE: 20,
  DRAGON_STRIKE: 21,
  DUEL_MASTER: 22,
  ENDLESS_QUEST: 23,
  FIRST_QUEST: 24,
  GAMMA_WORLD: 25,
  GANGBUSTERS: 26,
  LEGEND_OF_THE_FIVE_RINGS: 27,
  MAGIC_THE_GATHERING: 28,
  MARVEL_SUPER_DICE: 29,
  MLB_SHOWDOWN_2002: 30,
  MLB_SHOWDOWN_2003: 31,
  MLB_SHOWDOWN: 32,
  NEOPETS: 33,
  ONE_ON_ONE: 34,
  POKEMON: 35,
  SAGA: 36,
  SPECIAL: 37,
  SPELLFIRE: 38,
  STAR_WARS_TCG: 39,
  STAR_WARS: 40,
  SUPER_ENDLESS_QUEST: 41,
  SWORD_AND_SORCERY: 42,
  TERROR_TRACKS: 43,
  TERROR_TRAX: 44,
  WILD_SPACE: 45,
  WORLD_WAR_II: 46,
  XXVC: 47,
  MARVEL_SUPER_HEROES: 48
};

/**
 * @enum {number}
 */
proto.dma.ProductProto.Audience = {
  DM: 0,
  PLAYER: 1,
  ALL: 2,
  UNKNOWN: 3
};

/**
 * @enum {number}
 */
proto.dma.ProductProto.Type = {
  UNKNOWN_TYPE: 0,
  ACCESSORY: 1,
  ADVENTURE: 2,
  BOARD_GAME: 3,
  BOOSTER_PACK: 4,
  CALENDAR: 5,
  CAMPAIGN_EXPANSION: 6,
  CAMPAIGN_SETTING: 7,
  CARD_GAME: 8,
  CARDS_TYPE: 9,
  CATALOG: 10,
  COLLECTION: 11,
  COMICS: 12,
  COOKBOOK: 13,
  DICE: 14,
  ELECTRONIC_ACCESSORY: 15,
  GUIDE: 16,
  MAGAZINE: 17,
  MINIATURE: 18,
  MONSTER_COMPENDIUM: 19,
  NOVEL: 20,
  PROMOTION: 21,
  RULEBOOK: 22,
  RULES_SUPPLEMENT: 23,
  SOFTWARE: 24,
  SOURCEBOOK: 25,
  SPECIAL_BOOK: 26,
  SUPPLEMENT: 27
};

/**
 * @enum {number}
 */
proto.dma.ProductProto.Style = {
  UNKNOWN_STYLE: 0,
  BOOKLET: 1,
  BOX: 2,
  CARDS_STYLE: 3,
  FLYER: 4,
  FOLDER: 5,
  HARDCOVER: 6,
  MAP: 7,
  MEDIUM_BOX: 8,
  PACK: 9,
  PAPERBACK: 10,
  POSTER: 11,
  SCREEN: 12,
  SHEETS: 13,
  SMALL_BOX: 14,
  SOFT_COVER: 15,
  STICKER: 16
};

/**
 * @enum {number}
 */
proto.dma.ProductProto.Layout = {
  UNKNOWN_LAYOUT: 0,
  FULL_COLOR: 1,
  FOUR_COLOR: 2,
  TWO_COLOR: 3,
  COLOR_COVER: 4,
  BLACK_AND_WHITE: 5,
  MIXED: 6
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ProductProto.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductProto.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductProto.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    job: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductProto.Person;
  return proto.dma.ProductProto.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductProto.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ProductProto.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductProto.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductProto.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJob();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.ProductProto.Person.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.Person} returns this
 */
proto.dma.ProductProto.Person.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string job = 2;
 * @return {string}
 */
proto.dma.ProductProto.Person.prototype.getJob = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.Person} returns this
 */
proto.dma.ProductProto.Person.prototype.setJob = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ProductProto.Date.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductProto.Date.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductProto.Date} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.Date.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ProductProto.Date}
 */
proto.dma.ProductProto.Date.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductProto.Date;
  return proto.dma.ProductProto.Date.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductProto.Date} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductProto.Date}
 */
proto.dma.ProductProto.Date.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ProductProto.Date.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductProto.Date.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductProto.Date} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.Date.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.dma.ProductProto.Date.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductProto.Date} returns this
 */
proto.dma.ProductProto.Date.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.dma.ProductProto.Date.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductProto.Date} returns this
 */
proto.dma.ProductProto.Date.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ProductProto.ISBN.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductProto.ISBN.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductProto.ISBN} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.ISBN.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: jspb.Message.getFieldWithDefault(msg, 1, ""),
    publisher: jspb.Message.getFieldWithDefault(msg, 2, ""),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    check: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ProductProto.ISBN}
 */
proto.dma.ProductProto.ISBN.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductProto.ISBN;
  return proto.dma.ProductProto.ISBN.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductProto.ISBN} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductProto.ISBN}
 */
proto.dma.ProductProto.ISBN.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublisher(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheck(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ProductProto.ISBN.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductProto.ISBN.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductProto.ISBN} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.ISBN.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPublisher();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCheck();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.dma.ProductProto.ISBN.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.ISBN} returns this
 */
proto.dma.ProductProto.ISBN.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string publisher = 2;
 * @return {string}
 */
proto.dma.ProductProto.ISBN.prototype.getPublisher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.ISBN} returns this
 */
proto.dma.ProductProto.ISBN.prototype.setPublisher = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.dma.ProductProto.ISBN.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.ISBN} returns this
 */
proto.dma.ProductProto.ISBN.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 check = 4;
 * @return {number}
 */
proto.dma.ProductProto.ISBN.prototype.getCheck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductProto.ISBN} returns this
 */
proto.dma.ProductProto.ISBN.prototype.setCheck = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ProductProto.ISBN13.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductProto.ISBN13.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductProto.ISBN13} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.ISBN13.toObject = function(includeInstance, msg) {
  var f, obj = {
    group13: jspb.Message.getFieldWithDefault(msg, 1, ""),
    group: jspb.Message.getFieldWithDefault(msg, 2, ""),
    publisher: jspb.Message.getFieldWithDefault(msg, 3, ""),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    check: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ProductProto.ISBN13}
 */
proto.dma.ProductProto.ISBN13.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductProto.ISBN13;
  return proto.dma.ProductProto.ISBN13.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductProto.ISBN13} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductProto.ISBN13}
 */
proto.dma.ProductProto.ISBN13.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup13(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublisher(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheck(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ProductProto.ISBN13.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductProto.ISBN13.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductProto.ISBN13} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.ISBN13.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup13();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublisher();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCheck();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string group13 = 1;
 * @return {string}
 */
proto.dma.ProductProto.ISBN13.prototype.getGroup13 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.ISBN13} returns this
 */
proto.dma.ProductProto.ISBN13.prototype.setGroup13 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group = 2;
 * @return {string}
 */
proto.dma.ProductProto.ISBN13.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.ISBN13} returns this
 */
proto.dma.ProductProto.ISBN13.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string publisher = 3;
 * @return {string}
 */
proto.dma.ProductProto.ISBN13.prototype.getPublisher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.ISBN13} returns this
 */
proto.dma.ProductProto.ISBN13.prototype.setPublisher = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.dma.ProductProto.ISBN13.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.ISBN13} returns this
 */
proto.dma.ProductProto.ISBN13.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 check = 5;
 * @return {number}
 */
proto.dma.ProductProto.ISBN13.prototype.getCheck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductProto.ISBN13} returns this
 */
proto.dma.ProductProto.ISBN13.prototype.setCheck = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ProductProto.Content.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductProto.Content.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductProto.Content} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.Content.toObject = function(includeInstance, msg) {
  var f, obj = {
    part: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    number: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ProductProto.Content}
 */
proto.dma.ProductProto.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductProto.Content;
  return proto.dma.ProductProto.Content.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductProto.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductProto.Content}
 */
proto.dma.ProductProto.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ProductProto.Content.Part} */ (reader.readEnum());
      msg.setPart(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ProductProto.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductProto.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductProto.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductProto.Content.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPart();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ProductProto.Content.Part = {
  UNKNOWN_PART: 0,
  BOARD: 1,
  BOOK: 2,
  BOOKLET: 3,
  BOX: 4,
  CARD: 5,
  CD: 6,
  COUNTER: 7,
  COVER: 8,
  DICE: 9,
  FLYER: 10,
  FOLDER: 11,
  GATEFOLD: 12,
  MAGNET: 13,
  MAP: 14,
  MINIATURE: 15,
  MISC: 16,
  OVERLAY: 17,
  PACK: 18,
  PAGE: 19,
  PLAYING_PIECE: 20,
  POSTER: 21,
  SCREEN: 22,
  SHEET: 23,
  STICKER: 24
};

/**
 * optional Part part = 1;
 * @return {!proto.dma.ProductProto.Content.Part}
 */
proto.dma.ProductProto.Content.prototype.getPart = function() {
  return /** @type {!proto.dma.ProductProto.Content.Part} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ProductProto.Content.Part} value
 * @return {!proto.dma.ProductProto.Content} returns this
 */
proto.dma.ProductProto.Content.prototype.setPart = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.ProductProto.Content.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto.Content} returns this
 */
proto.dma.ProductProto.Content.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.dma.ProductProto.Content.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductProto.Content} returns this
 */
proto.dma.ProductProto.Content.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CommonProto common = 1;
 * @return {?proto.dma.CommonProto}
 */
proto.dma.ProductProto.prototype.getCommon = function() {
  return /** @type{?proto.dma.CommonProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommonProto, 1));
};


/**
 * @param {?proto.dma.CommonProto|undefined} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductProto.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.dma.ProductProto.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string leader = 3;
 * @return {string}
 */
proto.dma.ProductProto.prototype.getLeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setLeader = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subtitle = 4;
 * @return {string}
 */
proto.dma.ProductProto.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string notes = 5;
 * @return {string}
 */
proto.dma.ProductProto.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Person author = 6;
 * @return {!Array<!proto.dma.ProductProto.Person>}
 */
proto.dma.ProductProto.prototype.getAuthorList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Person, 6));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Person>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setAuthorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.ProductProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.prototype.addAuthor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.ProductProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearAuthorList = function() {
  return this.setAuthorList([]);
};


/**
 * repeated Person editor = 7;
 * @return {!Array<!proto.dma.ProductProto.Person>}
 */
proto.dma.ProductProto.prototype.getEditorList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Person, 7));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Person>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setEditorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.dma.ProductProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.prototype.addEditor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.dma.ProductProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearEditorList = function() {
  return this.setEditorList([]);
};


/**
 * repeated Person cover = 8;
 * @return {!Array<!proto.dma.ProductProto.Person>}
 */
proto.dma.ProductProto.prototype.getCoverList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Person, 8));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Person>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setCoverList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dma.ProductProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.prototype.addCover = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dma.ProductProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearCoverList = function() {
  return this.setCoverList([]);
};


/**
 * repeated Person cartographer = 9;
 * @return {!Array<!proto.dma.ProductProto.Person>}
 */
proto.dma.ProductProto.prototype.getCartographerList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Person, 9));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Person>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setCartographerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.dma.ProductProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.prototype.addCartographer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.dma.ProductProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearCartographerList = function() {
  return this.setCartographerList([]);
};


/**
 * repeated Person illustrator = 10;
 * @return {!Array<!proto.dma.ProductProto.Person>}
 */
proto.dma.ProductProto.prototype.getIllustratorList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Person, 10));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Person>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setIllustratorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.dma.ProductProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.prototype.addIllustrator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.dma.ProductProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearIllustratorList = function() {
  return this.setIllustratorList([]);
};


/**
 * repeated Person typographer = 11;
 * @return {!Array<!proto.dma.ProductProto.Person>}
 */
proto.dma.ProductProto.prototype.getTypographerList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Person, 11));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Person>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setTypographerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.dma.ProductProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.prototype.addTypographer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.dma.ProductProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearTypographerList = function() {
  return this.setTypographerList([]);
};


/**
 * repeated Person manager = 12;
 * @return {!Array<!proto.dma.ProductProto.Person>}
 */
proto.dma.ProductProto.prototype.getManagerList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Person, 12));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Person>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setManagerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.dma.ProductProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Person}
 */
proto.dma.ProductProto.prototype.addManager = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.dma.ProductProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearManagerList = function() {
  return this.setManagerList([]);
};


/**
 * optional Date date = 13;
 * @return {?proto.dma.ProductProto.Date}
 */
proto.dma.ProductProto.prototype.getDate = function() {
  return /** @type{?proto.dma.ProductProto.Date} */ (
    jspb.Message.getWrapperField(this, proto.dma.ProductProto.Date, 13));
};


/**
 * @param {?proto.dma.ProductProto.Date|undefined} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductProto.prototype.hasDate = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ISBN isbn = 14;
 * @return {?proto.dma.ProductProto.ISBN}
 */
proto.dma.ProductProto.prototype.getIsbn = function() {
  return /** @type{?proto.dma.ProductProto.ISBN} */ (
    jspb.Message.getWrapperField(this, proto.dma.ProductProto.ISBN, 14));
};


/**
 * @param {?proto.dma.ProductProto.ISBN|undefined} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setIsbn = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearIsbn = function() {
  return this.setIsbn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductProto.prototype.hasIsbn = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ISBN13 isbn13 = 15;
 * @return {?proto.dma.ProductProto.ISBN13}
 */
proto.dma.ProductProto.prototype.getIsbn13 = function() {
  return /** @type{?proto.dma.ProductProto.ISBN13} */ (
    jspb.Message.getWrapperField(this, proto.dma.ProductProto.ISBN13, 15));
};


/**
 * @param {?proto.dma.ProductProto.ISBN13|undefined} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setIsbn13 = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearIsbn13 = function() {
  return this.setIsbn13(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductProto.prototype.hasIsbn13 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 pages = 16;
 * @return {number}
 */
proto.dma.ProductProto.prototype.getPages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setPages = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional System system = 17;
 * @return {!proto.dma.ProductProto.System}
 */
proto.dma.ProductProto.prototype.getSystem = function() {
  return /** @type {!proto.dma.ProductProto.System} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.dma.ProductProto.System} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setSystem = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional Audience audience = 18;
 * @return {!proto.dma.ProductProto.Audience}
 */
proto.dma.ProductProto.prototype.getAudience = function() {
  return /** @type {!proto.dma.ProductProto.Audience} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.dma.ProductProto.Audience} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setAudience = function(value) {
  return jspb.Message.setProto3EnumField(this, 18, value);
};


/**
 * optional Type type = 19;
 * @return {!proto.dma.ProductProto.Type}
 */
proto.dma.ProductProto.prototype.getType = function() {
  return /** @type {!proto.dma.ProductProto.Type} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.dma.ProductProto.Type} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional Style style = 20;
 * @return {!proto.dma.ProductProto.Style}
 */
proto.dma.ProductProto.prototype.getStyle = function() {
  return /** @type {!proto.dma.ProductProto.Style} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.dma.ProductProto.Style} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional string producer = 21;
 * @return {string}
 */
proto.dma.ProductProto.prototype.getProducer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setProducer = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string volume = 22;
 * @return {string}
 */
proto.dma.ProductProto.prototype.getVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string number = 23;
 * @return {string}
 */
proto.dma.ProductProto.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * repeated string series = 24;
 * @return {!Array<string>}
 */
proto.dma.ProductProto.prototype.getSeriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setSeriesList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.addSeries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearSeriesList = function() {
  return this.setSeriesList([]);
};


/**
 * optional PriceProto price = 25;
 * @return {?proto.dma.PriceProto}
 */
proto.dma.ProductProto.prototype.getPrice = function() {
  return /** @type{?proto.dma.PriceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.PriceProto, 25));
};


/**
 * @param {?proto.dma.PriceProto|undefined} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductProto.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * repeated Content content = 26;
 * @return {!Array<!proto.dma.ProductProto.Content>}
 */
proto.dma.ProductProto.prototype.getContentList = function() {
  return /** @type{!Array<!proto.dma.ProductProto.Content>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto.Content, 26));
};


/**
 * @param {!Array<!proto.dma.ProductProto.Content>} value
 * @return {!proto.dma.ProductProto} returns this
*/
proto.dma.ProductProto.prototype.setContentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.dma.ProductProto.Content=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto.Content}
 */
proto.dma.ProductProto.prototype.addContent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.dma.ProductProto.Content, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearContentList = function() {
  return this.setContentList([]);
};


/**
 * repeated string required_requirements = 27;
 * @return {!Array<string>}
 */
proto.dma.ProductProto.prototype.getRequiredRequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setRequiredRequirementsList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.addRequiredRequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearRequiredRequirementsList = function() {
  return this.setRequiredRequirementsList([]);
};


/**
 * repeated string optional_requirements = 28;
 * @return {!Array<string>}
 */
proto.dma.ProductProto.prototype.getOptionalRequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setOptionalRequirementsList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.addOptionalRequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.clearOptionalRequirementsList = function() {
  return this.setOptionalRequirementsList([]);
};


/**
 * optional Layout layout = 29;
 * @return {!proto.dma.ProductProto.Layout}
 */
proto.dma.ProductProto.prototype.getLayout = function() {
  return /** @type {!proto.dma.ProductProto.Layout} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.dma.ProductProto.Layout} value
 * @return {!proto.dma.ProductProto} returns this
 */
proto.dma.ProductProto.prototype.setLayout = function(value) {
  return jspb.Message.setProto3EnumField(this, 29, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ProductsProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.ProductsProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductsProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductsProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductsProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.dma.ProductProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.ProductsProto}
 */
proto.dma.ProductsProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductsProto;
  return proto.dma.ProductsProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductsProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductsProto}
 */
proto.dma.ProductsProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.ProductProto;
      reader.readMessage(value,proto.dma.ProductProto.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.ProductsProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductsProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductsProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductsProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.ProductProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProductProto products = 1;
 * @return {!Array<!proto.dma.ProductProto>}
 */
proto.dma.ProductsProto.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.dma.ProductProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductProto, 1));
};


/**
 * @param {!Array<!proto.dma.ProductProto>} value
 * @return {!proto.dma.ProductsProto} returns this
*/
proto.dma.ProductsProto.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.ProductProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductProto}
 */
proto.dma.ProductsProto.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.ProductProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductsProto} returns this
 */
proto.dma.ProductsProto.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MapsProto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MapsProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MapsProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MapsProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.dma.MapsProto.Map.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MapsProto}
 */
proto.dma.MapsProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MapsProto;
  return proto.dma.MapsProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MapsProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MapsProto}
 */
proto.dma.MapsProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.MapsProto.Map;
      reader.readMessage(value,proto.dma.MapsProto.Map.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MapsProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MapsProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MapsProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.MapsProto.Map.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MapsProto.Map.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MapsProto.Map.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MapsProto.Map.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MapsProto.Map} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.Map.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    layersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    pxPerSquare: jspb.Message.getFieldWithDefault(msg, 4, 0),
    background: jspb.Message.getFieldWithDefault(msg, 5, ""),
    width: jspb.Message.getFieldWithDefault(msg, 6, 0),
    height: jspb.Message.getFieldWithDefault(msg, 7, 0),
    attribution: (f = msg.getAttribution()) && proto.dma.MapsProto.Map.Attribution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MapsProto.Map}
 */
proto.dma.MapsProto.Map.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MapsProto.Map;
  return proto.dma.MapsProto.Map.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MapsProto.Map} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MapsProto.Map}
 */
proto.dma.MapsProto.Map.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLocations(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLayers(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPxPerSquare(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackground(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 8:
      var value = new proto.dma.MapsProto.Map.Attribution;
      reader.readMessage(value,proto.dma.MapsProto.Map.Attribution.deserializeBinaryFromReader);
      msg.setAttribution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MapsProto.Map.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MapsProto.Map.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MapsProto.Map} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.Map.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getLayersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPxPerSquare();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBackground();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getAttribution();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.dma.MapsProto.Map.Attribution.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dma.MapsProto.Map.Attribution.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MapsProto.Map.Attribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MapsProto.Map.Attribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.Map.Attribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    licence: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dma.MapsProto.Map.Attribution}
 */
proto.dma.MapsProto.Map.Attribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MapsProto.Map.Attribution;
  return proto.dma.MapsProto.Map.Attribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MapsProto.Map.Attribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MapsProto.Map.Attribution}
 */
proto.dma.MapsProto.Map.Attribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {!proto.dma.MapsProto.Map.Attribution.Licence} */ (reader.readEnum());
      msg.setLicence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dma.MapsProto.Map.Attribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MapsProto.Map.Attribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MapsProto.Map.Attribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.Map.Attribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLicence();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MapsProto.Map.Attribution.Licence = {
  UNKNOWN: 0,
  PUBLIC_DOMAIN: 1,
  COPYRIGHTED: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.MapsProto.Map.Attribution.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map.Attribution} returns this
 */
proto.dma.MapsProto.Map.Attribution.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.dma.MapsProto.Map.Attribution.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map.Attribution} returns this
 */
proto.dma.MapsProto.Map.Attribution.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Licence licence = 3;
 * @return {!proto.dma.MapsProto.Map.Attribution.Licence}
 */
proto.dma.MapsProto.Map.Attribution.prototype.getLicence = function() {
  return /** @type {!proto.dma.MapsProto.Map.Attribution.Licence} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dma.MapsProto.Map.Attribution.Licence} value
 * @return {!proto.dma.MapsProto.Map.Attribution} returns this
 */
proto.dma.MapsProto.Map.Attribution.prototype.setLicence = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.MapsProto.Map.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string locations = 2;
 * @return {!Array<string>}
 */
proto.dma.MapsProto.Map.prototype.getLocationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setLocationsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.addLocations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};


/**
 * repeated string layers = 3;
 * @return {!Array<string>}
 */
proto.dma.MapsProto.Map.prototype.getLayersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setLayersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.addLayers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.clearLayersList = function() {
  return this.setLayersList([]);
};


/**
 * optional int32 px_per_square = 4;
 * @return {number}
 */
proto.dma.MapsProto.Map.prototype.getPxPerSquare = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setPxPerSquare = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string background = 5;
 * @return {string}
 */
proto.dma.MapsProto.Map.prototype.getBackground = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setBackground = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 width = 6;
 * @return {number}
 */
proto.dma.MapsProto.Map.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 height = 7;
 * @return {number}
 */
proto.dma.MapsProto.Map.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Attribution attribution = 8;
 * @return {?proto.dma.MapsProto.Map.Attribution}
 */
proto.dma.MapsProto.Map.prototype.getAttribution = function() {
  return /** @type{?proto.dma.MapsProto.Map.Attribution} */ (
    jspb.Message.getWrapperField(this, proto.dma.MapsProto.Map.Attribution, 8));
};


/**
 * @param {?proto.dma.MapsProto.Map.Attribution|undefined} value
 * @return {!proto.dma.MapsProto.Map} returns this
*/
proto.dma.MapsProto.Map.prototype.setAttribution = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.clearAttribution = function() {
  return this.setAttribution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MapsProto.Map.prototype.hasAttribution = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Map maps = 1;
 * @return {!Array<!proto.dma.MapsProto.Map>}
 */
proto.dma.MapsProto.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.dma.MapsProto.Map>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MapsProto.Map, 1));
};


/**
 * @param {!Array<!proto.dma.MapsProto.Map>} value
 * @return {!proto.dma.MapsProto} returns this
*/
proto.dma.MapsProto.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.MapsProto.Map=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MapsProto.Map}
 */
proto.dma.MapsProto.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.MapsProto.Map, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MapsProto} returns this
 */
proto.dma.MapsProto.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};


goog.object.extend(exports, proto.dma);

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
goog.exportSymbol('proto.dma.ArmorTemplateProto', null, global);
goog.exportSymbol('proto.dma.ArmorTemplateProto.Type', null, global);
goog.exportSymbol('proto.dma.CommodityTemplateProto', null, global);
goog.exportSymbol('proto.dma.CompositeTemplateProto', null, global);
goog.exportSymbol('proto.dma.CompositeTemplateProto.Or', null, global);
goog.exportSymbol('proto.dma.ContainerTemplateProto', null, global);
goog.exportSymbol('proto.dma.ContainerTemplateProto.State', null, global);
goog.exportSymbol('proto.dma.CountedTemplateProto', null, global);
goog.exportSymbol('proto.dma.CountedTemplateProto.Unit', null, global);
goog.exportSymbol('proto.dma.FeatTemplateProto', null, global);
goog.exportSymbol('proto.dma.FeatTemplateProto.Qualifier', null, global);
goog.exportSymbol('proto.dma.IncompleteTemplateProto', null, global);
goog.exportSymbol('proto.dma.ItemLookupProto', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Appearance', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Lore', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Lore.Check', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Material', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Material.ValueType', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Probability', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Random', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Random.Type', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Substance', null, global);
goog.exportSymbol('proto.dma.ItemTemplateProto.Substance.Material', null, global);
goog.exportSymbol('proto.dma.LevelTemplateProto', null, global);
goog.exportSymbol('proto.dma.LevelTemplateProto.PerLevel', null, global);
goog.exportSymbol('proto.dma.LevelTemplateProto.Requirement', null, global);
goog.exportSymbol('proto.dma.LeveledTemplateProto', null, global);
goog.exportSymbol('proto.dma.LightTemplateProto', null, global);
goog.exportSymbol('proto.dma.LightTemplateProto.Light', null, global);
goog.exportSymbol('proto.dma.LightTemplateProto.Light.Shape', null, global);
goog.exportSymbol('proto.dma.MagicTemplateProto', null, global);
goog.exportSymbol('proto.dma.MagicTemplateProto.Modifier', null, global);
goog.exportSymbol('proto.dma.MagicTemplateProto.Type', null, global);
goog.exportSymbol('proto.dma.MapsProto', null, global);
goog.exportSymbol('proto.dma.MapsProto.Map', null, global);
goog.exportSymbol('proto.dma.MapsProto.Map.Attribution', null, global);
goog.exportSymbol('proto.dma.MapsProto.Map.Attribution.Licence', null, global);
goog.exportSymbol('proto.dma.MapsProto.Map.Layer', null, global);
goog.exportSymbol('proto.dma.MiniatureTemplateProto', null, global);
goog.exportSymbol('proto.dma.MiniatureTemplateProto.Rarity', null, global);
goog.exportSymbol('proto.dma.MiniaturesProto', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Abilities', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Advancement', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Age', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Attack', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Attack.Mode', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Attack.Style', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Climate', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Height', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Language', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Language.Modifier', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Language.Name', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Organization', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Organization.Plus', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Organization.Type', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Possession', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Saves', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Skill', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Terrain', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Treasure', null, global);
goog.exportSymbol('proto.dma.MonsterTemplateProto.Weight', null, global);
goog.exportSymbol('proto.dma.MultipleTemplateProto', null, global);
goog.exportSymbol('proto.dma.MultiuseTemplateProto', null, global);
goog.exportSymbol('proto.dma.ParametrizedTemplateProto', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Audience', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Content', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Content.Part', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Date', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.ISBN', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.ISBN13', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Layout', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Person', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Style', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.System', null, global);
goog.exportSymbol('proto.dma.ProductTemplateProto.Type', null, global);
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
goog.exportSymbol('proto.dma.SpellTemplateProto', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Components', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Descriptor', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Duration', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Effect', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Effect.Type', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Level', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Material', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Range', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.School', null, global);
goog.exportSymbol('proto.dma.SpellTemplateProto.Subschool', null, global);
goog.exportSymbol('proto.dma.TemplateProto', null, global);
goog.exportSymbol('proto.dma.TemplateProto.Naming', null, global);
goog.exportSymbol('proto.dma.TimedTemplateProto', null, global);
goog.exportSymbol('proto.dma.WeaponTemplateProto', null, global);
goog.exportSymbol('proto.dma.WeaponTemplateProto.Type', null, global);
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
proto.dma.TemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.TemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.TemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.TemplateProto.displayName = 'proto.dma.TemplateProto';
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
proto.dma.MonsterTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.displayName = 'proto.dma.MonsterTemplateProto';
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
proto.dma.MonsterTemplateProto.Abilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Abilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Abilities.displayName = 'proto.dma.MonsterTemplateProto.Abilities';
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
proto.dma.MonsterTemplateProto.Saves = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Saves, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Saves.displayName = 'proto.dma.MonsterTemplateProto.Saves';
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
proto.dma.MonsterTemplateProto.Attack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Attack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Attack.displayName = 'proto.dma.MonsterTemplateProto.Attack';
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
proto.dma.MonsterTemplateProto.Organization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MonsterTemplateProto.Organization.repeatedFields_, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Organization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Organization.displayName = 'proto.dma.MonsterTemplateProto.Organization';
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
proto.dma.MonsterTemplateProto.Organization.Plus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Organization.Plus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Organization.Plus.displayName = 'proto.dma.MonsterTemplateProto.Organization.Plus';
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
proto.dma.MonsterTemplateProto.Advancement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Advancement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Advancement.displayName = 'proto.dma.MonsterTemplateProto.Advancement';
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
proto.dma.MonsterTemplateProto.Language = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Language, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Language.displayName = 'proto.dma.MonsterTemplateProto.Language';
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
proto.dma.MonsterTemplateProto.Possession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Possession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Possession.displayName = 'proto.dma.MonsterTemplateProto.Possession';
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
proto.dma.MonsterTemplateProto.Skill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Skill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Skill.displayName = 'proto.dma.MonsterTemplateProto.Skill';
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
proto.dma.MonsterTemplateProto.Height = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Height, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Height.displayName = 'proto.dma.MonsterTemplateProto.Height';
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
proto.dma.MonsterTemplateProto.Weight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Weight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Weight.displayName = 'proto.dma.MonsterTemplateProto.Weight';
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
proto.dma.MonsterTemplateProto.Age = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MonsterTemplateProto.Age, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MonsterTemplateProto.Age.displayName = 'proto.dma.MonsterTemplateProto.Age';
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
proto.dma.ItemTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemTemplateProto.displayName = 'proto.dma.ItemTemplateProto';
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
proto.dma.ItemTemplateProto.Appearance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ItemTemplateProto.Appearance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemTemplateProto.Appearance.displayName = 'proto.dma.ItemTemplateProto.Appearance';
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
proto.dma.ItemTemplateProto.Substance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ItemTemplateProto.Substance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemTemplateProto.Substance.displayName = 'proto.dma.ItemTemplateProto.Substance';
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
proto.dma.ItemTemplateProto.Random = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemTemplateProto.Random.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemTemplateProto.Random, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemTemplateProto.Random.displayName = 'proto.dma.ItemTemplateProto.Random';
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
proto.dma.ItemTemplateProto.Material = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ItemTemplateProto.Material, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemTemplateProto.Material.displayName = 'proto.dma.ItemTemplateProto.Material';
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
proto.dma.ItemTemplateProto.Lore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ItemTemplateProto.Lore.repeatedFields_, null);
};
goog.inherits(proto.dma.ItemTemplateProto.Lore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemTemplateProto.Lore.displayName = 'proto.dma.ItemTemplateProto.Lore';
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
proto.dma.ItemTemplateProto.Lore.Check = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ItemTemplateProto.Lore.Check, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ItemTemplateProto.Lore.Check.displayName = 'proto.dma.ItemTemplateProto.Lore.Check';
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
proto.dma.WeaponTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.WeaponTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.WeaponTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.WeaponTemplateProto.displayName = 'proto.dma.WeaponTemplateProto';
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
proto.dma.MagicTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MagicTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MagicTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MagicTemplateProto.displayName = 'proto.dma.MagicTemplateProto';
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
proto.dma.MagicTemplateProto.Modifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MagicTemplateProto.Modifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MagicTemplateProto.Modifier.displayName = 'proto.dma.MagicTemplateProto.Modifier';
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
proto.dma.ArmorTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ArmorTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ArmorTemplateProto.displayName = 'proto.dma.ArmorTemplateProto';
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
proto.dma.MiniatureTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.MiniatureTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.MiniatureTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MiniatureTemplateProto.displayName = 'proto.dma.MiniatureTemplateProto';
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
proto.dma.SpellTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.SpellTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.SpellTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellTemplateProto.displayName = 'proto.dma.SpellTemplateProto';
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
proto.dma.SpellTemplateProto.Level = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.SpellTemplateProto.Level, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellTemplateProto.Level.displayName = 'proto.dma.SpellTemplateProto.Level';
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
proto.dma.SpellTemplateProto.Material = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.SpellTemplateProto.Material.repeatedFields_, null);
};
goog.inherits(proto.dma.SpellTemplateProto.Material, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellTemplateProto.Material.displayName = 'proto.dma.SpellTemplateProto.Material';
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
proto.dma.SpellTemplateProto.Effect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.SpellTemplateProto.Effect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellTemplateProto.Effect.displayName = 'proto.dma.SpellTemplateProto.Effect';
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
proto.dma.SpellTemplateProto.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.SpellTemplateProto.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.SpellTemplateProto.Duration.displayName = 'proto.dma.SpellTemplateProto.Duration';
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
proto.dma.ProductTemplateProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dma.ProductTemplateProto.repeatedFields_, null);
};
goog.inherits(proto.dma.ProductTemplateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductTemplateProto.displayName = 'proto.dma.ProductTemplateProto';
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
proto.dma.ProductTemplateProto.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductTemplateProto.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductTemplateProto.Person.displayName = 'proto.dma.ProductTemplateProto.Person';
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
proto.dma.ProductTemplateProto.Date = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductTemplateProto.Date, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductTemplateProto.Date.displayName = 'proto.dma.ProductTemplateProto.Date';
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
proto.dma.ProductTemplateProto.ISBN = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductTemplateProto.ISBN, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductTemplateProto.ISBN.displayName = 'proto.dma.ProductTemplateProto.ISBN';
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
proto.dma.ProductTemplateProto.ISBN13 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductTemplateProto.ISBN13, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductTemplateProto.ISBN13.displayName = 'proto.dma.ProductTemplateProto.ISBN13';
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
proto.dma.ProductTemplateProto.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.ProductTemplateProto.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.ProductTemplateProto.Content.displayName = 'proto.dma.ProductTemplateProto.Content';
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
proto.dma.MapsProto.Map.Layer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dma.MapsProto.Map.Layer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dma.MapsProto.Map.Layer.displayName = 'proto.dma.MapsProto.Map.Layer';
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
proto.dma.TemplateProto.repeatedFields_ = [3,4,5,6,7];



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
proto.dma.TemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.TemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.TemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.TemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    baseList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    categoryList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    synonymList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    referenceList: jspb.Message.toObjectList(msg.getReferenceList(),
    value_pb.ReferenceProto.toObject, includeInstance),
    worldList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    shortDescription: jspb.Message.getFieldWithDefault(msg, 9, ""),
    incomplete: jspb.Message.getFieldWithDefault(msg, 10, ""),
    baseOnly: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    naming: jspb.Message.getFieldWithDefault(msg, 12, 0),
    composedName: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.dma.TemplateProto}
 */
proto.dma.TemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.TemplateProto;
  return proto.dma.TemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.TemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.TemplateProto}
 */
proto.dma.TemplateProto.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addBase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategory(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSynonym(value);
      break;
    case 6:
      var value = new value_pb.ReferenceProto;
      reader.readMessage(value,value_pb.ReferenceProto.deserializeBinaryFromReader);
      msg.addReference(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addWorld(value);
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
      msg.setIncomplete(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBaseOnly(value);
      break;
    case 12:
      var value = /** @type {!proto.dma.TemplateProto.Naming} */ (reader.readEnum());
      msg.setNaming(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setComposedName(value);
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
proto.dma.TemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.TemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.TemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.TemplateProto.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getBaseList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCategoryList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSynonymList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getReferenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      value_pb.ReferenceProto.serializeBinaryToWriter
    );
  }
  f = message.getWorldList();
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
  f = message.getIncomplete();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * @enum {number}
 */
proto.dma.TemplateProto.Naming = {
  INFIX: 0,
  POSTFIX: 1,
  PREFIX: 2,
  IGNORE: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.dma.TemplateProto.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dma.TemplateProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string base = 3;
 * @return {!Array<string>}
 */
proto.dma.TemplateProto.prototype.getBaseList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setBaseList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.addBase = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.clearBaseList = function() {
  return this.setBaseList([]);
};


/**
 * repeated string category = 4;
 * @return {!Array<string>}
 */
proto.dma.TemplateProto.prototype.getCategoryList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setCategoryList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.addCategory = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.clearCategoryList = function() {
  return this.setCategoryList([]);
};


/**
 * repeated string synonym = 5;
 * @return {!Array<string>}
 */
proto.dma.TemplateProto.prototype.getSynonymList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setSynonymList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.addSynonym = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.clearSynonymList = function() {
  return this.setSynonymList([]);
};


/**
 * repeated ReferenceProto reference = 6;
 * @return {!Array<!proto.dma.ReferenceProto>}
 */
proto.dma.TemplateProto.prototype.getReferenceList = function() {
  return /** @type{!Array<!proto.dma.ReferenceProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.ReferenceProto, 6));
};


/**
 * @param {!Array<!proto.dma.ReferenceProto>} value
 * @return {!proto.dma.TemplateProto} returns this
*/
proto.dma.TemplateProto.prototype.setReferenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.ReferenceProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ReferenceProto}
 */
proto.dma.TemplateProto.prototype.addReference = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.ReferenceProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.clearReferenceList = function() {
  return this.setReferenceList([]);
};


/**
 * repeated string world = 7;
 * @return {!Array<string>}
 */
proto.dma.TemplateProto.prototype.getWorldList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setWorldList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.addWorld = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.clearWorldList = function() {
  return this.setWorldList([]);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.dma.TemplateProto.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string short_description = 9;
 * @return {string}
 */
proto.dma.TemplateProto.prototype.getShortDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setShortDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string incomplete = 10;
 * @return {string}
 */
proto.dma.TemplateProto.prototype.getIncomplete = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setIncomplete = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool base_only = 11;
 * @return {boolean}
 */
proto.dma.TemplateProto.prototype.getBaseOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setBaseOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional Naming naming = 12;
 * @return {!proto.dma.TemplateProto.Naming}
 */
proto.dma.TemplateProto.prototype.getNaming = function() {
  return /** @type {!proto.dma.TemplateProto.Naming} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.dma.TemplateProto.Naming} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setNaming = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string composed_name = 13;
 * @return {string}
 */
proto.dma.TemplateProto.prototype.getComposedName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.TemplateProto} returns this
 */
proto.dma.TemplateProto.prototype.setComposedName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
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
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.WorldTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.WorldTemplateProto} returns this
*/
proto.dma.WorldTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WorldTemplateProto} returns this
 */
proto.dma.WorldTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WorldTemplateProto.prototype.hasTemplate = function() {
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
proto.dma.MonsterTemplateProto.repeatedFields_ = [4,6,11,12,15,18,23,26,32,33,35,36,38];



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
proto.dma.MonsterTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
    size: (f = msg.getSize()) && value_pb.SizeProto.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    subtypeList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    hitDice: (f = msg.getHitDice()) && value_pb.DiceProto.toObject(includeInstance, f),
    speedList: jspb.Message.toObjectList(msg.getSpeedList(),
    value_pb.SpeedProto.toObject, includeInstance),
    naturalArmor: (f = msg.getNaturalArmor()) && value_pb.ModifierProto.toObject(includeInstance, f),
    baseAttack: jspb.Message.getFieldWithDefault(msg, 8, 0),
    abilities: (f = msg.getAbilities()) && proto.dma.MonsterTemplateProto.Abilities.toObject(includeInstance, f),
    saves: (f = msg.getSaves()) && proto.dma.MonsterTemplateProto.Saves.toObject(includeInstance, f),
    primaryAttackList: jspb.Message.toObjectList(msg.getPrimaryAttackList(),
    proto.dma.MonsterTemplateProto.Attack.toObject, includeInstance),
    secondaryAttackList: jspb.Message.toObjectList(msg.getSecondaryAttackList(),
    proto.dma.MonsterTemplateProto.Attack.toObject, includeInstance),
    space: (f = msg.getSpace()) && value_pb.DistanceProto.toObject(includeInstance, f),
    reach: (f = msg.getReach()) && value_pb.DistanceProto.toObject(includeInstance, f),
    featList: jspb.Message.toObjectList(msg.getFeatList(),
    value_pb.FeatSelection.toObject, includeInstance),
    climate: jspb.Message.getFieldWithDefault(msg, 16, 0),
    terrain: jspb.Message.getFieldWithDefault(msg, 17, 0),
    organizationList: jspb.Message.toObjectList(msg.getOrganizationList(),
    proto.dma.MonsterTemplateProto.Organization.toObject, includeInstance),
    challengeRating: (f = msg.getChallengeRating()) && value_pb.RationalProto.toObject(includeInstance, f),
    treasure: jspb.Message.getFieldWithDefault(msg, 20, 0),
    alignment: jspb.Message.getFieldWithDefault(msg, 21, 0),
    alignmentStatus: jspb.Message.getFieldWithDefault(msg, 22, 0),
    advancementList: jspb.Message.toObjectList(msg.getAdvancementList(),
    proto.dma.MonsterTemplateProto.Advancement.toObject, includeInstance),
    levelAdjustment: jspb.Message.getFieldWithDefault(msg, 24, 0),
    mainRace: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    languageList: jspb.Message.toObjectList(msg.getLanguageList(),
    proto.dma.MonsterTemplateProto.Language.toObject, includeInstance),
    encounter: jspb.Message.getFieldWithDefault(msg, 27, ""),
    combat: jspb.Message.getFieldWithDefault(msg, 28, ""),
    tactics: jspb.Message.getFieldWithDefault(msg, 29, ""),
    character: jspb.Message.getFieldWithDefault(msg, 30, ""),
    reproduction: jspb.Message.getFieldWithDefault(msg, 31, ""),
    possessionList: jspb.Message.toObjectList(msg.getPossessionList(),
    proto.dma.MonsterTemplateProto.Possession.toObject, includeInstance),
    proficiencyList: (f = jspb.Message.getRepeatedField(msg, 33)) == null ? undefined : f,
    quadruped: jspb.Message.getBooleanFieldWithDefault(msg, 34, false),
    qualityList: jspb.Message.toObjectList(msg.getQualityList(),
    proto.dma.ParametrizedTemplateProto.toObject, includeInstance),
    skillList: jspb.Message.toObjectList(msg.getSkillList(),
    proto.dma.MonsterTemplateProto.Skill.toObject, includeInstance),
    bonusFeat: jspb.Message.getBooleanFieldWithDefault(msg, 37, false),
    automaticFeatList: jspb.Message.toObjectList(msg.getAutomaticFeatList(),
    value_pb.FeatSelection.toObject, includeInstance),
    skillPointBonus: jspb.Message.getFieldWithDefault(msg, 39, 0),
    skillPointBonusFirstLevel: jspb.Message.getFieldWithDefault(msg, 40, 0),
    maleHeight: (f = msg.getMaleHeight()) && proto.dma.MonsterTemplateProto.Height.toObject(includeInstance, f),
    femaleHeight: (f = msg.getFemaleHeight()) && proto.dma.MonsterTemplateProto.Height.toObject(includeInstance, f),
    maleWeight: (f = msg.getMaleWeight()) && proto.dma.MonsterTemplateProto.Weight.toObject(includeInstance, f),
    femaleWeight: (f = msg.getFemaleWeight()) && proto.dma.MonsterTemplateProto.Weight.toObject(includeInstance, f),
    age: (f = msg.getAge()) && proto.dma.MonsterTemplateProto.Age.toObject(includeInstance, f)
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
 * @return {!proto.dma.MonsterTemplateProto}
 */
proto.dma.MonsterTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto;
  return proto.dma.MonsterTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto}
 */
proto.dma.MonsterTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 2:
      var value = new value_pb.SizeProto;
      reader.readMessage(value,value_pb.SizeProto.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {!proto.dma.MonsterType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.dma.MonsterSubtype>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSubtype(values[i]);
      }
      break;
    case 5:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setHitDice(value);
      break;
    case 6:
      var value = new value_pb.SpeedProto;
      reader.readMessage(value,value_pb.SpeedProto.deserializeBinaryFromReader);
      msg.addSpeed(value);
      break;
    case 7:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setNaturalArmor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaseAttack(value);
      break;
    case 9:
      var value = new proto.dma.MonsterTemplateProto.Abilities;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Abilities.deserializeBinaryFromReader);
      msg.setAbilities(value);
      break;
    case 10:
      var value = new proto.dma.MonsterTemplateProto.Saves;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Saves.deserializeBinaryFromReader);
      msg.setSaves(value);
      break;
    case 11:
      var value = new proto.dma.MonsterTemplateProto.Attack;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Attack.deserializeBinaryFromReader);
      msg.addPrimaryAttack(value);
      break;
    case 12:
      var value = new proto.dma.MonsterTemplateProto.Attack;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Attack.deserializeBinaryFromReader);
      msg.addSecondaryAttack(value);
      break;
    case 13:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 14:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setReach(value);
      break;
    case 15:
      var value = new value_pb.FeatSelection;
      reader.readMessage(value,value_pb.FeatSelection.deserializeBinaryFromReader);
      msg.addFeat(value);
      break;
    case 16:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Climate} */ (reader.readEnum());
      msg.setClimate(value);
      break;
    case 17:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Terrain} */ (reader.readEnum());
      msg.setTerrain(value);
      break;
    case 18:
      var value = new proto.dma.MonsterTemplateProto.Organization;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Organization.deserializeBinaryFromReader);
      msg.addOrganization(value);
      break;
    case 19:
      var value = new value_pb.RationalProto;
      reader.readMessage(value,value_pb.RationalProto.deserializeBinaryFromReader);
      msg.setChallengeRating(value);
      break;
    case 20:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Treasure} */ (reader.readEnum());
      msg.setTreasure(value);
      break;
    case 21:
      var value = /** @type {!proto.dma.Alignment} */ (reader.readEnum());
      msg.setAlignment(value);
      break;
    case 22:
      var value = /** @type {!proto.dma.AlignmentStatus} */ (reader.readEnum());
      msg.setAlignmentStatus(value);
      break;
    case 23:
      var value = new proto.dma.MonsterTemplateProto.Advancement;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Advancement.deserializeBinaryFromReader);
      msg.addAdvancement(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelAdjustment(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMainRace(value);
      break;
    case 26:
      var value = new proto.dma.MonsterTemplateProto.Language;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Language.deserializeBinaryFromReader);
      msg.addLanguage(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncounter(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setCombat(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setTactics(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacter(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setReproduction(value);
      break;
    case 32:
      var value = new proto.dma.MonsterTemplateProto.Possession;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Possession.deserializeBinaryFromReader);
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
    case 36:
      var value = new proto.dma.MonsterTemplateProto.Skill;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Skill.deserializeBinaryFromReader);
      msg.addSkill(value);
      break;
    case 37:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBonusFeat(value);
      break;
    case 38:
      var value = new value_pb.FeatSelection;
      reader.readMessage(value,value_pb.FeatSelection.deserializeBinaryFromReader);
      msg.addAutomaticFeat(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkillPointBonus(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkillPointBonusFirstLevel(value);
      break;
    case 41:
      var value = new proto.dma.MonsterTemplateProto.Height;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Height.deserializeBinaryFromReader);
      msg.setMaleHeight(value);
      break;
    case 42:
      var value = new proto.dma.MonsterTemplateProto.Height;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Height.deserializeBinaryFromReader);
      msg.setFemaleHeight(value);
      break;
    case 43:
      var value = new proto.dma.MonsterTemplateProto.Weight;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Weight.deserializeBinaryFromReader);
      msg.setMaleWeight(value);
      break;
    case 44:
      var value = new proto.dma.MonsterTemplateProto.Weight;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Weight.deserializeBinaryFromReader);
      msg.setFemaleWeight(value);
      break;
    case 45:
      var value = new proto.dma.MonsterTemplateProto.Age;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Age.deserializeBinaryFromReader);
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
proto.dma.MonsterTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.SizeProto.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSubtypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getHitDice();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getSpeedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      value_pb.SpeedProto.serializeBinaryToWriter
    );
  }
  f = message.getNaturalArmor();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getBaseAttack();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getAbilities();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dma.MonsterTemplateProto.Abilities.serializeBinaryToWriter
    );
  }
  f = message.getSaves();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.dma.MonsterTemplateProto.Saves.serializeBinaryToWriter
    );
  }
  f = message.getPrimaryAttackList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.dma.MonsterTemplateProto.Attack.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryAttackList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.dma.MonsterTemplateProto.Attack.serializeBinaryToWriter
    );
  }
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getReach();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getFeatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      value_pb.FeatSelection.serializeBinaryToWriter
    );
  }
  f = message.getClimate();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getTerrain();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getOrganizationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.dma.MonsterTemplateProto.Organization.serializeBinaryToWriter
    );
  }
  f = message.getChallengeRating();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      value_pb.RationalProto.serializeBinaryToWriter
    );
  }
  f = message.getTreasure();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = message.getAlignment();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getAlignmentStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getAdvancementList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto.dma.MonsterTemplateProto.Advancement.serializeBinaryToWriter
    );
  }
  f = message.getLevelAdjustment();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getMainRace();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getLanguageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.dma.MonsterTemplateProto.Language.serializeBinaryToWriter
    );
  }
  f = message.getEncounter();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getCombat();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getTactics();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getCharacter();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getReproduction();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getPossessionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      32,
      f,
      proto.dma.MonsterTemplateProto.Possession.serializeBinaryToWriter
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
  f = message.getSkillList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      36,
      f,
      proto.dma.MonsterTemplateProto.Skill.serializeBinaryToWriter
    );
  }
  f = message.getBonusFeat();
  if (f) {
    writer.writeBool(
      37,
      f
    );
  }
  f = message.getAutomaticFeatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      38,
      f,
      value_pb.FeatSelection.serializeBinaryToWriter
    );
  }
  f = message.getSkillPointBonus();
  if (f !== 0) {
    writer.writeInt32(
      39,
      f
    );
  }
  f = message.getSkillPointBonusFirstLevel();
  if (f !== 0) {
    writer.writeInt32(
      40,
      f
    );
  }
  f = message.getMaleHeight();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.dma.MonsterTemplateProto.Height.serializeBinaryToWriter
    );
  }
  f = message.getFemaleHeight();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.dma.MonsterTemplateProto.Height.serializeBinaryToWriter
    );
  }
  f = message.getMaleWeight();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.dma.MonsterTemplateProto.Weight.serializeBinaryToWriter
    );
  }
  f = message.getFemaleWeight();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.dma.MonsterTemplateProto.Weight.serializeBinaryToWriter
    );
  }
  f = message.getAge();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.dma.MonsterTemplateProto.Age.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MonsterTemplateProto.Climate = {
  UNKNOWN_CLIMATE: 0,
  WARM: 1,
  COLD_CLIMATE: 2,
  ANY: 3,
  TEMPERATE: 4
};

/**
 * @enum {number}
 */
proto.dma.MonsterTemplateProto.Terrain = {
  UNKNOWN_TERRAIN: 0,
  FOREST: 1,
  MARSH: 2,
  HILLS: 3,
  MOUNTAIN: 4,
  DESERT: 5,
  PLAINS: 6,
  AQUATIC_TERRAIN: 7,
  UNDERGROUND: 8,
  INFERNAL_BATTLEFIELD_OF_ACHERON: 9,
  INFINITE_LAYERS_OF_THE_ABYSS: 10,
  ELEMENTAL_PLANE_OF_AIR: 11,
  ELEMENTAL_PLANE_OF_EARTH: 12,
  ELEMENTAL_PLANE_OF_FIRE: 13,
  ELEMENTAL_PLANE_OF_WATER: 14,
  WINDSWEPT_DEPTHS_OF_PANDEMONIUM: 15,
  ANY_TERRAIN: 16
};

/**
 * @enum {number}
 */
proto.dma.MonsterTemplateProto.Treasure = {
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
proto.dma.MonsterTemplateProto.Abilities.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Abilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Abilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Abilities.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.MonsterTemplateProto.Abilities}
 */
proto.dma.MonsterTemplateProto.Abilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Abilities;
  return proto.dma.MonsterTemplateProto.Abilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Abilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Abilities}
 */
proto.dma.MonsterTemplateProto.Abilities.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.MonsterTemplateProto.Abilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Abilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Abilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Abilities.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.MonsterTemplateProto.Abilities.prototype.getStrength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Abilities} returns this
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.setStrength = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 dexterity = 2;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.getDexterity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Abilities} returns this
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.setDexterity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 constitution = 3;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.getConstitution = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Abilities} returns this
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.setConstitution = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 wisdom = 4;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.getWisdom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Abilities} returns this
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.setWisdom = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 intelligence = 5;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.getIntelligence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Abilities} returns this
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.setIntelligence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 charisma = 6;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.getCharisma = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Abilities} returns this
 */
proto.dma.MonsterTemplateProto.Abilities.prototype.setCharisma = function(value) {
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
proto.dma.MonsterTemplateProto.Saves.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Saves.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Saves} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Saves.toObject = function(includeInstance, msg) {
  var f, obj = {
    fortitude: jspb.Message.getFieldWithDefault(msg, 1, 0),
    will: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reflex: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.dma.MonsterTemplateProto.Saves}
 */
proto.dma.MonsterTemplateProto.Saves.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Saves;
  return proto.dma.MonsterTemplateProto.Saves.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Saves} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Saves}
 */
proto.dma.MonsterTemplateProto.Saves.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFortitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWill(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReflex(value);
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
proto.dma.MonsterTemplateProto.Saves.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Saves.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Saves} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Saves.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFortitude();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWill();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getReflex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 fortitude = 1;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Saves.prototype.getFortitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Saves} returns this
 */
proto.dma.MonsterTemplateProto.Saves.prototype.setFortitude = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 will = 2;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Saves.prototype.getWill = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Saves} returns this
 */
proto.dma.MonsterTemplateProto.Saves.prototype.setWill = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 reflex = 3;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Saves.prototype.getReflex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Saves} returns this
 */
proto.dma.MonsterTemplateProto.Saves.prototype.setReflex = function(value) {
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
proto.dma.MonsterTemplateProto.Attack.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Attack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Attack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Attack.toObject = function(includeInstance, msg) {
  var f, obj = {
    attacks: (f = msg.getAttacks()) && value_pb.DiceProto.toObject(includeInstance, f),
    mode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    style: jspb.Message.getFieldWithDefault(msg, 3, 0),
    damage: (f = msg.getDamage()) && value_pb.DamageProto.toObject(includeInstance, f)
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
 * @return {!proto.dma.MonsterTemplateProto.Attack}
 */
proto.dma.MonsterTemplateProto.Attack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Attack;
  return proto.dma.MonsterTemplateProto.Attack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Attack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Attack}
 */
proto.dma.MonsterTemplateProto.Attack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setAttacks(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Attack.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 3:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Attack.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 4:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.setDamage(value);
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
proto.dma.MonsterTemplateProto.Attack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Attack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Attack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Attack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttacks();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStyle();
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
};


/**
 * @enum {number}
 */
proto.dma.MonsterTemplateProto.Attack.Mode = {
  UNKNOWN_MODE: 0,
  TENTACLE: 1,
  CLAW: 2,
  BITE: 3,
  FIST: 4,
  QUILL: 5,
  WEAPON: 6,
  TOUCH: 7,
  INCORPOREAL_TOUCH: 8,
  SLAM: 9,
  STING: 10,
  SWARM: 11,
  RAY: 12,
  HOOF: 13,
  SNAKES: 14,
  WEB: 15
};

/**
 * @enum {number}
 */
proto.dma.MonsterTemplateProto.Attack.Style = {
  UNKNOWN_STYLE: 0,
  MELEE: 1,
  RANGED: 2
};

/**
 * optional DiceProto attacks = 1;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Attack.prototype.getAttacks = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 1));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Attack} returns this
*/
proto.dma.MonsterTemplateProto.Attack.prototype.setAttacks = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Attack} returns this
 */
proto.dma.MonsterTemplateProto.Attack.prototype.clearAttacks = function() {
  return this.setAttacks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Attack.prototype.hasAttacks = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Mode mode = 2;
 * @return {!proto.dma.MonsterTemplateProto.Attack.Mode}
 */
proto.dma.MonsterTemplateProto.Attack.prototype.getMode = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Attack.Mode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Attack.Mode} value
 * @return {!proto.dma.MonsterTemplateProto.Attack} returns this
 */
proto.dma.MonsterTemplateProto.Attack.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Style style = 3;
 * @return {!proto.dma.MonsterTemplateProto.Attack.Style}
 */
proto.dma.MonsterTemplateProto.Attack.prototype.getStyle = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Attack.Style} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Attack.Style} value
 * @return {!proto.dma.MonsterTemplateProto.Attack} returns this
 */
proto.dma.MonsterTemplateProto.Attack.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional DamageProto damage = 4;
 * @return {?proto.dma.DamageProto}
 */
proto.dma.MonsterTemplateProto.Attack.prototype.getDamage = function() {
  return /** @type{?proto.dma.DamageProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DamageProto, 4));
};


/**
 * @param {?proto.dma.DamageProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Attack} returns this
*/
proto.dma.MonsterTemplateProto.Attack.prototype.setDamage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Attack} returns this
 */
proto.dma.MonsterTemplateProto.Attack.prototype.clearDamage = function() {
  return this.setDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Attack.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MonsterTemplateProto.Organization.repeatedFields_ = [3];



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
proto.dma.MonsterTemplateProto.Organization.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Organization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Organization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Organization.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: (f = msg.getNumber()) && value_pb.DiceProto.toObject(includeInstance, f),
    plusList: jspb.Message.toObjectList(msg.getPlusList(),
    proto.dma.MonsterTemplateProto.Organization.Plus.toObject, includeInstance)
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
 * @return {!proto.dma.MonsterTemplateProto.Organization}
 */
proto.dma.MonsterTemplateProto.Organization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Organization;
  return proto.dma.MonsterTemplateProto.Organization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Organization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Organization}
 */
proto.dma.MonsterTemplateProto.Organization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Organization.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
      msg.setNumber(value);
      break;
    case 3:
      var value = new proto.dma.MonsterTemplateProto.Organization.Plus;
      reader.readMessage(value,proto.dma.MonsterTemplateProto.Organization.Plus.deserializeBinaryFromReader);
      msg.addPlus(value);
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
proto.dma.MonsterTemplateProto.Organization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Organization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Organization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Organization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
    );
  }
  f = message.getPlusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dma.MonsterTemplateProto.Organization.Plus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MonsterTemplateProto.Organization.Type = {
  UNKNOWN: 0,
  ANY: 1,
  BAND: 2,
  BROOD: 3,
  COLONY: 4,
  COVEY: 5,
  FLIGHT: 6,
  FLOCK: 7,
  GANG: 8,
  HERD: 9,
  INFESTATION: 10,
  NEST: 11,
  PACK: 12,
  PAIR: 13,
  PATROL: 14,
  SLAVER_BROOD: 15,
  SOLITARY: 16,
  SQUAD: 17,
  STORM: 18,
  SWARM: 19,
  TANGLE: 20,
  TROUPE: 21,
  COMPANY: 22,
  DOMESTICATED: 23,
  WARBAND: 24,
  TRIBE: 25,
  HUNTING_PARTY: 26,
  RAIDING_PARTY: 27,
  TRADING_PARTY: 28,
  TEAM: 29,
  CLAN: 30,
  CLUTCH: 31
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
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Organization.Plus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Organization.Plus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Organization.Plus.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: (f = msg.getNumber()) && value_pb.DiceProto.toObject(includeInstance, f),
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
 * @return {!proto.dma.MonsterTemplateProto.Organization.Plus}
 */
proto.dma.MonsterTemplateProto.Organization.Plus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Organization.Plus;
  return proto.dma.MonsterTemplateProto.Organization.Plus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Organization.Plus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Organization.Plus}
 */
proto.dma.MonsterTemplateProto.Organization.Plus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.DiceProto;
      reader.readMessage(value,value_pb.DiceProto.deserializeBinaryFromReader);
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
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Organization.Plus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Organization.Plus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Organization.Plus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.DiceProto.serializeBinaryToWriter
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
 * optional DiceProto number = 1;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.getNumber = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 1));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Organization.Plus} returns this
*/
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.setNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Organization.Plus} returns this
 */
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.clearNumber = function() {
  return this.setNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto.Organization.Plus} returns this
 */
proto.dma.MonsterTemplateProto.Organization.Plus.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Type type = 1;
 * @return {!proto.dma.MonsterTemplateProto.Organization.Type}
 */
proto.dma.MonsterTemplateProto.Organization.prototype.getType = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Organization.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Organization.Type} value
 * @return {!proto.dma.MonsterTemplateProto.Organization} returns this
 */
proto.dma.MonsterTemplateProto.Organization.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DiceProto number = 2;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Organization.prototype.getNumber = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 2));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Organization} returns this
*/
proto.dma.MonsterTemplateProto.Organization.prototype.setNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Organization} returns this
 */
proto.dma.MonsterTemplateProto.Organization.prototype.clearNumber = function() {
  return this.setNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Organization.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Plus plus = 3;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Organization.Plus>}
 */
proto.dma.MonsterTemplateProto.Organization.prototype.getPlusList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Organization.Plus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Organization.Plus, 3));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Organization.Plus>} value
 * @return {!proto.dma.MonsterTemplateProto.Organization} returns this
*/
proto.dma.MonsterTemplateProto.Organization.prototype.setPlusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Organization.Plus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Organization.Plus}
 */
proto.dma.MonsterTemplateProto.Organization.prototype.addPlus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dma.MonsterTemplateProto.Organization.Plus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto.Organization} returns this
 */
proto.dma.MonsterTemplateProto.Organization.prototype.clearPlusList = function() {
  return this.setPlusList([]);
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
proto.dma.MonsterTemplateProto.Advancement.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Advancement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Advancement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Advancement.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && value_pb.RangeProto.toObject(includeInstance, f),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.dma.MonsterTemplateProto.Advancement}
 */
proto.dma.MonsterTemplateProto.Advancement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Advancement;
  return proto.dma.MonsterTemplateProto.Advancement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Advancement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Advancement}
 */
proto.dma.MonsterTemplateProto.Advancement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.RangeProto;
      reader.readMessage(value,value_pb.RangeProto.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.SizeProto.Size} */ (reader.readEnum());
      msg.setSize(value);
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
proto.dma.MonsterTemplateProto.Advancement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Advancement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Advancement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Advancement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.RangeProto.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional RangeProto range = 1;
 * @return {?proto.dma.RangeProto}
 */
proto.dma.MonsterTemplateProto.Advancement.prototype.getRange = function() {
  return /** @type{?proto.dma.RangeProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RangeProto, 1));
};


/**
 * @param {?proto.dma.RangeProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Advancement} returns this
*/
proto.dma.MonsterTemplateProto.Advancement.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Advancement} returns this
 */
proto.dma.MonsterTemplateProto.Advancement.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Advancement.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SizeProto.Size size = 2;
 * @return {!proto.dma.SizeProto.Size}
 */
proto.dma.MonsterTemplateProto.Advancement.prototype.getSize = function() {
  return /** @type {!proto.dma.SizeProto.Size} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.SizeProto.Size} value
 * @return {!proto.dma.MonsterTemplateProto.Advancement} returns this
 */
proto.dma.MonsterTemplateProto.Advancement.prototype.setSize = function(value) {
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
proto.dma.MonsterTemplateProto.Language.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Language.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Language} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Language.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifier: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.dma.MonsterTemplateProto.Language}
 */
proto.dma.MonsterTemplateProto.Language.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Language;
  return proto.dma.MonsterTemplateProto.Language.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Language} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Language}
 */
proto.dma.MonsterTemplateProto.Language.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Language.Modifier} */ (reader.readEnum());
      msg.setModifier(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.MonsterTemplateProto.Language.Name} */ (reader.readEnum());
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
proto.dma.MonsterTemplateProto.Language.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Language.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Language} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Language.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifier();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
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
proto.dma.MonsterTemplateProto.Language.Modifier = {
  UNKNOWN_MODIFIER: 0,
  AUTOMATIC: 1,
  BONUS: 2,
  SOME: 3,
  UNDERSTAND: 4
};

/**
 * @enum {number}
 */
proto.dma.MonsterTemplateProto.Language.Name = {
  UNKNOWN_LANGUAGE: 0,
  ABOLETH: 1,
  ABYSSAL: 2,
  AQUAN: 3,
  AURAN: 4,
  CELESTIAL: 5,
  COMMON: 6,
  DRACONIC: 7,
  DROW_SIGN: 8,
  DRUIDIC: 9,
  DWARVEN: 10,
  ELVEN: 11,
  GIANT: 12,
  GNOME: 13,
  GOBLIN: 14,
  GNOLL: 15,
  HALFLING: 16,
  IGNAN: 17,
  INFERNAL: 18,
  KUO_TOA: 19,
  ORC: 20,
  SYLVAN: 21,
  TERRAN: 22,
  UNDERCOMMON: 23,
  NONE: 24,
  CHONDATHAN: 25,
  ILLUSKAN: 26
};

/**
 * optional Modifier modifier = 1;
 * @return {!proto.dma.MonsterTemplateProto.Language.Modifier}
 */
proto.dma.MonsterTemplateProto.Language.prototype.getModifier = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Language.Modifier} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Language.Modifier} value
 * @return {!proto.dma.MonsterTemplateProto.Language} returns this
 */
proto.dma.MonsterTemplateProto.Language.prototype.setModifier = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Name name = 2;
 * @return {!proto.dma.MonsterTemplateProto.Language.Name}
 */
proto.dma.MonsterTemplateProto.Language.prototype.getName = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Language.Name} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Language.Name} value
 * @return {!proto.dma.MonsterTemplateProto.Language} returns this
 */
proto.dma.MonsterTemplateProto.Language.prototype.setName = function(value) {
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
proto.dma.MonsterTemplateProto.Possession.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Possession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Possession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Possession.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.MonsterTemplateProto.Possession}
 */
proto.dma.MonsterTemplateProto.Possession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Possession;
  return proto.dma.MonsterTemplateProto.Possession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Possession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Possession}
 */
proto.dma.MonsterTemplateProto.Possession.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.MonsterTemplateProto.Possession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Possession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Possession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Possession.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.MonsterTemplateProto.Possession.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto.Possession} returns this
 */
proto.dma.MonsterTemplateProto.Possession.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.Possession.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto.Possession} returns this
 */
proto.dma.MonsterTemplateProto.Possession.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DiceProto count = 3;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Possession.prototype.getCount = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 3));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Possession} returns this
*/
proto.dma.MonsterTemplateProto.Possession.prototype.setCount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Possession} returns this
 */
proto.dma.MonsterTemplateProto.Possession.prototype.clearCount = function() {
  return this.setCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Possession.prototype.hasCount = function() {
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
proto.dma.MonsterTemplateProto.Skill.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Skill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Skill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Skill.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ranks: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.dma.MonsterTemplateProto.Skill}
 */
proto.dma.MonsterTemplateProto.Skill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Skill;
  return proto.dma.MonsterTemplateProto.Skill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Skill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Skill}
 */
proto.dma.MonsterTemplateProto.Skill.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRanks(value);
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
proto.dma.MonsterTemplateProto.Skill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Skill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Skill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Skill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRanks();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.Skill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto.Skill} returns this
 */
proto.dma.MonsterTemplateProto.Skill.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 ranks = 2;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Skill.prototype.getRanks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Skill} returns this
 */
proto.dma.MonsterTemplateProto.Skill.prototype.setRanks = function(value) {
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
proto.dma.MonsterTemplateProto.Height.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Height.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Height} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Height.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.MonsterTemplateProto.Height}
 */
proto.dma.MonsterTemplateProto.Height.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Height;
  return proto.dma.MonsterTemplateProto.Height.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Height} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Height}
 */
proto.dma.MonsterTemplateProto.Height.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.MonsterTemplateProto.Height.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Height.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Height} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Height.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.MonsterTemplateProto.Height.prototype.getInches = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Height} returns this
 */
proto.dma.MonsterTemplateProto.Height.prototype.setInches = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DiceProto modifier = 2;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Height.prototype.getModifier = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 2));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Height} returns this
*/
proto.dma.MonsterTemplateProto.Height.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Height} returns this
 */
proto.dma.MonsterTemplateProto.Height.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Height.prototype.hasModifier = function() {
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
proto.dma.MonsterTemplateProto.Weight.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Weight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Weight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Weight.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.MonsterTemplateProto.Weight}
 */
proto.dma.MonsterTemplateProto.Weight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Weight;
  return proto.dma.MonsterTemplateProto.Weight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Weight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Weight}
 */
proto.dma.MonsterTemplateProto.Weight.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.MonsterTemplateProto.Weight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Weight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Weight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Weight.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.MonsterTemplateProto.Weight.prototype.getPounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Weight} returns this
 */
proto.dma.MonsterTemplateProto.Weight.prototype.setPounds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DiceProto modifier = 2;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Weight.prototype.getModifier = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 2));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Weight} returns this
*/
proto.dma.MonsterTemplateProto.Weight.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Weight} returns this
 */
proto.dma.MonsterTemplateProto.Weight.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Weight.prototype.hasModifier = function() {
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
proto.dma.MonsterTemplateProto.Age.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MonsterTemplateProto.Age.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MonsterTemplateProto.Age} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Age.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.MonsterTemplateProto.Age}
 */
proto.dma.MonsterTemplateProto.Age.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MonsterTemplateProto.Age;
  return proto.dma.MonsterTemplateProto.Age.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MonsterTemplateProto.Age} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MonsterTemplateProto.Age}
 */
proto.dma.MonsterTemplateProto.Age.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.MonsterTemplateProto.Age.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MonsterTemplateProto.Age.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MonsterTemplateProto.Age} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MonsterTemplateProto.Age.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.MonsterTemplateProto.Age.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 middle = 2;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Age.prototype.getMiddle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.setMiddle = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 old = 3;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Age.prototype.getOld = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.setOld = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 venerable = 4;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.Age.prototype.getVenerable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.setVenerable = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional DiceProto max = 5;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Age.prototype.getMax = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 5));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
*/
proto.dma.MonsterTemplateProto.Age.prototype.setMax = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.clearMax = function() {
  return this.setMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Age.prototype.hasMax = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DiceProto short = 6;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Age.prototype.getShort = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 6));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
*/
proto.dma.MonsterTemplateProto.Age.prototype.setShort = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.clearShort = function() {
  return this.setShort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Age.prototype.hasShort = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DiceProto medium = 7;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Age.prototype.getMedium = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 7));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
*/
proto.dma.MonsterTemplateProto.Age.prototype.setMedium = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.clearMedium = function() {
  return this.setMedium(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Age.prototype.hasMedium = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DiceProto long = 8;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.Age.prototype.getLong = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 8));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
*/
proto.dma.MonsterTemplateProto.Age.prototype.setLong = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto.Age} returns this
 */
proto.dma.MonsterTemplateProto.Age.prototype.clearLong = function() {
  return this.setLong(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.Age.prototype.hasLong = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.MonsterTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SizeProto size = 2;
 * @return {?proto.dma.SizeProto}
 */
proto.dma.MonsterTemplateProto.prototype.getSize = function() {
  return /** @type{?proto.dma.SizeProto} */ (
    jspb.Message.getWrapperField(this, value_pb.SizeProto, 2));
};


/**
 * @param {?proto.dma.SizeProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasSize = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MonsterType type = 3;
 * @return {!proto.dma.MonsterType}
 */
proto.dma.MonsterTemplateProto.prototype.getType = function() {
  return /** @type {!proto.dma.MonsterType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dma.MonsterType} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated MonsterSubtype subtype = 4;
 * @return {!Array<!proto.dma.MonsterSubtype>}
 */
proto.dma.MonsterTemplateProto.prototype.getSubtypeList = function() {
  return /** @type {!Array<!proto.dma.MonsterSubtype>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.dma.MonsterSubtype>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setSubtypeList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.dma.MonsterSubtype} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.addSubtype = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearSubtypeList = function() {
  return this.setSubtypeList([]);
};


/**
 * optional DiceProto hit_dice = 5;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.MonsterTemplateProto.prototype.getHitDice = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 5));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setHitDice = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearHitDice = function() {
  return this.setHitDice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasHitDice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated SpeedProto speed = 6;
 * @return {!Array<!proto.dma.SpeedProto>}
 */
proto.dma.MonsterTemplateProto.prototype.getSpeedList = function() {
  return /** @type{!Array<!proto.dma.SpeedProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.SpeedProto, 6));
};


/**
 * @param {!Array<!proto.dma.SpeedProto>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setSpeedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.SpeedProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.SpeedProto}
 */
proto.dma.MonsterTemplateProto.prototype.addSpeed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.SpeedProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearSpeedList = function() {
  return this.setSpeedList([]);
};


/**
 * optional ModifierProto natural_armor = 7;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.MonsterTemplateProto.prototype.getNaturalArmor = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 7));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setNaturalArmor = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearNaturalArmor = function() {
  return this.setNaturalArmor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasNaturalArmor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 base_attack = 8;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.prototype.getBaseAttack = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setBaseAttack = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional Abilities abilities = 9;
 * @return {?proto.dma.MonsterTemplateProto.Abilities}
 */
proto.dma.MonsterTemplateProto.prototype.getAbilities = function() {
  return /** @type{?proto.dma.MonsterTemplateProto.Abilities} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterTemplateProto.Abilities, 9));
};


/**
 * @param {?proto.dma.MonsterTemplateProto.Abilities|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setAbilities = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearAbilities = function() {
  return this.setAbilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasAbilities = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Saves saves = 10;
 * @return {?proto.dma.MonsterTemplateProto.Saves}
 */
proto.dma.MonsterTemplateProto.prototype.getSaves = function() {
  return /** @type{?proto.dma.MonsterTemplateProto.Saves} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterTemplateProto.Saves, 10));
};


/**
 * @param {?proto.dma.MonsterTemplateProto.Saves|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setSaves = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearSaves = function() {
  return this.setSaves(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasSaves = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated Attack primary_attack = 11;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Attack>}
 */
proto.dma.MonsterTemplateProto.prototype.getPrimaryAttackList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Attack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Attack, 11));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Attack>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setPrimaryAttackList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Attack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Attack}
 */
proto.dma.MonsterTemplateProto.prototype.addPrimaryAttack = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.dma.MonsterTemplateProto.Attack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearPrimaryAttackList = function() {
  return this.setPrimaryAttackList([]);
};


/**
 * repeated Attack secondary_attack = 12;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Attack>}
 */
proto.dma.MonsterTemplateProto.prototype.getSecondaryAttackList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Attack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Attack, 12));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Attack>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setSecondaryAttackList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Attack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Attack}
 */
proto.dma.MonsterTemplateProto.prototype.addSecondaryAttack = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.dma.MonsterTemplateProto.Attack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearSecondaryAttackList = function() {
  return this.setSecondaryAttackList([]);
};


/**
 * optional DistanceProto space = 13;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.MonsterTemplateProto.prototype.getSpace = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 13));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional DistanceProto reach = 14;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.MonsterTemplateProto.prototype.getReach = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 14));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setReach = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearReach = function() {
  return this.setReach(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasReach = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated FeatSelection feat = 15;
 * @return {!Array<!proto.dma.FeatSelection>}
 */
proto.dma.MonsterTemplateProto.prototype.getFeatList = function() {
  return /** @type{!Array<!proto.dma.FeatSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.FeatSelection, 15));
};


/**
 * @param {!Array<!proto.dma.FeatSelection>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setFeatList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.dma.FeatSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.FeatSelection}
 */
proto.dma.MonsterTemplateProto.prototype.addFeat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.dma.FeatSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearFeatList = function() {
  return this.setFeatList([]);
};


/**
 * optional Climate climate = 16;
 * @return {!proto.dma.MonsterTemplateProto.Climate}
 */
proto.dma.MonsterTemplateProto.prototype.getClimate = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Climate} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Climate} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setClimate = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional Terrain terrain = 17;
 * @return {!proto.dma.MonsterTemplateProto.Terrain}
 */
proto.dma.MonsterTemplateProto.prototype.getTerrain = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Terrain} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Terrain} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setTerrain = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * repeated Organization organization = 18;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Organization>}
 */
proto.dma.MonsterTemplateProto.prototype.getOrganizationList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Organization, 18));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Organization>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setOrganizationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Organization}
 */
proto.dma.MonsterTemplateProto.prototype.addOrganization = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.dma.MonsterTemplateProto.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearOrganizationList = function() {
  return this.setOrganizationList([]);
};


/**
 * optional RationalProto challenge_rating = 19;
 * @return {?proto.dma.RationalProto}
 */
proto.dma.MonsterTemplateProto.prototype.getChallengeRating = function() {
  return /** @type{?proto.dma.RationalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RationalProto, 19));
};


/**
 * @param {?proto.dma.RationalProto|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setChallengeRating = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearChallengeRating = function() {
  return this.setChallengeRating(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasChallengeRating = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Treasure treasure = 20;
 * @return {!proto.dma.MonsterTemplateProto.Treasure}
 */
proto.dma.MonsterTemplateProto.prototype.getTreasure = function() {
  return /** @type {!proto.dma.MonsterTemplateProto.Treasure} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Treasure} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setTreasure = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional Alignment alignment = 21;
 * @return {!proto.dma.Alignment}
 */
proto.dma.MonsterTemplateProto.prototype.getAlignment = function() {
  return /** @type {!proto.dma.Alignment} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.dma.Alignment} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setAlignment = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * optional AlignmentStatus alignment_status = 22;
 * @return {!proto.dma.AlignmentStatus}
 */
proto.dma.MonsterTemplateProto.prototype.getAlignmentStatus = function() {
  return /** @type {!proto.dma.AlignmentStatus} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.dma.AlignmentStatus} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setAlignmentStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * repeated Advancement advancement = 23;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Advancement>}
 */
proto.dma.MonsterTemplateProto.prototype.getAdvancementList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Advancement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Advancement, 23));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Advancement>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setAdvancementList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Advancement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Advancement}
 */
proto.dma.MonsterTemplateProto.prototype.addAdvancement = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.dma.MonsterTemplateProto.Advancement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearAdvancementList = function() {
  return this.setAdvancementList([]);
};


/**
 * optional int32 level_adjustment = 24;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.prototype.getLevelAdjustment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setLevelAdjustment = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional bool main_race = 25;
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.getMainRace = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setMainRace = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * repeated Language language = 26;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Language>}
 */
proto.dma.MonsterTemplateProto.prototype.getLanguageList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Language>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Language, 26));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Language>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setLanguageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Language=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Language}
 */
proto.dma.MonsterTemplateProto.prototype.addLanguage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.dma.MonsterTemplateProto.Language, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearLanguageList = function() {
  return this.setLanguageList([]);
};


/**
 * optional string encounter = 27;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.prototype.getEncounter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setEncounter = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional string combat = 28;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.prototype.getCombat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setCombat = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional string tactics = 29;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.prototype.getTactics = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setTactics = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string character = 30;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.prototype.getCharacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setCharacter = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string reproduction = 31;
 * @return {string}
 */
proto.dma.MonsterTemplateProto.prototype.getReproduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setReproduction = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * repeated Possession possession = 32;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Possession>}
 */
proto.dma.MonsterTemplateProto.prototype.getPossessionList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Possession>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Possession, 32));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Possession>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setPossessionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 32, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Possession=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Possession}
 */
proto.dma.MonsterTemplateProto.prototype.addPossession = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 32, opt_value, proto.dma.MonsterTemplateProto.Possession, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearPossessionList = function() {
  return this.setPossessionList([]);
};


/**
 * repeated string proficiency = 33;
 * @return {!Array<string>}
 */
proto.dma.MonsterTemplateProto.prototype.getProficiencyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 33));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setProficiencyList = function(value) {
  return jspb.Message.setField(this, 33, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.addProficiency = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 33, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearProficiencyList = function() {
  return this.setProficiencyList([]);
};


/**
 * optional bool quadruped = 34;
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.getQuadruped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setQuadruped = function(value) {
  return jspb.Message.setProto3BooleanField(this, 34, value);
};


/**
 * repeated ParametrizedTemplateProto quality = 35;
 * @return {!Array<!proto.dma.ParametrizedTemplateProto>}
 */
proto.dma.MonsterTemplateProto.prototype.getQualityList = function() {
  return /** @type{!Array<!proto.dma.ParametrizedTemplateProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ParametrizedTemplateProto, 35));
};


/**
 * @param {!Array<!proto.dma.ParametrizedTemplateProto>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setQualityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 35, value);
};


/**
 * @param {!proto.dma.ParametrizedTemplateProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ParametrizedTemplateProto}
 */
proto.dma.MonsterTemplateProto.prototype.addQuality = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 35, opt_value, proto.dma.ParametrizedTemplateProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearQualityList = function() {
  return this.setQualityList([]);
};


/**
 * repeated Skill skill = 36;
 * @return {!Array<!proto.dma.MonsterTemplateProto.Skill>}
 */
proto.dma.MonsterTemplateProto.prototype.getSkillList = function() {
  return /** @type{!Array<!proto.dma.MonsterTemplateProto.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MonsterTemplateProto.Skill, 36));
};


/**
 * @param {!Array<!proto.dma.MonsterTemplateProto.Skill>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setSkillList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 36, value);
};


/**
 * @param {!proto.dma.MonsterTemplateProto.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MonsterTemplateProto.Skill}
 */
proto.dma.MonsterTemplateProto.prototype.addSkill = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 36, opt_value, proto.dma.MonsterTemplateProto.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearSkillList = function() {
  return this.setSkillList([]);
};


/**
 * optional bool bonus_feat = 37;
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.getBonusFeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 37, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setBonusFeat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 37, value);
};


/**
 * repeated FeatSelection automatic_feat = 38;
 * @return {!Array<!proto.dma.FeatSelection>}
 */
proto.dma.MonsterTemplateProto.prototype.getAutomaticFeatList = function() {
  return /** @type{!Array<!proto.dma.FeatSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, value_pb.FeatSelection, 38));
};


/**
 * @param {!Array<!proto.dma.FeatSelection>} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setAutomaticFeatList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 38, value);
};


/**
 * @param {!proto.dma.FeatSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.FeatSelection}
 */
proto.dma.MonsterTemplateProto.prototype.addAutomaticFeat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 38, opt_value, proto.dma.FeatSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearAutomaticFeatList = function() {
  return this.setAutomaticFeatList([]);
};


/**
 * optional int32 skill_point_bonus = 39;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.prototype.getSkillPointBonus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 39, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setSkillPointBonus = function(value) {
  return jspb.Message.setProto3IntField(this, 39, value);
};


/**
 * optional int32 skill_point_bonus_first_level = 40;
 * @return {number}
 */
proto.dma.MonsterTemplateProto.prototype.getSkillPointBonusFirstLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.setSkillPointBonusFirstLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 40, value);
};


/**
 * optional Height male_height = 41;
 * @return {?proto.dma.MonsterTemplateProto.Height}
 */
proto.dma.MonsterTemplateProto.prototype.getMaleHeight = function() {
  return /** @type{?proto.dma.MonsterTemplateProto.Height} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterTemplateProto.Height, 41));
};


/**
 * @param {?proto.dma.MonsterTemplateProto.Height|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setMaleHeight = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearMaleHeight = function() {
  return this.setMaleHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasMaleHeight = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional Height female_height = 42;
 * @return {?proto.dma.MonsterTemplateProto.Height}
 */
proto.dma.MonsterTemplateProto.prototype.getFemaleHeight = function() {
  return /** @type{?proto.dma.MonsterTemplateProto.Height} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterTemplateProto.Height, 42));
};


/**
 * @param {?proto.dma.MonsterTemplateProto.Height|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setFemaleHeight = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearFemaleHeight = function() {
  return this.setFemaleHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasFemaleHeight = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional Weight male_weight = 43;
 * @return {?proto.dma.MonsterTemplateProto.Weight}
 */
proto.dma.MonsterTemplateProto.prototype.getMaleWeight = function() {
  return /** @type{?proto.dma.MonsterTemplateProto.Weight} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterTemplateProto.Weight, 43));
};


/**
 * @param {?proto.dma.MonsterTemplateProto.Weight|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setMaleWeight = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearMaleWeight = function() {
  return this.setMaleWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasMaleWeight = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional Weight female_weight = 44;
 * @return {?proto.dma.MonsterTemplateProto.Weight}
 */
proto.dma.MonsterTemplateProto.prototype.getFemaleWeight = function() {
  return /** @type{?proto.dma.MonsterTemplateProto.Weight} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterTemplateProto.Weight, 44));
};


/**
 * @param {?proto.dma.MonsterTemplateProto.Weight|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setFemaleWeight = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearFemaleWeight = function() {
  return this.setFemaleWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasFemaleWeight = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional Age age = 45;
 * @return {?proto.dma.MonsterTemplateProto.Age}
 */
proto.dma.MonsterTemplateProto.prototype.getAge = function() {
  return /** @type{?proto.dma.MonsterTemplateProto.Age} */ (
    jspb.Message.getWrapperField(this, proto.dma.MonsterTemplateProto.Age, 45));
};


/**
 * @param {?proto.dma.MonsterTemplateProto.Age|undefined} value
 * @return {!proto.dma.MonsterTemplateProto} returns this
*/
proto.dma.MonsterTemplateProto.prototype.setAge = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MonsterTemplateProto} returns this
 */
proto.dma.MonsterTemplateProto.prototype.clearAge = function() {
  return this.setAge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MonsterTemplateProto.prototype.hasAge = function() {
  return jspb.Message.getField(this, 45) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemTemplateProto.repeatedFields_ = [8,27,28,30];



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
proto.dma.ItemTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
    value: (f = msg.getValue()) && value_pb.MoneyProto.toObject(includeInstance, f),
    weight: (f = msg.getWeight()) && value_pb.WeightProto.toObject(includeInstance, f),
    probability: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: (f = msg.getSize()) && value_pb.SizeProto.toObject(includeInstance, f),
    hardness: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hitPoints: jspb.Message.getFieldWithDefault(msg, 7, 0),
    appearanceList: jspb.Message.toObjectList(msg.getAppearanceList(),
    proto.dma.ItemTemplateProto.Appearance.toObject, includeInstance),
    substance: (f = msg.getSubstance()) && proto.dma.ItemTemplateProto.Substance.toObject(includeInstance, f),
    breakDc: jspb.Message.getFieldWithDefault(msg, 10, 0),
    playerName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    monetary: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    weapon: (f = msg.getWeapon()) && proto.dma.WeaponTemplateProto.toObject(includeInstance, f),
    wearable: (f = msg.getWearable()) && proto.dma.WearableTemplateProto.toObject(includeInstance, f),
    incomplete: (f = msg.getIncomplete()) && proto.dma.IncompleteTemplateProto.toObject(includeInstance, f),
    magic: (f = msg.getMagic()) && proto.dma.MagicTemplateProto.toObject(includeInstance, f),
    counted: (f = msg.getCounted()) && proto.dma.CountedTemplateProto.toObject(includeInstance, f),
    multiple: (f = msg.getMultiple()) && proto.dma.MultipleTemplateProto.toObject(includeInstance, f),
    multiuse: (f = msg.getMultiuse()) && proto.dma.MultiuseTemplateProto.toObject(includeInstance, f),
    timed: (f = msg.getTimed()) && proto.dma.TimedTemplateProto.toObject(includeInstance, f),
    commodity: (f = msg.getCommodity()) && proto.dma.CommodityTemplateProto.toObject(includeInstance, f),
    container: (f = msg.getContainer()) && proto.dma.ContainerTemplateProto.toObject(includeInstance, f),
    armor: (f = msg.getArmor()) && proto.dma.ArmorTemplateProto.toObject(includeInstance, f),
    light: (f = msg.getLight()) && proto.dma.LightTemplateProto.toObject(includeInstance, f),
    composite: (f = msg.getComposite()) && proto.dma.CompositeTemplateProto.toObject(includeInstance, f),
    qualitiesList: jspb.Message.toObjectList(msg.getQualitiesList(),
    proto.dma.ParametrizedTemplateProto.toObject, includeInstance),
    randomList: jspb.Message.toObjectList(msg.getRandomList(),
    proto.dma.ItemTemplateProto.Random.toObject, includeInstance),
    material: (f = msg.getMaterial()) && proto.dma.ItemTemplateProto.Material.toObject(includeInstance, f),
    loreList: jspb.Message.toObjectList(msg.getLoreList(),
    proto.dma.ItemTemplateProto.Lore.toObject, includeInstance)
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
 * @return {!proto.dma.ItemTemplateProto}
 */
proto.dma.ItemTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemTemplateProto;
  return proto.dma.ItemTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemTemplateProto}
 */
proto.dma.ItemTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 2:
      var value = new value_pb.MoneyProto;
      reader.readMessage(value,value_pb.MoneyProto.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 3:
      var value = new value_pb.WeightProto;
      reader.readMessage(value,value_pb.WeightProto.deserializeBinaryFromReader);
      msg.setWeight(value);
      break;
    case 4:
      var value = /** @type {!proto.dma.ItemTemplateProto.Probability} */ (reader.readEnum());
      msg.setProbability(value);
      break;
    case 5:
      var value = new value_pb.SizeProto;
      reader.readMessage(value,value_pb.SizeProto.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHardness(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHitPoints(value);
      break;
    case 8:
      var value = new proto.dma.ItemTemplateProto.Appearance;
      reader.readMessage(value,proto.dma.ItemTemplateProto.Appearance.deserializeBinaryFromReader);
      msg.addAppearance(value);
      break;
    case 9:
      var value = new proto.dma.ItemTemplateProto.Substance;
      reader.readMessage(value,proto.dma.ItemTemplateProto.Substance.deserializeBinaryFromReader);
      msg.setSubstance(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBreakDc(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMonetary(value);
      break;
    case 12:
      var value = new proto.dma.WeaponTemplateProto;
      reader.readMessage(value,proto.dma.WeaponTemplateProto.deserializeBinaryFromReader);
      msg.setWeapon(value);
      break;
    case 13:
      var value = new proto.dma.WearableTemplateProto;
      reader.readMessage(value,proto.dma.WearableTemplateProto.deserializeBinaryFromReader);
      msg.setWearable(value);
      break;
    case 14:
      var value = new proto.dma.IncompleteTemplateProto;
      reader.readMessage(value,proto.dma.IncompleteTemplateProto.deserializeBinaryFromReader);
      msg.setIncomplete(value);
      break;
    case 15:
      var value = new proto.dma.MagicTemplateProto;
      reader.readMessage(value,proto.dma.MagicTemplateProto.deserializeBinaryFromReader);
      msg.setMagic(value);
      break;
    case 16:
      var value = new proto.dma.CountedTemplateProto;
      reader.readMessage(value,proto.dma.CountedTemplateProto.deserializeBinaryFromReader);
      msg.setCounted(value);
      break;
    case 17:
      var value = new proto.dma.MultipleTemplateProto;
      reader.readMessage(value,proto.dma.MultipleTemplateProto.deserializeBinaryFromReader);
      msg.setMultiple(value);
      break;
    case 18:
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
    case 22:
      var value = new proto.dma.ArmorTemplateProto;
      reader.readMessage(value,proto.dma.ArmorTemplateProto.deserializeBinaryFromReader);
      msg.setArmor(value);
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
      var value = new proto.dma.ItemTemplateProto.Random;
      reader.readMessage(value,proto.dma.ItemTemplateProto.Random.deserializeBinaryFromReader);
      msg.addRandom(value);
      break;
    case 29:
      var value = new proto.dma.ItemTemplateProto.Material;
      reader.readMessage(value,proto.dma.ItemTemplateProto.Material.deserializeBinaryFromReader);
      msg.setMaterial(value);
      break;
    case 30:
      var value = new proto.dma.ItemTemplateProto.Lore;
      reader.readMessage(value,proto.dma.ItemTemplateProto.Lore.deserializeBinaryFromReader);
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
proto.dma.ItemTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.MoneyProto.serializeBinaryToWriter
    );
  }
  f = message.getWeight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      value_pb.WeightProto.serializeBinaryToWriter
    );
  }
  f = message.getProbability();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.SizeProto.serializeBinaryToWriter
    );
  }
  f = message.getHardness();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHitPoints();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getAppearanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.dma.ItemTemplateProto.Appearance.serializeBinaryToWriter
    );
  }
  f = message.getSubstance();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dma.ItemTemplateProto.Substance.serializeBinaryToWriter
    );
  }
  f = message.getBreakDc();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getPlayerName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMonetary();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getWeapon();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.dma.WeaponTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getWearable();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.dma.WearableTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getIncomplete();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.dma.IncompleteTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getMagic();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.dma.MagicTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getCounted();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.dma.CountedTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getMultiple();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.dma.MultipleTemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getMultiuse();
  if (f != null) {
    writer.writeMessage(
      18,
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
  f = message.getArmor();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.dma.ArmorTemplateProto.serializeBinaryToWriter
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
      proto.dma.ItemTemplateProto.Random.serializeBinaryToWriter
    );
  }
  f = message.getMaterial();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.dma.ItemTemplateProto.Material.serializeBinaryToWriter
    );
  }
  f = message.getLoreList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      30,
      f,
      proto.dma.ItemTemplateProto.Lore.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ItemTemplateProto.Probability = {
  UNKNOWN: 0,
  COMMON: 1,
  UNCOMMON: 2,
  RARE: 3,
  VERY_RARE: 4,
  UNIQUE: 5
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
proto.dma.ItemTemplateProto.Appearance.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemTemplateProto.Appearance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemTemplateProto.Appearance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Appearance.toObject = function(includeInstance, msg) {
  var f, obj = {
    probability: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appearance: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dma.ItemTemplateProto.Appearance}
 */
proto.dma.ItemTemplateProto.Appearance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemTemplateProto.Appearance;
  return proto.dma.ItemTemplateProto.Appearance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemTemplateProto.Appearance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemTemplateProto.Appearance}
 */
proto.dma.ItemTemplateProto.Appearance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ItemTemplateProto.Probability} */ (reader.readEnum());
      msg.setProbability(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppearance(value);
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
proto.dma.ItemTemplateProto.Appearance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemTemplateProto.Appearance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemTemplateProto.Appearance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Appearance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProbability();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAppearance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Probability probability = 1;
 * @return {!proto.dma.ItemTemplateProto.Probability}
 */
proto.dma.ItemTemplateProto.Appearance.prototype.getProbability = function() {
  return /** @type {!proto.dma.ItemTemplateProto.Probability} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ItemTemplateProto.Probability} value
 * @return {!proto.dma.ItemTemplateProto.Appearance} returns this
 */
proto.dma.ItemTemplateProto.Appearance.prototype.setProbability = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string appearance = 2;
 * @return {string}
 */
proto.dma.ItemTemplateProto.Appearance.prototype.getAppearance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemTemplateProto.Appearance} returns this
 */
proto.dma.ItemTemplateProto.Appearance.prototype.setAppearance = function(value) {
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
proto.dma.ItemTemplateProto.Substance.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemTemplateProto.Substance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemTemplateProto.Substance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Substance.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ItemTemplateProto.Substance}
 */
proto.dma.ItemTemplateProto.Substance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemTemplateProto.Substance;
  return proto.dma.ItemTemplateProto.Substance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemTemplateProto.Substance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemTemplateProto.Substance}
 */
proto.dma.ItemTemplateProto.Substance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ItemTemplateProto.Substance.Material} */ (reader.readEnum());
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
proto.dma.ItemTemplateProto.Substance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemTemplateProto.Substance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemTemplateProto.Substance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Substance.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ItemTemplateProto.Substance.Material = {
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
 * @return {!proto.dma.ItemTemplateProto.Substance.Material}
 */
proto.dma.ItemTemplateProto.Substance.prototype.getMaterial = function() {
  return /** @type {!proto.dma.ItemTemplateProto.Substance.Material} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ItemTemplateProto.Substance.Material} value
 * @return {!proto.dma.ItemTemplateProto.Substance} returns this
 */
proto.dma.ItemTemplateProto.Substance.prototype.setMaterial = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DistanceProto thickness = 2;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.ItemTemplateProto.Substance.prototype.getThickness = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 2));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto.Substance} returns this
*/
proto.dma.ItemTemplateProto.Substance.prototype.setThickness = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto.Substance} returns this
 */
proto.dma.ItemTemplateProto.Substance.prototype.clearThickness = function() {
  return this.setThickness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.Substance.prototype.hasThickness = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemTemplateProto.Random.repeatedFields_ = [3];



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
proto.dma.ItemTemplateProto.Random.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemTemplateProto.Random.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemTemplateProto.Random} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Random.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ItemTemplateProto.Random}
 */
proto.dma.ItemTemplateProto.Random.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemTemplateProto.Random;
  return proto.dma.ItemTemplateProto.Random.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemTemplateProto.Random} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemTemplateProto.Random}
 */
proto.dma.ItemTemplateProto.Random.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ItemTemplateProto.Random.Type} */ (reader.readEnum());
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
proto.dma.ItemTemplateProto.Random.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemTemplateProto.Random.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemTemplateProto.Random} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Random.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ItemTemplateProto.Random.Type = {
  UNKNOWN: 0,
  MUNDANE: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.dma.ItemTemplateProto.Random.Type}
 */
proto.dma.ItemTemplateProto.Random.prototype.getType = function() {
  return /** @type {!proto.dma.ItemTemplateProto.Random.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ItemTemplateProto.Random.Type} value
 * @return {!proto.dma.ItemTemplateProto.Random} returns this
 */
proto.dma.ItemTemplateProto.Random.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DiceProto multiple = 2;
 * @return {?proto.dma.DiceProto}
 */
proto.dma.ItemTemplateProto.Random.prototype.getMultiple = function() {
  return /** @type{?proto.dma.DiceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DiceProto, 2));
};


/**
 * @param {?proto.dma.DiceProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto.Random} returns this
*/
proto.dma.ItemTemplateProto.Random.prototype.setMultiple = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto.Random} returns this
 */
proto.dma.ItemTemplateProto.Random.prototype.clearMultiple = function() {
  return this.setMultiple(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.Random.prototype.hasMultiple = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string item = 3;
 * @return {!Array<string>}
 */
proto.dma.ItemTemplateProto.Random.prototype.getItemList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ItemTemplateProto.Random} returns this
 */
proto.dma.ItemTemplateProto.Random.prototype.setItemList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemTemplateProto.Random} returns this
 */
proto.dma.ItemTemplateProto.Random.prototype.addItem = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemTemplateProto.Random} returns this
 */
proto.dma.ItemTemplateProto.Random.prototype.clearItemList = function() {
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
proto.dma.ItemTemplateProto.Material.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemTemplateProto.Material.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemTemplateProto.Material} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Material.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ItemTemplateProto.Material}
 */
proto.dma.ItemTemplateProto.Material.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemTemplateProto.Material;
  return proto.dma.ItemTemplateProto.Material.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemTemplateProto.Material} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemTemplateProto.Material}
 */
proto.dma.ItemTemplateProto.Material.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.dma.ItemTemplateProto.Material.ValueType} */ (reader.readEnum());
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
proto.dma.ItemTemplateProto.Material.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemTemplateProto.Material.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemTemplateProto.Material} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Material.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ItemTemplateProto.Material.ValueType = {
  UNKNOWN: 0,
  PER_POUND: 1
};

/**
 * optional MoneyProto value = 1;
 * @return {?proto.dma.MoneyProto}
 */
proto.dma.ItemTemplateProto.Material.prototype.getValue = function() {
  return /** @type{?proto.dma.MoneyProto} */ (
    jspb.Message.getWrapperField(this, value_pb.MoneyProto, 1));
};


/**
 * @param {?proto.dma.MoneyProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
*/
proto.dma.ItemTemplateProto.Material.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
 */
proto.dma.ItemTemplateProto.Material.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.Material.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValueType value_type = 2;
 * @return {!proto.dma.ItemTemplateProto.Material.ValueType}
 */
proto.dma.ItemTemplateProto.Material.prototype.getValueType = function() {
  return /** @type {!proto.dma.ItemTemplateProto.Material.ValueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.ItemTemplateProto.Material.ValueType} value
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
 */
proto.dma.ItemTemplateProto.Material.prototype.setValueType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 hp_per_inch = 3;
 * @return {number}
 */
proto.dma.ItemTemplateProto.Material.prototype.getHpPerInch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
 */
proto.dma.ItemTemplateProto.Material.prototype.setHpPerInch = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional RationalProto weight_multiplier = 4;
 * @return {?proto.dma.RationalProto}
 */
proto.dma.ItemTemplateProto.Material.prototype.getWeightMultiplier = function() {
  return /** @type{?proto.dma.RationalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RationalProto, 4));
};


/**
 * @param {?proto.dma.RationalProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
*/
proto.dma.ItemTemplateProto.Material.prototype.setWeightMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
 */
proto.dma.ItemTemplateProto.Material.prototype.clearWeightMultiplier = function() {
  return this.setWeightMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.Material.prototype.hasWeightMultiplier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RationalProto hp_multiplier = 5;
 * @return {?proto.dma.RationalProto}
 */
proto.dma.ItemTemplateProto.Material.prototype.getHpMultiplier = function() {
  return /** @type{?proto.dma.RationalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.RationalProto, 5));
};


/**
 * @param {?proto.dma.RationalProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
*/
proto.dma.ItemTemplateProto.Material.prototype.setHpMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto.Material} returns this
 */
proto.dma.ItemTemplateProto.Material.prototype.clearHpMultiplier = function() {
  return this.setHpMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.Material.prototype.hasHpMultiplier = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.ItemTemplateProto.Lore.repeatedFields_ = [1];



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
proto.dma.ItemTemplateProto.Lore.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemTemplateProto.Lore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemTemplateProto.Lore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Lore.toObject = function(includeInstance, msg) {
  var f, obj = {
    checksList: jspb.Message.toObjectList(msg.getChecksList(),
    proto.dma.ItemTemplateProto.Lore.Check.toObject, includeInstance),
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
 * @return {!proto.dma.ItemTemplateProto.Lore}
 */
proto.dma.ItemTemplateProto.Lore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemTemplateProto.Lore;
  return proto.dma.ItemTemplateProto.Lore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemTemplateProto.Lore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemTemplateProto.Lore}
 */
proto.dma.ItemTemplateProto.Lore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.ItemTemplateProto.Lore.Check;
      reader.readMessage(value,proto.dma.ItemTemplateProto.Lore.Check.deserializeBinaryFromReader);
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
proto.dma.ItemTemplateProto.Lore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemTemplateProto.Lore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemTemplateProto.Lore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Lore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dma.ItemTemplateProto.Lore.Check.serializeBinaryToWriter
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
proto.dma.ItemTemplateProto.Lore.Check.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ItemTemplateProto.Lore.Check.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ItemTemplateProto.Lore.Check} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Lore.Check.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ItemTemplateProto.Lore.Check}
 */
proto.dma.ItemTemplateProto.Lore.Check.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ItemTemplateProto.Lore.Check;
  return proto.dma.ItemTemplateProto.Lore.Check.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ItemTemplateProto.Lore.Check} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ItemTemplateProto.Lore.Check}
 */
proto.dma.ItemTemplateProto.Lore.Check.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.ItemTemplateProto.Lore.Check.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ItemTemplateProto.Lore.Check.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ItemTemplateProto.Lore.Check} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ItemTemplateProto.Lore.Check.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ItemTemplateProto.Lore.Check.prototype.getSkill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemTemplateProto.Lore.Check} returns this
 */
proto.dma.ItemTemplateProto.Lore.Check.prototype.setSkill = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 dc = 2;
 * @return {number}
 */
proto.dma.ItemTemplateProto.Lore.Check.prototype.getDc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemTemplateProto.Lore.Check} returns this
 */
proto.dma.ItemTemplateProto.Lore.Check.prototype.setDc = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Check checks = 1;
 * @return {!Array<!proto.dma.ItemTemplateProto.Lore.Check>}
 */
proto.dma.ItemTemplateProto.Lore.prototype.getChecksList = function() {
  return /** @type{!Array<!proto.dma.ItemTemplateProto.Lore.Check>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemTemplateProto.Lore.Check, 1));
};


/**
 * @param {!Array<!proto.dma.ItemTemplateProto.Lore.Check>} value
 * @return {!proto.dma.ItemTemplateProto.Lore} returns this
*/
proto.dma.ItemTemplateProto.Lore.prototype.setChecksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.ItemTemplateProto.Lore.Check=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemTemplateProto.Lore.Check}
 */
proto.dma.ItemTemplateProto.Lore.prototype.addChecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.ItemTemplateProto.Lore.Check, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemTemplateProto.Lore} returns this
 */
proto.dma.ItemTemplateProto.Lore.prototype.clearChecksList = function() {
  return this.setChecksList([]);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.ItemTemplateProto.Lore.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemTemplateProto.Lore} returns this
 */
proto.dma.ItemTemplateProto.Lore.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MoneyProto value = 2;
 * @return {?proto.dma.MoneyProto}
 */
proto.dma.ItemTemplateProto.prototype.getValue = function() {
  return /** @type{?proto.dma.MoneyProto} */ (
    jspb.Message.getWrapperField(this, value_pb.MoneyProto, 2));
};


/**
 * @param {?proto.dma.MoneyProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WeightProto weight = 3;
 * @return {?proto.dma.WeightProto}
 */
proto.dma.ItemTemplateProto.prototype.getWeight = function() {
  return /** @type{?proto.dma.WeightProto} */ (
    jspb.Message.getWrapperField(this, value_pb.WeightProto, 3));
};


/**
 * @param {?proto.dma.WeightProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setWeight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearWeight = function() {
  return this.setWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasWeight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Probability probability = 4;
 * @return {!proto.dma.ItemTemplateProto.Probability}
 */
proto.dma.ItemTemplateProto.prototype.getProbability = function() {
  return /** @type {!proto.dma.ItemTemplateProto.Probability} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dma.ItemTemplateProto.Probability} value
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.setProbability = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional SizeProto size = 5;
 * @return {?proto.dma.SizeProto}
 */
proto.dma.ItemTemplateProto.prototype.getSize = function() {
  return /** @type{?proto.dma.SizeProto} */ (
    jspb.Message.getWrapperField(this, value_pb.SizeProto, 5));
};


/**
 * @param {?proto.dma.SizeProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasSize = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 hardness = 6;
 * @return {number}
 */
proto.dma.ItemTemplateProto.prototype.getHardness = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.setHardness = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 hit_points = 7;
 * @return {number}
 */
proto.dma.ItemTemplateProto.prototype.getHitPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.setHitPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated Appearance appearance = 8;
 * @return {!Array<!proto.dma.ItemTemplateProto.Appearance>}
 */
proto.dma.ItemTemplateProto.prototype.getAppearanceList = function() {
  return /** @type{!Array<!proto.dma.ItemTemplateProto.Appearance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemTemplateProto.Appearance, 8));
};


/**
 * @param {!Array<!proto.dma.ItemTemplateProto.Appearance>} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setAppearanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dma.ItemTemplateProto.Appearance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemTemplateProto.Appearance}
 */
proto.dma.ItemTemplateProto.prototype.addAppearance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dma.ItemTemplateProto.Appearance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearAppearanceList = function() {
  return this.setAppearanceList([]);
};


/**
 * optional Substance substance = 9;
 * @return {?proto.dma.ItemTemplateProto.Substance}
 */
proto.dma.ItemTemplateProto.prototype.getSubstance = function() {
  return /** @type{?proto.dma.ItemTemplateProto.Substance} */ (
    jspb.Message.getWrapperField(this, proto.dma.ItemTemplateProto.Substance, 9));
};


/**
 * @param {?proto.dma.ItemTemplateProto.Substance|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setSubstance = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearSubstance = function() {
  return this.setSubstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasSubstance = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 break_dc = 10;
 * @return {number}
 */
proto.dma.ItemTemplateProto.prototype.getBreakDc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.setBreakDc = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string player_name = 11;
 * @return {string}
 */
proto.dma.ItemTemplateProto.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.setPlayerName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool monetary = 26;
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.getMonetary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.setMonetary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional WeaponTemplateProto weapon = 12;
 * @return {?proto.dma.WeaponTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getWeapon = function() {
  return /** @type{?proto.dma.WeaponTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.WeaponTemplateProto, 12));
};


/**
 * @param {?proto.dma.WeaponTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setWeapon = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearWeapon = function() {
  return this.setWeapon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasWeapon = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional WearableTemplateProto wearable = 13;
 * @return {?proto.dma.WearableTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getWearable = function() {
  return /** @type{?proto.dma.WearableTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.WearableTemplateProto, 13));
};


/**
 * @param {?proto.dma.WearableTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setWearable = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearWearable = function() {
  return this.setWearable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasWearable = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional IncompleteTemplateProto incomplete = 14;
 * @return {?proto.dma.IncompleteTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getIncomplete = function() {
  return /** @type{?proto.dma.IncompleteTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.IncompleteTemplateProto, 14));
};


/**
 * @param {?proto.dma.IncompleteTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setIncomplete = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearIncomplete = function() {
  return this.setIncomplete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasIncomplete = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional MagicTemplateProto magic = 15;
 * @return {?proto.dma.MagicTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getMagic = function() {
  return /** @type{?proto.dma.MagicTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.MagicTemplateProto, 15));
};


/**
 * @param {?proto.dma.MagicTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setMagic = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearMagic = function() {
  return this.setMagic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasMagic = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CountedTemplateProto counted = 16;
 * @return {?proto.dma.CountedTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getCounted = function() {
  return /** @type{?proto.dma.CountedTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CountedTemplateProto, 16));
};


/**
 * @param {?proto.dma.CountedTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setCounted = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearCounted = function() {
  return this.setCounted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasCounted = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional MultipleTemplateProto multiple = 17;
 * @return {?proto.dma.MultipleTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getMultiple = function() {
  return /** @type{?proto.dma.MultipleTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.MultipleTemplateProto, 17));
};


/**
 * @param {?proto.dma.MultipleTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setMultiple = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearMultiple = function() {
  return this.setMultiple(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasMultiple = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional MultiuseTemplateProto multiuse = 18;
 * @return {?proto.dma.MultiuseTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getMultiuse = function() {
  return /** @type{?proto.dma.MultiuseTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.MultiuseTemplateProto, 18));
};


/**
 * @param {?proto.dma.MultiuseTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setMultiuse = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearMultiuse = function() {
  return this.setMultiuse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasMultiuse = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TimedTemplateProto timed = 19;
 * @return {?proto.dma.TimedTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getTimed = function() {
  return /** @type{?proto.dma.TimedTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TimedTemplateProto, 19));
};


/**
 * @param {?proto.dma.TimedTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setTimed = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearTimed = function() {
  return this.setTimed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasTimed = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CommodityTemplateProto commodity = 20;
 * @return {?proto.dma.CommodityTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getCommodity = function() {
  return /** @type{?proto.dma.CommodityTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CommodityTemplateProto, 20));
};


/**
 * @param {?proto.dma.CommodityTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setCommodity = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearCommodity = function() {
  return this.setCommodity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasCommodity = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ContainerTemplateProto container = 21;
 * @return {?proto.dma.ContainerTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getContainer = function() {
  return /** @type{?proto.dma.ContainerTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.ContainerTemplateProto, 21));
};


/**
 * @param {?proto.dma.ContainerTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setContainer = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearContainer = function() {
  return this.setContainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasContainer = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ArmorTemplateProto armor = 22;
 * @return {?proto.dma.ArmorTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getArmor = function() {
  return /** @type{?proto.dma.ArmorTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.ArmorTemplateProto, 22));
};


/**
 * @param {?proto.dma.ArmorTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setArmor = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearArmor = function() {
  return this.setArmor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasArmor = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional LightTemplateProto light = 23;
 * @return {?proto.dma.LightTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getLight = function() {
  return /** @type{?proto.dma.LightTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.LightTemplateProto, 23));
};


/**
 * @param {?proto.dma.LightTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setLight = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearLight = function() {
  return this.setLight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasLight = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CompositeTemplateProto composite = 24;
 * @return {?proto.dma.CompositeTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.getComposite = function() {
  return /** @type{?proto.dma.CompositeTemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.CompositeTemplateProto, 24));
};


/**
 * @param {?proto.dma.CompositeTemplateProto|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setComposite = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearComposite = function() {
  return this.setComposite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasComposite = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * repeated ParametrizedTemplateProto qualities = 27;
 * @return {!Array<!proto.dma.ParametrizedTemplateProto>}
 */
proto.dma.ItemTemplateProto.prototype.getQualitiesList = function() {
  return /** @type{!Array<!proto.dma.ParametrizedTemplateProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ParametrizedTemplateProto, 27));
};


/**
 * @param {!Array<!proto.dma.ParametrizedTemplateProto>} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setQualitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 27, value);
};


/**
 * @param {!proto.dma.ParametrizedTemplateProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ParametrizedTemplateProto}
 */
proto.dma.ItemTemplateProto.prototype.addQualities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 27, opt_value, proto.dma.ParametrizedTemplateProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearQualitiesList = function() {
  return this.setQualitiesList([]);
};


/**
 * repeated Random random = 28;
 * @return {!Array<!proto.dma.ItemTemplateProto.Random>}
 */
proto.dma.ItemTemplateProto.prototype.getRandomList = function() {
  return /** @type{!Array<!proto.dma.ItemTemplateProto.Random>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemTemplateProto.Random, 28));
};


/**
 * @param {!Array<!proto.dma.ItemTemplateProto.Random>} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setRandomList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 28, value);
};


/**
 * @param {!proto.dma.ItemTemplateProto.Random=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemTemplateProto.Random}
 */
proto.dma.ItemTemplateProto.prototype.addRandom = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 28, opt_value, proto.dma.ItemTemplateProto.Random, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearRandomList = function() {
  return this.setRandomList([]);
};


/**
 * optional Material material = 29;
 * @return {?proto.dma.ItemTemplateProto.Material}
 */
proto.dma.ItemTemplateProto.prototype.getMaterial = function() {
  return /** @type{?proto.dma.ItemTemplateProto.Material} */ (
    jspb.Message.getWrapperField(this, proto.dma.ItemTemplateProto.Material, 29));
};


/**
 * @param {?proto.dma.ItemTemplateProto.Material|undefined} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setMaterial = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearMaterial = function() {
  return this.setMaterial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ItemTemplateProto.prototype.hasMaterial = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * repeated Lore lore = 30;
 * @return {!Array<!proto.dma.ItemTemplateProto.Lore>}
 */
proto.dma.ItemTemplateProto.prototype.getLoreList = function() {
  return /** @type{!Array<!proto.dma.ItemTemplateProto.Lore>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ItemTemplateProto.Lore, 30));
};


/**
 * @param {!Array<!proto.dma.ItemTemplateProto.Lore>} value
 * @return {!proto.dma.ItemTemplateProto} returns this
*/
proto.dma.ItemTemplateProto.prototype.setLoreList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 30, value);
};


/**
 * @param {!proto.dma.ItemTemplateProto.Lore=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ItemTemplateProto.Lore}
 */
proto.dma.ItemTemplateProto.prototype.addLore = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 30, opt_value, proto.dma.ItemTemplateProto.Lore, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ItemTemplateProto} returns this
 */
proto.dma.ItemTemplateProto.prototype.clearLoreList = function() {
  return this.setLoreList([]);
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
      var values = /** @type {!Array<!proto.dma.SizeProto.Size>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSizeOr(values[i]);
      }
      break;
    case 10:
      var values = /** @type {!Array<!proto.dma.ItemTemplateProto.Substance.Material>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
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
 * repeated SizeProto.Size size_or = 9;
 * @return {!Array<!proto.dma.SizeProto.Size>}
 */
proto.dma.ItemLookupProto.prototype.getSizeOrList = function() {
  return /** @type {!Array<!proto.dma.SizeProto.Size>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<!proto.dma.SizeProto.Size>} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setSizeOrList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!proto.dma.SizeProto.Size} value
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
 * repeated ItemTemplateProto.Substance.Material material_or = 10;
 * @return {!Array<!proto.dma.ItemTemplateProto.Substance.Material>}
 */
proto.dma.ItemLookupProto.prototype.getMaterialOrList = function() {
  return /** @type {!Array<!proto.dma.ItemTemplateProto.Substance.Material>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<!proto.dma.ItemTemplateProto.Substance.Material>} value
 * @return {!proto.dma.ItemLookupProto} returns this
 */
proto.dma.ItemLookupProto.prototype.setMaterialOrList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.dma.ItemTemplateProto.Substance.Material} value
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
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
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
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
      var values = /** @type {!Array<!proto.dma.Alignment>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.LevelTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.LevelTemplateProto} returns this
*/
proto.dma.LevelTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.LevelTemplateProto.prototype.hasTemplate = function() {
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
 * repeated Alignment allowed_alignment = 12;
 * @return {!Array<!proto.dma.Alignment>}
 */
proto.dma.LevelTemplateProto.prototype.getAllowedAlignmentList = function() {
  return /** @type {!Array<!proto.dma.Alignment>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<!proto.dma.Alignment>} value
 * @return {!proto.dma.LevelTemplateProto} returns this
 */
proto.dma.LevelTemplateProto.prototype.setAllowedAlignmentList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!proto.dma.Alignment} value
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
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
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
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.QualityTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.QualityTemplateProto} returns this
*/
proto.dma.QualityTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.QualityTemplateProto} returns this
 */
proto.dma.QualityTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.QualityTemplateProto.prototype.hasTemplate = function() {
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
proto.dma.WeaponTemplateProto.repeatedFields_ = [13];



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
proto.dma.WeaponTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.WeaponTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.WeaponTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WeaponTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    damage: (f = msg.getDamage()) && value_pb.DamageProto.toObject(includeInstance, f),
    secondaryDamage: (f = msg.getSecondaryDamage()) && value_pb.DamageProto.toObject(includeInstance, f),
    splash: (f = msg.getSplash()) && value_pb.DamageProto.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    critical: (f = msg.getCritical()) && value_pb.CriticalProto.toObject(includeInstance, f),
    style: jspb.Message.getFieldWithDefault(msg, 6, 0),
    proficiency: jspb.Message.getFieldWithDefault(msg, 7, 0),
    range: (f = msg.getRange()) && value_pb.DistanceProto.toObject(includeInstance, f),
    reach: (f = msg.getReach()) && value_pb.DistanceProto.toObject(includeInstance, f),
    maxAttacks: jspb.Message.getFieldWithDefault(msg, 10, 0),
    finesse: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    ammunition: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    ammunitionNeededList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    wielderSize: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.dma.WeaponTemplateProto}
 */
proto.dma.WeaponTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.WeaponTemplateProto;
  return proto.dma.WeaponTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.WeaponTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.WeaponTemplateProto}
 */
proto.dma.WeaponTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.setDamage(value);
      break;
    case 2:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.setSecondaryDamage(value);
      break;
    case 3:
      var value = new value_pb.DamageProto;
      reader.readMessage(value,value_pb.DamageProto.deserializeBinaryFromReader);
      msg.setSplash(value);
      break;
    case 4:
      var value = /** @type {!proto.dma.WeaponTemplateProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new value_pb.CriticalProto;
      reader.readMessage(value,value_pb.CriticalProto.deserializeBinaryFromReader);
      msg.setCritical(value);
      break;
    case 6:
      var value = /** @type {!proto.dma.WeaponStyle} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 7:
      var value = /** @type {!proto.dma.Proficiency} */ (reader.readEnum());
      msg.setProficiency(value);
      break;
    case 8:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 9:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setReach(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAttacks(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinesse(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAmmunition(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addAmmunitionNeeded(value);
      break;
    case 14:
      var value = /** @type {!proto.dma.SizeProto.Size} */ (reader.readEnum());
      msg.setWielderSize(value);
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
proto.dma.WeaponTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.WeaponTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.WeaponTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.WeaponTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDamage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.DamageProto.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryDamage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DamageProto.serializeBinaryToWriter
    );
  }
  f = message.getSplash();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      value_pb.DamageProto.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCritical();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      value_pb.CriticalProto.serializeBinaryToWriter
    );
  }
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getProficiency();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getReach();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getMaxAttacks();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getFinesse();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getAmmunition();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getAmmunitionNeededList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getWielderSize();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.WeaponTemplateProto.Type = {
  UNKNOWN: 0,
  PIERCING_OR_SLASHING: 1,
  BLUDGEONING_OR_PIERCING: 2,
  BLUDGEONING_AND_PIERCING: 3,
  SLASHING_OR_PIERCING: 4,
  SLASHING: 5,
  BLUDGEONING: 6,
  PIERCING: 7,
  GRENADE: 8,
  NONE: 9
};

/**
 * optional DamageProto damage = 1;
 * @return {?proto.dma.DamageProto}
 */
proto.dma.WeaponTemplateProto.prototype.getDamage = function() {
  return /** @type{?proto.dma.DamageProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DamageProto, 1));
};


/**
 * @param {?proto.dma.DamageProto|undefined} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
*/
proto.dma.WeaponTemplateProto.prototype.setDamage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.clearDamage = function() {
  return this.setDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.hasDamage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DamageProto secondary_damage = 2;
 * @return {?proto.dma.DamageProto}
 */
proto.dma.WeaponTemplateProto.prototype.getSecondaryDamage = function() {
  return /** @type{?proto.dma.DamageProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DamageProto, 2));
};


/**
 * @param {?proto.dma.DamageProto|undefined} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
*/
proto.dma.WeaponTemplateProto.prototype.setSecondaryDamage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.clearSecondaryDamage = function() {
  return this.setSecondaryDamage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.hasSecondaryDamage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DamageProto splash = 3;
 * @return {?proto.dma.DamageProto}
 */
proto.dma.WeaponTemplateProto.prototype.getSplash = function() {
  return /** @type{?proto.dma.DamageProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DamageProto, 3));
};


/**
 * @param {?proto.dma.DamageProto|undefined} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
*/
proto.dma.WeaponTemplateProto.prototype.setSplash = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.clearSplash = function() {
  return this.setSplash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.hasSplash = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Type type = 4;
 * @return {!proto.dma.WeaponTemplateProto.Type}
 */
proto.dma.WeaponTemplateProto.prototype.getType = function() {
  return /** @type {!proto.dma.WeaponTemplateProto.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dma.WeaponTemplateProto.Type} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional CriticalProto critical = 5;
 * @return {?proto.dma.CriticalProto}
 */
proto.dma.WeaponTemplateProto.prototype.getCritical = function() {
  return /** @type{?proto.dma.CriticalProto} */ (
    jspb.Message.getWrapperField(this, value_pb.CriticalProto, 5));
};


/**
 * @param {?proto.dma.CriticalProto|undefined} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
*/
proto.dma.WeaponTemplateProto.prototype.setCritical = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.clearCritical = function() {
  return this.setCritical(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.hasCritical = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional WeaponStyle style = 6;
 * @return {!proto.dma.WeaponStyle}
 */
proto.dma.WeaponTemplateProto.prototype.getStyle = function() {
  return /** @type {!proto.dma.WeaponStyle} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dma.WeaponStyle} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional Proficiency proficiency = 7;
 * @return {!proto.dma.Proficiency}
 */
proto.dma.WeaponTemplateProto.prototype.getProficiency = function() {
  return /** @type {!proto.dma.Proficiency} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.dma.Proficiency} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setProficiency = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional DistanceProto range = 8;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.WeaponTemplateProto.prototype.getRange = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 8));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
*/
proto.dma.WeaponTemplateProto.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.hasRange = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DistanceProto reach = 9;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.WeaponTemplateProto.prototype.getReach = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 9));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
*/
proto.dma.WeaponTemplateProto.prototype.setReach = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.clearReach = function() {
  return this.setReach(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.hasReach = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 max_attacks = 10;
 * @return {number}
 */
proto.dma.WeaponTemplateProto.prototype.getMaxAttacks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setMaxAttacks = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool finesse = 11;
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.getFinesse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setFinesse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool ammunition = 12;
 * @return {boolean}
 */
proto.dma.WeaponTemplateProto.prototype.getAmmunition = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setAmmunition = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated string ammunition_needed = 13;
 * @return {!Array<string>}
 */
proto.dma.WeaponTemplateProto.prototype.getAmmunitionNeededList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setAmmunitionNeededList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.addAmmunitionNeeded = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.clearAmmunitionNeededList = function() {
  return this.setAmmunitionNeededList([]);
};


/**
 * optional SizeProto.Size wielder_size = 14;
 * @return {!proto.dma.SizeProto.Size}
 */
proto.dma.WeaponTemplateProto.prototype.getWielderSize = function() {
  return /** @type {!proto.dma.SizeProto.Size} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.dma.SizeProto.Size} value
 * @return {!proto.dma.WeaponTemplateProto} returns this
 */
proto.dma.WeaponTemplateProto.prototype.setWielderSize = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
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



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.MagicTemplateProto.repeatedFields_ = [2];



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
proto.dma.MagicTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MagicTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MagicTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto.dma.MagicTemplateProto.Modifier.toObject, includeInstance)
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
 * @return {!proto.dma.MagicTemplateProto}
 */
proto.dma.MagicTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MagicTemplateProto;
  return proto.dma.MagicTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MagicTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MagicTemplateProto}
 */
proto.dma.MagicTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.dma.MagicTemplateProto.Modifier;
      reader.readMessage(value,proto.dma.MagicTemplateProto.Modifier.deserializeBinaryFromReader);
      msg.addModifier(value);
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
proto.dma.MagicTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MagicTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MagicTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dma.MagicTemplateProto.Modifier.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.MagicTemplateProto.Type = {
  UNKNOWN: 0,
  STRENGTH: 1,
  DEXTERITY: 2,
  CONSTITUTION: 3,
  INTELLIGENCE: 4,
  WISDOM: 5,
  CHARISMA: 6,
  ATTACK: 7,
  DAMAGE: 8,
  ARMOR_CLASS: 9,
  HIDE: 10,
  MOVE_SILENTLY: 11,
  REFLEX: 12,
  WILL: 13,
  FORTITUDE: 14
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
proto.dma.MagicTemplateProto.Modifier.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MagicTemplateProto.Modifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MagicTemplateProto.Modifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicTemplateProto.Modifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.dma.MagicTemplateProto.Modifier}
 */
proto.dma.MagicTemplateProto.Modifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MagicTemplateProto.Modifier;
  return proto.dma.MagicTemplateProto.Modifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MagicTemplateProto.Modifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MagicTemplateProto.Modifier}
 */
proto.dma.MagicTemplateProto.Modifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.dma.MagicTemplateProto.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.dma.MagicTemplateProto.Modifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MagicTemplateProto.Modifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MagicTemplateProto.Modifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MagicTemplateProto.Modifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
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
 * optional Type type = 3;
 * @return {!proto.dma.MagicTemplateProto.Type}
 */
proto.dma.MagicTemplateProto.Modifier.prototype.getType = function() {
  return /** @type {!proto.dma.MagicTemplateProto.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dma.MagicTemplateProto.Type} value
 * @return {!proto.dma.MagicTemplateProto.Modifier} returns this
 */
proto.dma.MagicTemplateProto.Modifier.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ModifierProto modifier = 2;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.MagicTemplateProto.Modifier.prototype.getModifier = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 2));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.MagicTemplateProto.Modifier} returns this
*/
proto.dma.MagicTemplateProto.Modifier.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MagicTemplateProto.Modifier} returns this
 */
proto.dma.MagicTemplateProto.Modifier.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MagicTemplateProto.Modifier.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Modifier modifier = 2;
 * @return {!Array<!proto.dma.MagicTemplateProto.Modifier>}
 */
proto.dma.MagicTemplateProto.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.dma.MagicTemplateProto.Modifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MagicTemplateProto.Modifier, 2));
};


/**
 * @param {!Array<!proto.dma.MagicTemplateProto.Modifier>} value
 * @return {!proto.dma.MagicTemplateProto} returns this
*/
proto.dma.MagicTemplateProto.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dma.MagicTemplateProto.Modifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MagicTemplateProto.Modifier}
 */
proto.dma.MagicTemplateProto.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dma.MagicTemplateProto.Modifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MagicTemplateProto} returns this
 */
proto.dma.MagicTemplateProto.prototype.clearModifierList = function() {
  return this.setModifierList([]);
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
proto.dma.ArmorTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ArmorTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ArmorTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ArmorTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    acBonus: (f = msg.getAcBonus()) && value_pb.ModifierProto.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxDexterity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    checkPenalty: jspb.Message.getFieldWithDefault(msg, 4, 0),
    arcaneFailure: jspb.Message.getFieldWithDefault(msg, 5, 0),
    speedFast: jspb.Message.getFieldWithDefault(msg, 6, 0),
    speedSlow: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.dma.ArmorTemplateProto}
 */
proto.dma.ArmorTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ArmorTemplateProto;
  return proto.dma.ArmorTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ArmorTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ArmorTemplateProto}
 */
proto.dma.ArmorTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new value_pb.ModifierProto;
      reader.readMessage(value,value_pb.ModifierProto.deserializeBinaryFromReader);
      msg.setAcBonus(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.ArmorTemplateProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxDexterity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckPenalty(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setArcaneFailure(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeedFast(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeedSlow(value);
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
proto.dma.ArmorTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ArmorTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ArmorTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ArmorTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcBonus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.ModifierProto.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getCheckPenalty();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getArcaneFailure();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSpeedFast();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSpeedSlow();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.ArmorTemplateProto.Type = {
  UNKNOWN: 0,
  LIGHT: 1,
  MEDIUM: 2,
  HEAVY: 3,
  SHIELD: 4,
  TOWER_SHIELD: 5,
  NONE: 6
};

/**
 * optional ModifierProto ac_bonus = 1;
 * @return {?proto.dma.ModifierProto}
 */
proto.dma.ArmorTemplateProto.prototype.getAcBonus = function() {
  return /** @type{?proto.dma.ModifierProto} */ (
    jspb.Message.getWrapperField(this, value_pb.ModifierProto, 1));
};


/**
 * @param {?proto.dma.ModifierProto|undefined} value
 * @return {!proto.dma.ArmorTemplateProto} returns this
*/
proto.dma.ArmorTemplateProto.prototype.setAcBonus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ArmorTemplateProto} returns this
 */
proto.dma.ArmorTemplateProto.prototype.clearAcBonus = function() {
  return this.setAcBonus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ArmorTemplateProto.prototype.hasAcBonus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Type type = 2;
 * @return {!proto.dma.ArmorTemplateProto.Type}
 */
proto.dma.ArmorTemplateProto.prototype.getType = function() {
  return /** @type {!proto.dma.ArmorTemplateProto.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.ArmorTemplateProto.Type} value
 * @return {!proto.dma.ArmorTemplateProto} returns this
 */
proto.dma.ArmorTemplateProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 max_dexterity = 3;
 * @return {number}
 */
proto.dma.ArmorTemplateProto.prototype.getMaxDexterity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorTemplateProto} returns this
 */
proto.dma.ArmorTemplateProto.prototype.setMaxDexterity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 check_penalty = 4;
 * @return {number}
 */
proto.dma.ArmorTemplateProto.prototype.getCheckPenalty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorTemplateProto} returns this
 */
proto.dma.ArmorTemplateProto.prototype.setCheckPenalty = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 arcane_failure = 5;
 * @return {number}
 */
proto.dma.ArmorTemplateProto.prototype.getArcaneFailure = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorTemplateProto} returns this
 */
proto.dma.ArmorTemplateProto.prototype.setArcaneFailure = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 speed_fast = 6;
 * @return {number}
 */
proto.dma.ArmorTemplateProto.prototype.getSpeedFast = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorTemplateProto} returns this
 */
proto.dma.ArmorTemplateProto.prototype.setSpeedFast = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 speed_slow = 7;
 * @return {number}
 */
proto.dma.ArmorTemplateProto.prototype.getSpeedSlow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ArmorTemplateProto} returns this
 */
proto.dma.ArmorTemplateProto.prototype.setSpeedSlow = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
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
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.FeatTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.FeatTemplateProto} returns this
*/
proto.dma.FeatTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.FeatTemplateProto} returns this
 */
proto.dma.FeatTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.FeatTemplateProto.prototype.hasTemplate = function() {
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
proto.dma.MiniatureTemplateProto.repeatedFields_ = [7,8];



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
proto.dma.MiniatureTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MiniatureTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MiniatureTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MiniatureTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
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
 * @return {!proto.dma.MiniatureTemplateProto}
 */
proto.dma.MiniatureTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MiniatureTemplateProto;
  return proto.dma.MiniatureTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MiniatureTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MiniatureTemplateProto}
 */
proto.dma.MiniatureTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
      var value = /** @type {!proto.dma.SizeProto.Size} */ (reader.readEnum());
      msg.setSize(value);
      break;
    case 10:
      var value = /** @type {!proto.dma.MiniatureTemplateProto.Rarity} */ (reader.readEnum());
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
proto.dma.MiniatureTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MiniatureTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MiniatureTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MiniatureTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
 * @enum {number}
 */
proto.dma.MiniatureTemplateProto.Rarity = {
  UNKNOWN: 0,
  UNDEFINED: 1,
  COMMON: 2,
  UNCOMMON: 3,
  RARE: 4,
  ULTRA_RARE: 5,
  UNIQUE: 6,
  SPECIAL: 7
};

/**
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.MiniatureTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
*/
proto.dma.MiniatureTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.MiniatureTemplateProto.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string set = 2;
 * @return {string}
 */
proto.dma.MiniatureTemplateProto.prototype.getSet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setSet = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.dma.MiniatureTemplateProto.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string number_affix = 4;
 * @return {string}
 */
proto.dma.MiniatureTemplateProto.prototype.getNumberAffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setNumberAffix = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string race = 5;
 * @return {string}
 */
proto.dma.MiniatureTemplateProto.prototype.getRace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setRace = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string type = 6;
 * @return {string}
 */
proto.dma.MiniatureTemplateProto.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string subtype = 7;
 * @return {!Array<string>}
 */
proto.dma.MiniatureTemplateProto.prototype.getSubtypeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setSubtypeList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.addSubtype = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.clearSubtypeList = function() {
  return this.setSubtypeList([]);
};


/**
 * repeated string class = 8;
 * @return {!Array<string>}
 */
proto.dma.MiniatureTemplateProto.prototype.getClassList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setClassList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.addClass = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.clearClassList = function() {
  return this.setClassList([]);
};


/**
 * optional SizeProto.Size size = 9;
 * @return {!proto.dma.SizeProto.Size}
 */
proto.dma.MiniatureTemplateProto.prototype.getSize = function() {
  return /** @type {!proto.dma.SizeProto.Size} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.dma.SizeProto.Size} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setSize = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional Rarity rarity = 10;
 * @return {!proto.dma.MiniatureTemplateProto.Rarity}
 */
proto.dma.MiniatureTemplateProto.prototype.getRarity = function() {
  return /** @type {!proto.dma.MiniatureTemplateProto.Rarity} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.dma.MiniatureTemplateProto.Rarity} value
 * @return {!proto.dma.MiniatureTemplateProto} returns this
 */
proto.dma.MiniatureTemplateProto.prototype.setRarity = function(value) {
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
    proto.dma.MiniatureTemplateProto.toObject, includeInstance)
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
      var value = new proto.dma.MiniatureTemplateProto;
      reader.readMessage(value,proto.dma.MiniatureTemplateProto.deserializeBinaryFromReader);
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
      proto.dma.MiniatureTemplateProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MiniatureTemplateProto miniatures = 1;
 * @return {!Array<!proto.dma.MiniatureTemplateProto>}
 */
proto.dma.MiniaturesProto.prototype.getMiniaturesList = function() {
  return /** @type{!Array<!proto.dma.MiniatureTemplateProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MiniatureTemplateProto, 1));
};


/**
 * @param {!Array<!proto.dma.MiniatureTemplateProto>} value
 * @return {!proto.dma.MiniaturesProto} returns this
*/
proto.dma.MiniaturesProto.prototype.setMiniaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dma.MiniatureTemplateProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MiniatureTemplateProto}
 */
proto.dma.MiniaturesProto.prototype.addMiniatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dma.MiniatureTemplateProto, opt_index);
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
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
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
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.SkillTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.SkillTemplateProto} returns this
*/
proto.dma.SkillTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SkillTemplateProto} returns this
 */
proto.dma.SkillTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SkillTemplateProto.prototype.hasTemplate = function() {
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
proto.dma.SpellTemplateProto.repeatedFields_ = [3,5,6,7,8];



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
proto.dma.SpellTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
    school: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subschoolList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    summary: jspb.Message.getFieldWithDefault(msg, 4, ""),
    descriptorList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    levelList: jspb.Message.toObjectList(msg.getLevelList(),
    proto.dma.SpellTemplateProto.Level.toObject, includeInstance),
    componentsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    materialList: jspb.Message.toObjectList(msg.getMaterialList(),
    proto.dma.SpellTemplateProto.Material.toObject, includeInstance),
    focus: (f = msg.getFocus()) && proto.dma.SpellTemplateProto.Material.toObject(includeInstance, f),
    castingTime: (f = msg.getCastingTime()) && value_pb.DurationProto.toObject(includeInstance, f),
    specialRange: jspb.Message.getFieldWithDefault(msg, 11, 0),
    range: (f = msg.getRange()) && value_pb.DistanceProto.toObject(includeInstance, f),
    effect: (f = msg.getEffect()) && proto.dma.SpellTemplateProto.Effect.toObject(includeInstance, f),
    target: jspb.Message.getFieldWithDefault(msg, 14, ""),
    area: jspb.Message.getFieldWithDefault(msg, 15, ""),
    duration: (f = msg.getDuration()) && proto.dma.SpellTemplateProto.Duration.toObject(includeInstance, f),
    savingThrow: jspb.Message.getFieldWithDefault(msg, 17, ""),
    spellResistance: jspb.Message.getFieldWithDefault(msg, 18, "")
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
 * @return {!proto.dma.SpellTemplateProto}
 */
proto.dma.SpellTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellTemplateProto;
  return proto.dma.SpellTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellTemplateProto}
 */
proto.dma.SpellTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 2:
      var value = /** @type {!proto.dma.SpellTemplateProto.School} */ (reader.readEnum());
      msg.setSchool(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.dma.SpellTemplateProto.Subschool>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSubschool(values[i]);
      }
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.dma.SpellTemplateProto.Descriptor>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDescriptor(values[i]);
      }
      break;
    case 6:
      var value = new proto.dma.SpellTemplateProto.Level;
      reader.readMessage(value,proto.dma.SpellTemplateProto.Level.deserializeBinaryFromReader);
      msg.addLevel(value);
      break;
    case 7:
      var values = /** @type {!Array<!proto.dma.SpellTemplateProto.Components>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addComponents(values[i]);
      }
      break;
    case 8:
      var value = new proto.dma.SpellTemplateProto.Material;
      reader.readMessage(value,proto.dma.SpellTemplateProto.Material.deserializeBinaryFromReader);
      msg.addMaterial(value);
      break;
    case 9:
      var value = new proto.dma.SpellTemplateProto.Material;
      reader.readMessage(value,proto.dma.SpellTemplateProto.Material.deserializeBinaryFromReader);
      msg.setFocus(value);
      break;
    case 10:
      var value = new value_pb.DurationProto;
      reader.readMessage(value,value_pb.DurationProto.deserializeBinaryFromReader);
      msg.setCastingTime(value);
      break;
    case 11:
      var value = /** @type {!proto.dma.SpellTemplateProto.Range} */ (reader.readEnum());
      msg.setSpecialRange(value);
      break;
    case 12:
      var value = new value_pb.DistanceProto;
      reader.readMessage(value,value_pb.DistanceProto.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 13:
      var value = new proto.dma.SpellTemplateProto.Effect;
      reader.readMessage(value,proto.dma.SpellTemplateProto.Effect.deserializeBinaryFromReader);
      msg.setEffect(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setArea(value);
      break;
    case 16:
      var value = new proto.dma.SpellTemplateProto.Duration;
      reader.readMessage(value,proto.dma.SpellTemplateProto.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setSavingThrow(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpellResistance(value);
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
proto.dma.SpellTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
    );
  }
  f = message.getSchool();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSubschoolList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescriptorList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getLevelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.dma.SpellTemplateProto.Level.serializeBinaryToWriter
    );
  }
  f = message.getComponentsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
  f = message.getMaterialList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.dma.SpellTemplateProto.Material.serializeBinaryToWriter
    );
  }
  f = message.getFocus();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dma.SpellTemplateProto.Material.serializeBinaryToWriter
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
  f = message.getSpecialRange();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getEffect();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.dma.SpellTemplateProto.Effect.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getArea();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.dma.SpellTemplateProto.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSavingThrow();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getSpellResistance();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.SpellTemplateProto.School = {
  UNKNOWN_SCHOOL: 0,
  ABJURATION: 1,
  CONJURATION: 2,
  DIVINATION: 3,
  ENCHANTMENT: 4,
  EVOCATION: 5,
  ILLUSION: 6,
  NECROMANCY: 7,
  TRANSMUTATION: 8,
  UNIVERSAL: 9
};

/**
 * @enum {number}
 */
proto.dma.SpellTemplateProto.Subschool = {
  UNKNOWN_SUBSCHOOL: 0,
  NONE: 1,
  CALLING: 2,
  CREATION_OR_CALLING: 3,
  CREATION: 4,
  HEALING: 5,
  SUMMONING: 6,
  TELEPORTATION: 7,
  SCRYING: 8,
  CHARM: 9,
  COMPULSION: 10,
  FIGMENT_OR_GLAMER: 11,
  FIGMENT: 12,
  GLAMER: 13,
  PATTERN: 14,
  PHANTASM: 15,
  SHADOW: 16,
  DARKNESS_SUBSCHOOL: 17
};

/**
 * @enum {number}
 */
proto.dma.SpellTemplateProto.Descriptor = {
  UNKNOWN_DESCRIPTOR: 0,
  ACID: 1,
  AIR: 2,
  CHAOTIC: 3,
  COLD: 4,
  DARKNESS: 5,
  DEATH: 6,
  EARTH: 7,
  ELECTRICITY: 8,
  EVIL: 9,
  FEAR: 10,
  FIRE_OR_COLD: 11,
  FIRE: 12,
  FORCE: 13,
  GOOD: 14,
  LANGUAGE_DEPENDENT: 15,
  LAWFUL: 16,
  LIGHT: 17,
  MIND_AFFECTING: 18,
  SCRYING_DESCRIPTOR: 19,
  SONIC: 20,
  WATER: 21,
  SEE_TEXT: 22
};

/**
 * @enum {number}
 */
proto.dma.SpellTemplateProto.Components = {
  UNKNOWN_COMPONENT: 0,
  VERBOSE: 1,
  SOMATIC: 2,
  MATERIAL_DEVINE_FOCUS: 3,
  MATERIAL: 4,
  FOCUS_DIVINE_FOCUS: 5,
  FOCUS: 6,
  DIVINE_FOCUS: 7,
  EXPERIENCE_POINTS: 8
};

/**
 * @enum {number}
 */
proto.dma.SpellTemplateProto.Range = {
  UNKNOWN_RANGE: 0,
  PERSONAL_OR_TOUCH: 1,
  PERSONAL_AND_TOUCH: 2,
  PERSONAL_OR_CLOSE: 3,
  PERSONAL: 4,
  TOUCH: 5,
  CLOSE: 6,
  MEDIUM: 7,
  LONG: 8,
  UNLIMITED: 9,
  FOURTY_FEET_PER_LEVEL: 10,
  SEE_TEXT_RANGE: 11,
  ANYWHERE_WITHIN_AREA_WARDED: 12,
  ONE_MILE_PER_LEVEL: 13,
  UP_TO_TEN_FEET_PER_LEVEL: 14
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
proto.dma.SpellTemplateProto.Level.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellTemplateProto.Level.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellTemplateProto.Level} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Level.toObject = function(includeInstance, msg) {
  var f, obj = {
    spellClass: jspb.Message.getFieldWithDefault(msg, 1, 0),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.dma.SpellTemplateProto.Level}
 */
proto.dma.SpellTemplateProto.Level.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellTemplateProto.Level;
  return proto.dma.SpellTemplateProto.Level.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellTemplateProto.Level} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellTemplateProto.Level}
 */
proto.dma.SpellTemplateProto.Level.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.SpellClass} */ (reader.readEnum());
      msg.setSpellClass(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
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
proto.dma.SpellTemplateProto.Level.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellTemplateProto.Level.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellTemplateProto.Level} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Level.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpellClass();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional SpellClass spell_class = 1;
 * @return {!proto.dma.SpellClass}
 */
proto.dma.SpellTemplateProto.Level.prototype.getSpellClass = function() {
  return /** @type {!proto.dma.SpellClass} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.SpellClass} value
 * @return {!proto.dma.SpellTemplateProto.Level} returns this
 */
proto.dma.SpellTemplateProto.Level.prototype.setSpellClass = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 level = 2;
 * @return {number}
 */
proto.dma.SpellTemplateProto.Level.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.SpellTemplateProto.Level} returns this
 */
proto.dma.SpellTemplateProto.Level.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dma.SpellTemplateProto.Material.repeatedFields_ = [2];



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
proto.dma.SpellTemplateProto.Material.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellTemplateProto.Material.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellTemplateProto.Material} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Material.toObject = function(includeInstance, msg) {
  var f, obj = {
    use: jspb.Message.getFieldWithDefault(msg, 1, ""),
    componentList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.dma.SpellTemplateProto.Material}
 */
proto.dma.SpellTemplateProto.Material.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellTemplateProto.Material;
  return proto.dma.SpellTemplateProto.Material.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellTemplateProto.Material} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellTemplateProto.Material}
 */
proto.dma.SpellTemplateProto.Material.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUse(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addComponent(value);
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
proto.dma.SpellTemplateProto.Material.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellTemplateProto.Material.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellTemplateProto.Material} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Material.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComponentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string use = 1;
 * @return {string}
 */
proto.dma.SpellTemplateProto.Material.prototype.getUse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto.Material} returns this
 */
proto.dma.SpellTemplateProto.Material.prototype.setUse = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string component = 2;
 * @return {!Array<string>}
 */
proto.dma.SpellTemplateProto.Material.prototype.getComponentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.SpellTemplateProto.Material} returns this
 */
proto.dma.SpellTemplateProto.Material.prototype.setComponentList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellTemplateProto.Material} returns this
 */
proto.dma.SpellTemplateProto.Material.prototype.addComponent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellTemplateProto.Material} returns this
 */
proto.dma.SpellTemplateProto.Material.prototype.clearComponentList = function() {
  return this.setComponentList([]);
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
proto.dma.SpellTemplateProto.Effect.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellTemplateProto.Effect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellTemplateProto.Effect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Effect.toObject = function(includeInstance, msg) {
  var f, obj = {
    distance: (f = msg.getDistance()) && value_pb.DistanceProto.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    description: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.dma.SpellTemplateProto.Effect}
 */
proto.dma.SpellTemplateProto.Effect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellTemplateProto.Effect;
  return proto.dma.SpellTemplateProto.Effect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellTemplateProto.Effect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellTemplateProto.Effect}
 */
proto.dma.SpellTemplateProto.Effect.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.dma.SpellTemplateProto.Effect.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
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
proto.dma.SpellTemplateProto.Effect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellTemplateProto.Effect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellTemplateProto.Effect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Effect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      value_pb.DistanceProto.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.dma.SpellTemplateProto.Effect.Type = {
  UNKNOWN: 0,
  RAY: 1,
  SPREAD: 2
};

/**
 * optional DistanceProto distance = 1;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.SpellTemplateProto.Effect.prototype.getDistance = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 1));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.SpellTemplateProto.Effect} returns this
*/
proto.dma.SpellTemplateProto.Effect.prototype.setDistance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto.Effect} returns this
 */
proto.dma.SpellTemplateProto.Effect.prototype.clearDistance = function() {
  return this.setDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.Effect.prototype.hasDistance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Type type = 2;
 * @return {!proto.dma.SpellTemplateProto.Effect.Type}
 */
proto.dma.SpellTemplateProto.Effect.prototype.getType = function() {
  return /** @type {!proto.dma.SpellTemplateProto.Effect.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.SpellTemplateProto.Effect.Type} value
 * @return {!proto.dma.SpellTemplateProto.Effect} returns this
 */
proto.dma.SpellTemplateProto.Effect.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.dma.SpellTemplateProto.Effect.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto.Effect} returns this
 */
proto.dma.SpellTemplateProto.Effect.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.dma.SpellTemplateProto.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.SpellTemplateProto.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.SpellTemplateProto.Duration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    durationDescription: jspb.Message.getFieldWithDefault(msg, 1, ""),
    duration: (f = msg.getDuration()) && value_pb.DurationProto.toObject(includeInstance, f),
    levels: jspb.Message.getFieldWithDefault(msg, 3, ""),
    additionalDuration: (f = msg.getAdditionalDuration()) && value_pb.DurationProto.toObject(includeInstance, f),
    flags: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.dma.SpellTemplateProto.Duration}
 */
proto.dma.SpellTemplateProto.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.SpellTemplateProto.Duration;
  return proto.dma.SpellTemplateProto.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.SpellTemplateProto.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.SpellTemplateProto.Duration}
 */
proto.dma.SpellTemplateProto.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDurationDescription(value);
      break;
    case 2:
      var value = new value_pb.DurationProto;
      reader.readMessage(value,value_pb.DurationProto.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevels(value);
      break;
    case 4:
      var value = new value_pb.DurationProto;
      reader.readMessage(value,value_pb.DurationProto.deserializeBinaryFromReader);
      msg.setAdditionalDuration(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlags(value);
      break;
    case 6:
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
proto.dma.SpellTemplateProto.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.SpellTemplateProto.Duration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.SpellTemplateProto.Duration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.SpellTemplateProto.Duration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDurationDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      value_pb.DurationProto.serializeBinaryToWriter
    );
  }
  f = message.getLevels();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdditionalDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      value_pb.DurationProto.serializeBinaryToWriter
    );
  }
  f = message.getFlags();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string duration_description = 1;
 * @return {string}
 */
proto.dma.SpellTemplateProto.Duration.prototype.getDurationDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
 */
proto.dma.SpellTemplateProto.Duration.prototype.setDurationDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DurationProto duration = 2;
 * @return {?proto.dma.DurationProto}
 */
proto.dma.SpellTemplateProto.Duration.prototype.getDuration = function() {
  return /** @type{?proto.dma.DurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DurationProto, 2));
};


/**
 * @param {?proto.dma.DurationProto|undefined} value
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
*/
proto.dma.SpellTemplateProto.Duration.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
 */
proto.dma.SpellTemplateProto.Duration.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.Duration.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string levels = 3;
 * @return {string}
 */
proto.dma.SpellTemplateProto.Duration.prototype.getLevels = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
 */
proto.dma.SpellTemplateProto.Duration.prototype.setLevels = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DurationProto additional_duration = 4;
 * @return {?proto.dma.DurationProto}
 */
proto.dma.SpellTemplateProto.Duration.prototype.getAdditionalDuration = function() {
  return /** @type{?proto.dma.DurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DurationProto, 4));
};


/**
 * @param {?proto.dma.DurationProto|undefined} value
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
*/
proto.dma.SpellTemplateProto.Duration.prototype.setAdditionalDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
 */
proto.dma.SpellTemplateProto.Duration.prototype.clearAdditionalDuration = function() {
  return this.setAdditionalDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.Duration.prototype.hasAdditionalDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string flags = 5;
 * @return {string}
 */
proto.dma.SpellTemplateProto.Duration.prototype.getFlags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
 */
proto.dma.SpellTemplateProto.Duration.prototype.setFlags = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.dma.SpellTemplateProto.Duration.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto.Duration} returns this
 */
proto.dma.SpellTemplateProto.Duration.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.SpellTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional School school = 2;
 * @return {!proto.dma.SpellTemplateProto.School}
 */
proto.dma.SpellTemplateProto.prototype.getSchool = function() {
  return /** @type {!proto.dma.SpellTemplateProto.School} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dma.SpellTemplateProto.School} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setSchool = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Subschool subschool = 3;
 * @return {!Array<!proto.dma.SpellTemplateProto.Subschool>}
 */
proto.dma.SpellTemplateProto.prototype.getSubschoolList = function() {
  return /** @type {!Array<!proto.dma.SpellTemplateProto.Subschool>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.dma.SpellTemplateProto.Subschool>} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setSubschoolList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.dma.SpellTemplateProto.Subschool} value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.addSubschool = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearSubschoolList = function() {
  return this.setSubschoolList([]);
};


/**
 * optional string summary = 4;
 * @return {string}
 */
proto.dma.SpellTemplateProto.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Descriptor descriptor = 5;
 * @return {!Array<!proto.dma.SpellTemplateProto.Descriptor>}
 */
proto.dma.SpellTemplateProto.prototype.getDescriptorList = function() {
  return /** @type {!Array<!proto.dma.SpellTemplateProto.Descriptor>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.dma.SpellTemplateProto.Descriptor>} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setDescriptorList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.dma.SpellTemplateProto.Descriptor} value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.addDescriptor = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearDescriptorList = function() {
  return this.setDescriptorList([]);
};


/**
 * repeated Level level = 6;
 * @return {!Array<!proto.dma.SpellTemplateProto.Level>}
 */
proto.dma.SpellTemplateProto.prototype.getLevelList = function() {
  return /** @type{!Array<!proto.dma.SpellTemplateProto.Level>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.SpellTemplateProto.Level, 6));
};


/**
 * @param {!Array<!proto.dma.SpellTemplateProto.Level>} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setLevelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.SpellTemplateProto.Level=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellTemplateProto.Level}
 */
proto.dma.SpellTemplateProto.prototype.addLevel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.SpellTemplateProto.Level, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearLevelList = function() {
  return this.setLevelList([]);
};


/**
 * repeated Components components = 7;
 * @return {!Array<!proto.dma.SpellTemplateProto.Components>}
 */
proto.dma.SpellTemplateProto.prototype.getComponentsList = function() {
  return /** @type {!Array<!proto.dma.SpellTemplateProto.Components>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<!proto.dma.SpellTemplateProto.Components>} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setComponentsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.dma.SpellTemplateProto.Components} value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.addComponents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearComponentsList = function() {
  return this.setComponentsList([]);
};


/**
 * repeated Material material = 8;
 * @return {!Array<!proto.dma.SpellTemplateProto.Material>}
 */
proto.dma.SpellTemplateProto.prototype.getMaterialList = function() {
  return /** @type{!Array<!proto.dma.SpellTemplateProto.Material>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.SpellTemplateProto.Material, 8));
};


/**
 * @param {!Array<!proto.dma.SpellTemplateProto.Material>} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setMaterialList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dma.SpellTemplateProto.Material=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.SpellTemplateProto.Material}
 */
proto.dma.SpellTemplateProto.prototype.addMaterial = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dma.SpellTemplateProto.Material, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearMaterialList = function() {
  return this.setMaterialList([]);
};


/**
 * optional Material focus = 9;
 * @return {?proto.dma.SpellTemplateProto.Material}
 */
proto.dma.SpellTemplateProto.prototype.getFocus = function() {
  return /** @type{?proto.dma.SpellTemplateProto.Material} */ (
    jspb.Message.getWrapperField(this, proto.dma.SpellTemplateProto.Material, 9));
};


/**
 * @param {?proto.dma.SpellTemplateProto.Material|undefined} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setFocus = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearFocus = function() {
  return this.setFocus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.prototype.hasFocus = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DurationProto casting_time = 10;
 * @return {?proto.dma.DurationProto}
 */
proto.dma.SpellTemplateProto.prototype.getCastingTime = function() {
  return /** @type{?proto.dma.DurationProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DurationProto, 10));
};


/**
 * @param {?proto.dma.DurationProto|undefined} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setCastingTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearCastingTime = function() {
  return this.setCastingTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.prototype.hasCastingTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Range special_range = 11;
 * @return {!proto.dma.SpellTemplateProto.Range}
 */
proto.dma.SpellTemplateProto.prototype.getSpecialRange = function() {
  return /** @type {!proto.dma.SpellTemplateProto.Range} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.dma.SpellTemplateProto.Range} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setSpecialRange = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional DistanceProto range = 12;
 * @return {?proto.dma.DistanceProto}
 */
proto.dma.SpellTemplateProto.prototype.getRange = function() {
  return /** @type{?proto.dma.DistanceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.DistanceProto, 12));
};


/**
 * @param {?proto.dma.DistanceProto|undefined} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.prototype.hasRange = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Effect effect = 13;
 * @return {?proto.dma.SpellTemplateProto.Effect}
 */
proto.dma.SpellTemplateProto.prototype.getEffect = function() {
  return /** @type{?proto.dma.SpellTemplateProto.Effect} */ (
    jspb.Message.getWrapperField(this, proto.dma.SpellTemplateProto.Effect, 13));
};


/**
 * @param {?proto.dma.SpellTemplateProto.Effect|undefined} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setEffect = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearEffect = function() {
  return this.setEffect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.prototype.hasEffect = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string target = 14;
 * @return {string}
 */
proto.dma.SpellTemplateProto.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string area = 15;
 * @return {string}
 */
proto.dma.SpellTemplateProto.prototype.getArea = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setArea = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional Duration duration = 16;
 * @return {?proto.dma.SpellTemplateProto.Duration}
 */
proto.dma.SpellTemplateProto.prototype.getDuration = function() {
  return /** @type{?proto.dma.SpellTemplateProto.Duration} */ (
    jspb.Message.getWrapperField(this, proto.dma.SpellTemplateProto.Duration, 16));
};


/**
 * @param {?proto.dma.SpellTemplateProto.Duration|undefined} value
 * @return {!proto.dma.SpellTemplateProto} returns this
*/
proto.dma.SpellTemplateProto.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.SpellTemplateProto.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string saving_throw = 17;
 * @return {string}
 */
proto.dma.SpellTemplateProto.prototype.getSavingThrow = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setSavingThrow = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string spell_resistance = 18;
 * @return {string}
 */
proto.dma.SpellTemplateProto.prototype.getSpellResistance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.SpellTemplateProto} returns this
 */
proto.dma.SpellTemplateProto.prototype.setSpellResistance = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
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
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
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
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.AdventureTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.AdventureTemplateProto} returns this
*/
proto.dma.AdventureTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.AdventureTemplateProto} returns this
 */
proto.dma.AdventureTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.AdventureTemplateProto.prototype.hasTemplate = function() {
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
proto.dma.ProductTemplateProto.repeatedFields_ = [6,7,8,9,10,11,12,24,26,27,28];



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
proto.dma.ProductTemplateProto.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductTemplateProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductTemplateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && proto.dma.TemplateProto.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    leader: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    notes: jspb.Message.getFieldWithDefault(msg, 5, ""),
    authorList: jspb.Message.toObjectList(msg.getAuthorList(),
    proto.dma.ProductTemplateProto.Person.toObject, includeInstance),
    editorList: jspb.Message.toObjectList(msg.getEditorList(),
    proto.dma.ProductTemplateProto.Person.toObject, includeInstance),
    coverList: jspb.Message.toObjectList(msg.getCoverList(),
    proto.dma.ProductTemplateProto.Person.toObject, includeInstance),
    cartographerList: jspb.Message.toObjectList(msg.getCartographerList(),
    proto.dma.ProductTemplateProto.Person.toObject, includeInstance),
    illustratorList: jspb.Message.toObjectList(msg.getIllustratorList(),
    proto.dma.ProductTemplateProto.Person.toObject, includeInstance),
    typographerList: jspb.Message.toObjectList(msg.getTypographerList(),
    proto.dma.ProductTemplateProto.Person.toObject, includeInstance),
    managerList: jspb.Message.toObjectList(msg.getManagerList(),
    proto.dma.ProductTemplateProto.Person.toObject, includeInstance),
    date: (f = msg.getDate()) && proto.dma.ProductTemplateProto.Date.toObject(includeInstance, f),
    isbn: (f = msg.getIsbn()) && proto.dma.ProductTemplateProto.ISBN.toObject(includeInstance, f),
    isbn13: (f = msg.getIsbn13()) && proto.dma.ProductTemplateProto.ISBN13.toObject(includeInstance, f),
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
    proto.dma.ProductTemplateProto.Content.toObject, includeInstance),
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
 * @return {!proto.dma.ProductTemplateProto}
 */
proto.dma.ProductTemplateProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductTemplateProto;
  return proto.dma.ProductTemplateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductTemplateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductTemplateProto}
 */
proto.dma.ProductTemplateProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dma.TemplateProto;
      reader.readMessage(value,proto.dma.TemplateProto.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
      var value = new proto.dma.ProductTemplateProto.Person;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader);
      msg.addAuthor(value);
      break;
    case 7:
      var value = new proto.dma.ProductTemplateProto.Person;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader);
      msg.addEditor(value);
      break;
    case 8:
      var value = new proto.dma.ProductTemplateProto.Person;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader);
      msg.addCover(value);
      break;
    case 9:
      var value = new proto.dma.ProductTemplateProto.Person;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader);
      msg.addCartographer(value);
      break;
    case 10:
      var value = new proto.dma.ProductTemplateProto.Person;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader);
      msg.addIllustrator(value);
      break;
    case 11:
      var value = new proto.dma.ProductTemplateProto.Person;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader);
      msg.addTypographer(value);
      break;
    case 12:
      var value = new proto.dma.ProductTemplateProto.Person;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader);
      msg.addManager(value);
      break;
    case 13:
      var value = new proto.dma.ProductTemplateProto.Date;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 14:
      var value = new proto.dma.ProductTemplateProto.ISBN;
      reader.readMessage(value,proto.dma.ProductTemplateProto.ISBN.deserializeBinaryFromReader);
      msg.setIsbn(value);
      break;
    case 15:
      var value = new proto.dma.ProductTemplateProto.ISBN13;
      reader.readMessage(value,proto.dma.ProductTemplateProto.ISBN13.deserializeBinaryFromReader);
      msg.setIsbn13(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPages(value);
      break;
    case 17:
      var value = /** @type {!proto.dma.ProductTemplateProto.System} */ (reader.readEnum());
      msg.setSystem(value);
      break;
    case 18:
      var value = /** @type {!proto.dma.ProductTemplateProto.Audience} */ (reader.readEnum());
      msg.setAudience(value);
      break;
    case 19:
      var value = /** @type {!proto.dma.ProductTemplateProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 20:
      var value = /** @type {!proto.dma.ProductTemplateProto.Style} */ (reader.readEnum());
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
      var value = new proto.dma.ProductTemplateProto.Content;
      reader.readMessage(value,proto.dma.ProductTemplateProto.Content.deserializeBinaryFromReader);
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
      var value = /** @type {!proto.dma.ProductTemplateProto.Layout} */ (reader.readEnum());
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
proto.dma.ProductTemplateProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductTemplateProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductTemplateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dma.TemplateProto.serializeBinaryToWriter
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
      proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getEditorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getCoverList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getCartographerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getIllustratorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getTypographerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getManagerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.dma.ProductTemplateProto.Date.serializeBinaryToWriter
    );
  }
  f = message.getIsbn();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.dma.ProductTemplateProto.ISBN.serializeBinaryToWriter
    );
  }
  f = message.getIsbn13();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.dma.ProductTemplateProto.ISBN13.serializeBinaryToWriter
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
      proto.dma.ProductTemplateProto.Content.serializeBinaryToWriter
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
proto.dma.ProductTemplateProto.System = {
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
proto.dma.ProductTemplateProto.Audience = {
  DM: 0,
  PLAYER: 1,
  ALL: 2,
  UNKNOWN: 3
};

/**
 * @enum {number}
 */
proto.dma.ProductTemplateProto.Type = {
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
  SPECIAL_BOOK: 26
};

/**
 * @enum {number}
 */
proto.dma.ProductTemplateProto.Style = {
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
proto.dma.ProductTemplateProto.Layout = {
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
proto.dma.ProductTemplateProto.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductTemplateProto.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductTemplateProto.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.Person.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductTemplateProto.Person;
  return proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductTemplateProto.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.Person.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.ProductTemplateProto.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductTemplateProto.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.Person.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ProductTemplateProto.Person.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.Person} returns this
 */
proto.dma.ProductTemplateProto.Person.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string job = 2;
 * @return {string}
 */
proto.dma.ProductTemplateProto.Person.prototype.getJob = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.Person} returns this
 */
proto.dma.ProductTemplateProto.Person.prototype.setJob = function(value) {
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
proto.dma.ProductTemplateProto.Date.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductTemplateProto.Date.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductTemplateProto.Date} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.Date.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ProductTemplateProto.Date}
 */
proto.dma.ProductTemplateProto.Date.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductTemplateProto.Date;
  return proto.dma.ProductTemplateProto.Date.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductTemplateProto.Date} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductTemplateProto.Date}
 */
proto.dma.ProductTemplateProto.Date.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.ProductTemplateProto.Date.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductTemplateProto.Date.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductTemplateProto.Date} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.Date.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ProductTemplateProto.Date.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductTemplateProto.Date} returns this
 */
proto.dma.ProductTemplateProto.Date.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.dma.ProductTemplateProto.Date.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductTemplateProto.Date} returns this
 */
proto.dma.ProductTemplateProto.Date.prototype.setMonth = function(value) {
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
proto.dma.ProductTemplateProto.ISBN.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductTemplateProto.ISBN.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductTemplateProto.ISBN} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.ISBN.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ProductTemplateProto.ISBN}
 */
proto.dma.ProductTemplateProto.ISBN.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductTemplateProto.ISBN;
  return proto.dma.ProductTemplateProto.ISBN.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductTemplateProto.ISBN} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductTemplateProto.ISBN}
 */
proto.dma.ProductTemplateProto.ISBN.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.ProductTemplateProto.ISBN.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductTemplateProto.ISBN.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductTemplateProto.ISBN} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.ISBN.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ProductTemplateProto.ISBN.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.ISBN} returns this
 */
proto.dma.ProductTemplateProto.ISBN.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string publisher = 2;
 * @return {string}
 */
proto.dma.ProductTemplateProto.ISBN.prototype.getPublisher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.ISBN} returns this
 */
proto.dma.ProductTemplateProto.ISBN.prototype.setPublisher = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.dma.ProductTemplateProto.ISBN.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.ISBN} returns this
 */
proto.dma.ProductTemplateProto.ISBN.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 check = 4;
 * @return {number}
 */
proto.dma.ProductTemplateProto.ISBN.prototype.getCheck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductTemplateProto.ISBN} returns this
 */
proto.dma.ProductTemplateProto.ISBN.prototype.setCheck = function(value) {
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
proto.dma.ProductTemplateProto.ISBN13.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductTemplateProto.ISBN13.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductTemplateProto.ISBN13} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.ISBN13.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ProductTemplateProto.ISBN13}
 */
proto.dma.ProductTemplateProto.ISBN13.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductTemplateProto.ISBN13;
  return proto.dma.ProductTemplateProto.ISBN13.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductTemplateProto.ISBN13} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductTemplateProto.ISBN13}
 */
proto.dma.ProductTemplateProto.ISBN13.deserializeBinaryFromReader = function(msg, reader) {
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
proto.dma.ProductTemplateProto.ISBN13.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductTemplateProto.ISBN13.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductTemplateProto.ISBN13} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.ISBN13.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ProductTemplateProto.ISBN13.prototype.getGroup13 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.ISBN13} returns this
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.setGroup13 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group = 2;
 * @return {string}
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.ISBN13} returns this
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string publisher = 3;
 * @return {string}
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.getPublisher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.ISBN13} returns this
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.setPublisher = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.ISBN13} returns this
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 check = 5;
 * @return {number}
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.getCheck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductTemplateProto.ISBN13} returns this
 */
proto.dma.ProductTemplateProto.ISBN13.prototype.setCheck = function(value) {
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
proto.dma.ProductTemplateProto.Content.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.ProductTemplateProto.Content.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.ProductTemplateProto.Content} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.Content.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dma.ProductTemplateProto.Content}
 */
proto.dma.ProductTemplateProto.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.ProductTemplateProto.Content;
  return proto.dma.ProductTemplateProto.Content.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.ProductTemplateProto.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.ProductTemplateProto.Content}
 */
proto.dma.ProductTemplateProto.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dma.ProductTemplateProto.Content.Part} */ (reader.readEnum());
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
proto.dma.ProductTemplateProto.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.ProductTemplateProto.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.ProductTemplateProto.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.ProductTemplateProto.Content.serializeBinaryToWriter = function(message, writer) {
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
proto.dma.ProductTemplateProto.Content.Part = {
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
 * @return {!proto.dma.ProductTemplateProto.Content.Part}
 */
proto.dma.ProductTemplateProto.Content.prototype.getPart = function() {
  return /** @type {!proto.dma.ProductTemplateProto.Content.Part} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dma.ProductTemplateProto.Content.Part} value
 * @return {!proto.dma.ProductTemplateProto.Content} returns this
 */
proto.dma.ProductTemplateProto.Content.prototype.setPart = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dma.ProductTemplateProto.Content.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto.Content} returns this
 */
proto.dma.ProductTemplateProto.Content.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.dma.ProductTemplateProto.Content.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductTemplateProto.Content} returns this
 */
proto.dma.ProductTemplateProto.Content.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional TemplateProto template = 1;
 * @return {?proto.dma.TemplateProto}
 */
proto.dma.ProductTemplateProto.prototype.getTemplate = function() {
  return /** @type{?proto.dma.TemplateProto} */ (
    jspb.Message.getWrapperField(this, proto.dma.TemplateProto, 1));
};


/**
 * @param {?proto.dma.TemplateProto|undefined} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductTemplateProto.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.dma.ProductTemplateProto.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string leader = 3;
 * @return {string}
 */
proto.dma.ProductTemplateProto.prototype.getLeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setLeader = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subtitle = 4;
 * @return {string}
 */
proto.dma.ProductTemplateProto.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string notes = 5;
 * @return {string}
 */
proto.dma.ProductTemplateProto.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Person author = 6;
 * @return {!Array<!proto.dma.ProductTemplateProto.Person>}
 */
proto.dma.ProductTemplateProto.prototype.getAuthorList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Person, 6));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Person>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setAuthorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.prototype.addAuthor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.dma.ProductTemplateProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearAuthorList = function() {
  return this.setAuthorList([]);
};


/**
 * repeated Person editor = 7;
 * @return {!Array<!proto.dma.ProductTemplateProto.Person>}
 */
proto.dma.ProductTemplateProto.prototype.getEditorList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Person, 7));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Person>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setEditorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.prototype.addEditor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.dma.ProductTemplateProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearEditorList = function() {
  return this.setEditorList([]);
};


/**
 * repeated Person cover = 8;
 * @return {!Array<!proto.dma.ProductTemplateProto.Person>}
 */
proto.dma.ProductTemplateProto.prototype.getCoverList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Person, 8));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Person>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setCoverList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.prototype.addCover = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dma.ProductTemplateProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearCoverList = function() {
  return this.setCoverList([]);
};


/**
 * repeated Person cartographer = 9;
 * @return {!Array<!proto.dma.ProductTemplateProto.Person>}
 */
proto.dma.ProductTemplateProto.prototype.getCartographerList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Person, 9));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Person>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setCartographerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.prototype.addCartographer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.dma.ProductTemplateProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearCartographerList = function() {
  return this.setCartographerList([]);
};


/**
 * repeated Person illustrator = 10;
 * @return {!Array<!proto.dma.ProductTemplateProto.Person>}
 */
proto.dma.ProductTemplateProto.prototype.getIllustratorList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Person, 10));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Person>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setIllustratorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.prototype.addIllustrator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.dma.ProductTemplateProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearIllustratorList = function() {
  return this.setIllustratorList([]);
};


/**
 * repeated Person typographer = 11;
 * @return {!Array<!proto.dma.ProductTemplateProto.Person>}
 */
proto.dma.ProductTemplateProto.prototype.getTypographerList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Person, 11));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Person>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setTypographerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.prototype.addTypographer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.dma.ProductTemplateProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearTypographerList = function() {
  return this.setTypographerList([]);
};


/**
 * repeated Person manager = 12;
 * @return {!Array<!proto.dma.ProductTemplateProto.Person>}
 */
proto.dma.ProductTemplateProto.prototype.getManagerList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Person, 12));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Person>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setManagerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Person}
 */
proto.dma.ProductTemplateProto.prototype.addManager = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.dma.ProductTemplateProto.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearManagerList = function() {
  return this.setManagerList([]);
};


/**
 * optional Date date = 13;
 * @return {?proto.dma.ProductTemplateProto.Date}
 */
proto.dma.ProductTemplateProto.prototype.getDate = function() {
  return /** @type{?proto.dma.ProductTemplateProto.Date} */ (
    jspb.Message.getWrapperField(this, proto.dma.ProductTemplateProto.Date, 13));
};


/**
 * @param {?proto.dma.ProductTemplateProto.Date|undefined} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductTemplateProto.prototype.hasDate = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ISBN isbn = 14;
 * @return {?proto.dma.ProductTemplateProto.ISBN}
 */
proto.dma.ProductTemplateProto.prototype.getIsbn = function() {
  return /** @type{?proto.dma.ProductTemplateProto.ISBN} */ (
    jspb.Message.getWrapperField(this, proto.dma.ProductTemplateProto.ISBN, 14));
};


/**
 * @param {?proto.dma.ProductTemplateProto.ISBN|undefined} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setIsbn = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearIsbn = function() {
  return this.setIsbn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductTemplateProto.prototype.hasIsbn = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ISBN13 isbn13 = 15;
 * @return {?proto.dma.ProductTemplateProto.ISBN13}
 */
proto.dma.ProductTemplateProto.prototype.getIsbn13 = function() {
  return /** @type{?proto.dma.ProductTemplateProto.ISBN13} */ (
    jspb.Message.getWrapperField(this, proto.dma.ProductTemplateProto.ISBN13, 15));
};


/**
 * @param {?proto.dma.ProductTemplateProto.ISBN13|undefined} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setIsbn13 = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearIsbn13 = function() {
  return this.setIsbn13(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductTemplateProto.prototype.hasIsbn13 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 pages = 16;
 * @return {number}
 */
proto.dma.ProductTemplateProto.prototype.getPages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setPages = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional System system = 17;
 * @return {!proto.dma.ProductTemplateProto.System}
 */
proto.dma.ProductTemplateProto.prototype.getSystem = function() {
  return /** @type {!proto.dma.ProductTemplateProto.System} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.dma.ProductTemplateProto.System} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setSystem = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional Audience audience = 18;
 * @return {!proto.dma.ProductTemplateProto.Audience}
 */
proto.dma.ProductTemplateProto.prototype.getAudience = function() {
  return /** @type {!proto.dma.ProductTemplateProto.Audience} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.dma.ProductTemplateProto.Audience} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setAudience = function(value) {
  return jspb.Message.setProto3EnumField(this, 18, value);
};


/**
 * optional Type type = 19;
 * @return {!proto.dma.ProductTemplateProto.Type}
 */
proto.dma.ProductTemplateProto.prototype.getType = function() {
  return /** @type {!proto.dma.ProductTemplateProto.Type} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.dma.ProductTemplateProto.Type} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional Style style = 20;
 * @return {!proto.dma.ProductTemplateProto.Style}
 */
proto.dma.ProductTemplateProto.prototype.getStyle = function() {
  return /** @type {!proto.dma.ProductTemplateProto.Style} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.dma.ProductTemplateProto.Style} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional string producer = 21;
 * @return {string}
 */
proto.dma.ProductTemplateProto.prototype.getProducer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setProducer = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string volume = 22;
 * @return {string}
 */
proto.dma.ProductTemplateProto.prototype.getVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string number = 23;
 * @return {string}
 */
proto.dma.ProductTemplateProto.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * repeated string series = 24;
 * @return {!Array<string>}
 */
proto.dma.ProductTemplateProto.prototype.getSeriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setSeriesList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.addSeries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearSeriesList = function() {
  return this.setSeriesList([]);
};


/**
 * optional PriceProto price = 25;
 * @return {?proto.dma.PriceProto}
 */
proto.dma.ProductTemplateProto.prototype.getPrice = function() {
  return /** @type{?proto.dma.PriceProto} */ (
    jspb.Message.getWrapperField(this, value_pb.PriceProto, 25));
};


/**
 * @param {?proto.dma.PriceProto|undefined} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dma.ProductTemplateProto.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * repeated Content content = 26;
 * @return {!Array<!proto.dma.ProductTemplateProto.Content>}
 */
proto.dma.ProductTemplateProto.prototype.getContentList = function() {
  return /** @type{!Array<!proto.dma.ProductTemplateProto.Content>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.ProductTemplateProto.Content, 26));
};


/**
 * @param {!Array<!proto.dma.ProductTemplateProto.Content>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
*/
proto.dma.ProductTemplateProto.prototype.setContentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.dma.ProductTemplateProto.Content=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto.Content}
 */
proto.dma.ProductTemplateProto.prototype.addContent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.dma.ProductTemplateProto.Content, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearContentList = function() {
  return this.setContentList([]);
};


/**
 * repeated string required_requirements = 27;
 * @return {!Array<string>}
 */
proto.dma.ProductTemplateProto.prototype.getRequiredRequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setRequiredRequirementsList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.addRequiredRequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearRequiredRequirementsList = function() {
  return this.setRequiredRequirementsList([]);
};


/**
 * repeated string optional_requirements = 28;
 * @return {!Array<string>}
 */
proto.dma.ProductTemplateProto.prototype.getOptionalRequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setOptionalRequirementsList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.addOptionalRequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.clearOptionalRequirementsList = function() {
  return this.setOptionalRequirementsList([]);
};


/**
 * optional Layout layout = 29;
 * @return {!proto.dma.ProductTemplateProto.Layout}
 */
proto.dma.ProductTemplateProto.prototype.getLayout = function() {
  return /** @type {!proto.dma.ProductTemplateProto.Layout} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.dma.ProductTemplateProto.Layout} value
 * @return {!proto.dma.ProductTemplateProto} returns this
 */
proto.dma.ProductTemplateProto.prototype.setLayout = function(value) {
  return jspb.Message.setProto3EnumField(this, 29, value);
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
proto.dma.MapsProto.Map.repeatedFields_ = [2,4];



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
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    layersList: jspb.Message.toObjectList(msg.getLayersList(),
    proto.dma.MapsProto.Map.Layer.toObject, includeInstance),
    pxPerSquare: jspb.Message.getFieldWithDefault(msg, 5, 0),
    background: jspb.Message.getFieldWithDefault(msg, 6, ""),
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
      msg.setImage(value);
      break;
    case 4:
      var value = new proto.dma.MapsProto.Map.Layer;
      reader.readMessage(value,proto.dma.MapsProto.Map.Layer.deserializeBinaryFromReader);
      msg.addLayers(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPxPerSquare(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackground(value);
      break;
    case 7:
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dma.MapsProto.Map.Layer.serializeBinaryToWriter
    );
  }
  f = message.getPxPerSquare();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getBackground();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAttribution();
  if (f != null) {
    writer.writeMessage(
      7,
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
proto.dma.MapsProto.Map.Layer.prototype.toObject = function(opt_includeInstance) {
  return proto.dma.MapsProto.Map.Layer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dma.MapsProto.Map.Layer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.Map.Layer.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    image: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dma.MapsProto.Map.Layer}
 */
proto.dma.MapsProto.Map.Layer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dma.MapsProto.Map.Layer;
  return proto.dma.MapsProto.Map.Layer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dma.MapsProto.Map.Layer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dma.MapsProto.Map.Layer}
 */
proto.dma.MapsProto.Map.Layer.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setImage(value);
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
proto.dma.MapsProto.Map.Layer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dma.MapsProto.Map.Layer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dma.MapsProto.Map.Layer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dma.MapsProto.Map.Layer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImage();
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
proto.dma.MapsProto.Map.Layer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map.Layer} returns this
 */
proto.dma.MapsProto.Map.Layer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string image = 2;
 * @return {string}
 */
proto.dma.MapsProto.Map.Layer.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map.Layer} returns this
 */
proto.dma.MapsProto.Map.Layer.prototype.setImage = function(value) {
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
 * optional string image = 3;
 * @return {string}
 */
proto.dma.MapsProto.Map.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Layer layers = 4;
 * @return {!Array<!proto.dma.MapsProto.Map.Layer>}
 */
proto.dma.MapsProto.Map.prototype.getLayersList = function() {
  return /** @type{!Array<!proto.dma.MapsProto.Map.Layer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dma.MapsProto.Map.Layer, 4));
};


/**
 * @param {!Array<!proto.dma.MapsProto.Map.Layer>} value
 * @return {!proto.dma.MapsProto.Map} returns this
*/
proto.dma.MapsProto.Map.prototype.setLayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dma.MapsProto.Map.Layer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dma.MapsProto.Map.Layer}
 */
proto.dma.MapsProto.Map.prototype.addLayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dma.MapsProto.Map.Layer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.clearLayersList = function() {
  return this.setLayersList([]);
};


/**
 * optional int32 px_per_square = 5;
 * @return {number}
 */
proto.dma.MapsProto.Map.prototype.getPxPerSquare = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setPxPerSquare = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string background = 6;
 * @return {string}
 */
proto.dma.MapsProto.Map.prototype.getBackground = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dma.MapsProto.Map} returns this
 */
proto.dma.MapsProto.Map.prototype.setBackground = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Attribution attribution = 7;
 * @return {?proto.dma.MapsProto.Map.Attribution}
 */
proto.dma.MapsProto.Map.prototype.getAttribution = function() {
  return /** @type{?proto.dma.MapsProto.Map.Attribution} */ (
    jspb.Message.getWrapperField(this, proto.dma.MapsProto.Map.Attribution, 7));
};


/**
 * @param {?proto.dma.MapsProto.Map.Attribution|undefined} value
 * @return {!proto.dma.MapsProto.Map} returns this
*/
proto.dma.MapsProto.Map.prototype.setAttribution = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
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
  return jspb.Message.getField(this, 7) != null;
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

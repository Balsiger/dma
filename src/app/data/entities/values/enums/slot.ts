import { WearableTemplateProto } from '../../../../proto/generated/template_pb';
import { Enum } from './enum';
export class Slot extends Enum<Slot> {
  static readonly slots: Slot[] = [];

  static readonly UNKNOWN = new Slot('?', WearableTemplateProto.Slot.UNKNOWN);
  static readonly Head = new Slot('Head', WearableTemplateProto.Slot.HEAD);
  static readonly Neck = new Slot('Neck', WearableTemplateProto.Slot.NECK);
  static readonly Torso = new Slot('Torso', WearableTemplateProto.Slot.TORSO);
  static readonly Body = new Slot('Body', WearableTemplateProto.Slot.BODY);
  static readonly Waist = new Slot('Waist', WearableTemplateProto.Slot.WAIST);
  static readonly Shoulders = new Slot('Shoulders', WearableTemplateProto.Slot.SHOULDERS);
  static readonly HANDS = new Slot('Hands', WearableTemplateProto.Slot.HANDS);
  static readonly HAND = new Slot('Hand', WearableTemplateProto.Slot.HAND);
  static readonly FINGER = new Slot('Finger', WearableTemplateProto.Slot.FINGER);
  static readonly WRISTS = new Slot('Wrists', WearableTemplateProto.Slot.WRISTS);
  static readonly FEET = new Slot('FEET', WearableTemplateProto.Slot.FEET);
  static readonly EYES = new Slot('EYES', WearableTemplateProto.Slot.EYES);

  constructor(name: string, proto: number) {
    super(name, proto);
    Slot.slots.push(this);
  }

  static fromString(text: string): Slot {
    return Enum.fromStringValue(text, Slot.slots, Slot.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Slot {
    return Enum.fromProtoValue(proto, Slot.slots, Slot.UNKNOWN);
  }
}

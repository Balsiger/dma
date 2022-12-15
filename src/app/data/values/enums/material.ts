import { ItemProto } from '../../../proto/generated/template_pb';
import { Enum } from './enum';

export class Material extends Enum<Material> {
  static readonly materials: Material[] = [];

  static readonly UNKNOWN = new Material('Unknown', ItemProto.Substance.Material.UNKNOWN, 0);
  static readonly PAPER = new Material('Paper', ItemProto.Substance.Material.PAPER, 11);
  static readonly CLOTH = new Material('Cloth', ItemProto.Substance.Material.CLOTH, 11);
  static readonly ROPE = new Material('Rope', ItemProto.Substance.Material.ROPE, 11);
  static readonly GLASS = new Material('Glass', ItemProto.Substance.Material.GLASS, 13);
  static readonly ICE = new Material('Ice', ItemProto.Substance.Material.ICE, 13);
  static readonly LEATHER = new Material('Leather', ItemProto.Substance.Material.LEATHER, 12);
  static readonly HIDE = new Material('Hide', ItemProto.Substance.Material.HIDE, 12);
  static readonly WOOD = new Material('Wood', ItemProto.Substance.Material.WOOD, 15);
  static readonly STONE = new Material('Stone', ItemProto.Substance.Material.STONE, 17);
  static readonly IRON = new Material('Iron', ItemProto.Substance.Material.IRON, 19);
  static readonly STEEL = new Material('Steel', ItemProto.Substance.Material.STEEL, 19);
  static readonly CRYSTAL = new Material('Crystal', ItemProto.Substance.Material.CRYSTAL, 13);
  static readonly MITHRAL = new Material('Mithral', ItemProto.Substance.Material.MITHRAL, 21);
  static readonly ADAMANTINE = new Material('Adamantine', ItemProto.Substance.Material.ADAMANTINE, 23);
  static readonly BONE = new Material('Bone', ItemProto.Substance.Material.BONE, 15);

  constructor(name: string, proto: number, readonly armorClass: number) {
    super(name, proto);
    Material.materials.push(this);
  }

  static fromString(text: string): Material {
    return Enum.fromStringValue(text, Material.materials, Material.UNKNOWN);
  }

  static fromProto(proto: number | undefined): Material {
    return Enum.fromProtoValue(proto, Material.materials, Material.UNKNOWN);
  }
}

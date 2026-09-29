import { signal } from '@angular/core';
import { NpcFluidService } from '../../../services/fluid/npc-fluid.service';
import { MiniatureSelection } from '../../values/miniature-selection';
import { Campaign } from './campaign';
import { Fluid } from './fluid';

export enum NPCState {
  unknown = 'unknown',
  alive = 'alive',
  dead = 'dead',
}

export interface FluidNPCData {
  state?: string;
  miniature?: string;
  hp?: number;
  maxHp?: number;
}

export class FluidNPC extends Fluid<FluidNPCData, NpcFluidService> {
  state = signal<NPCState>(NPCState.unknown);
  hp = signal<number | undefined>(undefined);
  maxHp = signal<number | undefined>(undefined);
  miniature = signal<MiniatureSelection[]>([]);

  constructor(
    service: NpcFluidService,
    readonly campaign: Campaign,
    readonly name: string,
    data: FluidNPCData,
  ) {
    super(service);

    // Cannot update signals in the same cycle as they are created :-(.
    setTimeout(() => {
      this.update(data);
    });
  }

  override update(data: FluidNPCData): void {
    if (data.state || data.miniature || data.hp) {
      this.state.set(NPCState[data.state as keyof typeof NPCState]);
      this.miniature.set(
        Array.from(MiniatureSelection.parseMiniatures(data.miniature || '').values()).flatMap((m) => m),
      );
      this.hp.set(data.hp);
      this.maxHp.set(data.maxHp);
    }
  }

  override buildDocumentId(): string {
    return this.name;
  }

  static fromData(campaign: Campaign, service: NpcFluidService, name: string, data: FluidNPCData) {
    return new FluidNPC(service, campaign, name, {
      state: NPCState[data.state as keyof typeof NPCState],
      miniature: data.miniature,
      hp: data.hp,
      maxHp: data.maxHp,
    });
  }

  toData(): FluidNPCData {
    return {
      state: this.state(),
      miniature: MiniatureSelection.toString(Array.from(this.miniature().values()).flatMap((a) => a)),
      hp: this.hp(),
      maxHp: this.maxHp(),
    };
  }

  async setHp(hp: number, maxHp?: number) {
    this.hp.set(hp);

    if (maxHp) {
      this.maxHp.set(maxHp);
    }

    if (hp > 0) {
      this.state.set(NPCState.alive);
    } else {
      this.state.set(NPCState.dead);
    }

    await this.save();
  }
}

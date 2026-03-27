import { signal } from '@angular/core';
import { CampaignNpcService } from '../../services/fact/campaignNpc.service';
import { Campaign } from './campaign';
import { Fact } from './fact';

export enum NPCState {
  unknown = 'unknown',
  alive = 'alive',
  dead = 'dead',
}

export interface Data {
  state?: string;
  miniature?: string;
}

export class NPCFact extends Fact<Data, CampaignNpcService> {
  state = signal<NPCState>(NPCState.unknown);
  miniature = signal('');

  constructor(
    service: CampaignNpcService,
    readonly campaign: Campaign,
    readonly name: string,
    data: Data,
  ) {
    super(service);

    // Cannot update signals in the same cycle as they are created :-(.
    setTimeout(() => {
      this.update(data);
    });
  }

  override update(data: Data): void {
    if (data.state || data.miniature) {
      this.state.set(NPCState[data.state as keyof typeof NPCState]);
      this.miniature.set(data.miniature || '');
    }
  }

  override buildDocumentId(): string {
    return this.name;
  }

  static fromData(campaign: Campaign, service: CampaignNpcService, name: string, data: Data) {
    return new NPCFact(service, campaign, name, {
      state: NPCState[data.state as keyof typeof NPCState],
      miniature: data.miniature,
    });
  }

  toData(): Data {
    return {
      state: this.state(),
      miniature: this.miniature(),
    };
  }
}

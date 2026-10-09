import { computed, signal } from '@angular/core';
import { Campaign } from '../../data/entities/fluid/campaign';
import { Fluid } from '../../data/entities/fluid/fluid';
import { NotesService } from './notes-service';

export interface Data {
  notes?: string[];
}

export class Notes extends Fluid<Data, NotesService> {
  readonly notes = signal<string[]>([]);
  count = computed(() => this.notes().length);

  constructor(
    service: NotesService,
    readonly campaign: Campaign,
    data: Data,
  ) {
    super(service);

    // Cannot update signals in the same cycle as they are created :-(.
    setTimeout(() => {
      this.update(data);
    });
  }

  static fromData(campaign: Campaign, service: NotesService, _id: string, data: Data): Notes {
    return new Notes(service, campaign, data);
  }

  override update(data: Data) {
    if (data.notes) {
      this.notes.set(data.notes || []);
    }
  }

  override buildDocumentId(): string {
    return 'notes';
  }

  toData(): Data {
    return {
      notes: this.notes(),
    };
  }

  append(note: string) {
    this.notes.set([...this.notes(), note]);
    this.save();
    console.log('~~appended', note);
  }

  remove(note: string) {
    this.notes.set(this.notes().filter((n) => n !== note));
    this.save();
  }
}

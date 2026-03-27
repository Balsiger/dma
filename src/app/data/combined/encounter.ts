import { EncounterFactService } from '../../services/fact/encounter.service';
import { EncounterEntity } from '../entities/encounter-entity';
import { Data, EncounterFact } from '../facts/encounter-fact';
import { Combined } from './combined';

export class Encounter extends Combined<EncounterEntity, Data, EncounterFactService, EncounterFact> {
  get id(): string {
    return this.fact.id();
  }
}

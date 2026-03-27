import { Encounter } from '../../data/combined/encounter';
import { EncounterEntity } from '../../data/entities/encounter-entity';
import { Data, EncounterFact } from '../../data/facts/encounter-fact';
import { EncounterFactService } from '../fact/encounter.service';
import { CombinedService } from './combined.service';

export class EncounterService extends CombinedService<
  Encounter,
  EncounterEntity,
  EncounterFact,
  Data,
  EncounterFactService
> {}

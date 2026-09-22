import { Encounter } from '../../data/entities/combined/encounter';
import { Data, EncounterFact } from '../../data/entities/fluid/encounter-fact';
import { EncounterEntity } from '../../data/entities/immutable/encounter-entity';
import { EncounterFactService } from '../fact/encounter.service';
import { CombinedService } from './combined.service';

export class EncounterService extends CombinedService<
  Encounter,
  EncounterEntity,
  EncounterFact,
  Data,
  EncounterFactService
> {}

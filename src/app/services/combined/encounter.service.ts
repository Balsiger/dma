import { Encounter } from '../../data/entities/combined/encounter';
import { Data, EncounterFact } from '../../data/entities/fluid/encounter-fact';
import { EncounterEntity } from '../../data/entities/immutable/encounter-entity';
import { Data as LocalData, NoLocal } from '../../data/entities/local/local';
import { EncounterFactService } from '../fluid/encounter.service';
import { NoLocalService } from '../local/local.service';
import { CombinedService } from './combined.service';

export class EncounterService extends CombinedService<
  Encounter,
  EncounterEntity,
  EncounterFact,
  Data,
  EncounterFactService,
  LocalData,
  NoLocal,
  NoLocalService
> {}

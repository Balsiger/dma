import { Campaign } from '../../data/entities/fluid/campaign';
import { FluidCharacter, FluidCharacterData } from '../../data/entities/fluid/character';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';
import { FluidService } from './fluid.service';

const PATH = 'characters';

export class FluidCharacterService extends FluidService<FluidCharacterData, FluidCharacter, FluidCharacterService> {
  constructor(firebaseService: FirebaseService, campaign: Campaign, context: Context) {
    super(firebaseService, context.extendTerminal(PATH), FluidCharacter.fromData.bind(null, campaign));
  }
}

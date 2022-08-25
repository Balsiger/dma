import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { User } from '@angular/fire/auth';
import { doc, DocumentData, Firestore, getFirestore, onSnapshot, setDoc } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilterData } from '../data/FilterData';
import { Data as DataLocation, Location } from '../data/location';
import { Miniature, Rarity, Size } from '../data/miniature';
import { ProtoRpc } from '../net/ProtoRpc';
import { MiniaturesProto } from '../proto/generated/template_pb';
import { UserService } from '../services/user.service';
import { Resolvers } from './resolvers';

const DELIMITER = '##';
const LIST_DELIMITER = '|';

export function serializeFilter(filter: FilterData): string|null {
  if (!filter.name && !filter.rarities.length && !filter.sizes.length && !filter.types.length && 
      !filter.subtypes.length && !filter.races.length && !filter.classes.length && !filter.locations.length
      && !filter.sets.length) {
        return null;
  }

  return [
    filter.name,
    filter.rarities.join(LIST_DELIMITER),
    filter.sizes.join(LIST_DELIMITER),
    filter.types.join(LIST_DELIMITER),
    filter.subtypes.join(LIST_DELIMITER),
    filter.races.join(LIST_DELIMITER),
    filter.classes.join(LIST_DELIMITER),
    filter.locations.join(LIST_DELIMITER),
    filter.sets.join(LIST_DELIMITER),
  ].join(DELIMITER);
}

export function deserializeFilter(text: string): FilterData {
  const parts = text.split(DELIMITER);
  
  return {
    name: parts[0],
    rarities: parts[1] ? parts[1].split(LIST_DELIMITER).map(r => r as Rarity) : [],
    sizes: parts[2] ? parts[2]?.split(LIST_DELIMITER).map(r => r as Size) : [],
    types: parts[3] ? parts[3]?.split(LIST_DELIMITER) : [],
    subtypes: parts[4] ? parts[4]?.split(LIST_DELIMITER) : [],
    races: parts[5] ? parts[5]?.split(LIST_DELIMITER): [],
    classes: parts[6] ? parts[6]?.split(LIST_DELIMITER): [],
    locations: parts[7] ? parts[7]?.split(LIST_DELIMITER) : [],
    sets: parts[8] ? parts[8]?.split(LIST_DELIMITER): [],
  };  
}

const DATA_OWNED = 'owned';
const DATA_LOCATIONS = 'locations';

@Injectable({
  providedIn: 'root'
})
export class MiniaturesService {
  private readonly miniaturesByName = new Map<String, Miniature>();
  private readonly rpc = new ProtoRpc(MiniaturesProto.deserializeBinary);

  private readonly database: Firestore;
  private user: User|null = null;
  private locations: Location[] = [];
  private owned: { [key: string]: number } = {};
  private readonly resolvers = new Resolvers<void>();
  private allTypes: string[] = [];
  private allSubtypes: string[] = [];
  private allRaces: string[] = [];
  private allClasses: string[] = [];
  private allLocations: string[] = [];
  private allSets: string[] = [];

  constructor(private readonly userService: UserService,  private readonly app: FirebaseApp, private readonly snackBar: MatSnackBar) { 
    this.database = getFirestore(app);
  }

  private async loadUserData() {
    this.user = await this.userService.getUser();

    if (this.user) {  
      const document = doc(this.database, '/users/' + this.user?.uid + '/miniatures/miniatures');
      onSnapshot(document, (snapshot) => {
        const data = snapshot.data();
        if (data) {   
          this.processUserData(data);
        }
        
        this.resolvers.resolve();
    }, (error) => {
        this.snackBar.open('Cannot read your miniatures data: ' + error, 'Dismiss');
      });
    }

    return this.resolvers.create();
  }

  async processUserData(data: DocumentData) {
    await this.loadMiniatures();

    this.locations = data[DATA_LOCATIONS].map((l: DataLocation) => Location.fromData(l));   
    this.owned = data[DATA_OWNED];
    for (const id in this.owned) {
      const miniature = this.miniaturesByName.get(id)
      if (miniature) {
        miniature.owned = this.owned[id];
        const location = this.matchLocation(miniature);
        miniature.location = location?.name || '';
        miniature.locationStyle = location?.style || '';
      } else {
        this.snackBar.open('Cannot find owned miniature: ' + id, 'Dismiss');
      }
    }

  }

  async getMiniatures(filter?: FilterData): Promise<Miniature[]> {
    await this.loadMiniatures();    

    const miniatures = [];
    for (const miniature of this.miniaturesByName.values()) {
      if (miniature.matches(filter)) {
        miniatures.push(miniature);
      }
    }

    return Array.from(miniatures);
  }
  
  async getAllTypes(): Promise<string[]> {
    await this.loadMiniatures();
    return this.allTypes;
  }

  async getAllSubtypes(): Promise<string[]> {
    await this.loadMiniatures();
    return this.allSubtypes;
  }

  async getAllRaces(): Promise<string[]> {
    await this.loadMiniatures();
    return this.allRaces;
  }

  async getAllClasses(): Promise<string[]> {
    await this.loadMiniatures();
    return this.allClasses;
  }

  async getAllLocations(): Promise<string[]> {
    await this.loadMiniatures();
    return this.allLocations;
  }

  async getAllSets(): Promise<string[]> {
    await this.loadMiniatures();
    return this.allSets;
  }

  async getLocations(): Promise<Location[]> {
    await this.loadMiniatures();
    await this.loadUserData();

    return this.locations;
  }

  async saveLocations(locations: Location[]) {
    if (this.user) {
      await setDoc(doc(this.database, '/users/' + this.user?.uid + '/miniatures/miniatures'), {
        locations: locations.map(l => l.toData()),
        owned: this.owned,
      });
    } else {
      this.snackBar.open('Cannot save miniature data! You need to login first.', 'Dismiss');
    }
  }

  private async loadMiniatures() {    
    if (this.miniaturesByName.size > 0) {
      return new Promise<void>((resolve, reject) => resolve());
    } else {
      const miniatures = await this.rpc.fetch('/assets/data/miniatures.pb');
      const types = new Set<string>();
      const subtypes = new Set<string>();
      const races = new Set<string>();
      const classes = new Set<string>();
      const locations = new Set<string>();
      const sets = new Set<string>();
      for (const miniatureProto of miniatures.getMiniaturesList()) {
        const miniature = Miniature.fromProto(miniatureProto);
        this.miniaturesByName.set(miniature.name, miniature);
        types.add(miniature.type);
        subtypes.add(miniature.type);
        races.add(miniature.race);
        miniature.classes.forEach(c => classes.add(c));
        locations.add(miniature.location);
        sets.add(miniature.set);
      }

      this.allTypes = Array.from(types).sort();
      this.allSubtypes = Array.from(subtypes).sort();
      this.allRaces = Array.from(races).sort();      
      this.allClasses = Array.from(classes).sort();      
      this.allLocations = Array.from(locations).sort();
      this.allSets = Array.from(sets).sort();
    }
  }  

  private matchLocation(miniature: Miniature): Location|undefined {
    for (const location of this.locations) {
      if (location.matches(miniature)) {
        return location;
      }
    }

    return undefined;
  }
}

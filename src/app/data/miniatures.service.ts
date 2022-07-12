import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { doc, Firestore, getFirestore, onSnapshot, Unsubscribe } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProtoRpc } from '../net/ProtoRpc';
import { MiniaturesProto } from '../proto/generated/template_pb';
import { Location } from './location';
import { Miniature, Rarity, Size } from './miniature';

export interface FilterData {
  name: string,
  rarities: Rarity[],
  sizes: Size[],
  types: string[],
  subtypes: string[],
  races: string[],
  classes: string[],
  locations: string[],
}

const DATA_OWNED = 'owned';
const DATA_LOCATIONS = 'locations';
const DATA_NAME = 'name';
const DATA_FILTERS = 'filters';
const DATA_COLOR = 'color';

interface Filter {
  classes: string[];
  name: '';
  races: string[];
  rarity: string[];
  sizes: string[];
  types: string[];  
}

@Injectable({
  providedIn: 'root'
})
export class MiniaturesService {
  private readonly miniaturesByName = new Map<String, Miniature>();
  private readonly rpc = new ProtoRpc(MiniaturesProto.deserializeBinary);

  private readonly database: Firestore;
  unsubscribeValue?: Unsubscribe;
  private locations: Location[] = [];
  private types: Set<string> = new Set<string>;

  constructor(private readonly auth: Auth, private readonly app: FirebaseApp, private readonly snackBar: MatSnackBar) { 
    this.database = getFirestore(app);

    onAuthStateChanged(this.auth, (user) => {
      if (this.unsubscribeValue) {
        this.unsubscribeValue();
        this.unsubscribeValue = undefined;
      }
      
      // Read miniature data.
      if (user) {
        const document = doc(this.database, '/users/' + user?.uid + '/miniatures/miniatures');
        this.unsubscribeValue = onSnapshot(document, (snapshot) => {
          const data = snapshot.data();
          if (data) {
            for (const locationData of data[DATA_LOCATIONS]) {
              const location = new Location(locationData[DATA_NAME], locationData[DATA_COLOR], 
                this.createFilters(locationData[DATA_FILTERS]));
              this.locations.push(location);
            }
            
            const owned = data[DATA_OWNED];
            for (const id in owned) {
              const miniature = this.miniaturesByName.get(id)
              if (miniature) {
                miniature.owned = owned[id];
                const location = this.matchLocation(miniature);
                miniature.location = location?.name || '';
                miniature.locationStyle = location?.style || '';
              } else {
                this.snackBar.open('Cannot find owned miniature: ' + id, 'Dismiss');
              }
            }
          }
        }, (error) => {
          this.snackBar.open('Cannot read your miniatures data: ' + error, 'Dismiss');
        });
      }    
    });
  }

  async getMiniatures(filter?: FilterData): Promise<Miniature[]> {
    await this.loadMiniatures();    

    const miniatures = [];
    for (const miniature of this.miniaturesByName.values()) {
      if (miniature.matches(filter)) {
        miniatures.push(miniature);
      }
    }

    this.types = new Set<string>(miniatures.map(miniature => miniature.type));
    return Array.from(miniatures);
  }

  private async loadMiniatures() {    
    if (this.miniaturesByName.size > 0) {
      return new Promise<void>((resolve, reject) => resolve())
    } else {
      const miniatures = await this.rpc.fetch('/assets/data/miniatures.pb');
      for (const miniatureProto of miniatures.getMiniaturesList()) {
        const miniature = Miniature.fromProto(miniatureProto);
        this.miniaturesByName.set(miniature.name, miniature);
      }
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

  private createFilters(data: Filter[]): FilterData[] {
    if (!data) {
      return [];
    }
    
    return data.map(f => this.createFilter(f));
  }

  private createFilter(data: Filter): FilterData {
    return {
      name: data.name,
      rarities: data.rarity.map(r => r as Rarity),
      sizes: data.sizes.map(s => s as Size),
      types: data.types.filter(t => this.types.has(t)),
      subtypes: data.types.filter(t => !this.types.has(t)),
      races: data.races,
      classes: data.classes,    
      locations: [],
    }
  }
}

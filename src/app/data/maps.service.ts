import { Injectable } from '@angular/core';
import { ProtoRpc } from '../net/ProtoRpc';
import { MapsProto } from '../proto/generated/template_pb';
import { ImageMap } from './image_map';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private readonly mapsByName = new Map<string, ImageMap>();
  private readonly rpc = new ProtoRpc(MapsProto.deserializeBinary);

  constructor() { }

  async getMaps(): Promise<Map<string, ImageMap>> {
    await this.loadMaps();

    return this.mapsByName;
  }

  private async loadMaps() {
    if (this.mapsByName.size > 0) {
      return new Promise<void>((resolve, reject) => resolve());
    } else {
      const maps = await this.rpc.fetch('/assets/data/maps.pb');
      for (const mapProto of maps.getMapsList()) {
        const map = ImageMap.fromProto(mapProto);
        this.mapsByName.set(mapProto.getName(), map);
      }
    }
  }
}

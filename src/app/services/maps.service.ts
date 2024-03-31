import { Injectable } from '@angular/core';
import { BattleMap } from '../data/entities/battle_map';
import { ProtoRpc } from '../net/ProtoRpc';
import { MapsProto } from '../proto/generated/template_pb';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class MapsService {
  private readonly mapsByName = new Map<string, BattleMap>();
  private readonly rpc = new ProtoRpc(MapsProto.deserializeBinary);

  constructor(private readonly userService: UserService) {}

  async getMaps(): Promise<Map<string, BattleMap>> {
    await this.userService.getUser();
    await this.loadMaps();
    return this.mapsByName;
  }

  async getMap(name: string): Promise<BattleMap | undefined> {
    await this.loadMaps();
    return this.mapsByName.get(name);
  }

  private async loadMaps() {
    if (this.mapsByName.size > 0) {
      return new Promise<void>((resolve, reject) => resolve());
    } else {
      const maps = await this.rpc.fetch('/assets/data/maps.pb');
      for (const mapProto of maps.getMapsList()) {
        if (
          mapProto.getAttribution()?.getLicence() == MapsProto.Map.Attribution.Licence.COPYRIGHTED &&
          !this.userService.isPrivileged()
        ) {
          continue;
        }

        const map = BattleMap.fromProto(mapProto);
        this.mapsByName.set(map.fullName, map);
      }
    }
  }
}

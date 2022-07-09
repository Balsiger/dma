import { Injectable } from '@angular/core';
import { ProtoRpc } from '../net/ProtoRpc';
import { MiniaturesProto } from '../proto/generated/template_pb';
import { Miniature } from './miniature';

@Injectable({
  providedIn: 'root'
})
export class MiniaturesService {
  private readonly miniaturesByName = new Map<String, Miniature>();
  private readonly rpc = new ProtoRpc(MiniaturesProto.deserializeBinary);

  private loading = false;

  constructor() { 
  }

  async getMiniatures(): Promise<Miniature[]> {
    await this.load();
    return Array.from(this.miniaturesByName.values());
  }

  private async load() {    
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
}

import { Injectable } from '@angular/core';
import { Token } from '../../data/entities/token';
import { ProtoRpc } from '../../net/ProtoRpc';
import { TokensProto } from '../../proto/generated/template_pb';
import { EntityService } from './entity.service';

@Injectable({ providedIn: 'root' })
export class TokensService extends EntityService<Token, TokensProto> {
  constructor() {
    super('/assets/data/tokens.pb', Token.create, new ProtoRpc(TokensProto.deserializeBinary), (p) =>
      p.getTokensList().map((m) => Token.fromProto(m)),
    );
  }
}

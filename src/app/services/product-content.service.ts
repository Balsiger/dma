import { Loading } from '../common/loading';
import { ProtoRpc } from '../net/ProtoRpc';
import { ProductContentProto } from '../proto/generated/template_pb';

export class ProductContentService extends Loading {
  private readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);

  constructor(private readonly paths: string[]) {
    super();
  }

  protected async doLoad() {
    const fetches = this.paths.map((p) => this.rpc.fetch(p));
    const protos = await Promise.all(fetches);
    console.log('~~protos', protos);
  }
}

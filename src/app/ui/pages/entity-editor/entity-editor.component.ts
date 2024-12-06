import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Message } from 'google-protobuf';
import { ProtoInfoFieldType } from 'src/app/proto/proto-info-field-type';
import { EncounterEntity } from '../../../data/entities/encounter-entity';
import { Item } from '../../../data/entities/item';
import { Miniature } from '../../../data/entities/miniature';
import { Monster } from '../../../data/entities/monster';
import { NPC } from '../../../data/entities/npc';
import { Product } from '../../../data/entities/product';
import { Spell } from '../../../data/entities/spell';
import { Condition } from '../../../data/facts/condition';
import { ProtoRpc } from '../../../net/ProtoRpc';
import {
  ConditionProto,
  EncounterProto,
  ItemProto,
  MiniatureProto,
  MonsterProto,
  NPCProto,
  ParametrizedProto,
  ProductContentProto,
  ProductProto,
  SpellProto,
} from '../../../proto/generated/template_pb';
import { ProtoInfo, ProtoInfoField } from '../../../proto/proto-info';
import { ASSETS, EntitiesService, EntityTypes } from '../../../services/entity/entities.service';
import { EncounterEntityComponent } from '../../campaign/encounter/encounter-entity.component';
import { EncounterComponent } from '../../campaign/encounter/encounter.component';
import { ConditionComponent } from '../../condition/condition.component';
import { ItemComponent } from '../../item/item.component';
import { MiniatureComponent } from '../../miniatures/miniature.component';
import { MonsterComponent } from '../../monster/monster.component';
import { NPCComponent } from '../../npc/npc.component';
import { ProductComponent } from '../../product/product.component';
import { SpellComponent } from '../../spell/spell.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';
import { EditorComponent } from './editor.component';
import { MessageEditorComponent } from './message-editor.component';
import { StringEditorComponent } from './string-editor.component';

export class EditorContext {
  product: string = '';
  type: string = '';
}

@Component({
  selector: 'entity-editor',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    PageTitleComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    StringEditorComponent,
    MessageEditorComponent,
    CdkAccordionModule,
    MatIconModule,
    MonsterComponent,
    ItemComponent,
    SpellComponent,
    ConditionComponent,
    EncounterComponent,
    EncounterEntityComponent,
    NPCComponent,
    ProductComponent,
    MiniatureComponent,
  ],
  providers: [EditorContext],
  templateUrl: './entity-editor.component.html',
  styleUrl: './entity-editor.component.scss',
})
export class EntityEditorComponent {
  @ViewChild('editor') editor!: MessageEditorComponent;
  @ViewChild('entityEditor') entityEditor!: EditorComponent<Message>;
  editing?: { field?: ProtoInfoField; name: string; message: Message; index: number; newIndex: number };
  entity = signal<any>(undefined);

  ProtoInfoFieldType = ProtoInfoFieldType;
  ASSETS = ASSETS;

  readonly info: ProtoInfo = new ProtoInfo();
  proto?: ProductContentProto;
  readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);

  constructor(
    private readonly context: EditorContext,
    private readonly entities: EntitiesService,
  ) {}

  async onEntity(name: string, field: ProtoInfoField | undefined, message: Message, index: number, newIndex: number) {
    this.editing = { name, field, message, index, newIndex };
    this.context.product = this.proto?.getName() || '(no product name)';
    this.context.type = name;

    this.entity.set(await this.createEntity(message));
  }

  async onSave() {
    if (this.proto) {
      this.editor.update(this.proto);

      const handle = await (window as any).showSaveFilePicker({
        suggestedName: this.proto.getName() + '.pb',
        types: [
          {
            description: 'Binary protocol buffer format.',
            accept: { 'application/protobuf': ['.pb'] },
          },
        ],
      });
      const file = await handle.createWritable();
      await file.write(this.proto.serializeBinary());
      await file.close();
    }
  }

  onStore(field: ProtoInfoField, index: number) {
    this.editing = undefined;
    this.entityEditor.getField().set(this.proto, this.entityEditor.getValue(), index);
  }

  onDuplicate() {
    if (this.editing) {
      this.editing.index = this.editing.newIndex;
    }
  }

  onCancel() {
    this.editing = undefined;
  }

  onClose() {
    this.proto = undefined;
  }

  async onPreviewUpdate() {
    if (this.editing) {
      const message = this.entityEditor.getValue();
      if (message) {
        this.entity.set(await this.createEntity(message));
      }
    }
  }

  private async createEntity(message: Message): Promise<EntityTypes | undefined> {
    if (message instanceof MonsterProto) {
      return await Monster.fromProto(
        this.entities.items,
        message,
        this.proto?.getName() || '',
        this.proto?.getId() || '',
      );
    } else if (message instanceof ItemProto) {
      return Item.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof SpellProto) {
      return Spell.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof ConditionProto) {
      return Condition.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof ProductProto) {
      return Product.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof NPCProto) {
      return NPC.fromProto(this.entities.items, message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof MiniatureProto) {
      return Miniature.fromProto(message);
    } else if (message instanceof EncounterProto) {
      return EncounterEntity.fromProto(
        message,
        this.proto?.getName() || '',
        this.proto?.getId() || '',
        this.entities.npcs,
        this.entities.monsters,
        this.entities.items,
        this.entities.spells,
      );
    } else {
      console.warn('Message type not supported for', message);
      return undefined;
    }
  }

  onConvert() {
    if (this.proto) {
      const lists: Message[][] = [
        this.proto.getMonstersList(),
        this.proto.getNpcsList(),
        this.proto.getConditionsList(),
        this.proto.getItemsList(),
        this.proto.getSpellsList(),
        this.proto.getMiniaturesList(),
        this.proto.getMapsList(),
        this.proto.getTokensList(),
        this.proto.getEncountersList(),
        this.proto.getProductsList(),
      ];

      for (const encounter of this.proto.getEncountersList()) {
        for (const monster of encounter.getMonstersList()) {
          this.update(monster);
        }
        for (const item of encounter.getItemsList()) {
          this.update(item);
        }
      }

      /*
      for (const list of lists) {
        for (const message of list) {
          if ('getCommon' in message) {
            const common = (message as any).getCommon() as CommonProto;
            for (const image of common.getImagesList()) {
              const proto = new LinkProto();
              proto.setLabel(common.getName());
              proto.setUrl(image);
              common.addNewImages(proto);
            }
            common.clearImagesList();
          } else {
            console.warn('no getCommon in', message);
          }
        }
      }
      */
    }
  }

  private update(param: ParametrizedProto) {
    const match = param.getName().match(/(.*)\s*\[(.*)\](.*)/);
    if (match) {
      console.log('~~match', match);
      param.setName(match[1] + match[3]);
      for (const base of match[2].split(/\s*,\s*/)) {
        param.addBases(base);
      }
    }
  }

  async onOpen(file: string) {
    this.proto = await this.rpc.fetch(file);
  }

  async onOpenLocal() {
    const [handle] = await (window as any).showOpenFilePicker({
      types: [
        {
          description: 'Binary protocol buffer format.',
          accept: { 'application/protobuf': ['.pb'] },
        },
      ],
    });

    const file = await handle.getFile();
    const blob = new Blob();

    this.proto = ProductContentProto.deserializeBinary(new Uint8Array(await file.arrayBuffer()));
  }
}

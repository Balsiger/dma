import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'google-protobuf';
import { ProtoInfoFieldType } from 'src/app/proto/proto-info-field-type';
import { BattleMap } from '../../../data/entities/battle-map';
import { EncounterEntity } from '../../../data/entities/encounter-entity';
import { Item } from '../../../data/entities/item';
import { Miniature } from '../../../data/entities/miniature';
import { Monster } from '../../../data/entities/monster';
import { NPC } from '../../../data/entities/npc';
import { Product } from '../../../data/entities/product';
import { Spell } from '../../../data/entities/spell';
import { Condition } from '../../../data/facts/condition';
import { Glossary } from '../../../data/facts/glossary';
import { ProtoRpc } from '../../../net/ProtoRpc';
import {
  CommonProto,
  ConditionProto,
  EncounterProto,
  GlossaryProto,
  ItemProto,
  MapsProto,
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
import { FormattedTextComponent } from '../../common/formatted-text/formatted-text.component';
import { ConditionComponent } from '../../condition/condition.component';
import { GlossaryComponent } from '../../glossary/glossary.component';
import { ItemCardComponent } from '../../item/item-card.component';
import { ItemComponent } from '../../item/item.component';
import { MiniatureComponent } from '../../miniatures/miniature.component';
import { MonsterComponent } from '../../monster/monster.component';
import { NPCComponent } from '../../npc/npc.component';
import { ProductComponent } from '../../product/product.component';
import { SpellCardComponent } from '../../spell/spell-card.component';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';
import { EditorComponent } from './editor.component';
import { MessageEditorComponent } from './message-editor.component';

export class EditorContext {
  product: string = '';
  type: string = '';
}

@Component({
  selector: 'entity-editor',
  imports: [
    CommonModule,
    PageComponent,
    PageTitleComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MessageEditorComponent,
    CdkAccordionModule,
    MatIconModule,
    MonsterComponent,
    ItemComponent,
    ItemCardComponent,
    SpellCardComponent,
    ConditionComponent,
    GlossaryComponent,
    EncounterEntityComponent,
    NPCComponent,
    ProductComponent,
    MiniatureComponent,
    FormattedTextComponent,
  ],
  providers: [EditorContext],
  templateUrl: './entity-editor.component.html',
  styleUrl: './entity-editor.component.scss',
})
export class EntityEditorComponent {
  @ViewChild('editor') editor!: MessageEditorComponent;
  @ViewChild('entityEditor') entityEditor!: EditorComponent<Message>;
  editing?: { field?: ProtoInfoField; name: string; message: Message; index: number; newIndex: number };
  copy?: { field?: ProtoInfoField; name: string; type: string; message: Message };
  entity = signal<any>(undefined);

  ProtoInfoFieldType = ProtoInfoFieldType;
  ASSETS = ASSETS;

  readonly info: ProtoInfo = new ProtoInfo();
  proto?: ProductContentProto;
  readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);

  constructor(
    private readonly context: EditorContext,
    private readonly entities: EntitiesService,
    private readonly snackBar: MatSnackBar,
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

      try {
        const serialized = this.proto.serializeBinary();

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
        await file.write(serialized);
        await file.close();
      } catch (e) {
        this.snackBar.open('An error happened when serializing the protos: ' + e, 'Dismiss');
        console.error('Error when saving', e);
      }
    }
  }

  onStore(field: ProtoInfoField, index: number) {
    this.editing = undefined;

    this.entityEditor.getField().set(this.proto, this.entityEditor.getValue(), index);

    this.entityEditor.getField().set(this.proto, this.sortByName(this.entityEditor.getField().get(this.proto)));
  }

  onDelete(field: ProtoInfoField, index: number) {
    this.editing = undefined;
    this.entityEditor.getField().remove(this.proto, index);
  }

  onDuplicate() {
    if (this.editing) {
      this.editing.index = this.editing.newIndex;
    }
  }

  onCopy() {
    if (this.editing) {
      this.copy = {
        field: this.editing.field,
        name: this.entity().name,
        type: this.editing.name,
        message: this.editing.message,
      };
    }
  }

  onCancel() {
    this.editing = undefined;
  }

  onEntityConvert() {
    if (this.editing) {
      if (this.editing?.field?.name === 'Maps') {
        const map = this.editing.message as MapsProto.Map;
        for (const level of map.getLevelsList()) {
          for (const layer of level.getLayersList()) {
            level.addMasks(layer);
          }

          level.clearLayersList();
        }
      }
    }
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
      const monster = await Monster.fromProto(
        this.entities.items,
        message,
        this.proto?.getName() || '',
        this.proto?.getId() || '',
      );
      return monster.resolveSimple(this.entities.monsters);
    } else if (message instanceof ItemProto) {
      return Item.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof SpellProto) {
      return Spell.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof ConditionProto) {
      return Condition.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof GlossaryProto) {
      return Glossary.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof ProductProto) {
      return Product.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof NPCProto) {
      return NPC.fromProto(this.entities.items, message, this.proto?.getName() || '', this.proto?.getId() || '');
    } else if (message instanceof MiniatureProto) {
      return Miniature.fromProto(message);
    } else if (message instanceof EncounterProto) {
      const encounter = EncounterEntity.fromProto(
        message,
        this.proto?.getName() || '',
        this.proto?.getId() || '',
        this.entities.npcs,
        this.entities.monsters,
        this.entities.items,
        this.entities.spells,
      );
      return encounter.resolveSimple(this.entities.encounters);
    } else if (message instanceof MapsProto.Map) {
      return BattleMap.fromProto(message, this.proto?.getName() || '', this.proto?.getId() || '');
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
        this.proto.getGlossariesList(),
        this.proto.getItemsList(),
        this.proto.getSpellsList(),
        this.proto.getMiniaturesList(),
        this.proto.getMapsList(),
        this.proto.getTokensList(),
        this.proto.getEncountersList(),
        this.proto.getProductsList(),
      ];

      console.log('CONVERTING...');

      for (const monster of this.proto.getMonstersList()) {
        if (monster.getCommon()?.getDescription()?.includes('quote[')) {
          console.log(monster.getCommon()?.getName());
        }
      }

      //for (const map of this.proto.getMapsList()) {
      //  const level = new MapsProto.Map.Level();
      //  for (const layer of map.getLayersList()) {
      //    level.addLayers(layer);
      //  }
      //  map.addLevels(level);
      //  map.clearLayersList();
      //}
    }
  }

  private update(param: ParametrizedProto) {
    const match = param.getName().match(/(.*)\s*\[(.*)\](.*)/);
    if (match) {
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

  sortByName(entities: any): any {
    if (Array.isArray(entities)) {
      return entities.toSorted(
        (a, b) =>
          a
            .getCommon()
            ?.getName()
            .localeCompare(b.getCommon()?.getName() || '') ?? -1,
      );
    } else {
      return entities;
    }
  }

  versionedName(entity: MonsterProto): string {
    const name = entity.getCommon()?.getName() || '';
    if (entity.getCommon()?.getVersion() === CommonProto.Version.DND_5) {
      return name + ' (5.0)';
    }

    return name;
  }
}

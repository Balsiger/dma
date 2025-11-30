import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component, HostListener, signal, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'google-protobuf';
import { ProtoInfoFieldType } from 'src/app/proto/proto-info-field-type';
import { AdventureEntity } from '../../../data/entities/adventure';
import { BattleMap } from '../../../data/entities/battle-map';
import { EncounterEntity } from '../../../data/entities/encounter-entity';
import { Event } from '../../../data/entities/event';
import { God } from '../../../data/entities/god';
import { Group } from '../../../data/entities/group';
import { Item } from '../../../data/entities/item';
import { Miniature } from '../../../data/entities/miniature';
import { Monster } from '../../../data/entities/monster';
import { NPC } from '../../../data/entities/npc';
import { Place } from '../../../data/entities/place';
import { Product } from '../../../data/entities/product';
import { EMPTY as EMPTY_PRODUCT_CONTENT, ProductContent } from '../../../data/entities/product-content';
import { Spell } from '../../../data/entities/spell';
import { Trap } from '../../../data/entities/trap';
import { Condition } from '../../../data/facts/condition';
import { Glossary } from '../../../data/facts/glossary';
import { ProtoRpc } from '../../../net/ProtoRpc';
import {
  AdventureProto,
  CommonProto,
  ConditionProto,
  EncounterProto,
  EventProto,
  GlossaryProto,
  GodProto,
  GroupProto,
  ItemProto,
  MapsProto,
  MiniatureProto,
  MonsterProto,
  NPCProto,
  ParametrizedProto,
  PlaceProto,
  ProductContentProto,
  ProductProto,
  SpellProto,
  TrapProto,
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
import { TrapCardComponent } from '../../trap/trap-card.component';
import { TrapComponent } from '../../trap/trap.component';
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
    TrapComponent,
    TrapCardComponent,
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
  private hasChangedEntity = false;
  private hasStoredEntity = false;

  ProtoInfoFieldType = ProtoInfoFieldType;
  ASSETS = ASSETS;

  readonly info: ProtoInfo = new ProtoInfo();
  proto?: ProductContentProto;
  productContent: ProductContent = EMPTY_PRODUCT_CONTENT;
  readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);

  constructor(
    private readonly context: EditorContext,
    private readonly entities: EntitiesService,
    private readonly snackBar: MatSnackBar,
  ) {}

  async onEntity(name: string, field: ProtoInfoField | undefined, message: Message, index: number, newIndex: number) {
    if (this.hasChangedEntity) {
      if (confirm('You have pending changes, do you really want to switch to a different entity without saving?')) {
        this.hasChangedEntity = false;
      } else {
        return;
      }
    }

    this.editing = { name, field, message, index, newIndex };
    this.context.product = this.proto?.getName() || '(no product name)';
    this.context.type = name;

    this.entity.set(await this.createEntity(message));
  }

  async onSave() {
    if (this.proto) {
      this.hasChangedEntity = false;
      this.hasStoredEntity = false;
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
    this.hasStoredEntity = true;
    this.hasChangedEntity = false;
    this.editing = undefined;

    this.entityEditor.getField().set(this.proto, this.entityEditor.getValue(), index);
    this.entityEditor.getField().set(this.proto, this.sortByName(this.entityEditor.getField().get(this.proto)));
  }

  onStoreAndNext(field: ProtoInfoField, index: number) {
    const name = this.editing?.name || '';
    const newIndex = this.editing?.newIndex || 0;

    this.onStore(field, index);
    const message = field.get(this.proto, index + 1);
    if (message) {
      this.onEntity(name, field, message, index + 1, newIndex);
    }
  }

  onDelete(field: ProtoInfoField, index: number) {
    this.hasStoredEntity = true;
    this.editing = undefined;
    this.entityEditor.getField().remove(this.proto, index);
  }

  onDuplicate() {
    if (this.editing) {
      this.hasChangedEntity;
      this.editing.index = this.editing.newIndex;

      this.onStore(this.editing.field!, this.editing.index);
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
    if (this.hasChangedEntity) {
      if (confirm('You have pending changes, do you really want to cancel without saving?')) {
        this.hasChangedEntity = false;
      } else {
        return;
      }
    }

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
    if (this.hasStoredEntity) {
      if (confirm('You have pending changes, do you really want to cancel without saving?')) {
        this.hasStoredEntity = false;
      } else {
        return;
      }
    }

    this.proto = undefined;
    this.productContent = EMPTY_PRODUCT_CONTENT;
  }

  async onPreviewUpdate() {
    if (this.editing) {
      const message = this.entityEditor.getValue();
      if (message) {
        this.entity.set(await this.createEntity(message));
      }

      this.hasChangedEntity = true;
    }
  }

  private async createEntity(message: Message): Promise<EntityTypes | undefined> {
    if (message instanceof MonsterProto) {
      const monster = await Monster.fromProto(this.entities.items, message, this.productContent);
      return monster.resolveSimple(this.entities.monsters);
    } else if (message instanceof ItemProto) {
      return Item.fromProto(message, this.productContent).resolveSimple(this.entities.items);
    } else if (message instanceof SpellProto) {
      return Spell.fromProto(message, this.productContent).resolveSimple(this.entities.spells);
    } else if (message instanceof ConditionProto) {
      return Condition.fromProto(message, this.productContent).resolveSimple(this.entities.conditions);
    } else if (message instanceof GlossaryProto) {
      return Glossary.fromProto(message, this.productContent).resolveSimple(this.entities.glossary);
    } else if (message instanceof ProductProto) {
      return Product.fromProto(message, this.productContent).resolveSimple(this.entities.products);
    } else if (message instanceof NPCProto) {
      return (await NPC.fromProto(this.entities.items, message, this.productContent))
        .resolveSimple(this.entities.npcs)
        .resolveRace(this.entities.monsters);
    } else if (message instanceof TrapProto) {
      return (await Trap.fromProto(message, this.productContent)).resolveSimple(this.entities.traps);
    } else if (message instanceof GodProto) {
      return (await God.fromProto(message, this.productContent)).resolveSimple(this.entities.gods);
    } else if (message instanceof PlaceProto) {
      return (await Place.fromProto(message, this.productContent)).resolveSimple(this.entities.places);
    } else if (message instanceof EventProto) {
      return (await Event.fromProto(message, this.productContent)).resolveSimple(this.entities.events);
    } else if (message instanceof GroupProto) {
      return (await Group.fromProto(message, this.productContent)).resolveSimple(this.entities.groups);
    } else if (message instanceof MiniatureProto) {
      return Miniature.fromProto(message).resolveSimple(this.entities.miniatures);
    } else if (message instanceof AdventureProto) {
      return AdventureEntity.fromProto(message, this.productContent).resolveSimple(this.entities.adventures);
    } else if (message instanceof EncounterProto) {
      const encounter = EncounterEntity.fromProto(
        message,
        this.productContent,
        this.entities.npcs,
        this.entities.monsters,
        this.entities.items,
        this.entities.spells,
        this.entities.traps,
      );
      return encounter.resolveSimple(this.entities.encounters);
    } else if (message instanceof MapsProto.Map) {
      return BattleMap.fromProto(message, this.productContent);
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

      console.warn('CONVERTING...');

      for (const spell of this.proto.getSpellsList()) {
        for (const image of spell.getCommon()?.getImagesList() || []) {
          if (image.getUrl().endsWith('.jpg')) {
            image.setImageCover(true);
          }
        }
      }
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
    this.productContent = ProductContent.fromProto(this.proto);
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
    this.proto = ProductContentProto.deserializeBinary(new Uint8Array(await file.arrayBuffer()));
    this.productContent = ProductContent.fromProto(this.proto);
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

  @HostListener('window:beforeunload')
  onLeave(): boolean {
    return !this.hasChangedEntity && !this.hasStoredEntity;
  }
}

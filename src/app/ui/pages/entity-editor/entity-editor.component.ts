import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Message } from 'google-protobuf';
import { ProtoInfoFieldType } from 'src/app/proto/proto-info-field-type';
import { ProtoRpc } from '../../../net/ProtoRpc';
import { ProductContentProto } from '../../../proto/generated/template_pb';
import { LinkProto } from '../../../proto/generated/value_pb';
import { ProtoInfo, ProtoInfoField } from '../../../proto/proto-info';
import { ASSETS } from '../../../services/entity/entities.service';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';
import { EditorComponent } from './editor.component';
import { MessageEditorComponent } from './message-editor.component';
import { StringEditorComponent } from './string-editor.component';

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
  ],
  templateUrl: './entity-editor.component.html',
  styleUrl: './entity-editor.component.scss',
})
export class EntityEditorComponent {
  @ViewChild('editor') editor!: MessageEditorComponent;
  @ViewChild('entityEditor') entityEditor!: EditorComponent<Message>;
  editing?: { field?: ProtoInfoField; name: string; message: Message; index: number; newIndex: number };

  ProtoInfoFieldType = ProtoInfoFieldType;
  ASSETS = ASSETS;

  readonly info: ProtoInfo = new ProtoInfo();
  proto?: ProductContentProto;
  readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);

  onEntity(name: string, field: ProtoInfoField | undefined, message: Message, index: number, newIndex: number) {
    this.editing = { name, field, message, index, newIndex };
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

      for (const product of this.proto.getProductsList()) {
        if (product.getCommon()?.getImagesList().length === 0) {
          const link = new LinkProto();
          link.setLabel(product.getCommon()?.getName() || '');
          link.setUrl(product.getCommon()?.getName().toLowerCase() + '.webp');
          product.getCommon()?.addImages(link);
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

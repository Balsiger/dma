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

      for (const l of lists) {
        for (const e of l) {
          const common = (e as any).getCommon();
          if (common && 'getReferencesList' in common) {
            if (common.getReferencesList().length != 1) {
              if (common.getReferencesList().length > 1) {
                console.warn('More than one reference for', e);
              }
            } else {
              common.setPagesList(common.getReferencesList()[0].getPagesList());
            }

            common.setReferencesList([]);
          } else {
            console.warn('Cannot convert', e);
          }
        }
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

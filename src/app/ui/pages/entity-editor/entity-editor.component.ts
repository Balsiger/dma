import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Message } from 'google-protobuf';
import { ProtoRpc } from '../../../net/ProtoRpc';
import { ProductContentProto } from '../../../proto/generated/template_pb';
import { ProtoInfo, ProtoInfoField, ProtoInfoFieldType } from '../../../proto/proto-info';
import { PageTitleComponent } from '../page-title.component';
import { PageComponent } from '../page.component';
import { EditorComponent } from './editor-component';
import { MessageEditorComponent } from './message-editor.component';
import { StringEditorComponent } from './string-editor.component';

export interface Asset {
  name: string;
  file: string;
}

@Component({
  selector: 'entity-editor',
  standalone: true,
  imports: [
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
  @ViewChild('editor') editor!: EditorComponent<ProductContentProto>;
  @ViewChild('entityEditor') entityEditor!: EditorComponent<Message>;
  editing?: { field?: ProtoInfoField; name: string; message: Message; index: number };

  ProtoInfoFieldType = ProtoInfoFieldType;

  readonly info: ProtoInfo = new ProtoInfo();
  proto?: ProductContentProto;
  readonly assets: Asset[] = [
    { name: "Player's Handbook", file: "/assets/data/products/Player's Handbook.pb" },
    { name: "Dungeon Master's Guide", file: "/assets/data/products/Dungeon Master's Guide.pb" },
    { name: 'Monster Manual', file: '/assets/data/products/Monster Manual.pb' },
    { name: "Volo's Guide to Monsters", file: "/assets/data/products/Volo's Guide to Monsters.pb" },
    { name: 'Monsters of the Multiverse', file: '/assets/data/products/Monsters of the Multiverse.pb' },
    { name: 'Waterdeep - Dragon Heist', file: '/assets/data/products/Waterdeep - Dragon Heist.pb' },
    {
      name: 'Waterdeep - Dungeon of the Mad Mage',
      file: '/assets/data/products/Waterdeep - Dungeon of the Mad Mage.pb',
    },
    {
      name: "VeX's Complete Expanded Dungeon of the Mad Mage",
      file: "assets/data/products/VeX's Complete Expanded Dungeon of the Mad Mage.pb",
    },
    {
      name: 'Skullport - Shadow of Waterdeep',
      file: 'assets/data/products/Skullport - Shadow of Waterdeep.pb',
    },
  ];
  readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);

  onEntity(name: string, field: ProtoInfoField | undefined, message: Message, index: number) {
    this.editing = { name, field, message, index };
  }

  async onSave() {
    if (this.proto) {
      const proto = this.editor.getValue();
      if (proto) {
        Message.copyInto(this.proto, proto);
      }

      const handle = await (window as any).showSaveFilePicker({
        suggestedName: 'guru.pb',
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

  onClose() {
    this.proto = undefined;
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

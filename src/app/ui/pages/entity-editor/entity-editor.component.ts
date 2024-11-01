import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Message } from 'google-protobuf';
import { ProtoInfoFieldType } from 'src/app/proto/proto-info-field-type';
import { ProtoRpc } from '../../../net/ProtoRpc';
import { CommonProto, ProductContentProto } from '../../../proto/generated/template_pb';
import { ReferenceProto } from '../../../proto/generated/value_pb';
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
  ASSETS = ASSETS;

  readonly info: ProtoInfo = new ProtoInfo();
  proto?: ProductContentProto;
  readonly rpc = new ProtoRpc(ProductContentProto.deserializeBinary);

  onEntity(name: string, field: ProtoInfoField | undefined, message: Message, index: number) {
    const nameField = field?.getNested('Common');
    if (!nameField?.get(message)) {
      const reference = new ReferenceProto();
      reference.setName(this.proto?.getName() || '');
      reference.setId(this.proto?.getId() || '');

      const common = new CommonProto();
      common.addReferences(reference);
      nameField?.set(message, common, 0);
    }

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

  onCancel() {
    this.editing = undefined;
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

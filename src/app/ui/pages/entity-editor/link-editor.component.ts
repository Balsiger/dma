import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@angular/fire/storage';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from '../../../../common/utils';
import { LabelType } from '../../../data/values/link';
import { LinkProto } from '../../../proto/generated/value_pb';
import { EnumValue, ProtoInfoField } from '../../../proto/proto-info';
import { ProtoInfoFieldType } from '../../../proto/proto-info-field-type';
import { BooleanEditorComponent } from './boolean-editor.component';
import { EditorComponent } from './editor.component';
import { EnumEditorComponent } from './enum-editor.component';
import { StringEditorComponent } from './string-editor.component';

function computeLabelTypes(): EnumValue[] {
  let index = 2;
  return Object.values(LabelType).map((t) => ({ name: t, index: index++ }));
}

const LABEL_TYPES = [
  ...[
    { name: 'special', index: 0 },
    { name: 'none', index: 1 },
  ],
  ...computeLabelTypes(),
];

@Component({
  selector: 'link-editor',
  templateUrl: './link-editor.component.html',
  styleUrl: './link-editor.component.scss',
  imports: [StringEditorComponent, MatIconModule, MatButtonModule, BooleanEditorComponent, EnumEditorComponent],
})
export class LinkEditorComponent extends EditorComponent<LinkProto> implements AfterViewInit {
  @ViewChild('labelType') labelType!: EnumEditorComponent;
  @ViewChild('label') label!: StringEditorComponent;
  @ViewChild('url') url!: StringEditorComponent;
  @ViewChild('cover') cover!: BooleanEditorComponent;

  labelTypeValue: number = 0;

  private autoValue = false;
  protected labelTypeField = new ProtoInfoField(
    'LabelType',
    'Label Type',
    'LabelType',
    ProtoInfoFieldType.enum,
    'enum',
    false,
    LABEL_TYPES,
    [],
    '',
  );

  ngAfterViewInit() {
    console.log('value', this.url.getValue());

    if (!this.url.getValue()) {
      this.setComputedUrl();
    }

    this.labelTypeValue = this.computeLabelType();
  }

  override getValue(): LinkProto {
    const proto = new LinkProto();
    proto.setLabel(this.label.getValue());
    proto.setUrl(this.url.getValue());
    proto.setImageCover(this.cover.getValue());

    return proto;
  }

  async onUpload(label: string | null) {
    if (label) {
      const storage = getStorage();
      const [handle] = await (window as any).showOpenFilePicker();
      const file = await handle.getFile();

      const image = ref(
        storage,
        'encounters/' + this.context.product + '/' + label + Utils.extractExtension(file.name),
      );

      await uploadBytes(image, file);
      const url = await getDownloadURL(image);

      this.url.control.setValue(url);
    }
  }

  override focus() {
    this.label.focus();
  }

  onLabelChanged() {
    this.changed.emit();

    if (this.autoValue) {
      this.setComputedUrl();
    }
  }

  onLabelTypeChanged() {
    this.changed.emit();

    const labelType = this.labelType.getValue();
    if (labelType == 0) {
      Utils.delayed(() => {
        this.label.focus();
      });
    } else {
      this.label.setValue(labelType == 1 ? '' : LABEL_TYPES[labelType].name);
    }

    if (this.autoValue) {
      this.setComputedUrl();
    }
  }

  onUrlChanged() {
    this.changed.emit();
    this.autoValue = false;
  }

  computeLabelType(): number {
    const label = this.label.getValue();
    if (!label) {
      return 0;
    }

    for (const type of LABEL_TYPES) {
      if (type.name === label) {
        return type.index;
      }
    }

    return 1;
  }

  private setComputedUrl() {
    this.autoValue = true;

    console.log('context', this.context);
    switch (this.label.getValue()) {
      case '':
        this.url.setValue(`${this.context.name}.png`);
        break;

      case 'DMG':
      case 'PHB':
      case 'MM':
        this.url.setValue(`${this.context.name}.webp`);
        break;

      default:
        this.url.setValue(`${this.context.name} (${this.label.getValue()}).png`);
        break;
    }
  }
}

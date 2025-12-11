import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@angular/fire/storage';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from '../../../../common/utils';
import { LinkProto } from '../../../proto/generated/value_pb';
import { BooleanEditorComponent } from './boolean-editor.component';
import { EditorComponent } from './editor.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
  selector: 'link-editor',
  templateUrl: './link-editor.component.html',
  styleUrl: './link-editor.component.scss',
  imports: [StringEditorComponent, MatIconModule, MatButtonModule, BooleanEditorComponent],
})
export class LinkEditorComponent extends EditorComponent<LinkProto> implements AfterViewInit {
  @ViewChild('label') label!: StringEditorComponent;
  @ViewChild('url') url!: StringEditorComponent;
  @ViewChild('cover') cover!: BooleanEditorComponent;

  private autoValue = false;

  ngAfterViewInit() {
    console.log('value', this.url.getValue());

    if (!this.url.getValue()) {
      this.setComputedUrl();
    }
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

  onUrlChanged() {
    this.changed.emit();
    this.autoValue = false;
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

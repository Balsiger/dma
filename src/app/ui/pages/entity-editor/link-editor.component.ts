import { Component, ViewChild } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@angular/fire/storage';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from '../../../../common/utils';
import { LinkProto } from '../../../proto/generated/value_pb';
import { EditorComponent } from './editor.component';
import { EditorContext } from './entity-editor.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
  selector: 'link-editor',
  standalone: true,
  templateUrl: './link-editor.component.html',
  styleUrl: './link-editor.component.scss',
  imports: [StringEditorComponent, MatIconModule, MatButtonModule],
})
export class LinkEditorComponent extends EditorComponent<LinkProto> {
  @ViewChild('label') label!: StringEditorComponent;
  @ViewChild('url') url!: StringEditorComponent;

  constructor(readonly context: EditorContext) {
    super();
  }

  override getValue(): LinkProto {
    const proto = new LinkProto();
    proto.setLabel(this.label.getValue());
    proto.setUrl(this.url.getValue());

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
}

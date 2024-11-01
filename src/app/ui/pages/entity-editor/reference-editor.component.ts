import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { RangeProto, ReferenceProto } from '../../../proto/generated/value_pb';
import { ProtoInfoField } from '../../../proto/proto-info';
import { ProtoInfoFieldType } from '../../../proto/proto-info-field-type';
import { EntitiesService } from '../../../services/entity/entities.service';
import { AreaContainerComponent } from '../../common/area-container/area-container.component';
import { EditorComponent } from './editor.component';
import { EditorsComponent } from './editors.component';
import { StringEditorComponent } from './string-editor.component';

@Component({
  selector: 'reference-editor',
  standalone: true,
  imports: [StringEditorComponent, AreaContainerComponent, forwardRef(() => EditorsComponent)],
  templateUrl: './reference-editor.component.html',
  styleUrl: './reference-editor.component.scss',
})
export class ReferenceEditorComponent extends EditorComponent<ReferenceProto> implements OnInit {
  @ViewChild('product') product!: StringEditorComponent;
  @ViewChild('pages') pages!: EditorsComponent<RangeProto[]>;

  productField = new ProtoInfoField(
    'product',
    'Product',
    ProtoInfoFieldType.string,
    this.entityType(),
    false,
    [],
    [],
    '',
  );
  options: string[] = [];

  constructor(private readonly entitiesService: EntitiesService) {
    super();
  }

  async ngOnInit() {
    this.options = await this.computeAutocompleteOptions();
  }

  private async computeAutocompleteOptions(): Promise<string[]> {
    await this.entitiesService.ensureLoaded();

    return this.entitiesService.productAutocomplete;
  }

  computeInput(): string {
    const proto = this.value();
    if (proto) {
      return `${proto.getName()} -- ${proto.getId()}`;
    } else {
      return '';
    }
  }

  override getValue(): ReferenceProto | undefined {
    const parts = this.product.getValue().split(/\s+--\s+/);

    const result = new ReferenceProto();
    result.setName(parts.length > 0 ? parts[0] : '');
    result.setId(parts.length > 1 ? parts[1] : '');

    result.setPagesList(this.pages.getValue() || []);

    return result;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { PageComponent } from '../../common/page/page.component';
import { SelectionTileComponent } from '../../common/selection-tile/selection-tile.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTitleComponent, SelectionTileComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

}

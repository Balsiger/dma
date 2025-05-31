import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectionTileComponent } from '../common/selection-tile/selection-tile.component';
import { PageTitleComponent } from '../pages/page-title.component';
import { PageComponent } from '../pages/page.component';

@Component({
    selector: 'app-library',
    imports: [CommonModule, PageComponent, PageTitleComponent, SelectionTileComponent],
    templateUrl: './library.component.html',
    styleUrl: './library.component.scss'
})
export class LibraryComponent {}

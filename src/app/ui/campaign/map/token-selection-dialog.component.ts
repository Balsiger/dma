import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Token } from '../../../data/entities/token';
import { EntitiesService } from '../../../services/entity/entities.service';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { EntityTileComponent } from '../../entities/entity-tile.component';

@Component({
  selector: 'token-selection',
  standalone: true,
  imports: [DialogComponent, EntityTileComponent],
  templateUrl: './token-selection-dialog.component.html',
  styleUrl: './token-selection-dialog.component.scss',
})
export class TokenSelectionDialogComponent implements OnInit {
  constructor(
    private readonly ref: MatDialogRef<TokenSelectionDialogComponent, Token>,
    private readonly entitiesSerivce: EntitiesService,
  ) {}

  tokens: Token[] = [];
  tokensByTag = new Map<string, Token[]>();

  async ngOnInit() {
    this.tokens = this.entitiesSerivce.tokens.getAll();
    for (const token of this.tokens) {
      for (const tag of token.tags) {
        if (this.tokensByTag.has(tag)) {
          this.tokensByTag.get(tag)?.push(token);
        } else {
          this.tokensByTag.set(tag, [token]);
        }
      }
    }
  }

  onSelect(token: Token) {
    this.ref.close(token);
  }

  onCancel() {
    this.ref.close();
  }
}

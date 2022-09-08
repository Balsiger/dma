import { Component, Input } from '@angular/core';
import { Spell } from '../../../../data/spell';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellComponent {
  @Input() spell!: Spell;

  constructor() {}
}

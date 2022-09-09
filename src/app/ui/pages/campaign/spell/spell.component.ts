import { Component, Injector, Input, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Spell } from '../../../../data/spell';
import { TaperComponent } from '../../../common/taper/taper.component';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellComponent implements OnInit {
  @Input() spell!: Spell;

  constructor(private readonly injector: Injector) {}

  ngOnInit(): void {
    const element = createCustomElement(TaperComponent, { injector: this.injector });
    customElements.define('taper', element);
  }
}

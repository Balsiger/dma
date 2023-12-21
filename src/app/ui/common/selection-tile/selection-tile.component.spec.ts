import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTileComponent } from './selection-tile.component';

describe('SelectionTileComponent', () => {
  let component: SelectionTileComponent;
  let fixture: ComponentFixture<SelectionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SelectionTileComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SelectionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

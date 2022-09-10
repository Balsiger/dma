import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDialogComponent } from './spell-dialog.component';

describe('SpellDialogComponent', () => {
  let component: SpellDialogComponent;
  let fixture: ComponentFixture<SpellDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

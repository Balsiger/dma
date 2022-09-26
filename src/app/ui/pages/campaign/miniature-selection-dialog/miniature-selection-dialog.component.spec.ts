import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniatureSelectionDialogComponent } from './miniature-selection-dialog.component';

describe('MiniatureSelectionDialogComponent', () => {
  let component: MiniatureSelectionDialogComponent;
  let fixture: ComponentFixture<MiniatureSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniatureSelectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniatureSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

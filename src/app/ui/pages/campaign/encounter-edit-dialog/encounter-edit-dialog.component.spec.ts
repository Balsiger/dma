import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterEditDialogComponent } from './encounter-edit-dialog.component';

describe('EncounterEditDialogComponent', () => {
  let component: EncounterEditDialogComponent;
  let fixture: ComponentFixture<EncounterEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EncounterEditDialogComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EncounterEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

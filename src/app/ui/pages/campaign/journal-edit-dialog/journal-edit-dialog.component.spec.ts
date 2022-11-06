import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEditDialogComponent } from './journal-edit-dialog.component';

describe('JournalEditDialogComponent', () => {
  let component: JournalEditDialogComponent;
  let fixture: ComponentFixture<JournalEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

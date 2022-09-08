import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureEditDialogComponent } from './adventure-edit-dialog.component';

describe('AdventureEditDialogComponent', () => {
  let component: AdventureEditDialogComponent;
  let fixture: ComponentFixture<AdventureEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureEventEditDialogComponent } from './adventure-event-edit-dialog.component';

describe('AdventureEventEditDialogComponent', () => {
  let component: AdventureEventEditDialogComponent;
  let fixture: ComponentFixture<AdventureEventEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureEventEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureEventEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

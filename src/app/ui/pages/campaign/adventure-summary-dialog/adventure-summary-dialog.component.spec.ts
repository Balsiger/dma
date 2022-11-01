import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureSummaryDialogComponent } from './adventure-summary-dialog.component';

describe('AdventureSummaryDialogComponent', () => {
  let component: AdventureSummaryDialogComponent;
  let fixture: ComponentFixture<AdventureSummaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureSummaryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureSummaryPageComponent } from './adventure-summary-page.component';

describe('AdventureSummaryPageComponent', () => {
  let component: AdventureSummaryPageComponent;
  let fixture: ComponentFixture<AdventureSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AdventureSummaryPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AdventureSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureSummaryComponent } from './adventure-summary.component';

describe('AdventureSummaryComponent', () => {
  let component: AdventureSummaryComponent;
  let fixture: ComponentFixture<AdventureSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AdventureSummaryComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AdventureSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

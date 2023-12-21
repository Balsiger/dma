import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignScreenContainerComponent } from './campaign-screen-container.component';

describe('CampaignScreenContainerComponent', () => {
  let component: CampaignScreenContainerComponent;
  let fixture: ComponentFixture<CampaignScreenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CampaignScreenContainerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CampaignScreenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

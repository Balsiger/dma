import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignScreenDialogComponent } from './campaign-screen-dialog.component';

describe('CampaignScreenDialogComponent', () => {
  let component: CampaignScreenDialogComponent;
  let fixture: ComponentFixture<CampaignScreenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignScreenDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignScreenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

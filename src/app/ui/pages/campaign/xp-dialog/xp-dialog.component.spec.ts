import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpDialogComponent } from './xp-dialog.component';

describe('XpDialogComponent', () => {
  let component: XpDialogComponent;
  let fixture: ComponentFixture<XpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [XpDialogComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(XpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

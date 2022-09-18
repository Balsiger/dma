import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenImageButtonComponent } from './screen-image-button.component';

describe('ScreenImageButtonComponent', () => {
  let component: ScreenImageButtonComponent;
  let fixture: ComponentFixture<ScreenImageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenImageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniatureDetailsComponent } from './miniature-details.component';

describe('MiniatureDetailsComponent', () => {
  let component: MiniatureDetailsComponent;
  let fixture: ComponentFixture<MiniatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniatureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

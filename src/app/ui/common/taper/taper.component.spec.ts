import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaperComponent } from './taper.component';

describe('TaperComponent', () => {
  let component: TaperComponent;
  let fixture: ComponentFixture<TaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TaperComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

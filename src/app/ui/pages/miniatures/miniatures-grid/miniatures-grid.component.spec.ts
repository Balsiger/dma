import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturesGridComponent } from './miniatures-grid.component';

describe('MiniaturesGridComponent', () => {
  let component: MiniaturesGridComponent;
  let fixture: ComponentFixture<MiniaturesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MiniaturesGridComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MiniaturesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

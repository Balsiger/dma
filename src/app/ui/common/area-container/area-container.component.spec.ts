import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaContainerComponent } from './area-container.component';

describe('AreaComponent', () => {
  let component: AreaContainerComponent;
  let fixture: ComponentFixture<AreaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AreaContainerComponent],
}).compileComponents();

    fixture = TestBed.createComponent(AreaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

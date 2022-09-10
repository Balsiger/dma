import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDialogComponent } from './monster-dialog.component';

describe('MonsterDialogComponent', () => {
  let component: MonsterDialogComponent;
  let fixture: ComponentFixture<MonsterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

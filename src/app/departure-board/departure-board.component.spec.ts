import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureBoardComponent } from './departure-board.component';

describe('DepartureBoardComponent', () => {
  let component: DepartureBoardComponent;
  let fixture: ComponentFixture<DepartureBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

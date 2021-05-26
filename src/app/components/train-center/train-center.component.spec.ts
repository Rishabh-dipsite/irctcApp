import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCenterComponent } from './train-center.component';

describe('TrainCenterComponent', () => {
  let component: TrainCenterComponent;
  let fixture: ComponentFixture<TrainCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchInfoComponent } from './fetch-info.component';

describe('FetchInfoComponent', () => {
  let component: FetchInfoComponent;
  let fixture: ComponentFixture<FetchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpwMap2Component } from './fpw-map2.component';

describe('FpwMap2Component', () => {
  let component: FpwMap2Component;
  let fixture: ComponentFixture<FpwMap2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpwMap2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpwMap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

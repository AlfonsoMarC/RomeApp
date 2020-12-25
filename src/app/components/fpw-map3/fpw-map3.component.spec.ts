import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpwMap3Component } from './fpw-map3.component';

describe('FpwMap3Component', () => {
  let component: FpwMap3Component;
  let fixture: ComponentFixture<FpwMap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpwMap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpwMap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

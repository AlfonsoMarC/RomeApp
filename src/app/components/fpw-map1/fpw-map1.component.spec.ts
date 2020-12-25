import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpwMap1Component } from './fpw-map1.component';

describe('FpwMap1Component', () => {
  let component: FpwMap1Component;
  let fixture: ComponentFixture<FpwMap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpwMap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpwMap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

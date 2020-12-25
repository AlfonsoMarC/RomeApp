import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpwBattle1Component } from './fpw-battle1.component';

describe('FpwBattle1Component', () => {
  let component: FpwBattle1Component;
  let fixture: ComponentFixture<FpwBattle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpwBattle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpwBattle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

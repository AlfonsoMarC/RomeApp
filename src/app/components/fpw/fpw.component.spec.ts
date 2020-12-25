import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpwComponent } from './fpw.component';

describe('FpwComponent', () => {
  let component: FpwComponent;
  let fixture: ComponentFixture<FpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

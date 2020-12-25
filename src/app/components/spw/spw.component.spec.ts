import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpwComponent } from './spw.component';

describe('SpwComponent', () => {
  let component: SpwComponent;
  let fixture: ComponentFixture<SpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

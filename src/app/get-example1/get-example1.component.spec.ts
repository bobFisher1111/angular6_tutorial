import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExample1Component } from './get-example1.component';

describe('GetExample1Component', () => {
  let component: GetExample1Component;
  let fixture: ComponentFixture<GetExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetExample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

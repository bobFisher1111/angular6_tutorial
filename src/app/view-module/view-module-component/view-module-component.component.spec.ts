import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModuleComponentComponent } from './view-module-component.component';

describe('ViewModuleComponentComponent', () => {
  let component: ViewModuleComponentComponent;
  let fixture: ComponentFixture<ViewModuleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModuleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

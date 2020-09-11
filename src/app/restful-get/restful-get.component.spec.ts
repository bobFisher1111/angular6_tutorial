import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfulGetComponent } from './restful-get.component';

describe('RestfulGetComponent', () => {
  let component: RestfulGetComponent;
  let fixture: ComponentFixture<RestfulGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestfulGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestfulGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

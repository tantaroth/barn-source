import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBarnFormComponent } from './ng-barn-form.component';

describe('NgBarnFormComponent', () => {
  let component: NgBarnFormComponent;
  let fixture: ComponentFixture<NgBarnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBarnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBarnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

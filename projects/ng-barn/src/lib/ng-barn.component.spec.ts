import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBarnComponent } from './ng-barn.component';

describe('NgBarnComponent', () => {
  let component: NgBarnComponent;
  let fixture: ComponentFixture<NgBarnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBarnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

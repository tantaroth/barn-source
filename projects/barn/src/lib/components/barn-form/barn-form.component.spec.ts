import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnFormComponent } from './barn-form.component';

describe('BarnFormComponent', () => {
  let component: BarnFormComponent;
  let fixture: ComponentFixture<BarnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

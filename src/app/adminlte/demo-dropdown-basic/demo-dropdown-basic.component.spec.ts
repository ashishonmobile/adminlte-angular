import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDropdownBasicComponent } from './demo-dropdown-basic.component';

describe('DemoDropdownBasicComponent', () => {
  let component: DemoDropdownBasicComponent;
  let fixture: ComponentFixture<DemoDropdownBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDropdownBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDropdownBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

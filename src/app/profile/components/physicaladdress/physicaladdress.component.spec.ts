import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicaladdressComponent } from './physicaladdress.component';

describe('PhysicaladdressComponent', () => {
  let component: PhysicaladdressComponent;
  let fixture: ComponentFixture<PhysicaladdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicaladdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicaladdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

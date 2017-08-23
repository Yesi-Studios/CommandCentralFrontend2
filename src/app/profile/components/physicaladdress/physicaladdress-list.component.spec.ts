import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicaladdressListComponent } from './physicaladdress-list.component';

describe('PhysicaladdressListComponent', () => {
  let component: PhysicaladdressListComponent;
  let fixture: ComponentFixture<PhysicaladdressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicaladdressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicaladdressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

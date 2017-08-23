import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumberListComponent } from './phonenumber-list.component';

describe('PhonenumberListComponent', () => {
  let component: PhonenumberListComponent;
  let fixture: ComponentFixture<PhonenumberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonenumberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonenumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusterListComponent } from './muster-list.component';

describe('MusterListComponent', () => {
  let component: MusterListComponent;
  let fixture: ComponentFixture<MusterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

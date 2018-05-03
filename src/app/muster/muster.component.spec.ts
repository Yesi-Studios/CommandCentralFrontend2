import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusterComponent } from './muster.component';

describe('MusterComponent', () => {
  let component: MusterComponent;
  let fixture: ComponentFixture<MusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

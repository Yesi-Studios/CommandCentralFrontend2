import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusterEntryComponent } from './muster-entry.component';

describe('MusterEntryComponent', () => {
  let component: MusterEntryComponent;
  let fixture: ComponentFixture<MusterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusterViewComponent } from './muster-view.component';

describe('MusterViewComponent', () => {
  let component: MusterViewComponent;
  let fixture: ComponentFixture<MusterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

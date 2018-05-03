import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchbillViewComponent } from './watchbill-view.component';

describe('WatchbillViewComponent', () => {
  let component: WatchbillViewComponent;
  let fixture: ComponentFixture<WatchbillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchbillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchbillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

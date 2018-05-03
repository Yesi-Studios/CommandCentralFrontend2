import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchbillComponent } from './watchbill.component';

describe('WatchbillComponent', () => {
  let component: WatchbillComponent;
  let fixture: ComponentFixture<WatchbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

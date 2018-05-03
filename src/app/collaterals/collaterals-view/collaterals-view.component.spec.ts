import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralsViewComponent } from './collaterals-view.component';

describe('CollateralsViewComponent', () => {
  let component: CollateralsViewComponent;
  let fixture: ComponentFixture<CollateralsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollateralsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

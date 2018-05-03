import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralsComponent } from './collaterals.component';

describe('CollateralsComponent', () => {
  let component: CollateralsComponent;
  let fixture: ComponentFixture<CollateralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollateralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralSelectorComponent } from './collateral-selector.component';

describe('CollateralSelectorComponent', () => {
  let component: CollateralSelectorComponent;
  let fixture: ComponentFixture<CollateralSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollateralSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

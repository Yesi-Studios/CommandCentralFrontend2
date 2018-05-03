import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralEditorComponent } from './collateral-editor.component';

describe('CollateralEditorComponent', () => {
  let component: CollateralEditorComponent;
  let fixture: ComponentFixture<CollateralEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollateralEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

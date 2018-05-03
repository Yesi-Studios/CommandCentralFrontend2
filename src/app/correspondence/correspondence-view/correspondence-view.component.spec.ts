import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceViewComponent } from './correspondence-view.component';

describe('CorrespondenceViewComponent', () => {
  let component: CorrespondenceViewComponent;
  let fixture: ComponentFixture<CorrespondenceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrespondenceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceItemComponent } from './correspondence-item.component';

describe('CorrespondenceItemComponent', () => {
  let component: CorrespondenceItemComponent;
  let fixture: ComponentFixture<CorrespondenceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrespondenceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

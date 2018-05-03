import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusterArchiveListComponent } from './muster-archive-list.component';

describe('MusterArchiveListComponent', () => {
  let component: MusterArchiveListComponent;
  let fixture: ComponentFixture<MusterArchiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusterArchiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusterArchiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

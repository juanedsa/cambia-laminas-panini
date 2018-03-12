import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonaBtnComponent } from './add-mona-btn.component';

describe('AddMonaBtnComponent', () => {
  let component: AddMonaBtnComponent;
  let fixture: ComponentFixture<AddMonaBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonaBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

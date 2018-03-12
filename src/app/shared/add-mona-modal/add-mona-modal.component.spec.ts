import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonaModalComponent } from './add-mona-modal.component';

describe('AddMonaModalComponent', () => {
  let component: AddMonaModalComponent;
  let fixture: ComponentFixture<AddMonaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

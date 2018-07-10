import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUserComponent } from './crud-user.component';

describe('CrudUserComponent', () => {
  let component: CrudUserComponent;
  let fixture: ComponentFixture<CrudUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

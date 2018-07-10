import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBeatComponent } from './upload-beat.component';

describe('UploadBeatComponent', () => {
  let component: UploadBeatComponent;
  let fixture: ComponentFixture<UploadBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

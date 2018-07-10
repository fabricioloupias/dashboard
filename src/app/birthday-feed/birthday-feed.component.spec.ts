import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayFeedComponent } from './birthday-feed.component';

describe('BirthdayFeedComponent', () => {
  let component: BirthdayFeedComponent;
  let fixture: ComponentFixture<BirthdayFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { NewStateService } from './new-state.service';

describe('NewStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewStateService]
    });
  });

  it('should be created', inject([NewStateService], (service: NewStateService) => {
    expect(service).toBeTruthy();
  }));
});

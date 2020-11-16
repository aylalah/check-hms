import { TestBed } from '@angular/core/testing';

import { GetFunctionsService } from './get-functions.service';

describe('GetFunctionsService', () => {
  let service: GetFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

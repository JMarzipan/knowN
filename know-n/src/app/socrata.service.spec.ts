import { TestBed, inject } from '@angular/core/testing';

import { SocrataService } from './socrata.service';

describe('SocrataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocrataService]
    });
  });

  it('should be created', inject([SocrataService], (service: SocrataService) => {
    expect(service).toBeTruthy();
  }));
});

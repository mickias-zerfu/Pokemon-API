import { TestBed } from '@angular/core/testing';

import { PokemanService } from './pokeman.service';

describe('PokemanService', () => {
  let service: PokemanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

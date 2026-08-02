import { TestBed } from '@angular/core/testing';

import { FiltracionService } from './filtracion.service';

describe('FiltracionService', () => {
  let service: FiltracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

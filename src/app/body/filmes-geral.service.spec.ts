import { TestBed } from '@angular/core/testing';

import { FilmesGeralService } from './filmes-geral.service';

describe('FilmesGeralService', () => {
  let service: FilmesGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

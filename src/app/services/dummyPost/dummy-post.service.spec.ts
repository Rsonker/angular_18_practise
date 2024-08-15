import { TestBed } from '@angular/core/testing';

import { DummyPostService } from './dummy-post.service';

describe('DummyPostService', () => {
  let service: DummyPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

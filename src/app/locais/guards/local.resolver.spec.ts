import { TestBed } from '@angular/core/testing';

import { LocalResolver } from './local.resolver';

describe('LocalResolver', () => {
  let resolver: LocalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LocalResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

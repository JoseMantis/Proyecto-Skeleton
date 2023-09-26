import { TestBed } from '@angular/core/testing';

import { RemUsuarioService } from './rem-usuario.service';

describe('RemUsuarioService', () => {
  let service: RemUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

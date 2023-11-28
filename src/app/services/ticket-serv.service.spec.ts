import { TestBed } from '@angular/core/testing';

import { TicketServService } from './ticket-serv.service';

describe('TicketServService', () => {
  let service: TicketServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

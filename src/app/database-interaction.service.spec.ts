import { TestBed, inject } from '@angular/core/testing';

import { DatabaseInteractionService } from './database-interaction.service';

describe('DatabaseInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseInteractionService]
    });
  });

  it('should ...', inject([DatabaseInteractionService], (service: DatabaseInteractionService) => {
    expect(service).toBeTruthy();
  }));
});

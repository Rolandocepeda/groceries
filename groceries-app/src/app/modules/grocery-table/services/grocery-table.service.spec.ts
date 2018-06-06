import { TestBed, inject } from '@angular/core/testing';

import { GroceryTableService } from './grocery-table.service';

describe('GroceryTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroceryTableService]
    });
  });

  it('should be created', inject([GroceryTableService], (service: GroceryTableService) => {
    expect(service).toBeTruthy();
  }));
});

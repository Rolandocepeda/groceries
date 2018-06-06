import { GroceryTableModule } from './grocery-table.module';

describe('GroceryTableModule', () => {
  let groceryTableModule: GroceryTableModule;

  beforeEach(() => {
    groceryTableModule = new GroceryTableModule();
  });

  it('should create an instance', () => {
    expect(groceryTableModule).toBeTruthy();
  });
});

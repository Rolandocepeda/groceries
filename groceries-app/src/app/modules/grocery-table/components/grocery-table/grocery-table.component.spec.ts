
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryTableComponent } from './grocery-table.component';

describe('GroceryTableComponent', () => {
  let component: GroceryTableComponent;
  let fixture: ComponentFixture<GroceryTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

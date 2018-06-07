import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { GroceryTableDataSource, GroceryTableItem } from './grocery-table-datasource';
import { GroceryTableService } from '../../services/grocery-table.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'grocery-table',
  templateUrl: './grocery-table.component.html',
  styleUrls: ['./grocery-table.component.css']
})
export class GroceryTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: GroceryTableDataSource;
  searchFormControl: FormControl = new FormControl('');

  displayedColumns = [
    { columnName: 'ID', key: 'id' },
    { columnName: 'Description', key: 'description' },
    { columnName: 'Last Sold', key: 'lastSold' },
    { columnName: 'Shelf Life', key: 'shelfLife' },
    { columnName: 'Department', key: 'department' },
    { columnName: 'Price', key: 'price' },
    { columnName: 'Unit', key: 'unit' },
    { columnName: 'xFor', key: 'xfor' },
    { columnName: 'Cost', key: 'cost' },
  ];
  columnIds = [];
  tempDataSource;
  totalElements: number;
  constructor(private _groceryTableService: GroceryTableService) { }

  ngOnInit() {
    this.initializeDataSource();
    this.getGroceries(0, 20);
    this.onSearch();
    this.columnIds = this.displayedColumns.map(column => column.key);
  }
  /**
   * init the data source with an empty array
   *
   * @memberof GroceryTableComponent
   */
  initializeDataSource(): void {
    this.dataSource = new GroceryTableDataSource(this.paginator, this.sort, []);
  }
  /**
   * get all the groceries and set the data source to the response
   *
   * @memberof GroceryTableComponent
   */
  getGroceries(page?: number, size?: number): void {
    // this._groceryTableService.getAll().subscribe((groceries: GroceryTableItem[]) => {
    //   this.dataSource = new GroceryTableDataSource(this.paginator, this.sort, groceries);
    //   this.tempDataSource = this.dataSource.data;
    // });

    this._groceryTableService.getTablePage(page, size).subscribe((groceries: any) => {
      this.dataSource = new GroceryTableDataSource(this.paginator, this.sort, groceries.content);
      this.tempDataSource = this.dataSource.data;
      this.totalElements = groceries.totalElements;
    });
  }
  /**
   * get the columns for the table
   *
   * @memberof GroceryTableComponent
   */
  getColumns(): void {
    this._groceryTableService.getColumns().subscribe((columns: any[]) => {
      this.displayedColumns = columns;
      this.columnIds = columns.map(column => column.key);
    });
  }
  /**
   * on search find the input value on the row properties
   *
   * @memberof GroceryTableComponent
   */
  onSearch(): void {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        if (value.length > 0) {
          const data = this.dataSource.data.filter(row => {
            return Object.values(row).join().toLowerCase().includes(value.toLowerCase());
          });
          this.dataSource = new GroceryTableDataSource(this.paginator, this.sort, data);
        } else {
          this.dataSource = new GroceryTableDataSource(this.paginator, this.sort, this.tempDataSource);
        }
      });
  }
  /**
   * get the groceries containing the input value
   *
   * @param {string} searchValue
   * @memberof GroceryTableComponent
   */
  searchGrocery(searchValue: string): void {
    this._groceryTableService.searchForGrocery(searchValue).subscribe((groceries: GroceryTableItem[]) => {
      this.dataSource = new GroceryTableDataSource(this.paginator, this.sort, groceries);
    });
  }

  test($event) {
    console.log($event);
    this.getGroceries($event.pageIndex, $event.pageSize);
  }

}

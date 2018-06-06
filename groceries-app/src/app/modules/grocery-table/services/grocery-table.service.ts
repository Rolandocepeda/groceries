import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroceryTableService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('grocery/');
  }

  getColumns() {
    return this._http.get('grocery/columns/');
  }

  searchForGrocery(searchValue: string) {
    return this._http.get('grocery/search?value=' + searchValue);
  }

  getTablePage(pageNumber, size) {
    return this._http.get('grocery/page?pageNumber=' + pageNumber + '&size=' + size);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
  MatInputModule, MatIconModule } from '@angular/material';
import { GroceryTableComponent } from './components/grocery-table/grocery-table.component';
import { GroceryTableService } from './services/grocery-table.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [GroceryTableComponent],
  exports: [GroceryTableComponent],
  providers: [GroceryTableService]
})
export class GroceryTableModule { }

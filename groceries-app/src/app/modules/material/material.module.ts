import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
  ],
  declarations: [],
  exports: [
    CdkTableModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
  ]
})
export class MaterialModule { }

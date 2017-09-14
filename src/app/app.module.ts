import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoTableComponent } from './demo-table/demo-table.component';
import {DataTableModule} from 'angular2-datatable'
import { DataFilterPipe }   from './demo-table/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoTableComponent, DataFilterPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

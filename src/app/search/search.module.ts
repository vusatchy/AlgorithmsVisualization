import { NgModule } from '@angular/core';
import {BinarySearchComponent} from './binary/binary.search.component';
import {LinearSearchComponent} from './linear/linear.search.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {InterpolationSearchComponent} from './interpolation/interpolation.search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
     BinarySearchComponent,
     LinearSearchComponent,
     InterpolationSearchComponent
  ],
  providers: []
})
export class SearchModule { }

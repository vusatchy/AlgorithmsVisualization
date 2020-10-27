import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BinarySearchComponent} from './search/binary/binary.search.component';
import {LinearSearchComponent} from './search/linear/linear.search.component';
import {InterpolationSearchComponent} from './search/interpolation/interpolation.search.component'; // CLI imports router

const routes: Routes = [
  {
    path: 'search/binary',
    component: BinarySearchComponent
  },
  {
    path: 'search/linear',
    component: LinearSearchComponent
  },
  {
    path: 'search/interpolation',
    component: InterpolationSearchComponent
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

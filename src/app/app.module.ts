import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from './footer/footer';
import {AppRoutingModule} from './app.router';
import {SearchModule} from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }

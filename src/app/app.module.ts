import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DuiCoreModule } from 'projects/deweppro/core/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DuiCoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

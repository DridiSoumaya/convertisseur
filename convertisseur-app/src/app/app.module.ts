import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertisseurDeviseComponent } from './convertisseur-devise/convertisseur-devise.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertisseurDeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

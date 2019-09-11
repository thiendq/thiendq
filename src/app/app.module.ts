//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LaydstonComponent } from './usercontrol/xoathu/laydston/laydston.component';
import { Routing } from './routing';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HelloComponent, LaydstonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

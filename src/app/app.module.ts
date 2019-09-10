import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LaydstonComponent } from './usercontrol/xoathu/laydston/laydston.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LaydstonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

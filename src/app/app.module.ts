//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { Type, ModuleWithProviders, NgModule } from '@angular/core';
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
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

const components: any[] | Type<any> | ModuleWithProviders<{}> = [
DemoMaterialModule
];

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule,Routing,components],
  declarations: [AppComponent, HelloComponent,LaydstonComponent, HeaderComponent, SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

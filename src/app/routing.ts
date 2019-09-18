import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LaydstonComponent } from './usercontrol/xoathu/laydston/laydston.component';
import { HeaderComponent } from './common/header/header.component';
//import { SidebarComponent } from './common/sidebar/sidebar.component';

import { AppComponent } from './app.component'

const routes: Routes = [
  { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: AppComponent },
  { path: 'test', component: LaydstonComponent },
  { path: 'header', component: HeaderComponent }
]

@NgModule({
 // declarations: components,
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})
export class Routing {
}
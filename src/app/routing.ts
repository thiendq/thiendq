import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LaydstonComponent } from './usercontrol/xoathu/laydston/laydston.component';
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: AppComponent },
  { path: 'test', component: LaydstonComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})
export class Routing {
}
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { Type, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LaydstonComponent } from './usercontrol/xoathu/laydston/laydston.component';
//import { DemoMaterialModule } from './material-module';
import { AppComponent } from './app.component'

const components: any[] | Type<any> | ModuleWithProviders<{}> = [
LaydstonComponent
];

const routes: Routes = [
  { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: AppComponent },
  { path: 'test', component: LaydstonComponent }
]

@NgModule({
  declarations: components,
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})
export class Routing {
}
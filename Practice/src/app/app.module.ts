import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

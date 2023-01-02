import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorsComponent } from './professors/professors.component';
import { ProfessorListComponent } from './professors/professor-list/professor-list.component';
import { ProfessorAddComponent } from './professors/professor-add/professor-add.component';

// import httpClientModule
import {HttpClientModule} from'@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    ProfessorListComponent,
    ProfessorAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

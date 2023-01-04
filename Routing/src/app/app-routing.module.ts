import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},// full path: localhost:4200/login
  {path:'home',component : HomeComponent},
  {path:'admin',component : AdminComponent},
  {path:'manager',component : ManagerComponent},
  {path:'login',component : LoginComponent},
  {path:'news',component : NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { PhonenumberComponent } from './components/phonenumber/phonenumber.component';

const routes: Routes = [

  { path:'phone', component:PhonenumberComponent},
   { path:'code', component:CodeComponent},
   { path:'dashboard', component: DashboardComponent},
   { path:'login', component:LoginpageComponent},
   { path: '', redirectTo:'/phone', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

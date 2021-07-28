import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphica1Component } from './pages/graphica1/graphica1.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent },
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent },
  {path:'progress',component:ProgressComponent },
  {path:'graphica1',component:Graphica1Component },
  {path:'',redirectTo:'/dashboard', pathMatch:'full' },
  {path:'**',component:NotpagefoundComponent },


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

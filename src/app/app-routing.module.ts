import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  // PagesRoutingModule
  //    |-->'dashboard'
  //            |-->'progress'
  //            |-->'graphica1'
  //            |-->''  ->>'/dashboard'


  // AuthRoutingModule
  //   |--> path: 'register'
  //   |--> path: 'login'

  {path:'',redirectTo:'/dashboard', pathMatch:'full' },
  { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),PagesRoutingModule,AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

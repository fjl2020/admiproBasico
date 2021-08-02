import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Graphica1Component } from './graphica1/graphica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    Graphica1Component,
    PagesComponent,
    DashboardComponent,
    ProgressComponent
  ],exports: [Graphica1Component,
    PagesComponent,
    DashboardComponent,
    ProgressComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ]
})
export class PagesModule { }

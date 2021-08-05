import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { Graphica1Component } from './graphica1/graphica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    Graphica1Component,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ],exports: [Graphica1Component,
    PagesComponent,
    DashboardComponent,
    ProgressComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    ChartsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ChartsModule } from 'ng2-charts';

import { DefaultComponent } from './default.component';
import { StatisticsComponent } from '../../sections/statistics/statistics.component';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [DefaultComponent, StatisticsComponent],
  imports: [
    CommonModule,MaterialModule, RouterModule,ChartsModule

  ]
})
export class DefaultModule { }

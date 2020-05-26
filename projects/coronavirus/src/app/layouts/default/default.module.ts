import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { StatisticsComponent } from '../../sections/statistics/statistics.component';



@NgModule({
  declarations: [DefaultComponent, StatisticsComponent],
  imports: [
    CommonModule
  ]
})
export class DefaultModule { }

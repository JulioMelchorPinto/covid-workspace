import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DefaultComponent } from './default.component';
import { StatisticsComponent } from '../../sections/statistics/statistics.component';
import { MaterialModule } from '../../material.module';
import { DashboardComponent } from '../../sections/dashboard/dashboard.component';
//import { AddressComponent } from '../../sections/address/address.component';


@NgModule({
  declarations: [DefaultComponent, StatisticsComponent,DashboardComponent,/*AddressComponent*/],
  imports: [
    CommonModule,MaterialModule, RouterModule,ChartsModule,FlexLayoutModule,FormsModule,
    ReactiveFormsModule,
  ]
})
export class DefaultModule { }

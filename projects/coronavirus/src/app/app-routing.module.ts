import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { StatisticsComponent } from './sections/statistics/statistics.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
//import { AddressComponent } from './sections/address/address.component';


const routes: Routes = [
  {path:'',component:DefaultComponent, children:[
    {path:'statistics',component:StatisticsComponent},
    {path:'dashboard',component:DashboardComponent},
    //{path:'address',component:AddressComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { StatisticsComponent } from './sections/statistics/statistics.component';


const routes: Routes = [
  {path:'',component:DefaultComponent, children:[
    {path:'statistics',component:StatisticsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { AdditemsComponent } from './components/additems/additems.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'addvehicle',component:AddvehicleComponent},
    {path:'additems',component:AdditemsComponent},
    {path:'',redirectTo:'/admin/dashboard', pathMatch:'full'},


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

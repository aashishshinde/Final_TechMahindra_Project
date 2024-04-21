import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { AdditemsComponent } from './components/additems/additems.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    AddvehicleComponent,
    AdditemsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

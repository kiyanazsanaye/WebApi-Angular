import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/Base/dashboard/dashboard.component';
import { LoginComponent } from './components/Base/login/login.component';
import { MenuComponent } from './components/Base/menu/menu.component';
import { AircraftComponent } from './components/aircraft/aircraft/aircraft.component';
import { AddAircraftComponent } from './components/aircraft/add-aircraft/add-aircraft.component';

const routes: Routes = [
  {
    path:'',
    component:MenuComponent,
    children:[
      {
        path : 'aircraft',component:AircraftComponent
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path: 'add', component: AddAircraftComponent
      }
    ]

  },
  {
    path:'login',component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

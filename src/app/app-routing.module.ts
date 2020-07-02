import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';


import { RendezVousUserComponent } from './components/private/rendez-vous-user/rendez-vous-user.component';
import { RendezVousMoniteursComponent } from './components/private/rendez-vous-moniteurs/rendez-vous-moniteurs.component';
import { AddUserComponent } from './components/private/users-management/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/users-management/update-user/update-user.component';
import { GuserComponent } from './components/private/users-management/guser/guser.component';
import { GvehiculeComponent } from './components/private/cars-management/gvehicule/gvehicule.component';
import { AddCarComponent } from './components/private/cars-management/add-car/add-car.component';
import { MoniteursComponent } from './components/private/monitors-management/moniteurs/moniteurs.component';
import { AddMonitorComponent } from './components/private/monitors-management/add-monitor/add-monitor.component';
import { TopbarComponent } from './components/private/topbar/topbar.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  {
    path: "topbar",
    component: TopbarComponent,
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user-list",
    component: GuserComponent
    ,
    canActivate: [AuthGuard]
  },
  {
    path: "user-add",
    component: AddUserComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "user-update",
    component: UpdateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "Gvahicule",
    component: GvehiculeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "car-add",
    component: AddCarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "Gmoniteurs",
    component: MoniteursComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-monitor",
    component: AddMonitorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "RendezVousUser",
    component: RendezVousUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "RendezVousMoniteurs",
    component: RendezVousMoniteursComponent,
    canActivate: [AuthGuard]
  },


  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

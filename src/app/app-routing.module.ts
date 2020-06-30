import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';

import { MoniteursComponent } from './components/private/moniteurs/moniteurs.component';
import { RendezVousUserComponent } from './components/private/rendez-vous-user/rendez-vous-user.component';
import { RendezVousMoniteursComponent } from './components/private/rendez-vous-moniteurs/rendez-vous-moniteurs.component';
import { AddUserComponent } from './components/private/users-management/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/users-management/update-user/update-user.component';
import { GuserComponent } from './components/private/users-management/guser/guser.component';
import { GvehiculeComponent } from './components/private/cars-management/gvehicule/gvehicule.component';
import { AddCarComponent } from './components/private/cars-management/add-car/add-car.component';




const routes: Routes = [
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
    component: DashboardComponent
  },
  {
    path: "user-list",
    component: GuserComponent
  },
  {
    path: "user-add",
    component: AddUserComponent,
  },
  {
    path: "user-update",
    component: UpdateUserComponent
  },
  {
    path: "Gvahicule",
    component: GvehiculeComponent
  },
  {
    path: "car-add",
    component: AddCarComponent,
  },
  {
    path: "Gmoniteurs",
    component: MoniteursComponent
  },
  {
    path: "RendezVousUser",
    component: RendezVousUserComponent
  },
  {
    path: "RendezVousMoniteurs",
    component: RendezVousMoniteursComponent,
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

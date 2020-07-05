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
import { MonitorUpdateComponent } from './components/private/monitors-management/monitor-update/monitor-update.component';
import { UpdateCarComponent } from './components/private/cars-management/update-car/update-car.component';
import { MeetCodeComponent } from './components/private/sidebar/meet-code/meet-code.component';
import { MeetConduiteComponent } from './components/private/sidebar/meet-conduite/meet-conduite.component';
import { AddCodeMeetComponent } from './components/private/sidebar/meet-code/add-code-meet/add-code-meet.component';

import { AddConduiteMeetComponent } from './components/private/sidebar/meet-conduite/add-conduite-meet/add-conduite-meet.component';
import { UpdateConduiteMeetComponent } from './components/private/sidebar/meet-conduite/update-conduite-meet/update-conduite-meet.component';
import { UpdateCodeMeetComponent } from './components/private/sidebar/meet-code/update-code-meet/update-code-meet.component';




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
    path: "user-update/:id",
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
    path: "update-car/:id",
    component: UpdateCarComponent,
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
    path: "update-monitor/:id",
    component: MonitorUpdateComponent,
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
    path: "meet_code",
    component: MeetCodeComponent,
  },
  {
    path: "add_code_meet",
    component: AddCodeMeetComponent,
  },
  {
    path: "meet_conduite",
    component: MeetConduiteComponent,
  },
  {
    path: "add_conduite_meet",
    component: AddConduiteMeetComponent
  },
  {
    path: "update_conduite_meet/:id",
    component: UpdateConduiteMeetComponent,
  },
  {
    path: "update_code_meet/:id",
    component: UpdateCodeMeetComponent,
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

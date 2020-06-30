import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/public/home/home.component';
import { HeaderComponent } from './components/public/header/header.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { LoaderComponent } from './components/public/loader/loader.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

// zedneh ahna 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Page404Component } from './components/page404/page404.component'
// http
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/sidebar/sidebar.component';


import { MoniteursComponent } from './components/private/moniteurs/moniteurs.component';
import { RendezVousUserComponent } from './components/private/rendez-vous-user/rendez-vous-user.component';
import { RendezVousMoniteursComponent } from './components/private/rendez-vous-moniteurs/rendez-vous-moniteurs.component';
import { AddUserComponent } from './components/private/users-management/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/users-management/update-user/update-user.component';
import { GuserComponent } from './components/private/users-management/guser/guser.component';
import { GvehiculeComponent } from './components/private/cars-management/gvehicule/gvehicule.component';
import { AddCarComponent } from './components/private/cars-management/add-car/add-car.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    DashboardComponent,
    SidebarComponent,
    GuserComponent,
    GvehiculeComponent,
    MoniteursComponent,
    RendezVousUserComponent,
    RendezVousMoniteursComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddCarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // zedna hedha w eli tahtou 
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

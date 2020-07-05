import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { CodeMeet, ConduiteMeet } from 'src/app/models/user';

import { CodeMeetService } from 'src/app/services/meeting/code-meet.service';
import { ConduiteMeetService } from 'src/app/services/meeting/conduite-meet.service';
import { CarService } from 'src/app/services/car.service';
import { UeserService } from 'src/app/services/ueser.service';
import { MonitorService } from 'src/app/services/monitor.service';
@Component({
  selector: 'app-add-conduite-meet',
  templateUrl: './add-conduite-meet.component.html',
  styleUrls: ['./add-conduite-meet.component.scss']
})
export class AddConduiteMeetComponent implements OnInit {
  tabCarsIDS = [];
  tabUserIDS = [];
  tabMonitorIDS = [];
  //zedneh ahna lel form : 
  public addConduiteMeet: FormGroup;


  constructor(public fb: FormBuilder, private monitorid: MonitorService, private conduite_meet_service: ConduiteMeetService, private idUser: UeserService, private idcars: CarService, private router: Router) {
    // zedneh ahna lel control
    let addConduiteMeetControll = {
      date: new FormControl("", [
        Validators.required,

      ]),
      temps: new FormControl("", [
        Validators.required,

      ]),
      userId: new FormControl("", [
        Validators.required,

      ]),
      monitorId: new FormControl("", [
        Validators.required,
      ]),
      carId: new FormControl("", [
        Validators.required,
      ])

    }
    // zedna edha lel liaison inputs to form
    this.addConduiteMeet = fb.group(addConduiteMeetControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    this.AllConduite();
    this.AlluserID();
    this.allMonitorID();
  }

  // function errors 

  get mydate() { return this.addConduiteMeet.get('date'); }
  get mytime() { return this.addConduiteMeet.get('temps'); }
  get myuserid() { return this.addConduiteMeet.get('userId'); }
  get mymonitorid() { return this.addConduiteMeet.get('monitorId'); }
  get mycarId() { return this.addConduiteMeet.get('carId'); }


  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  add_Conduite() {
    let data = this.addConduiteMeet.value;

    let conduite = new ConduiteMeet(

      data.date,
      data.temps,
      data.userId,
      data.monitorId,
      data.carId,

    );
    this.conduite_meet_service.addConduite(conduite).subscribe(
      res => {
        this.router.navigateByUrl('/meet_conduite')
      },
      err => {
        console.log(err);
      }
    )
  }
  AllConduite() {
    this.idcars.allCars().subscribe(
      res => {
        this.tabCarsIDS = res;
      }
    )
  }
  AlluserID() {
    this.idUser.allUsers().subscribe(
      res => {
        this.tabUserIDS = res;
      }
    )
  }
  allMonitorID() {
    this.monitorid.allMoniteurs().subscribe(
      res => {
        this.tabMonitorIDS = res;
      }
    )
  }
}

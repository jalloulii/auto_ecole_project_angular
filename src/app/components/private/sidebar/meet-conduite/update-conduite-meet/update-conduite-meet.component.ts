import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { CodeMeet, ConduiteMeet } from 'src/app/models/user';

import { CodeMeetService } from 'src/app/services/meeting/code-meet.service';
import { ConduiteMeetService } from 'src/app/services/meeting/conduite-meet.service';
import { CarService } from 'src/app/services/car.service';
import { UeserService } from 'src/app/services/ueser.service';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-update-conduite-meet',
  templateUrl: './update-conduite-meet.component.html',
  styleUrls: ['./update-conduite-meet.component.scss']
})
export class UpdateConduiteMeetComponent implements OnInit {
  tabCarsIDS = [];
  tabUserIDS = [];
  tabMonitorIDS = [];
  //zedneh ahna lel form : 
  public updateConduiteMeet: FormGroup;


  constructor(public fb: FormBuilder, private monitorid: MonitorService, private conduitemeetservice: ConduiteMeetService, private conduite_meet_service: ConduiteMeetService, private idUser: UeserService, private idcars: CarService, private router: Router, private activeroute: ActivatedRoute) {
    // zedneh ahna lel control
    let updateConduiteMeetControll = {
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
    this.updateConduiteMeet = fb.group(updateConduiteMeetControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    this.AllConduite();
    this.AlluserID();
    this.allMonitorID();

    let conduitemeetid = this.activeroute.snapshot.params.id;
    this.conduitemeetservice
      .getOneConduiteMeet(conduitemeetid)
      .subscribe(res => {
        let meetConduite = res; this.updateConduiteMeet
          .patchValue(
            {
              date: meetConduite.date,
              temps: meetConduite.temps,
              userId: meetConduite.userId,
              monitorId: meetConduite.monitorId,
              carId: meetConduite.carId,


            }
          )

      }, err => {
        console.log(err);
      })

  }

  // function errors 

  get mydate() { return this.updateConduiteMeet.get('date'); }
  get mytime() { return this.updateConduiteMeet.get('temps'); }
  get myuserid() { return this.updateConduiteMeet.get('userId'); }
  get mymonitorid() { return this.updateConduiteMeet.get('monitorId'); }
  get mycarId() { return this.updateConduiteMeet.get('carId'); }


  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  add_Conduite() {
    let data = this.updateConduiteMeet.value;

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
  updateInfoMeetConduite() {
    let meetConduiteId = this.activeroute.snapshot.params.id;
    let data = this.updateConduiteMeet.value;
    let conduiteMeet = new ConduiteMeet(data.date, data.temps, data.userId, data.monitorId, data.carId);
    this.conduitemeetservice.updateFormConduite(meetConduiteId, conduiteMeet).subscribe(res => {
      console.log("meet conduite Info updated");
      console.log(res);
      this.router.navigateByUrl('/meet_conduite')
    }, err => { console.log("meet conduite not updated"); })
  }

}

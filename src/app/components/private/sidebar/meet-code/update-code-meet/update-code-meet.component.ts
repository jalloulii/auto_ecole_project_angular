import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { CodeMeet } from 'src/app/models/user';

import { CodeMeetService } from 'src/app/services/meeting/code-meet.service';
import { UeserService } from 'src/app/services/ueser.service';

@Component({
  selector: 'app-update-code-meet',
  templateUrl: './update-code-meet.component.html',
  styleUrls: ['./update-code-meet.component.scss']
})
export class UpdateCodeMeetComponent implements OnInit {


  alluserID = [];


  //zedneh ahna lel form : 
  public updateCodeMeet: FormGroup;


  constructor(public fb: FormBuilder, private codemeetservice: CodeMeetService, private userservice: UeserService, private router: Router, private activeroute: ActivatedRoute) {
    // zedneh ahna lel control
    let updateCodeMeetControll = {
      date: new FormControl("", [
        Validators.required,

      ]),
      temps: new FormControl("", [
        Validators.required,

      ]),
      userId: new FormControl("", [
        Validators.required,

      ])

    }
    // zedna edha lel liaison inputs to form
    this.updateCodeMeet = fb.group(updateCodeMeetControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    this.UserID();

    let codemeetid = this.activeroute.snapshot.params.id;
    this.codemeetservice
      .getOneCodeMeet(codemeetid)
      .subscribe(res => {
        let meetCode = res; this.updateCodeMeet
          .patchValue(
            {
              date: meetCode.date,
              temps: meetCode.temps,
              userId: meetCode.userId,


            }
          )

      }, err => {
        console.log(err);
      })

  }

  // function errors 

  get mydate() { return this.updateCodeMeet.get('date'); }
  get mytime() { return this.updateCodeMeet.get('temps'); }
  get myuserId() { return this.updateCodeMeet.get('userId'); }


  //zedna function edhy bch les donnes yemchiw ml html lel TS !!


  UserID() {
    this.userservice.allUsers().subscribe(
      res => {
        this.alluserID = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  updateInfoMeetCode() {
    let meetCodeId = this.activeroute.snapshot.params.id;
    let data = this.updateCodeMeet.value;
    let codeMeet = new CodeMeet(data.date, data.temps, data.userId);
    this.codemeetservice.updateForm(meetCodeId, codeMeet).subscribe(res => {
      console.log("meet code Info updated");
      console.log(res);
      this.router.navigateByUrl('/meet_code')
    }, err => { console.log("meet code not updated"); })
  }

}
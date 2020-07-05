import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { CodeMeet } from 'src/app/models/user';

import { CodeMeetService } from 'src/app/services/meeting/code-meet.service';
import { UeserService } from 'src/app/services/ueser.service';

@Component({
  selector: 'app-add-code-meet',
  templateUrl: './add-code-meet.component.html',
  styleUrls: ['./add-code-meet.component.scss']
})
export class AddCodeMeetComponent implements OnInit {


  alluserID = [];


  //zedneh ahna lel form : 
  public addCodeMeet: FormGroup;


  constructor(public fb: FormBuilder, private code_meet_service: CodeMeetService, private userservice: UeserService, private router: Router) {
    // zedneh ahna lel control
    let addCodeMeetControll = {
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
    this.addCodeMeet = fb.group(addCodeMeetControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    this.UserID();
  }

  // function errors 

  get mydate() { return this.addCodeMeet.get('date'); }
  get mytime() { return this.addCodeMeet.get('temps'); }
  get myuserId() { return this.addCodeMeet.get('userId'); }


  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  add_Code() {
    let data = this.addCodeMeet.value;

    let meet = new CodeMeet(

      data.date,
      data.temps,
      data.userId

    );
    this.code_meet_service.addCodeMeet(meet).subscribe(
      res => {
        this.router.navigateByUrl('/meet_code')
      },
      err => {
        console.log(err);
      }
    )
  }

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

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { User, Moniteur } from 'src/app/models/user';

import { Router } from '@angular/router';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-add-monitor',
  templateUrl: './add-monitor.component.html',
  styleUrls: ['./add-monitor.component.scss']
})
export class AddMonitorComponent implements OnInit {

  //zedneh ahna lel form : 
  public addMonitor: FormGroup;

  constructor(public fb: FormBuilder, private monitorService: MonitorService, private router: Router) {
    // zedneh ahna lel control
    let addMonitorControll = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
        Validators.pattern("[A-Za-z .'-]+"), // regEx , expression reguliaire
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z .'-]+"),
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("[2-9][0-9]+"),
      ]),                           // bch nmanipuliw les inputs !!
      email: new FormControl("", [
        Validators.required,

        Validators.email,

      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),

      ])

    }
    // zedna edha lel liaison inputs to form
    this.addMonitor = fb.group(addMonitorControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
  }

  // function errors 

  get myfirstname_M() { return this.addMonitor.get('firstname'); }
  get mylastname_M() { return this.addMonitor.get('lastname'); }
  get myemail_M() { return this.addMonitor.get('email'); }
  get myphone_M() { return this.addMonitor.get('phone'); }
  get mypassword_M() { return this.addMonitor.get('password'); }


  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  add_Monitor() {
    let data = this.addMonitor.value;

    let moniteur = new Moniteur(
      null,
      data.firstname,
      data.lastname,
      data.phone,
      data.email,
      data.password,
    );
    this.monitorService.addMoniteurr(moniteur).subscribe(
      res => {
        this.router.navigateByUrl('/Gmoniteurs')
      },
      err => {
        console.log(err);
      }
    )
  }

  /*
  
   registerUser(){
    let data = this.formRegister.value;

    let user = new User(null,data.firstname,data.lastname,data.phone,data.email,data.password);

    this.userService.registermonitor(user).subscribe(
      res =>{
        this.router.navigateByUrl('/monitors')
      },
      err =>{
        console.log(err);
      }
    )

  }

  
  */

}

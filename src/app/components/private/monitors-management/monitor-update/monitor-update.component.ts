import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { User } from 'src/app/models/user';
import { UeserService } from 'src/app/services/ueser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-monitor-update',
  templateUrl: './monitor-update.component.html',
  styleUrls: ['./monitor-update.component.scss']
})
export class MonitorUpdateComponent implements OnInit {

  //zedneh ahna lel form : 
  public updateMonitor: FormGroup;

  constructor(public fb: FormBuilder, private userService: MonitorService, private router: Router, private activeroute: ActivatedRoute) {
    // zedneh ahna lel control
    let updateUserController = {
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

      ])

    }
    // zedna edha lel liaison inputs to form
    this.updateMonitor = fb.group(updateUserController); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    let userId = this.activeroute.snapshot.params.id;
    this.userService
      .getOneMonitor(userId)
      .subscribe(res => {
        let user = res; this.updateMonitor
          .patchValue(
            {
              firstname: user.firstname,
              lastname: user.lastname,
              phone: user.phone,
              email: user.email,

            }
          )
      }, err => {
        console.log(err);
      })
  }

  // function errors 

  get myfirstname() { return this.updateMonitor.get('firstname'); }
  get mylastname() { return this.updateMonitor.get('lastname'); }
  get myemail() { return this.updateMonitor.get('email'); }
  get myphone() { return this.updateMonitor.get('phone'); }
  get mypassword() { return this.updateMonitor.get('password'); }


  updateInfoMonitor() {
    let monitorId = this.activeroute.snapshot.params.id;
    let data = this.updateMonitor.value;
    let user = new User(null, data.firstname, data.lastname, data.phone, data.email, null);
    this.userService.updateForm(monitorId, user).subscribe(res => {
      console.log("user Info updated");
      console.log(res);
      this.router.navigateByUrl('/Gmoniteurs')
    }, err => { console.log("user not updated"); })
  }

}

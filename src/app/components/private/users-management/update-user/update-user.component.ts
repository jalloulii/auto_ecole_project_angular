import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { User } from 'src/app/models/user';
import { UeserService } from 'src/app/services/ueser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  //zedneh ahna lel form : 
  public updateUser: FormGroup;

  constructor(public fb: FormBuilder, private userService: UeserService, private router: Router, private activeroute: ActivatedRoute) {
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
    this.updateUser = fb.group(updateUserController); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    let userId = this.activeroute.snapshot.params.id;
    this.userService
      .getOneUser(userId)
      .subscribe(res => {
        let user = res; this.updateUser
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

  get myfirstname() { return this.updateUser.get('firstname'); }
  get mylastname() { return this.updateUser.get('lastname'); }
  get myemail() { return this.updateUser.get('email'); }
  get myphone() { return this.updateUser.get('phone'); }
  get mypassword() { return this.updateUser.get('password'); }


  updateInfoUser() {
    let userId = this.activeroute.snapshot.params.id;
    let data = this.updateUser.value;
    let user = new User(null, data.firstname, data.lastname, data.phone, data.email, null);
    this.userService.updateForm(userId, user).subscribe(res => {
      console.log("user Info updated");
      console.log(res);
      this.router.navigateByUrl('/user-list')
    }, err => { console.log("user not updated"); })
  }
}


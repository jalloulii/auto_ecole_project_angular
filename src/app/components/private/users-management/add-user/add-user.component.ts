import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { User } from 'src/app/models/user';
import { UeserService } from 'src/app/services/ueser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  //zedneh ahna lel form : 
  public addUeser: FormGroup;

  constructor(public fb: FormBuilder, private userService: UeserService, private router: Router) {
    // zedneh ahna lel control
    let addUserControll = {
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
    this.addUeser = fb.group(addUserControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
  }

  // function errors 

  get myfirstname() { return this.addUeser.get('firstname'); }
  get mylastname() { return this.addUeser.get('lastname'); }
  get myemail() { return this.addUeser.get('email'); }
  get myphone() { return this.addUeser.get('phone'); }
  get mypassword() { return this.addUeser.get('password'); }
  get myRpassword() { return this.addUeser.get('confirmPassword'); }

  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  addUser() {
    let data = this.addUeser.value;

    let user = new User(
      null,
      data.firstname,
      data.lastname,
      data.phone,
      data.email,
      data.password,
    );
    this.userService.registerUser(user).subscribe(
      res => {
        this.router.navigateByUrl('/user-list')
      },
      err => {
        console.log(err);
      }
    )
  }

}

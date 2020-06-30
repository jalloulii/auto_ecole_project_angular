import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { User } from 'src/app/models/user';
import { UeserService } from 'src/app/services/ueser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //zedneh ahna lel form : 
  public registerForm: FormGroup;

  constructor(public fb: FormBuilder, private userService: UeserService, private router: Router) {
    // zedneh ahna lel control
    let registerContols = {
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

      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),


      ])

    }
    // zedna edha lel liaison inputs to form
    this.registerForm = fb.group(registerContols); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
  }

  // function errors 

  get myfirstname() { return this.registerForm.get('firstname'); }
  get mylastname() { return this.registerForm.get('lastname'); }
  get myemail() { return this.registerForm.get('email'); }
  get myphone() { return this.registerForm.get('phone'); }
  get mypassword() { return this.registerForm.get('password'); }
  get myRpassword() { return this.registerForm.get('confirmPassword'); }

  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  registerUser() {
    let data = this.registerForm.value;

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
        this.router.navigateByUrl('/login')
      },
      err => {
        console.log(err);
      }
    )
  }
}
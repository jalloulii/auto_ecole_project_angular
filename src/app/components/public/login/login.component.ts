import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UeserService } from 'src/app/services/ueser.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(public fb: FormBuilder, private userService: UeserService, private router: Router) { // Q fb 
    let logControlls = {
      email: new FormControl("", [
        Validators.required,

        Validators.email,
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ])
    }
    this.loginForm = fb.group(logControlls);
  }

  ngOnInit(): void {

  }
  // functions :
  get myemail() { return this.loginForm.get('email'); }
  get mypassword() { return this.loginForm.get('password'); }
  
  loginUser() {
    let data = this.loginForm.value;

    let user = new User(
      null,
      null,
      null,
      null,
      data.email,
      data.password,
    );
    this.userService.loginUser(user).subscribe(
      res => {

        let token = res.token;
        localStorage.setItem("token", token);

        this.router.navigateByUrl('/dashboard');

      },
      err => {
        console.log(err);
      }
    )
  }
}

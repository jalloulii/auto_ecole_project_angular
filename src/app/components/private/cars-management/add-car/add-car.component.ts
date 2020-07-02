import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UeserService } from 'src/app/services/ueser.service';
import { Router } from '@angular/router';
import { User, Car } from 'src/app/models/user';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  //zedneh ahna lel form : 
  public addCar: FormGroup;


  constructor(public fb: FormBuilder, private userService: UeserService, private router: Router) {
    // zedneh ahna lel control
    let addCarControll = {
      matricule: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
        Validators.pattern("[0-9]+"), // regEx , expression reguliaire
      ]),
      marque: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z .'-]+"),
      ]),
      couleur: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z .'-]+"),
      ])

    }
    // zedna edha lel liaison inputs to form
    this.addCar = fb.group(addCarControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
  }

  // function errors 

  get mymatricule() { return this.addCar.get('matricule'); }
  get mymarque() { return this.addCar.get('marque'); }
  get mycouleur() { return this.addCar.get('couleur'); }


  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  add_Car() {
    let data = this.addCar.value;

    let car = new Car(

      data.matricule,
      data.marque,
      data.couleur

    );
    this.userService.addCar(car).subscribe(
      res => {
        this.router.navigateByUrl('/Gvahicule')
      },
      err => {
        console.log(err);
      }
    )
  }


}

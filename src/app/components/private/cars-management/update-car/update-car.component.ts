import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { User, Car } from 'src/app/models/user';
import { UeserService } from 'src/app/services/ueser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MonitorService } from 'src/app/services/monitor.service';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {
  //zedneh ahna lel form : 
  public updateCar: FormGroup;


  constructor(public fb: FormBuilder, private carService: CarService, private router: Router, private activeroute: ActivatedRoute) {
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
    this.updateCar = fb.group(addCarControll); // amalna liaison bin les input w lformulaire !
  }
  ngOnInit(): void {
    let carId = this.activeroute.snapshot.params.id;
    this.carService
      .getOneCar(carId)
      .subscribe(res => {
        let user = res; this.updateCar
          .patchValue(
            {
              matricule: user.matricule,
              marque: user.marque,
              couleur: user.couleur,


            }
          )
      }, err => {
        console.log(err);
      })
  }


  // function errors 

  get mymatricule() { return this.updateCar.get('matricule'); }
  get mymarque() { return this.updateCar.get('marque'); }
  get mycouleur() { return this.updateCar.get('couleur'); }


  //zedna function edhy bch les donnes yemchiw ml html lel TS !!
  updateInfoCar() {
    let monitorId = this.activeroute.snapshot.params.id;
    let data = this.updateCar.value;
    let car = new Car(data.matricule, data.marque, data.couleur);
    this.carService.updateForm(monitorId, car).subscribe(res => {
      console.log("car Info updated");
      console.log(res);
      this.router.navigateByUrl('/Gmoniteurs')
    }, err => { console.log("user not updated"); })
  }


}

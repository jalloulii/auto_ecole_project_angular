import { Component, OnInit } from '@angular/core';
import { UeserService } from 'src/app/services/ueser.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-gvehicule',
  templateUrl: './gvehicule.component.html',
  styleUrls: ['./gvehicule.component.scss']
})
export class GvehiculeComponent implements OnInit {
  cars = [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars() {
    this.carService.allCars().subscribe(
      res => {
        this.cars = res;
      }
    )
  }
  deletCar(car, index) {
    console.log("deleting user " + index)
    //let index = this.users.indexOf(user);
    this.cars.splice(index, 1);
    this.carService.deletCar(car._id).subscribe(
      res => {
        console.log('car deleted');
      },
      err => {
        console.log('car not deleted');
      }
    );
  }
}

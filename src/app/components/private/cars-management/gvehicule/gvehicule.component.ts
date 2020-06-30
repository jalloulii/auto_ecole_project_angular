import { Component, OnInit } from '@angular/core';
import { UeserService } from 'src/app/services/ueser.service';

@Component({
  selector: 'app-gvehicule',
  templateUrl: './gvehicule.component.html',
  styleUrls: ['./gvehicule.component.scss']
})
export class GvehiculeComponent implements OnInit {
  cars = [];
  constructor(private userService: UeserService) { }

  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars() {
    this.userService.allCars().subscribe(
      res => {
        this.cars = res;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { UeserService } from 'src/app/services/ueser.service';
import { MonitorService } from 'src/app/services/monitor.service';
@Component({
  selector: 'app-moniteurs',
  templateUrl: './moniteurs.component.html',
  styleUrls: ['./moniteurs.component.scss']
})
export class MoniteursComponent implements OnInit {
  moniteurs = [];
  constructor(private monitorService: MonitorService) { }

  ngOnInit(): void {
    this.getAllMoniteurs();

  }

  getAllMoniteurs() {
    this.monitorService.allMoniteurs().subscribe(
      res => {
        this.moniteurs = res;
        console.log(this.moniteurs);
      },

    )
  }
  updateMoniteur(moniteur) {

    this.monitorService.updateMoniteur(moniteur._id).subscribe(
      res => {
        console.log('user updated');
        this.getAllMoniteurs();
      },
      err => {
        console.log('user not updated');
      }
    );
  }
  deletMoniteur(moniteur, index) {
    console.log("deleting moniteur " + index)
    //let index = this.users.indexOf(user);
    this.moniteurs.splice(index, 1);
    this.monitorService.deletMoniteur(moniteur._id).subscribe(
      res => {
        console.log('moniteur deleted');
      },
      err => {
        console.log('moniteur not deleted');
      }
    );
  }
}

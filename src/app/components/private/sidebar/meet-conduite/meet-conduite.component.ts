import { Component, OnInit } from '@angular/core';
import { ConduiteMeetService } from 'src/app/services/meeting/conduite-meet.service';


@Component({
  selector: 'app-meet-conduite',
  templateUrl: './meet-conduite.component.html',
  styleUrls: ['./meet-conduite.component.scss']
})
export class MeetConduiteComponent implements OnInit {

  conduiteTab = [];

  constructor(private meetConduiteSerive: ConduiteMeetService) { }

  ngOnInit(): void {
    this.getAllConduite();
  }

  getAllConduite() {
    this.meetConduiteSerive.getAllConduite().subscribe(
      res => {
        this.conduiteTab = res;
      }
    )
  }
  deleteConduiteMeet(meet, index) {
    this.conduiteTab.splice(index, 1);
    this.meetConduiteSerive.deleteConduite(meet._id).subscribe(
      res => {
        console.log('meet deleted successfully, N° = ' + (index + 1));
      },
      err => {
        console.log(err)
      }
    )
  }
}

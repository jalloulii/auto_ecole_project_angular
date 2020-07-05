import { Component, OnInit } from '@angular/core';
import { CodeMeetService } from 'src/app/services/meeting/code-meet.service';
import { ConduiteMeetService } from 'src/app/services/meeting/conduite-meet.service';

@Component({
  selector: 'app-rendez-vous-user',
  templateUrl: './rendez-vous-user.component.html',
  styleUrls: ['./rendez-vous-user.component.scss']
})
export class RendezVousUserComponent implements OnInit {
  allmeetOfoneIDuser = [];
  allmeetOfoneIDmonitor = [];
  constructor(private codemeetservice: CodeMeetService, private conduitemeetservice: ConduiteMeetService) { }

  ngOnInit(): void {
    this.getallmeetOfoneIDuser();
    this.getallmeetOfoneIDmonitor();
  }
  getallmeetOfoneIDuser() {
    this.codemeetservice.allCodeMeetUSERS().subscribe(res => {
      this.allmeetOfoneIDuser = res;
      console.log(this.allmeetOfoneIDuser);
    })
  }
  getallmeetOfoneIDmonitor() {
    this.conduitemeetservice.allCodeMeetMONITORS().subscribe(res => {
      this.allmeetOfoneIDmonitor = res;
      console.log(this.allmeetOfoneIDmonitor);
    })
  }
}

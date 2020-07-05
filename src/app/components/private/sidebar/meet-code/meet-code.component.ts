import { Component, OnInit } from '@angular/core';
import { CodeMeetService } from 'src/app/services/meeting/code-meet.service';

@Component({
  selector: 'app-meet-code',
  templateUrl: './meet-code.component.html',
  styleUrls: ['./meet-code.component.scss']
})
export class MeetCodeComponent implements OnInit {
  codeMeets = [];
  constructor(private meetCodeSerive: CodeMeetService) { }

  ngOnInit(): void {
    this.getALLMEET();
  }
  getALLMEET() {
    this.meetCodeSerive.allCodeM().subscribe(res => {
      this.codeMeets = res;
    })
  }
  deletMeet(meet, index) {
    this.codeMeets.splice(index, 1);
    this.meetCodeSerive.deleteCodeMeet(meet._id).subscribe(
      res => {
        console.log('meet deleted successfully, N° = '+(index+1));
      },
      err => {
        console.log(err);
      }

    )
  }

}

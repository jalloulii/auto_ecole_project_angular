import { Component, OnInit } from '@angular/core';
import { UeserService } from 'src/app/services/ueser.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private _ueserService: UeserService) { }

  ngOnInit(): void {
    this.getAllUsersFromAPI()
  }

  usersFromAPI = [];

  getAllUsersFromAPI() {
    this._ueserService.getAllUsers().subscribe(
      res => this.usersFromAPI = res
      ,
      err => console.log(err)
    )
  }


  users: Array<String> = ['yassine', 'nabil', 'ayoub', 'yassine'];
  notification = true;

  deletUser(user: String, index: number) {
    console.log("deleting user " + index)
    //let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  isError = true;

  JSONuser = {
    firstname: "yassine",
    lastname: "jallouli",
    phone: "53522793",
    adress: {
      city: "tunis",
      zip: "2093",
      street: "nahj salah farhat , ariana"
    }
  }

  usersTable = [
    {
      firstname: "yassine",
      lastname: "jallouli",
      phone: "53522793",
      adress: {
        city: "tunis",
        zip: "2093",
        street: "nahj salah farhat , ariana"
      }
    },
    {
      firstname: "yassine",
      lastname: "jallouli",
      phone: "53522793",
      adress: {
        city: "tunis",
        zip: "2093",
        street: "nahj salah farhat , ariana"
      }
    },
    {
      firstname: "yassine",
      lastname: "jallouli",
      phone: "53522793",
      adress: {
        city: "tunis",
        zip: "2093",
        street: "nahj salah farhat , ariana"
      }
    },
  ]

}

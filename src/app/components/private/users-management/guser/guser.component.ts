import { Component, OnInit } from '@angular/core';
import { UeserService } from 'src/app/services/ueser.service';

@Component({
  selector: 'app-guser',
  templateUrl: './guser.component.html',
  styleUrls: ['./guser.component.scss']
})
export class GuserComponent implements OnInit {
  users = [];
  constructor(private userService: UeserService) { }

  ngOnInit(): void {
    this.getAllUsers();

  }
  getAllUsers() {
    this.userService.allUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },

    )
  }
  deletUser(user, index) {
    console.log("deleting user " + index)
    //let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.userService.deletUser(user._id).subscribe(
      res => {
        console.log('user deleted');
      },
      err => {
        console.log('user not deleted');
      }
    );
  }

  updateUser(user) {

    this.userService.updateUser(user._id).subscribe(
      res => {
        console.log('user updated');
        this.getAllUsers();
      },
      err => {
        console.log('user not updated');
      }
    );
  }
}

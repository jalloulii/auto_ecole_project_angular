import { Component, OnInit } from '@angular/core';
import { UeserService } from 'src/app/services/ueser.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isAdmin: Boolean;
  isUser: Boolean;
  isMonitor: Boolean;
  constructor(private userService: UeserService) { }

  ngOnInit(): void {
    this.isAdmin = this.userService.isLoggedAdmin();
    this.isUser = this.userService.isLoggedUser();
    this.isMonitor = this.userService.isLoggedMonitor();
  }

}

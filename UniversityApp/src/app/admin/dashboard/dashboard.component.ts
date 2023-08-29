import { Component, OnInit } from '@angular/core';
import { NavBarAlterService } from 'src/app/nav-bar-alter.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[NavBarAlterService]
})
export class AdminDashboardComponent implements OnInit {
  constructor(
private navServices:NavBarAlterService

  ){}
  ngOnInit(): void {
    // this.navServices.navBarMode = "Admin"
  }

}

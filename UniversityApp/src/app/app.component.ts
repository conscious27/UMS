import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthenticationService } from './authentication.service';
import { NavBarAlterService } from './nav-bar-alter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  navmode:any = "";
  constructor(private auth: AuthenticationService, private router:Router,public navBarService:NavBarAlterService) {}
  ngOnInit(
  
  ): void {
    const token: any = localStorage.getItem('authToken');

    try{
      const tokenPayload:any = jwt_decode(token);

      console.log(tokenPayload )
      if(tokenPayload.Role === "Admin"){
          this.navBarService.navBarMode = "ADMIN";
        }
      else if(tokenPayload.Role === "Faculty"){
        this.navBarService.navBarMode = 'FACULTY';
      }
      else if(tokenPayload.Role === "Student"){
        this.navBarService.navBarMode = 'STUDENT';
      }
      console.log(this.navBarService.navBarMode)
    }catch(error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }

  }
  
  
  Logout(){
    this.auth.logout();
  }

  // title = 'UniversityApp';
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  navmode : string = ''; //Initialize the navmode variable
  constructor(private router: Router){}
  ngOnInit(): void {
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/admin_dashboard') {
          this.navAuthentication();
        }
      }
    });
  }


 navAuthentication(){
  const token: any = localStorage.getItem('authToken');

    try{
      const tokenPayload:any = jwt_decode(token);

      console.log(tokenPayload )
      if(tokenPayload.Role === "Admin"){
        this.navmode = "ADMIN";
      }
      else if(tokenPayload.Role === "Faculty"){
        this.navmode = 'FACULTY';
      }
      else if(tokenPayload.Role === "Student"){
        this.navmode = 'STUDENT';
      }
      console.log(this.navmode)
    }catch(error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
 } 
  // title = 'UniversityApp';
}

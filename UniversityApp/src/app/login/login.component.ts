import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.authService.logout();
  }

    Authentication(){
      const userID = (document.getElementById('userID') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      const userType = (document.getElementById('userType') as HTMLSelectElement).value;

      if(userID && password && userType)
      {

        this.authService.authenticate(userID, password, userType);
      }
      else
      {
        alert("Please Fill Credentials!")
      }
    }


    
}

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
  }

    Authentication(){
      const username = (document.getElementById('username') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      const userType = (document.getElementById('userType') as HTMLSelectElement).value;

      if(username && password && userType)
      {

        this.authService.authenticate(username, password, userType);
      }
      else
      {
        alert("Please Fill Credentials!")
      }
    }


    
}

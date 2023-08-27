import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private router:Router) {}

    username:string = "chaitanya";
    password:string = "password";

    navigateToLink(){
      const user = (document.getElementById('username1') as HTMLInputElement).value;
      const pass = (document.getElementById('password1') as HTMLInputElement).value;

      if(this.username == user && this.password== pass){
        this.router.navigate(['student_dashboard']);
      }
      else{
        alert("Invalid Credential");
      }
          
    }

    
}

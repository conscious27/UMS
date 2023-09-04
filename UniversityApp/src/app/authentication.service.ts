import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { NavBarAlterService } from './nav-bar-alter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    
  constructor(private http: HttpClient, private router:Router,private navServices:NavBarAlterService){}

  authenticate(userID: string, password: string, userType: string,) {
    const body = { userID, password, userType };
    return this.http.post('http://localhost:5175/api/Users/login',body).subscribe(
      (response : any) => {
        const token = response.token;
        // console.log("Token: ", token)

        // store the token in localStorage
        localStorage.setItem('authToken', token);
        if(userType == "Admin"){
          this.navServices.navBarMode="ADMIN"
          this.router.navigate(['/admin_dashboard']);
        }
        else if(userType == "Student"){
          this.navServices.navBarMode="STUDENT"
          this.router.navigate(['/student_dashboard']);
        }
        else if(userType == "Faculty"){
          this.navServices.navBarMode="FACULTY"
          this.router.navigate(['/faculty_dashboard']);
        }
      },
      (error) => {
        console.error(error);
        alert("Invalid User ID or Password")

      }
    );
  }

  logout() {
    // Remove the token from localStorage
    this.navServices.navBarMode=""
    localStorage.removeItem('authToken');

    // Redirect to the login page (or any other appropriate page)
    this.router.navigate(['/']); // Replace 'login' with your actual login route
  }
  
 
  
}

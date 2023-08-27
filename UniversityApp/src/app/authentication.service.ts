import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    
  constructor(private http: HttpClient, private router:Router){}

  authenticate(username: string, password: string, userType: string) {
    const body = { username, password, userType };
    return this.http.post('http://localhost:5175/api/Users/login',body).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/student_dashboard']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  
}

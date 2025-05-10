import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {
  private apiUrl = 'http://localhost:8080/basicauth';
  constructor(
    private http: HttpClient
  ) { }
    
  executeAuthenticationService(username: string, password: string) {

    let basicauth = 'Basic ' + btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicauth  
    });
    
    return this.http.get<AuthenticationBean>(this.apiUrl, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticateruser', username);
          sessionStorage.setItem('token', basicauth);
          return data;
        }),
      catchError(error => { 
        // console.error('Error occurred during authentication:', error);
        return throwError(() => new Error('Invalid credentials'));
      })
      
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateruser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token');
    }
    return null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateruser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticateruser');
    sessionStorage.removeItem('token');
  }
  
} 

export class AuthenticationBean{
  constructor(public message:string){}
}

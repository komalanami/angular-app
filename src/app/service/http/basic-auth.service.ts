import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { API_AUTH, AUTHENTICATED_USER, TOKEN } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {
  constructor(
    private http: HttpClient
  ) { }
    
  executeJWTAuthenticationService(username: string, password: string) {

    return this.http.post<any>(`${API_AUTH}` ,{username, password})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }),
        catchError(error => {
          // console.error('Error occurred during authentication:', error);
          return throwError(() => new Error('Invalid credentials'));
        })
      
      );
    
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
  
} 

export class AuthenticationBean{
  constructor(public message:string){}
}

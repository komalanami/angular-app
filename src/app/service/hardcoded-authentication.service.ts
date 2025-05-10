import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticator(username: string, password: string): boolean {
    if (username === "shan" && password === "dummy") {
      sessionStorage.setItem('authenticateruser', username);
      return true;
    }
    return false;
  }
  

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateruser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticateruser');
  }
}

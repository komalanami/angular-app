import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor{

  constructor(private basicAuthService:BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let basicauthentication = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    if (basicauthentication && username) {
      req = req.clone({
        setHeaders: {
          Authorization: basicauthentication
        }
      });
    }
    return next.handle(req);
  }

}

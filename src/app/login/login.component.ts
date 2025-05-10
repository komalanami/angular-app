import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule,FormBuilder ,FormGroup, Validators, Form, NgModel, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/http/basic-auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatToolbarModule,MatButtonModule,
    MatIconModule,ReactiveFormsModule,
    MatFormFieldModule,MatIconModule,MatCardModule,HttpClientModule,NgIf],
  providers:[FormBuilder,HttpClientModule,HttpClient,BasicAuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidLogin = false;
  errorMessage = "Invalid Credentials";

  constructor(private fb:FormBuilder,private router :Router, 
    public BasicAuthService: BasicAuthService
  ){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  handleLogin() {

    this.BasicAuthService.executeAuthenticationService(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
        .subscribe({
          next: data => {
            console.log(data);
            this.router.navigate(['welcome', this.loginForm.get('username')?.value]);
            this.invalidLogin = false;
          },
          error: error => {
            // console.log(error);
            this.invalidLogin = true;
          }
        });
  }
}

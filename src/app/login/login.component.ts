import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule,FormBuilder ,FormGroup, Validators, Form, NgModel, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatToolbarModule,MatButtonModule,
    MatIconModule,ReactiveFormsModule,
    MatFormFieldModule,MatIconModule,MatCardModule],
  providers:[FormBuilder],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb:FormBuilder,private router :Router
    ,public hardcodedAuthenticationService : HardcodedAuthenticationService
  ){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this.hardcodedAuthenticationService.authenticator(username, password)) {
      this.router.navigate(['welcome',username]);
    } else {
      console.log('Invalid Credentials');
    }
  }
}

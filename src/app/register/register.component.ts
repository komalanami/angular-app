import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Form, Validators, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule , MatFormFieldModule,MatCardModule,MatToolbarModule,
    MatIconModule,MatButtonModule
  ],
  providers:[FormBuilder],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  profileForm = new FormGroup({
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phonenumber:new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })


  onSubmit() {
    console.log('Registration Successfull');
  }
}

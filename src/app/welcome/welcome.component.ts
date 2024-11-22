import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit{

  username = ''
  constructor(private route :ActivatedRoute){}
  ngOnInit(){
    console.log('Username from route:', this.route.snapshot.params['username']);
    this.username = this.route.snapshot.params['username'];
  }
  
}

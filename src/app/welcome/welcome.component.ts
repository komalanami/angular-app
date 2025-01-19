import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink , HttpClientModule ,NgIf],
  providers: [WelcomeDataService],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit{

  username = ''
  welcomeMessageFromService: string = ''
  constructor(
    private route :ActivatedRoute,
    private service:WelcomeDataService  
  ){}
  ngOnInit(){
    this.username = this.route.snapshot.params['username'];
    console.log('Extracted username:', this.username);
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: error => this.handleErrorResponse(error),
    });
  }
  
  getWelcomeMessagewithParameter() {
    this.service.executeHelloWorldServicewithParameter(this.username).subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: error => this.handleErrorResponse(error),
    });
  }  
  
  
  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }
  
  handleErrorResponse(error: any) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message 
  }
}
  







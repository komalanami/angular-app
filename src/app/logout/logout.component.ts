import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../service/http/basic-auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit{

  constructor(
    private BasicAuthService: BasicAuthService
  ){}

  ngOnInit() {
    this.BasicAuthService.logout();
  }

}

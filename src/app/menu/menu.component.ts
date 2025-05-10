import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
  ) { }

  ngOnInit() {
  this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}

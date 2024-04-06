import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, private keycloakService: KeycloakService) {
    this.checkLogin();
  }

  ngOnInit() {

  }
  checkLogin() {
    if(this.keycloakService.getUserRoles().length){
      this.router.navigate(['/home']);
    }
  }
  login() {
    this.router.navigate(['/home']);
  }
}

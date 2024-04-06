import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'master-demo-ui';
  isLoggedIn$!: Observable<boolean>;
  constructor(public router: Router, private keycloakService: KeycloakService) {
    this.authLogin();
  }

  ngOnInit() {

  }

  authLogin() {
    if(this.keycloakService.getUserRoles().length){
      this.isLoggedIn$ = of(true);
    }else{
      this.isLoggedIn$ = of(false);
    }
  }
}

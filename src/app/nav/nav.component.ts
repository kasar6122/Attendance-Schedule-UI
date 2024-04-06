import {Component, OnInit} from '@angular/core';
import {RoleService} from "../utility/role.service";
import {environment} from "../../environment/environment";
import {KeycloakService} from "keycloak-angular";
declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  constructor(private roleService: RoleService, private keycloakService: KeycloakService) {
  }
  ngOnInit(): void {
    this.menuCheck();
  }
  menuCheck() {
    $('#sidebar_menu').metisMenu();
  }

  menuRoleAccess(role: any){
    return this.roleService.hasRole(role);
  }

  logout() {
    this.keycloakService.logout(environment.sso_logout_url);
  }
}

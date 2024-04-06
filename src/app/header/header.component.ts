import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {environment} from "../../environment/environment";
import {ProfileService} from "../service/profile.service";
import {Profile} from "../model/profile";
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  profile: any = new Profile();

  constructor(private keycloakService: KeycloakService, private service: ProfileService) {
  }

  ngOnInit(): void {
    this.getProfile();
  }

  openMiniSide() {
    $('.sidebar').toggleClass('mini_sidebar');
    $('.main_content ').toggleClass('full_main_content');
    $('.footer_part ').toggleClass('full_footer');
  }
  sidebarIcon() {
    $('.sidebar').toggleClass('active_sidebar');
  }
  logout() {
    this.keycloakService.logout(environment.sso_logout_url);
  }
  private getProfile() {
    this.service.getProfile().subscribe((response: any) => {
      this.profile = response;
    })
  }


}

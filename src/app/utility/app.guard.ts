import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      console.log(state.url);
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    if(state.url === '/institute-list'){
      return this.roles.indexOf("institute_read") !== -1;
    }
    if(state.url === '/institute-create' || state.url === '/institute-edit/'+route.params['id']){
      return this.roles.indexOf("institute_write") !== -1;
    }
    if(state.url === '/campus'){
      return this.roles.indexOf("campus_read") !== -1;
    }
    if(state.url === '/campus'){
      return this.roles.indexOf("campus_write") !== -1;
    }
    if(state.url === '/campus'){
      return this.roles.indexOf("campus_delete") !== -1;
    }
    if(state.url === '/faculty-type'){
      return this.roles.indexOf("faculty_type_read") !== -1;
    }
    if(state.url === '/faculty-type'){
      return this.roles.indexOf("faculty_type_write") !== -1;
    }
    if(state.url === '/faculty-type'){
      return this.roles.indexOf("faculty_type_delete") !== -1;
    }

    if(state.url === '/faculty-list'){
      return this.roles.indexOf("faculty_read") !== -1;
    }
    if(state.url === '/faculty-create' || state.url === '/faculty-edit/'+route.params['id']){
      return this.roles.indexOf("faculty_write") !== -1;
    }

    if(state.url === '/department-type'){
      return this.roles.indexOf("department_type_read") !== -1;
    }
    if(state.url === '/department-type'){
      return this.roles.indexOf("department_type_write") !== -1;
    }
    if(state.url === '/department-type'){
      return this.roles.indexOf("department_type_delete") !== -1;
    }
    if(state.url === '/department-list'){
      return this.roles.indexOf("department_read") !== -1;
    }
    if(state.url === '/department-create' || state.url === '/department-edit/'+route.params['id']){
      return this.roles.indexOf("department_write") !== -1;
    }
    if(state.url === '/program-type'){
      return this.roles.indexOf("program_type_read") !== -1;
    }
    if(state.url === '/semester-type'){
      return this.roles.indexOf("semester_type_read") !== -1;
    }
    if(state.url === '/program-list'){
      return this.roles.indexOf("program_read") !== -1;
    }
    if(state.url === '/semester-list'){
      return this.roles.indexOf("semester_read") !== -1;
    }
    if(state.url === '/semester-create' || state.url === '/semester-edit/'+route.params['id']){
      return this.roles.indexOf("semester_write") !== -1;
    }
    if(state.url === '/course-type'){
      return this.roles.indexOf("course_type_read") !== -1;
    }



    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
}

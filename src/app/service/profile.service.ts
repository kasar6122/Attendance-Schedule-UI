import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class ProfileService{
  constructor(private httpClient: HttpClient) {}
  getProfile() {
    return this.httpClient.get(environment.api_url + '/app/auth/profile');
  }
}

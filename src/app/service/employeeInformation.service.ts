import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import {ToastrService} from "ngx-toastr";
import {catchError, Observable, of} from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class EmployeeInformationService{
  constructor(private httpClient: HttpClient,private toastr:ToastrService) {}
  getEmployeeInformationSearch(employeeId: any){
    return this.httpClient.get(environment.api_url +'/employee/information/search?employeeId='+employeeId).pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      console.log(error)
      if(error.status === 404){
        this.toastr.warning(error.error.message !== null ? error.error.message: error.error.error);
      }else if(error.status === 406){
        this.toastr.warning(error.error.message !== null ? error.error.message: error.error.error);
      }else{
        this.toastr.error(error.error.error);
      }
      return of(true);
    }));
  }
}

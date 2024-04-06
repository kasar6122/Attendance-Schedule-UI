import {Component, OnInit, ViewChild} from '@angular/core';
import {BasicForm} from "../../model/basicForm";
import {NgForm} from "@angular/forms";
import {EmployeeInformation} from "../../model/employeeInformation";
import {ToastrService} from "ngx-toastr";
import {EmployeeInformationService} from "../../service/employeeInformation.service";
import {ScheduleForm} from "../../model/scheduleForm";



@Component({
  selector: 'app-attendance-schedule',
  templateUrl: './attendance-schedule.component.html',
  styleUrls: ['./attendance-schedule.component.css']
})
export class AttendanceScheduleComponent implements OnInit {
  @ViewChild('validationForm') form: NgForm | undefined;
  scheduleForm = new ScheduleForm();
  employeeId:any;
  loading=false;
  isOrganizationalTemplate:boolean=false;
  isSingleSchedule:boolean=false;
  isWeekDay=false;
  employeeInformation:any = new EmployeeInformation();
  constructor(private toastr:ToastrService,private employeeInformationService:EmployeeInformationService) {
  }

  ngOnInit(): void {

  }

  getEmployeeInformation(){
    this.loading = true;
    if(!this.employeeId){
      this.loading = false;
      this.employeeInformation = new EmployeeInformation();
      this.toastr.error('Employee ID First');
    }else {
      this.employeeInformationService.getEmployeeInformationSearch(this.employeeId).subscribe((response:any)=>{
        this.loading = false;
        if(response.status){
          this.employeeInformation = response.data;
        }else if(response!==true){
          this.loading = false;
          this.toastr.warning(response.message);
        }
      })
    }
  }

  getScheduleType(event:any):any{
    this.isSingleSchedule=false;
    this.isOrganizationalTemplate=false;
    if(event.target.value == 2) {
      console.log(event.target.value);
      this.isOrganizationalTemplate=true;
    } else if(event.target.value == 1){
      console.log("event.target.value");
      this.isSingleSchedule=true;
    }
  }
  getDayType(event:any){
    this.isWeekDay=false;
    if (event.target.value==1){
      this.isWeekDay=true;
    }else {
      this.isWeekDay=false;
    }



  }



}

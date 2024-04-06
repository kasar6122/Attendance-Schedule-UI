import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./utility/app.guard";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {BasicFormComponent} from "./form-element/basic-form/basic-form.component";
import {
  BasicPageFormListComponent
} from "./form-element/basic-page-form/basic-page-form-list/basic-page-form-list.component";
import {AttendanceScheduleComponent} from "./attendanceSchedule/attendance-schedule/attendance-schedule.component";

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'basic-form',
    component: BasicFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'basic-page-form-list',
    component: BasicPageFormListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'attendance-schedule',
    component: AttendanceScheduleComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

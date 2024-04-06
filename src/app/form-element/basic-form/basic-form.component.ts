import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BasicForm} from "../../model/basicForm";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {
  @ViewChild('validationForm') form: NgForm | undefined;
  basicForm = new BasicForm();
  list:any=[];
  isSaveButton:boolean = true;
  isUpdateButton:boolean = false;
  constructor(private toastr: ToastrService) {
  }

  saveData(){
    this.list.push(this.basicForm);
    this.basicForm = new BasicForm();
    console.log(this.list);
    this.toastr.success('Success');
  }
  editData(data:any){
    this.basicForm = data;
    this.isUpdateButton = true;
    this.isSaveButton = false;
  }
  cancelData() {
    this.basicForm = new BasicForm();
    this.isSaveButton = true;
    this.isUpdateButton = false;
  }
  deleteData(data:any){
    this.list = this.list.filter((item: any)  => item !== data);
    this.toastr.success('Successfully Deleted');
  }

  updateData() {
    this.list.findIndex((item: BasicForm) => item === this.basicForm);
    // this.list[indexToUpdate] = response.data;
    this.toastr.success('Successfully Updated');
    this.basicForm = new BasicForm();
    this.isUpdateButton = false;
    this.isSaveButton = true;
  }
}

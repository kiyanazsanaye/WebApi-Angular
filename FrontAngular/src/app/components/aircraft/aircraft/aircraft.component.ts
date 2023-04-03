import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Aircraft } from 'src/app/model/Aircraft/Aircraft';
import { AircraftService } from 'src/app/services/Aircraft/Aircraft.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {
  model: Aircraft = new Aircraft();
  constructor(private service: AircraftService, private dialog: MatDialog) { }
  data: any;
  AircraftForm: any;
  submitted = false;
  EventValue: any = "Save";
  //IsUpdate= true;
  isShowUpdateIf = true;
  checkedStatus = false;

  ngOnInit(): void {
    this.getAll();
    this.AircraftForm = new FormGroup({
      id: new FormControl(null),
      modelName: new FormControl("", [Validators.required]),
      serialNumber: new FormControl("", [Validators.required]),
      registrationNumber: new FormControl("", [Validators.required]),
      registrationStatus: new FormControl("", [Validators.required]),
      registrationDate: new FormControl(null),
    })
  }

  getAll() {
    this.service.getAll().subscribe((resp) => {
      this.data = resp;
      //console.log(resp);
    });
  }
  onSubmit() {
    console.log('');
  }
  reset(f: NgForm) {
    f.resetForm();
  }
  DeleteData(id: any) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.service.deleteData(id).subscribe((data) => {
        this.data = data;
        this.getAll();
        if (data)
          alert("Yout item deleted succssfully!");
        else
          alert("You don't have permission to delete this item!");
      })
    }
  }
  Save() {
    this.submitted = true;

    if (this.AircraftForm.invalid) {
      return;
    }
    this.service.postData(this.AircraftForm).subscribe((data) => {
      this.data = data;
      this.resetFrom();
      debugger;
      if (data)
        alert("Yout item deleted succssfully!");
      else
        alert("You don't have permission to delete this item!");

    })
    this.isShowUpdateIf = true;
  }
  Update() {
    this.isShowUpdateIf = true;
    this.submitted = true;

    if (this.AircraftForm.invalid) {
      return;
    }
    this.service.putData(this.AircraftForm.value).subscribe((data) => {
      this.data = data;
      this.resetFrom();
      alert(this.data.Value);
    })
  }

  EditData(Data: any) {
    debugger;
    this.AircraftForm.controls["id"].setValue(Data.Id);
    this.AircraftForm.controls["modelName"].setValue(Data.ModelName);
    this.AircraftForm.controls["serialNumber"].setValue(Data.SerialNumber);
    this.AircraftForm.controls["registrationNumber"].setValue(Data.RegistrationNumber);
    this.AircraftForm.controls["registrationStatus"].setValue(Data.RegistrationStatus);
    this.AircraftForm.controls["registrationDate"].setValue(Data.RegistrationDate);
    this.EventValue = "Update";
    //this.openDialog();
    this.isShowUpdateIf = false;
  }

  EditedData() {
    debugger;
    this.AircraftForm.controls["id"].setValue(this.AircraftForm.controls["id"]);
    //this.AircraftForm.controls["modelName"].setValue(Data.ModelName);
    //this.AircraftForm.controls["serialNumber"].setValue(Data.SerialNumber);
    //this.AircraftForm.controls["registrationNumber"].setValue(Data.RegistrationNumber);
    //this.AircraftForm.controls["registrationStatus"].setValue(Data.RegistrationStatus);
    //this.AircraftForm.controls["registrationDate"].setValue(Data.RegistrationDate);
    this.EventValue = "Update";
    //this.openDialog();
    this.isShowUpdateIf = false;
  }

  changeStatus(e: any) {
    this.checkedStatus = e.checked;
    this.AircraftForm.value.registrationStatus = e.checked;
  }

  toggleDisplayDivIf() {
    this.isShowUpdateIf = !this.isShowUpdateIf;
  }

  resetFrom() {
    debugger;
    this.getAll();
    this.AircraftForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
    this.isShowUpdateIf = true;
  }

  //openDialog() {

  //  const dialogConfig = new MatDialogConfig();
  //  debugger;
  //  dialogConfig.disableClose = true;
  //  dialogConfig.autoFocus = true;
  //  dialogConfig.data = {
  //    id: 1,
  //    title: 'Angular For Beginners',
  //    description: 'Angular For Beginners',
  //    AircraftForm: this.AircraftForm
  //  };
  //  this.dialog.open(CourseDialogComponent, dialogConfig);
  //  const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  //  dialogRef.afterClosed().subscribe(
  //    data => console.log("Dialog output:", data)
  //  );

  //}


}


//import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

//@Component({
//  selector: 'dialog',
//  templateUrl: './dialog.component.html',
//  styleUrls: ['./dialog.component.css']
//})
//export class CourseDialogComponent implements OnInit {
//  AircraftForm: any;
//  //form: FormGroup;
//  description: string;
//  title: string = '';

//  constructor(
//    private service: AircraftService,
//    private fb: FormBuilder,
//    private dialogRef: MatDialogRef<CourseDialogComponent>,
//    @Inject(MAT_DIALOG_DATA) data: any) {

//    this.description = "sdf";//data.description;
//  }

//  ngOnInit() {
//    //debugger;
//    ////this.form = fb.group({
//    ////  description: [description, []],
//    ////  ...
//    ////    });
//    ////this.getAll();
//    //debugger;
//    //this.AircraftForm = new FormGroup({
//    //  id: new FormControl(null),
//    //  modelName: new FormControl("", [Validators.required]),
//    //  serialNumber: new FormControl("", [Validators.required]),
//    //  registrationNumber: new FormControl("", [Validators.required]),
//    //  registrationStatus: new FormControl("", [Validators.required]),
//    //  registrationDate: new FormControl(null),
//    //})
//  }
//  getAll() {
//    this.service.getAll().subscribe((resp) => {
//      console.log(resp);
//      console.log(resp);
//    });
//  }
//  save() {
//    this.dialogRef.close(this.AircraftForm.value);
//  }

//  close() {
//    this.dialogRef.close();
//  }
//}

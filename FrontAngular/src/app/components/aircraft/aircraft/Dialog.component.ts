import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'dialog.component',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class DialogComponent {
  title: string = '';
  description: string = '';
  AircraftForm: any;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    debugger;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Angular For Beginners',
      description: 'Angular For Beginners',
      AircraftForm: this.AircraftForm
    };
    this.dialog.open(CourseDialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }


}


//import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AircraftService } from '../../../services/Aircraft/Aircraft.service';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  AircraftForm: any;
  //form: FormGroup;
  description: string;

  constructor(
    private service: AircraftService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

    this.description = "sdf";//data.description;
  }

  ngOnInit() {
    //this.form = fb.group({
    //  description: [description, []],
    //  ...
    //    });
    this.getAll();
    debugger;
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
      console.log(resp);
    });
  }
  save() {
    this.dialogRef.close(this.AircraftForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}

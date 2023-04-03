import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aircraft } from 'src/app/model/Aircraft/Aircraft';
import { AircraftService } from 'src/app/services/Aircraft/Aircraft.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.css']
})
export class AddAircraftComponent implements OnInit {
  model: Aircraft = new Aircraft();
  constructor(private service: AircraftService, private router: Router) { }
  data: any;
  AircraftForm: any;
  submitted = false;
  EventValue: any = "Save";
  checkedStatus = false;//checkedStatus : boolean = false;

  ngOnInit(): void {
    this.AircraftForm = new FormGroup({
      id: new FormControl(null),
      modelName: new FormControl("", [Validators.required]),
      serialNumber: new FormControl("", [Validators.required]),
      registrationNumber: new FormControl("", [Validators.required]),
      registrationStatus: new FormControl(false, [Validators.required]),
      registrationDate: new FormControl(null),
    })
  }
  getAll() {
    this.service.getAll().subscribe((resp) => {
      console.log(resp);
    });
  }
  Save() {

    this.submitted = true;

    if (this.AircraftForm.invalid) {
      return;
    }
    this.service.postData(this.AircraftForm.value).subscribe((data) => {
      this.data = data;
      this.resetFrom();
      this.router.navigate(['/aircraft']);
    })
  }
  onSubmit() {
    console.log('');
  }
  reset(f: NgForm) {
    f.resetForm();
  }
  resetFrom() {
    this.getAll();
    this.AircraftForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }
  changeStatus(e: any) {
    this.checkedStatus = e.checked;
    this.AircraftForm.value.registrationStatus = e.checked;
  }

}

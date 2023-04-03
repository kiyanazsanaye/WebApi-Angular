import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aircraft } from 'src/app/model/Aircraft/Aircraft';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll() {
    return this.http.get(environment.baseUrl + "aircraft/aircrafts")//https://localhost:44352/ webapi host url
  }

  getDataById(id: any) {
    debugger;
    return this.http.get(environment.baseUrl + 'aircraft/aircrafts/' + id);
  }

  postData(formData: any) {
    debugger;
    return this.http.post(environment.baseUrl + 'aircraft/aircrafts', formData);
  }

  putData( formData: any) {
    return this.http.put(environment.baseUrl + 'aircraft/aircrafts' , formData);
  }
  deleteData(id: any) {
    debugger;
    return this.http.delete(environment.baseUrl + 'aircraft/aircrafts/' + id);
  }
}


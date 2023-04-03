import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuComponent} from './components/Base/menu/menu.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './module/material/material.module';

import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './components/Base/login/login.component';
import { AddAircraftComponent } from './components/aircraft/add-aircraft/add-aircraft.component'
import { AircraftComponent } from './components/aircraft/aircraft/aircraft.component'
import { DialogComponent } from './components/aircraft/aircraft/Dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AircraftService } from './services/Aircraft/Aircraft.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AddAircraftComponent,
    AircraftComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    MatDialogModule
    
  ],


  providers: [AircraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }

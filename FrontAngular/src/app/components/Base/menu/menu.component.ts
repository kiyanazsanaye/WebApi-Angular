import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }
  @ViewChild(StaticRange) drawer: any  ;
  ngOnInit(): void {
  }
  showFiller = true;
  Mhd() {
    debugger;
    this.showFiller =!this.showFiller;
  }
  logout(){
    this.router.navigate(['/login']);
  }
}

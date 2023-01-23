import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userdata: any;
  constructor() { }

  ngOnInit()
  {
var data = JSON.parse(localStorage.getItem('user_data') || '{}')
this.userdata = data.user.phoneNumber;
console.log(this.userdata);
  }

}

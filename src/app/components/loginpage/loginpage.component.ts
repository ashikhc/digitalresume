import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginpageheader: string ="Welcome myFriend !!!!!";
  loginpagedescription: string = "Please click Here to Sign In";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginpage()
  {
    this.router.navigate(['/phone']);
  }
}

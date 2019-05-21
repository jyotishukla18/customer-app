import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-dashboard',
  templateUrl: './register-dashboard.component.html',
  styleUrls: ['./register-dashboard.component.scss']
})
export class RegisterDashboardComponent implements OnInit {
  uname="jyoti"
  mail="joejones"
  pswd="qwerty"
  constructor() { }

  ngOnInit() {
  }

  tryRegister(){
    console.log("registered!");
  }

}

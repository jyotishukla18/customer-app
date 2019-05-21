import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {FormGroup,FormControl,FormBuilder,Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss']
})
export class LoginDashboardComponent implements OnInit {
  loginForm : FormGroup;
  
  constructor(
    // private userSer:UserService
    private fb : FormBuilder
    ) { }

  ngOnInit() {
    // using formgroup and form builder
  //   this.loginForm = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl(),
  //     skillForm : new FormGroup({
  //     skillname:new FormControl(),
  //     experience: new FormControl(),
  //     proficiency: new FormControl()
  //   })
  // })

  //using Formbuilder
  this.loginForm = this.fb.group({
    email : [''],
    password:[''],
    skillForm:this.fb.group({
      skillname:[''],
      experience:[''],
      proficiency:['beginner']
    })
  })
}
  

  onLogin(){
    console.log(this.loginForm);
  }

  onLoad(){
    console.log("clicked  ");
    this.loginForm.setValue({
      email:'test@gmail.com',
      password:'123456',
      skillForm:{
        skillname:'js',
        experience:'2',
        proficiency:'intermediate'
      }
    })
  }


}

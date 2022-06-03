import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    }
  )
  login(){
    this.loginService.postCredentials(this.loginForm.value).subscribe(
      (data:any)=>{
                   alert('Success');
                   console.log(data);
                  //  localStorage.setItem("myAppToken",data.token);
                  //  this.router.navigateByUrl("/dashboard")
                  localStorage.setItem("myAppToken",data.token);
                  this.router.navigateByUrl("/dashboard")
                   },
      (error:any)=>{alert('Failed to login')}
    );
  }
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

}

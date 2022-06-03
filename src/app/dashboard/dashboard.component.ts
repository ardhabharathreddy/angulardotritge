import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cartItemCount:number=0;
  logout(){
    // localStorage.removeItem("myAppToken");
    localStorage.removeItem("myAppToken");
    this.router.navigateByUrl("/login");
  }
  constructor(private router:Router,private sharedService:SharedserviceService) {
    this.sharedService.getData().subscribe(
      (data:number)=>{this.cartItemCount=data},
      (error:any)=>{alert("Unable to Update Cart")}
    )
   }

  ngOnInit(): void {
  }

}

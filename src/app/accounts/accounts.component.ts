import { Component, OnInit } from '@angular/core';
import { AccountServicesService } from '../account-services.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  user:any=[];
  filterContent:any="";
  filter(){
    this.accountServices.getFilteredAccounts(this.filterContent).subscribe(
        (data:any)=>{
          this.user=data;
        },
        (error:any)=>{
          alert("internal server error");
        }
    )
  }
  constructor(private accountServices:AccountServicesService) {
    accountServices.getUserData().subscribe(
      (data:any)=>{
        this.user=data;
      },
      (error:any)=>{
        alert("internal server error");
      }

    )
   }

  ngOnInit(): void {
  }

}

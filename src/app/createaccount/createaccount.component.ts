import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AccountServicesService } from '../account-services.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  accountForm:FormGroup=new FormGroup(
    {
      createdAt:new FormControl(),
      account_name:new FormControl(),
      available_balance:new FormControl(),
      currency:new FormControl(),
      account_number:new FormControl(),
      id:new FormControl(),
      card:new FormArray([
        new FormGroup({
          cardno:new FormControl(),
          expiry:new FormControl(),
          cvv:new FormControl()
        })
      ])
    }
  )
  get cardFormArray(){
    return this.accountForm.get("card")as FormArray;
  }
  add(){
    this.cardFormArray.push(new FormGroup({
      cardno:new FormControl(),
      expiry:new FormControl(),
      cvv:new FormControl()
    }))
  }
  delet(i:any){
    this.cardFormArray.removeAt(i);
  }
  submit(){
    console.log(this.accountForm.value);
    this.accountService.postAccount(this.accountForm.value).subscribe(
      (data:any)=>{alert("success")},
      (error:any)=>{alert("Failed to push")}
    )
  }
  constructor(private accountService:AccountServicesService) { }

  ngOnInit(): void {
  }

}

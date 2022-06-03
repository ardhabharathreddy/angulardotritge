import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  details:any={};

  constructor(private paymentService:PaymentService) {
    paymentService.getData().subscribe(
      (data:any)=>{this.details=data},
      (error:any)=>{alert("unabel to fetch data")}
    )
   }

  ngOnInit(): void {
  }

}

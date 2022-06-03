import { Component, OnInit } from '@angular/core';
import { FlipkartproductService } from '../flipkartproduct.service';

@Component({
  selector: 'app-flipkartproduct',
  templateUrl: './flipkartproduct.component.html',
  styleUrls: ['./flipkartproduct.component.css']
})
export class FlipkartproductComponent implements OnInit {
  products:any=[];
  constructor(private flipkartService:FlipkartproductService) {
    flipkartService.getFlipkart().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (error:any)=>{
        alert("internal service error");
      }
    )
   }

  ngOnInit(): void {
  }

}

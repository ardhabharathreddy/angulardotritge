import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {
  products:any;
  detailedProduct:any=null;
  send(product:any){
    this.detailedProduct=product;
  }
  constructor(private productService:ProductserviceService,private sharedService:SharedserviceService) { 
   this.productService.getProducts().subscribe(
     (data:any)=>{this.products=data},
     (error:any)=>{alert("Cannot fetch flipcart Prodcuts API")}
   )
  }

  ngOnInit(): void {
  }

}

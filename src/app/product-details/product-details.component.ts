import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() childProduct:any=null;
  count:number=0;
  cartItems:any;
  cartCount(id:any){
    this.count++;
    this.sharedService.setData(this.count);
    this.cartService.setData(id);
  }
  delete(id:any){
    this.childProduct.splice((parseInt(id)-1),1)
  }
  constructor(private sharedService:SharedserviceService,private cartService:CartService) { }

  ngOnInit(): void {
  }

}

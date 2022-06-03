import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductserviceService } from '../productservice.service';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   productDetails:any;
   cartItems:any=[];
  constructor(private cartService:CartService,private productService:ProductserviceService,private sharedService:SharedserviceService) {
    this.cartService.getData().subscribe(
      (data:any)=>{this.productDetails=data},
      (error:any)=>{alert("unable to get id from cart service")}
    )
  
    this.productService.getCartProducts(this.productDetails).subscribe(
      (data:any)=>{this.cartItems.push(data)},
      (error:any)=>{alert("unable to fetch cart details through id ")}
    )
   }

  ngOnInit(): void {
  }

}

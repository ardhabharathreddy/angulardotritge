import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x='';
  y='';
  c=NaN;
  height='';
  width='';
  areaAnswer=NaN;
  perimeterAnswer=NaN;
  regesteredname:string[]=[];
  regestername="";
  
  add(){
   this.c=(parseInt(this.x)+parseInt(this.y));
  }
  sub(){
    alert(parseInt(this.x)-parseInt(this.y));
  }
  mul(){
    alert(parseInt(this.x)*parseInt(this.y));
  }
  div(){
    alert(parseInt(this.x)/parseInt(this.y));
  }
  area()
  {
    this.areaAnswer=parseInt(this.height)*parseInt(this.width);
    this.perimeterAnswer=NaN;
  }
  perimeter()
  {
    this.perimeterAnswer=2*(parseInt(this.height)+parseInt(this.width));
    this.areaAnswer=NaN;
  }
  regester()
  {
    this.regesteredname.push(this.regestername);
  }
  product="";
  quantity=NaN;
  price=NaN;
  cartItems:any=[];
  addToCart(){
    var cartItem:any={};
    cartItem.productItem=this.product;
    cartItem.quantityInNumber=this.quantity;
    cartItem.priceOfProduct=this.price;
    this.cartItems.push(cartItem);
  }
  username="";
  email="";
  phonenumber=NaN;
  city="";
  userDetails:any[]=[];
  submit()
  {
    var details:any={};
    details.nameofuser=this.username;
    details.emailaddress=this.email;
    details.phonenumber=this.phonenumber;
    details.city=this.city;
    this.userDetails.push(details);
  }
  reset()
  {
    this.userDetails.pop();
  }
  isRed=true;
  default1=true;
  colorName:any="Red";
  change(){
    this.colorName=this.isRed==true?'Green':'Red';
    this.isRed=!this.isRed;
  }
  reset1(){
    this.default1=!this.default1;
  }
}

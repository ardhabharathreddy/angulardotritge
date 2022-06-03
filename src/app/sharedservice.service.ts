import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  // public dataCartSub:BehaviorSubject<any>=new BehaviorSubject(null);
  // getCartData(){
  //   return this.dataCartSub.asObservable();
  // }
  // setCartData(id: any) {
  //   this.dataCartSub.next(id);
  // }

  public dataSub:BehaviorSubject<any>=new BehaviorSubject(0);
  getData(){
    return this.dataSub.asObservable();
  }
  setData(value:any){
    this.dataSub.next(value);
  }



  constructor() { }
}

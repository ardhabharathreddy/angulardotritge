import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public dataSub:BehaviorSubject<any>=new BehaviorSubject(0);
  setData(value:any){
    this.dataSub.next(value)
  }
  getData():Observable<any>{
    return this.dataSub.asObservable();
  }
  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public dataSub:BehaviorSubject<any>=new BehaviorSubject(0);
  getData(){
    return this.dataSub.asObservable();
  }
  setData(value:any){
    this.dataSub.next(value);
  }
  constructor() { }
}

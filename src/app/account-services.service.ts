import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {
  
  getUserData():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  getFilteredAccounts(filterContent:any){
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+"?id="+filterContent);
  }
  postAccount(account:any){
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",account);
  }
  constructor(private httpClient:HttpClient) { 
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  getEmployee():Observable<any>{
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees");
  }
  postEmployee(employee:any):Observable<any>{
    return this.httpClient.post("https://6222413b666291106a21d80b.mockapi.io/employees",employee);
  }
  deleteEmployee(id:any):Observable<any>{
    return this.httpClient.delete("https://6222413b666291106a21d80b.mockapi.io/employees"+'/'+id);
  }
  getEmployeeById(id:any):Observable<any>{
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+'/'+id);
  }
  editEmployee(emp:any):Observable<any>{
    return this.httpClient.put("https://6222413b666291106a21d80b.mockapi.io/employees"+"/"+emp.id,emp);
  }
  constructor(private httpClient:HttpClient) { }
}

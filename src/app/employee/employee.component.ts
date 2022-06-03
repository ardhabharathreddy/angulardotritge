import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 employees:any=[];
 a:number=0;
 delete(id:any){
   this.employeeService.deleteEmployee(id).subscribe(
    (data:any)=>{alert("Deleted")},
    (error:any)=>{alert("Unable to delete")}
  )
 }
 view(id:any){
  this.router.navigateByUrl("/dashboard/employeedetails"+"/"+id);
 }
 edit(id:any){
   this.router.navigateByUrl("/dashboard/editemployee"+"/"+id);
 }
  constructor(private employeeService:EmployeeServiceService,private router:Router) {
    employeeService.getEmployee().subscribe(
      (data:any)=>{this.employees=data},
      (error:any)=>{alert("internal server error")}
    )
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeDetails:any=null;
  idOfArgs:any=null;
  get educationFormArray(){
    return this.employeeForm.get("education")as FormArray;
  }
  add(){
    this.educationFormArray.push(new FormGroup(
      {
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      }
    ));
  }
  delet(employeeObj:any){
    this.educationFormArray.removeAt(employeeObj);
  }
  submit(){
    console.log(this.employeeDetails)
    if(this.employeeDetails)
    {
      this.employeeService.editEmployee(this.employeeForm.value).subscribe(
        (data:any)=>{alert("Edited")},
        (error:any)=>{alert("Edit Failed")}
      )
    }
    else{
    console.log(this.employeeForm.value);
    this.employeeService.postEmployee(this.employeeForm.value).subscribe(
      (data:any)=>{alert("success")},
      (error:any)=>{alert("failed to push")}
    )
    }
  }
  constructor(private employeeService:EmployeeServiceService,private activatedRoute:ActivatedRoute) { 
    // this.employeeForm.get('role')?.valueChanges.subscribe(
    //   (data:any)=>{
    //     if(data=="frontEnd"){
    //       this.employeeForm.addControl('html',new FormControl());
    //       this.employeeForm.addControl('angular',new FormControl())
    //     }
    //     else{
    //       this.employeeForm.addControl('java',new FormControl());
    //       this.employeeForm.addControl('sql',new FormControl())
    //     }
    //   },
    //   (error:any)=>{alert("Push Failed")}
    // )
    this.activatedRoute.params.subscribe(
      (data:any)=>{this.idOfArgs=data.id},
      (error:any)=>{alert("no id from path")}
    )
    if(this.idOfArgs!=null)
    this.activatedRoute.params.subscribe(
      (data:any)=>{this.employeeService.getEmployeeById(data.id).subscribe(
                    (data:any)=>{
                      
                      this.employeeDetails=data;
                      this.employeeForm.patchValue(data);
                    
                    },
                    (error:any)=>{alert("User with this id not found")}
      )},
      (error:any)=>{alert("Unable to edit")}
    )
      }
  
  ngOnInit(): void {
    this.employeeForm=new FormGroup(
      {
        name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
        mobile:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        email:new FormControl(null,[Validators.required]),
        dob:new FormControl(),
        address:new FormGroup(
          {
            addressline:new FormControl(),
            city:new FormControl(),
            state:new FormControl(),
            pincode:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
          }
        ),
        education:new FormArray([
          new FormGroup(
            {
              qualification:new FormControl(),
              year:new FormControl(),
              percentage:new FormControl(null,[Validators.required,Validators.min(0),Validators.max(100)])
            }
          )
        ]),
        role:new FormControl(),
        id:new FormControl()
      }
    )
  
  this.employeeForm.get('role')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=="frontEnd"){
        this.employeeForm.addControl('html',new FormControl());
        this.employeeForm.addControl('angular',new FormControl());
        this.employeeForm.removeControl('java');
        this.employeeForm.removeControl('sql')
      }
      else{
        this.employeeForm.addControl('java',new FormControl());
        this.employeeForm.addControl('sql',new FormControl());
        this.employeeForm.removeControl('html');
        this.employeeForm.removeControl('angular')
      }
    },
    (error:any)=>{alert("Push Failed")}
  )

}
}
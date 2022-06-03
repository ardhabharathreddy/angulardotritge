import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicelServicesService } from '../vehicel-services.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent implements OnInit {
  vehicleForm:FormGroup=new FormGroup(
    {
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    // image:new FormControl(),
    id:new FormControl()
    }
  )
  submit(){
    console.log(this.vehicleForm);
    console.log(this.vehicleForm.value);
    this.vehicleService.postVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{alert("success")},
      (error:any)=>{alert("Push failed")}
    )
  }
  constructor(private vehicleService:VehicelServicesService) { }

  ngOnInit(): void {
  }

}

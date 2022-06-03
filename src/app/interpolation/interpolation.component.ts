import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name="";
  number=NaN;
  dob="12/04/1997";
  boolean=true;
  undefined=undefined;
  array=[1,2,3,4];
  object={"address":"Hyderabad","Nationality":"Indian"};
  constructor() { }

  ngOnInit(): void {
  }
  
}

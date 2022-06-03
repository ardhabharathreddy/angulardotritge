import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblingtwo',
  templateUrl: './siblingtwo.component.html',
  styleUrls: ['./siblingtwo.component.css']
})
export class SiblingtwoComponent implements OnInit {
  dataVariable:any;
  constructor(private commonService:CommonService) {
    
   }

  ngOnInit(): void {
    this.commonService.getData().subscribe(
      (data:any)=>{this.dataVariable=data},
      (error:any)=>{alert("Cannot get data from sibling1")}
    )
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test1(){
    alert("clicked");
  }
  test2(){
    alert("clicked twice");
  }
  test3(){
    var id = document.getElementById("input1");
    alert("keypressed"+id);
  }
  test4()
  {
    alert("keyup");
  }
  test5()
  {
    alert("keydown");
  }
  test6(){
    alert("focus");
  }
  test7(){
    alert("mouseenter");
  }
  name="abc";
}

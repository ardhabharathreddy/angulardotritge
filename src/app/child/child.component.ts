import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() a:any;
  @Output() b:EventEmitter<any>=new EventEmitter();
  num:any;
  submit(){
    this.b.emit(this.num);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

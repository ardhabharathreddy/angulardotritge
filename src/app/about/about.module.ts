import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';



@NgModule({
  declarations: [
    AboutcompanyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutcompanyComponent
  ]
})
export class AboutModule { }

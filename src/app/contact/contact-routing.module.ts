import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactaddressComponent } from './contactaddress/contactaddress.component';

const routes: Routes = [
  {path:"",component:ContactaddressComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

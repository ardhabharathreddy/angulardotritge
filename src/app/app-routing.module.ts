import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompanyComponent } from './about/aboutcompany/aboutcompany.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ChildComponent } from './child/child.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FlipkartproductComponent } from './flipkartproduct/flipkartproduct.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { SiblingoneComponent } from './siblingone/siblingone.component';
import { SiblingtwoComponent } from './siblingtwo/siblingtwo.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard],
    children:[{path:"home",component:HomeComponent},
              {path:"interpolation",component:InterpolationComponent},
              {path:"eventbinding",component:EventbindingComponent},
              {path:"apps",component:AppsComponent},
              {path:"vehiclesummary",component:VehiclesummaryComponent},
              {path:"accounts",component:AccountsComponent},
              {path:"flipkartproduct",component:FlipkartproductComponent},
              {path:"createvehicle",component:CreatevehicleComponent},
              {path:"createaccount",component:CreateaccountComponent},
              {path:"employee",component:EmployeeComponent},
              {path:"createemployee",component:CreateemployeeComponent},
              {path:"editemployee/:id",component:CreateemployeeComponent},
              {path:"employeedetails/:id",component:EmployeedetailsComponent},
              {path:"aboutcompany",component:AboutcompanyComponent},
              {path:"contact",loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)},
              {path:"parent",component:ParentComponent},
              {path:"siblingone",component:SiblingoneComponent},
              {path:"siblingtwo",component:SiblingtwoComponent},
              {path:"cart",component:CartComponent},
              {path:"product-summary",component:ProductSummaryComponent},
              {path:"payment",component:PaymentComponent},
              {path:"",component:HomeComponent},
              {path:"**",component:PagenotfoundComponent}
            ]
  },
  {path:"flipkartproduct",component:FlipkartproductComponent},
  {path:"employeedetails",component:EmployeedetailsComponent},
  {
    path:"",
    component:LoginComponent
  },
  
  {
    path:"**",
    component:PagenotfoundComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

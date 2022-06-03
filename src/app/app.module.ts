import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactsupportComponent } from './contactsupport/contactsupport.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { AppsComponent } from './apps/apps.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule } from '@angular/common/http';
import { FlipkartproductComponent } from './flipkartproduct/flipkartproduct.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RupeePipe } from './rupee.pipe';
import { CurrencyPipe } from './currency.pipe';
import { AboutModule } from './about/about.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingoneComponent } from './siblingone/siblingone.component';
import { SiblingtwoComponent } from './siblingtwo/siblingtwo.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    ContactsupportComponent,
    HomeComponent,
    InterpolationComponent,
    EventbindingComponent,
    AppsComponent,
    VehiclesummaryComponent,
    AccountsComponent,
    FlipkartproductComponent,
    CreatevehicleComponent,
    CreateaccountComponent,
    EmployeeComponent,
    CreateemployeeComponent,
    EmployeedetailsComponent,
    RupeePipe,
    CurrencyPipe,
    ParentComponent,
    ChildComponent,
    SiblingoneComponent,
    SiblingtwoComponent,
    ProductSummaryComponent,
    ProductDetailsComponent,
    CartComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';

@Injectable({
  providedIn: 'root'
})
export class VehicelServicesService {
  
  getData():Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  getFilteredVehicles(filterContent:any):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filterContent);
  }
  getSortedVehicles(sortBy:any,order:any ):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+sortBy+'&order='+order);
   
  }
  getPagedRows(page:number,limit:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?page='+page+'&limit='+limit);
  }
  getPagedRowsTen(page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?page='+page+'&limit=10');
  }
  getAllFilters(filterContent:any,sortBy:any,order:any,page:any,limit:any):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+"?filter="+filterContent+"&sortBy="+sortBy+"&order="+order+"&page="+page+"&limit="+limit);
  }
  postVehicle(vehicle:any):Observable<Vehicle[]>{
    return this.httpClient.post<Vehicle[]>("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
  }
  deleteVehicle(id:any):Observable<Vehicle[]>{
    return this.httpClient.delete<Vehicle[]>("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+"/"+id);
  }
  // data = [{"Vehicle":"asdf","manufacturer":"qwer","model":null,"type":null,"fuel":null,"color":null,"image":"http://placeimg.com/640/480/transport","id":"79"},{"Vehicle":"Chrysler Camry","manufacturer":"Dodge","model":"Model 3","type":"Convertible","fuel":"Electric","color":"violet","image":"http://placeimg.com/640/480/transport","id":"80"},{"Vehicle":"Honda Prius","manufacturer":"Jeep","model":"Silverado","type":"Cargo Van","fuel":"Diesel","color":"white","image":"http://placeimg.com/640/480/transport","id":"81"},{"Vehicle":"Ferrari Grand Cherokee","manufacturer":"Chrysler","model":"Grand Cherokee","type":"Hatchback","fuel":"Hybrid","color":"orange","image":"http://placeimg.com/640/480/transport","id":"84"},{"Vehicle":"Mini Colorado","manufacturer":"Honda","model":"Charger","type":"Convertible","fuel":"Hybrid","color":"grey","image":"http://placeimg.com/640/480/transport","id":"88"},{"Vehicle":"Smart F-150","manufacturer":"Hyundai","model":"A8","type":"Minivan","fuel":"Hybrid","color":"mint green","image":"http://placeimg.com/640/480/transport","id":"89"},{"Vehicle":"Rolls Royce Mercielago","manufacturer":"Maserati","model":"Cruze","type":"Extended Cab Pickup","fuel":"Electric","color":"blue","image":"http://placeimg.com/640/480/transport","id":"95"},{"Vehicle":"Mercedes Benz Beetle","manufacturer":"Ford","model":"ATS","type":"Wagon","fuel":"Electric","color":"silver","image":"http://placeimg.com/640/480/transport","id":"96"},{"Vehicle":"Ford Jetta","manufacturer":"Lamborghini","model":"Grand Cherokee","type":"Crew Cab Pickup","fuel":"Electric","color":"green","image":"http://placeimg.com/640/480/transport","id":"97"},{"Vehicle":"Bentley Impala","manufacturer":"Bentley","model":"Beetle","type":"Minivan","fuel":"Electric","color":"white","image":"http://placeimg.com/640/480/transport","id":"98"},{"Vehicle":"Volkswagen Golf","manufacturer":"BMW","model":"Aventador","type":"Crew Cab Pickup","fuel":"Hybrid","color":"orchid","image":"http://placeimg.com/640/480/transport","id":"99"},{"Vehicle":"Ferrari Jetta","manufacturer":"Smart","model":"Prius","type":"Crew Cab Pickup","fuel":"Electric","color":"indigo","image":"http://placeimg.com/640/480/transport","id":"110"},{"Vehicle":"Jeep 2","manufacturer":"Audi","model":"Wrangler","type":"Sedan","fuel":"Gasoline","color":"black","image":"http://placeimg.com/640/480/transport","id":"112"},{"Vehicle":"Audi Expedition","manufacturer":"Bugatti","model":"Jetta","type":"Sedan","fuel":"Diesel","color":"mint green","image":"http://placeimg.com/640/480/transport","id":"113"},{"Vehicle":"Nissan Accord","manufacturer":"Dodge","model":"911","type":"Minivan","fuel":"Diesel","color":"maroon","image":"http://placeimg.com/640/480/transport","id":"118"},{"Vehicle":"Fiat Altima","manufacturer":"Dodge","model":"Fiesta","type":"Minivan","fuel":"Gasoline","color":"silver","image":"http://placeimg.com/640/480/transport","id":"119"},{"Vehicle":"Volvo Alpine","manufacturer":"Rolls Royce","model":"1","type":"Extended Cab Pickup","fuel":"Electric","color":"green","image":"http://placeimg.com/640/480/transport","id":"120"},{"Vehicle":"Land Rover 911","manufacturer":"Nissan","model":"Malibu","type":"Coupe","fuel":"Hybrid","color":"cyan","image":"http://placeimg.com/640/480/transport","id":"121"},{"Vehicle":"Ferrari Durango","manufacturer":"Audi","model":"Accord","type":"Wagon","fuel":"Gasoline","color":"salmon","image":"http://placeimg.com/640/480/transport","id":"122"},{"Vehicle":"Chevrolet Altima","manufacturer":"Bentley","model":"Accord","type":"Crew Cab Pickup","fuel":"Hybrid","color":"maroon","image":"http://placeimg.com/640/480/transport","id":"141"},{"Vehicle":"Smart Silverado","manufacturer":"Ford","model":"Malibu","type":"Crew Cab Pickup","fuel":"Diesel","color":"orchid","image":"http://placeimg.com/640/480/transport","id":"142"},{"Vehicle":"Ferrari Grand Caravan","manufacturer":"Fiat","model":"Mustang","type":"Wagon","fuel":"Diesel","color":"red","image":"http://placeimg.com/640/480/transport","id":"143"},{"Vehicle":"Chevrolet Accord","manufacturer":"Polestar","model":"Wrangler","type":"Sedan","fuel":"Diesel","color":"purple","image":"http://placeimg.com/640/480/transport","id":"144"},{"Vehicle":"Ferrari Corvette","manufacturer":"Toyota","model":"Focus","type":"Coupe","fuel":"Diesel","color":"orange","image":"http://placeimg.com/640/480/transport","id":"154"},{"Vehicle":"Fiat Wrangler","manufacturer":"Audi","model":"Focus","type":"Minivan","fuel":"Electric","color":"orange","image":"http://placeimg.com/640/480/transport","id":"156"},{"Vehicle":"Land Rover Wrangler","manufacturer":"Dodge","model":"A4","type":"SUV","fuel":"Hybrid","color":"mint green","image":"http://placeimg.com/640/480/transport","id":"165"},{"Vehicle":"Volkswagen PT Cruiser","manufacturer":"Ford","model":"Explorer","type":"SUV","fuel":"Gasoline","color":"pink","image":"http://placeimg.com/640/480/transport","id":"166"},{"Vehicle":"Land Rover Roadster","manufacturer":"Aston Martin","model":"Focus","type":"Passenger Van","fuel":"Electric","color":"lavender","image":"http://placeimg.com/640/480/transport","id":"167"},{"Vehicle":"Mazda Silverado","manufacturer":"BMW","model":"Countach","type":"Sedan","fuel":"Hybrid","color":"pink","image":"http://placeimg.com/640/480/transport","id":"168"},{"Vehicle":"asdfgb","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"image":"http://placeimg.com/640/480/transport","id":"169"},{"Vehicle":"saradaga","manufacturer":"check","model":"chestunna","type":"Bye ","fuel":"Bye","color":"Bye","image":"http://placeimg.com/640/480/transport","id":"170"},{"Vehicle":"passion pro","manufacturer":null,"model":"F-150","type":"SUV","fuel":"Diesel","color":null,"image":"http://placeimg.com/640/480/transport","id":"171"},{"Vehicle":"qwert","manufacturer":"asdf","model":"asdfjfhgdkfj","type":"aazsdf","fuel":"asdf","color":"asdf","image":"http://placeimg.com/640/480/transport","id":"172"}]
  constructor(private httpClient:HttpClient) 
  {
    
   }

}

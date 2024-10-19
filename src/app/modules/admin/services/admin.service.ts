import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';


const BASIC_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postGas(carDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/car", carDto, {
      headers: this.createAuthorizationHeader()
    });

  }

  getAllGas():Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/cars",  {
      headers: this.createAuthorizationHeader()

    });
  }

  deleteGas(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/car/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  getGasById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/car/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  updateCar(carId:number,carDto:any):Observable<any>{
    return this.http.put(BASIC_URL + "/api/admin/car/"+ carId, carDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  getGasPurchases():Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/car/bookings",  {
      headers: this.createAuthorizationHeader()

    });
  }

 changePurchaseStatus(purchaseId:number, status: string):Observable<any>{
    return this.http.get(BASIC_URL + `/api/admin/car/bookings/${purchaseId}/${status}`,  {
      headers: this.createAuthorizationHeader()

    });
  }

  searchGas(searchGasBottleDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/car/search", searchGasBottleDto, {
      headers: this.createAuthorizationHeader()
    });

  }

  postDriver(driverDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/driver", driverDto, {
      headers: this.createAuthorizationHeader()
    });

  }

  getAllDrivers():Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/drivers",  {
      headers: this.createAuthorizationHeader()

    });
  }

  getDriverById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/driver/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  updateDriver(userId:number,driverDto:any):Observable<any>{
    return this.http.put(BASIC_URL + "/api/admin/driver/"+ userId, driverDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  deleteDriver(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/driver/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }


  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}

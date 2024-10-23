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

  postGas(gasDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/post/gas", gasDto, {
      headers: this.createAuthorizationHeader()
    });

  }

  getAllGas():Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/gas",  {
      headers: this.createAuthorizationHeader()

    });
  }

  deleteGas(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/gas/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  getGasById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/gas/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  updateGas(gasId:number,gasDto:any):Observable<any>{
    return this.http.put(BASIC_URL + "/api/admin/gas/"+ gasId, gasDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  getGasPurchases():Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/gas/purchases",  {
      headers: this.createAuthorizationHeader()

    });
  }

 changePurchaseStatus(purchaseId:number, status: string):Observable<any>{
    return this.http.get(BASIC_URL + `/api/admin/gas/purchases/${purchaseId}/${status}`,  {
      headers: this.createAuthorizationHeader()

    });
  }

  searchGas(searchGasDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/gas/search", searchGasDto, {
      headers: this.createAuthorizationHeader()
    });

  }

  postDriver(driverDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/post/driver", driverDto, {
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

  searchDriver(searchDriverDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/driver/search", searchDriverDto, {
      headers: this.createAuthorizationHeader()
    });

  }

  postTruck(truckDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/post/truck", truckDto, {
      headers: this.createAuthorizationHeader()
    });

  }

  getAllTrucks():Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/trucks",  {
      headers: this.createAuthorizationHeader()

    });
  }

  deleteTruck(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/truck/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  getTruckById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/truck/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  updateTruck(truckId:number,truckDto:any):Observable<any>{
    return this.http.put(BASIC_URL + "/api/admin/truck/"+ truckId, truckDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  searchTruck(searchTruckDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/truck/search", searchTruckDto, {
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

import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent {

  isSpinning = false;
  carId:number=this.activatedRoute.snapshot.params["id"];
  car:any;
  carLatitude: number = 40.7128; // Example latitude value (New York City)
  carLongitude: number = -74.0060;


  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private message:NzMessageService,
    private router: Router,
    private sanitizer: DomSanitizer){}

ngOnInit(){
  this.getCarById();

}

    getCarById(){
      this.isSpinning=true;
      this.adminService.getGasById(this.carId).subscribe((res)=> {
        console.log(res);
        this.isSpinning=false;
        this.car = res;
      })
    }
    getMapUrl(latitude: number = 51.5074, longitude: number = -0.1278): any {
      const url = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }



}

import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrls: ['./get-bookings.component.scss']
})
export class GetBookingsComponent {

  purchases:any;
  isSpinning = false;

  constructor(private adminService: AdminService,
    private message: NzMessageService){
    this.getPurchases();
  }
  booking: any = {
    // Initialize booking object with relevant properties including bookCarStatus
    bookCarStatus: 'pending' // Set initial status as 'pending' for demonstration
  };
  getPurchases(){
    this.isSpinning = true;
    this.adminService.getGasPurchases().subscribe((res)=>{
      this.isSpinning=false;
      console.log(res);
      this.purchases = res;
    })
  }

  changePurchaseStatus(purchaseId:number, status: string){
    this.isSpinning = true;
    console.log(purchaseId,status);
    this.adminService.changePurchaseStatus(purchaseId,status).subscribe((res)=>{
      this.isSpinning=false;
      console.log(res);
      this.getPurchases();
      this.message.success("Purchase status changed successfuly",{nzDuration:5000});
    },error=>{
      this.message.error("Something went wrong",{nzDuration:5000});
    })
  }

}

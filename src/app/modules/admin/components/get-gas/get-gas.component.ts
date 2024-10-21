import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-get-gas',
  templateUrl: './get-gas.component.html',
  styleUrls: ['./get-gas.component.scss']
})
export class GetGasComponent {

  Gas: any = [];
  constructor(private adminService: AdminService,
    private message: NzMessageService){}
  ngOnInit(){
    this.getAllGas();
  }
  getAllGas(){
    this.adminService.getAllGas().subscribe((res)=> {
      console.log(res);
      this.Gas = [];
      res.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.Gas.push(element);
      });
    })
  }
  deleteGas(id: number){
    console.log(id);
    this.adminService.deleteGas(id).subscribe((res)=>{
      this.message.success("Gas Bottle deleted successfully",{nzDuration: 5000});
      this.getAllGas();
    })
  }

  // getAllDrivers() {
  //   this.adminService.getAllDrivers().subscribe((res) => {
  //     this.drivers = [];
  //     res.forEach((element: { processedImg: string; returnedImage: string }) => {
  //       element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
  //       this.drivers.push(element);
  //     });
  //   });
  // }

  // deleteDriver(id: number) {
  //   this.adminService.deleteDriver(id).subscribe((res) => {
  //     this.message.success("Driver deleted successfully", { nzDuration: 5000 });
  //     this.getAllDrivers();
  //   });
  // }

    // Handle entity selection change
    // onEntityChange() {
    //   if (this.selectedEntity === 'gas') {
    //     this.getAllGas();
    //   } else if (this.selectedEntity === 'drivers') {
    //     this.getAllDrivers();
    //   }
    // }
}

import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-get-truck',
  templateUrl: './get-truck.component.html',
  styleUrls: ['./get-truck.component.scss']
})
export class GetTruckComponent {
  trucks: any = [];

  constructor(private adminService: AdminService,
    private message: NzMessageService){}

  ngOnInit(){
    this.getAllTrucks();
  }

  getAllTrucks(){
    this.adminService.getAllTrucks().subscribe((res)=> {
      console.log(res);
      this.trucks = [];
      res.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.trucks.push(element);
      });
    })
  }

  deleteTruck(id: number){
    console.log(id);
    this.adminService.deleteTruck(id).subscribe((res)=>{
      this.message.success("Car deleted successfully",{nzDuration: 5000});
      this.getAllTrucks();
    })

  }
}

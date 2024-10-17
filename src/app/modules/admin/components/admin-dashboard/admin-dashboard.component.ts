import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

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
}

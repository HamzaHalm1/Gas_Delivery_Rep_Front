import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-get-driver',
  templateUrl: './get-driver.component.html',
  styleUrls: ['./get-driver.component.scss']
})
export class GetDriverComponent {
  drivers: any = [];
  constructor(private adminService: AdminService,
    private message: NzMessageService){}
  ngOnInit(){
    this.getAllDrivers();
  }

  getAllDrivers() {
      this.adminService.getAllDrivers().subscribe((res) => {
        this.drivers = [];
        res.forEach((element: { processedImg: string; returnedImage: string }) => {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
          this.drivers.push(element);
        });
      });
    }

    deleteDriver(id: number) {
      this.adminService.deleteDriver(id).subscribe((res) => {
        this.message.success("Driver deleted successfully", { nzDuration: 5000 });
        this.getAllDrivers();
      });
    }

}

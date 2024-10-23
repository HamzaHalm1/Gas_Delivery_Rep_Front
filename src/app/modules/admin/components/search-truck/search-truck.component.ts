import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-truck',
  templateUrl: './search-truck.component.html',
  styleUrls: ['./search-truck.component.scss']
})
export class SearchTruckComponent implements OnInit{

  trucks:any[] = [];
  searchTruckForm!: FormGroup;
  isSpinning = false;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfBrands : string[]=[];
  listOfTransmission : string[]=[];
  listOfFuel : string[]=[];
  listOfType : string[]=[];

  constructor(private fb: FormBuilder,
    private service: AdminService,
    private message: NzMessageService){
    this.searchTruckForm = this.fb.group({
      brand:[null],
      type:[null],
      transmission:[null],
      fuel:[null],
    })
  }
  ngOnInit(): void {
    this.getTruckData(); // Fetch driver names and phone numbers on component load
  }

  getTruckData() {
    this.service.getAllTrucks().subscribe((res) => {
      this.trucks = [];
      this.listOfType=[];
      this.listOfBrands=[];
      res.forEach((truck: { brand: string; type: string ; transmission: string; fuel:string}) => {
              this.listOfBrands.push(truck.brand);
              this.listOfType.push(truck.type);
              this.listOfFuel.push(truck.fuel);
              this.listOfTransmission.push(truck.transmission);
      });
      this.searchTruck();
    });
  }

  searchTruck(){
    this.trucks = [];
    this.isSpinning = true;
    console.log(this.searchTruckForm.value);
    this.service.searchTruck(this.searchTruckForm.value).subscribe((res)=>{
      console.log(res);
      res.truckDtoList.forEach((element: { processedImg: string; returnedImage: string; }) => {
        if (element.returnedImage) {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
      } else {
          // Set processedImg to null or a default image
          element.processedImg = ""; // or 'assets/images/ChronoGaz_logo.png' if you want to use a default image
      }
      this.trucks.push(element);
      });
      this.isSpinning = false;
    })
  }

  deleteTruck(id: number){
    console.log(id);
    this.service.deleteTruck(id).subscribe((res)=>{
      this.message.success("Truck deleted successfully",{nzDuration: 5000});
      this.getTruckData();
      this.searchTruck();
    })


}
}

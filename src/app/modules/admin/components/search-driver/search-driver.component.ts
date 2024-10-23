import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-driver',
  templateUrl: './search-driver.component.html',
  styleUrls: ['./search-driver.component.scss']
})
export class SearchDriverComponent implements OnInit {

  drivers: any[] = [];
  searchDriverForm!: FormGroup;
  isSpinning = false;
  listOfNames: string[] = [];  // Array to store names
  listOfPhoneNumber: string[] = []; // Array to store phone numbers
  listOfDrivingLicense = ["A", "B", "C", "D"];

  constructor(private fb: FormBuilder,
    private service: AdminService,
    private message: NzMessageService) {
    this.searchDriverForm = this.fb.group({
      name: [null],
      drivingLicenseType: [null],
      phoneNumber: [null],
    });
  }

  ngOnInit(): void {
    this.getDriversData(); // Fetch driver names and phone numbers on component load
  }

  getDriversData() {
    this.service.getAllDrivers().subscribe((res) => {
      this.drivers = [];
      this.listOfNames=[];
      this.listOfPhoneNumber=[];
      res.forEach((driver: { name: string; phoneNumber: string }) => {
              this.listOfNames.push(driver.name); // Populate names
              this.listOfPhoneNumber.push(driver.phoneNumber); // Populate phone numbers
      });
      this.searchDriver(); // Fetch filtered data if form is submitted
    });
  }

  searchDriver() {
    this.drivers = [];
    this.isSpinning = true;
    console.log(this.searchDriverForm.value);
    this.service.searchDriver(this.searchDriverForm.value).subscribe((res) => {
      this.drivers = res.driverDtoList.map((element: { processedImg: string; returnedImage: string; }) => {
        if (element.returnedImage) {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
      } else {
          // Set processedImg to null or a default image
          element.processedImg = ""; // or 'assets/images/ChronoGaz_logo.png' if you want to use a default image
      }
      return element;
      });
      this.isSpinning = false;
    }, error => {
      console.error('Error searching drivers:', error);
      this.isSpinning = false;
    });
  }

  deleteDriver(id: number) {
    console.log(id);
    this.service.deleteDriver(id).subscribe((res) => {
      this.message.success("Driver deleted successfully", { nzDuration: 5000 });
      this.getDriversData();
      this.searchDriver(); // Refresh the list after deletion
    }, error => {
      console.error('Error deleting driver:', error);
    });
  }
}

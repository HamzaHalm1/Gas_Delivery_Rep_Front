import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-truck',
  templateUrl: './post-truck.component.html',
  styleUrls: ['./post-truck.component.scss']
})
export class PostTruckComponent {

  postTruckForm!: FormGroup;
  isSpinning: boolean = false;
  selectedFile!: File;
  imagePreview: string | ArrayBuffer | null | undefined;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = ["toyota", "Ford", "Suzuki", "Hyundai", "Volvo", "Iveco", "DAF", "Renault"];
  listOfColors = ["Black", "Grey", "White", "red"];
  listOfTransmission = ["Manual", "Automatic"];
  listOfFuel = ["Diesel", "Petrol", "Electric", "Hybride"];
  listOfType = ["Van", "Pick-up", "Light duty", "Flatbed"];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postTruckForm = this.fb.group({
      brand: [null, Validators.required],
      type: [null, Validators.required],
      quantity: [null, Validators.required],
      color: [null, Validators.required],
      description: [null, Validators.required],
      transmission: [null, Validators.required],
      fuel: [null, Validators.required],
      model: [null, Validators.required], // The model year picker
    });
  }

  postTruck() {
    console.log(this.postTruckForm.value);
    this.isSpinning = true;

    const formData: FormData = new FormData();
    formData.append('image', this.selectedFile);

    formData.append('brand', this.postTruckForm.get('brand')?.value);
    formData.append('type', this.postTruckForm.get('type')?.value);
    formData.append('quantity', this.postTruckForm.get('quantity')?.value);
    formData.append('transmission', this.postTruckForm.get('transmission')?.value);
    formData.append('fuel', this.postTruckForm.get('fuel')?.value);
    formData.append('color', this.postTruckForm.get('color')?.value);
    formData.append('description', this.postTruckForm.get('description')?.value);

    // Extracting the year from the Date object
    const modelDate = this.postTruckForm.get('model')?.value;
    const modelYear = modelDate ? new Date(modelDate).getFullYear() : null;
    formData.append('model', modelYear?.toString() ?? ''); // Submitting the year as a string

    console.log(formData);

    this.adminService.postTruck(formData).subscribe(
      (res) => {
        this.message.success("Truck posted successfully", { nzDuration: 5000 });
        this.router.navigateByUrl("/admin/list/trucks");
        console.log(res);
      },
      (error) => {
        this.message.error("Error while posting the truck", { nzDuration: 5000 });
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
}

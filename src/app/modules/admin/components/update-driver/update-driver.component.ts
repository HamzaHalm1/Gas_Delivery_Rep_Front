import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.scss']
})
export class UpdateDriverComponent {
  isSpinning = false;
  userId:number=this.activatedRoute.snapshot.params["id"];
  imgChanged: boolean=false;
  selectedFile:any;
  imagePreview:string | ArrayBuffer | null | undefined;
  existingImage : string | null = null;
  updateForm!: FormGroup;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfLicenses = ["A", "B", "C", "D"];

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message:NzMessageService,
    private router: Router,){}

    ngOnInit(){
      this.updateForm = this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.required],
        password: [null, Validators.required],
        phoneNumber: [null, Validators.required],
        licenseNumber: [null, Validators.required],
        drivingLicenseType: [null, Validators.required],
      })
      this.getDriverById();
    }

    getDriverById(){
      this.isSpinning=true;
      this.adminService.getDriverById(this.userId).subscribe((res)=> {
        console.log(res);
        this.isSpinning=false;
        const driverDto= res;
        this.existingImage= 'data:image/jpeg;base64,' + res.returnedImage;
        // driverDto.year = new Date(driverDto.year);
        this.updateForm.patchValue(driverDto);
      })
    }

    updateDriver(){
      this.isSpinning=true;
      const formData: FormData = new FormData();
      if(this.imgChanged && this.selectedFile){
      formData.append('image', this.selectedFile);
      }
      formData.append('name', this.updateForm.get('name')?.value);

      formData.append('email', this.updateForm.get('email')?.value);

      formData.append('password', this.updateForm.get('password')?.value);

      formData.append('phoneNumber', this.updateForm.get('phoneNumber')?.value);

      formData.append('licenseNumber', this.updateForm.get('licenseNumber')?.value);

      formData.append('drivingLicenseType', this.updateForm.get('drivingLicenseType')?.value);


      console.log(formData);
      this.adminService.updateDriver(this.userId,formData).subscribe((res)=>{
        this.message.success("Driver updated successfully", {nzDuration: 5000});
        this.router.navigateByUrl("/admin/search/driver");
        console.log(res);
      }, error =>{
        this.message.error("Error while updating the driver", {nzDuration: 5000})
      })
    }

    onFileSelected(event:any){
      this.selectedFile=event.target.files[0];
      this.imgChanged = true;
      this.existingImage = null;
      this.previewImage();
    }

    previewImage(){
      const reader = new FileReader();
      reader.onload =() => {
        this.imagePreview= reader.result;

      }
      reader.readAsDataURL(this.selectedFile);
    }
}

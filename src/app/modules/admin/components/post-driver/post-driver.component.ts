import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-driver',
  templateUrl: './post-driver.component.html',
  styleUrls: ['./post-driver.component.scss']
})
export class PostDriverComponent {
  postDriverForm!: FormGroup;
  isSpinning: boolean=false;
  selectedFile!: File;
  imagePreview:string | ArrayBuffer | null | undefined;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfLicenses = ["A", "B", "C", "D"];


  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private message:NzMessageService,
    private router: Router){}

  ngOnInit(){
    this.postDriverForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      licenseNumber: [null, Validators.required],
      drivingLicenseType: [null, Validators.required],
    })
  }

  postDriver(){
    console.log(this.postDriverForm.value);
    // console.log(this.selectedFile);
    this.isSpinning=true;
    const formData: FormData = new FormData();

    formData.append('image', this.selectedFile);

    formData.append('name', this.postDriverForm.get('name')?.value);

    formData.append('email', this.postDriverForm.get('email')?.value);

    formData.append('password', this.postDriverForm.get('password')?.value);

    formData.append('phoneNumber', this.postDriverForm.get('phoneNumber')?.value);

    formData.append('licenseNumber', this.postDriverForm.get('licenseNumber')?.value);

    formData.append('drivingLicenseType', this.postDriverForm.get('drivingLicenseType')?.value);




    console.log(formData);
    this.adminService.postDriver(formData).subscribe((res)=>{
      this.message.success("Driver posted successfully", {nzDuration: 5000});
      this.router.navigateByUrl("/admin/list/drivers");
      console.log(res);
    }, error =>{
      this.message.error("Error while posting Driver", {nzDuration: 5000})
    })

  }

  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
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

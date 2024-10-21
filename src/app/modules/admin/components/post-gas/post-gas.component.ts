import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-gas',
  templateUrl: './post-gas.component.html',
  styleUrls: ['./post-gas.component.scss']
})
export class PostGasComponent {

  postGasForm!: FormGroup;
  isSpinning: boolean=false;
  selectedFile!: File;
  imagePreview:string | ArrayBuffer | null | undefined;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfBrands = ["ButaGaz", "My Gaz", "Total Gaz", "TissirGaz"];
  listOfType = [ "3 Kg", "6 Kg", "12 Kg", "34 Kg"];

  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private message:NzMessageService,
    private router: Router){}

  ngOnInit(){
    this.postGasForm = this.fb.group({
      brand: [null, Validators.required],
      type: [null, Validators.required],
      quantity: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  postGas(){
    console.log(this.postGasForm.value);
    // console.log(this.selectedFile);
    this.isSpinning=true;
    const formData: FormData = new FormData();
    formData.append('image', this.selectedFile);

    formData.append('brand', this.postGasForm.get('brand')?.value);

    formData.append('type', this.postGasForm.get('type')?.value);

    formData.append('quantity', this.postGasForm.get('quantity')?.value);

    formData.append('description', this.postGasForm.get('description')?.value);

    formData.append('price', this.postGasForm.get('price')?.value);



    console.log(formData);
    this.adminService.postGas(formData).subscribe((res)=>{
      this.message.success("Gas bottle posted successfully", {nzDuration: 5000});
      this.router.navigateByUrl("/admin/list/gas");
      console.log(res);
    }, error =>{
      this.message.error("Error while posting gas bottle", {nzDuration: 5000})
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

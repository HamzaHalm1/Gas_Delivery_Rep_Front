import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-gas',
  templateUrl: './update-gas.component.html',
  styleUrls: ['./update-gas.component.scss']
})
export class UpdateGasComponent {

  isSpinning = false;
  gasId:number=this.activatedRoute.snapshot.params["id"];
  imgChanged: boolean=false;
  selectedFile:any;
  imagePreview:string | ArrayBuffer | null | undefined;
  existingImage : string | null = null;
  updateForm!: FormGroup;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfBrands = ["ButaGaz", "My Gaz", "Total Gaz", "TissirGaz"];
  listOfType = [ "3 Kg", "6 Kg", "12 Kg", "34 Kg"];

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message:NzMessageService,
    private router: Router,){}

    ngOnInit(){
      this.updateForm = this.fb.group({
        brand: [null, Validators.required],
        type: [null, Validators.required],
        quantity: [null, Validators.required],
        price: [null, Validators.required],
        description: [null, Validators.required],
      })
      this.getGasById();
    }

    getGasById(){
      this.isSpinning=true;
      this.adminService.getGasById(this.gasId).subscribe((res)=> {
        console.log(res);
        this.isSpinning=false;
        const gasDto= res;
        this.existingImage= 'data:image/jpeg;base64,' + res.returnedImage;
        this.updateForm.patchValue(gasDto);
      })
    }

    updateGas(){
      this.isSpinning=true;
      const formData: FormData = new FormData();
      if(this.imgChanged && this.selectedFile){
      formData.append('image', this.selectedFile);
      }

      formData.append('brand', this.updateForm.get('brand')?.value);

      formData.append('type', this.updateForm.get('type')?.value);

      let Q= this.updateForm.get('quantity')?.value;
      if(Q==null){
        Q=0;
      }
      formData.append('quantity', Q);

      formData.append('description', this.updateForm.get('description')?.value);

      formData.append('price', this.updateForm.get('price')?.value);



      console.log(formData);
      this.adminService.updateGas(this.gasId,formData).subscribe((res)=>{
        this.message.success("Gas Bottle updated successfully", {nzDuration: 5000});
        this.router.navigateByUrl("/admin/search/gas");
        console.log(res);
      }, error =>{
        this.message.error("Error while updating the gas bottle", {nzDuration: 5000})
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

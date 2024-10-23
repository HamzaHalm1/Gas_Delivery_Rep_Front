import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-truck',
  templateUrl: './update-truck.component.html',
  styleUrls: ['./update-truck.component.scss']
})
export class UpdateTruckComponent {
  isSpinning = false;
  truckId:number=this.activatedRoute.snapshot.params["id"];
  imgChanged: boolean=false;
  selectedFile:any;
  imagePreview:string | ArrayBuffer | null | undefined;
  existingImage : string | null = null;
  updateForm!: FormGroup;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfBrands = ["toyota", "Ford", "Suzuki", "Hyundai", "Volvo", "Iveco", "DAF", "Renault"];
  listOfColors = ["Black", "Grey", "White", "red"];
  listOfTransmission = ["Manual", "Automatic"];
  listOfFuel = ["Diesel", "Petrol", "Electric", "Hybride"];
  listOfType = ["Van", "Pick-up", "Light duty", "Flatbed"];

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
        color: [null, Validators.required],
        description: [null, Validators.required],
        transmission: [null, Validators.required],
        fuel: [null, Validators.required],
      })
      this.getTruckById();
    }

    getTruckById(){
      this.isSpinning=true;
      this.adminService.getTruckById(this.truckId).subscribe((res)=> {
        console.log(res);
        this.isSpinning=false;
        const truckDto= res;
        this.existingImage= 'data:image/jpeg;base64,' + res.returnedImage;
        this.updateForm.patchValue(truckDto);
      })
    }

    updateTruck(){
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
      formData.append('transmission', this.updateForm.get('transmission')?.value);
      formData.append('fuel', this.updateForm.get('fuel')?.value);
      formData.append('color', this.updateForm.get('color')?.value);
      formData.append('description', this.updateForm.get('description')?.value);

      console.log(formData);
      this.adminService.updateTruck(this.truckId,formData).subscribe((res)=>{
        this.message.success("Truck updated successfully", {nzDuration: 5000});
        this.router.navigateByUrl("/admin/search/truck");
        console.log(res);
      }, error =>{
        this.message.error("Error while updating the truck", {nzDuration: 5000})
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

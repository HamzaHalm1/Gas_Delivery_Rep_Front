import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-gas.component.html',
  styleUrls: ['./search-gas.component.scss']
})
export class SearchCarComponent {

  gas:any = [];
  searchGasForm!: FormGroup;
  isSpinning = false;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfBrands = ["ButaGaz", "Afriquia Gaz", "My Gaz", "Total Gaz"];
  listOfType = [ "3 Kg", "6 Kg", "12 Kg", "34 Kg"];


  constructor(private fb: FormBuilder,
    private service: AdminService,
    private message: NzMessageService){
    this.searchGasForm = this.fb.group({
      brand:[null],
      type:[null],
    })
  }

  searchGas(){
    this.gas = [];
    this.isSpinning = true;
    console.log(this.searchGasForm.value);
    this.service.searchGas(this.searchGasForm.value).subscribe((res)=>{
      console.log(res);
      res.gasBottleDtoList.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.gas.push(element);
      });
      this.isSpinning = false;
    })
  }
  deleteCar(id: number){
    console.log(id);
    this.service.deleteGas(id).subscribe((res)=>{
      this.message.success("Gas Bottle deleted successfully",{nzDuration: 5000});
      this.searchGas();
    })


  }

}

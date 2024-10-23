import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-gas',
  templateUrl: './search-gas.component.html',
  styleUrls: ['./search-gas.component.scss']
})
export class SearchGasComponent implements OnInit{

  gas:any[] = [];
  searchGasForm!: FormGroup;
  isSpinning = false;
  listOfOption: Array<{label: string; value:string}> = [];
  listOfBrands :string[] = [];
  listOfType :string[] = [];


  constructor(private fb: FormBuilder,
    private service: AdminService,
    private message: NzMessageService){
    this.searchGasForm = this.fb.group({
      brand:[null],
      type:[null],
    })
  }
  ngOnInit(): void {
    this.getGasData(); // Fetch driver names and phone numbers on component load
  }

  getGasData() {
    this.service.getAllGas().subscribe((res) => {
      this.gas = [];
      this.listOfType=[];
      this.listOfBrands=[];
      res.forEach((gas: { brand: string; type: string }) => {
              this.listOfBrands.push(gas.brand); // Populate names
              this.listOfType.push(gas.type); // Populate phone numbers
      });
      this.searchGas(); // Fetch filtered data if form is submitted
    });
  }

  searchGas(){
    this.gas = [];
    this.isSpinning = true;
    console.log(this.searchGasForm.value);
    this.service.searchGas(this.searchGasForm.value).subscribe((res)=>{
      console.log(res);
      res.gasBottleDtoList.forEach((element: { processedImg: string; returnedImage: string; }) => {
        if (element.returnedImage) {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
      } else {
          // Set processedImg to null or a default image
          element.processedImg = ""; // or 'assets/images/ChronoGaz_logo.png' if you want to use a default image
      }        this.gas.push(element);
      });
      this.isSpinning = false;
    })
  }

  deleteGas(id: number){
    console.log(id);
    this.service.deleteGas(id).subscribe((res)=>{
      this.message.success("Gas Bottle deleted successfully",{nzDuration: 5000});
      this.getGasData();
      this.searchGas();
    })


  }

}

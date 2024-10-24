import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { GetGasComponent } from './components/get-gas/get-gas.component';
import { PostGasComponent } from './components/post-gas/post-gas.component';
import { NgZorroImportsModule } from 'src/app/NgZorroImportsModule';
import { UpdateGasComponent } from './components/update-gas/update-gas.component';
import { GetPurchasesComponent } from './components/get-purchases/get-purchases.component';
import { SearchGasComponent } from './components/search-gas/search-gas.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PostDriverComponent } from './components/post-driver/post-driver.component';
import { UpdateDriverComponent } from './components/update-driver/update-driver.component';
import { GetDriverComponent } from './components/get-driver/get-driver.component';
import { GetTruckComponent } from './components/get-truck/get-truck.component';
import { PostTruckComponent } from './components/post-truck/post-truck.component';
import { UpdateTruckComponent } from './components/update-truck/update-truck.component';
import { SearchDriverComponent } from './components/search-driver/search-driver.component';
import { SearchTruckComponent } from './components/search-truck/search-truck.component';



@NgModule({
  declarations: [
    GetGasComponent,
    PostGasComponent,
    UpdateGasComponent,
    GetPurchasesComponent,
    SearchGasComponent,
    LocationPageComponent,
    PostDriverComponent,
    UpdateDriverComponent,
    GetDriverComponent,
    GetTruckComponent,
    PostTruckComponent,
    UpdateTruckComponent,
    SearchDriverComponent,
    SearchTruckComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule
  ]
})
export class AdminModule { }

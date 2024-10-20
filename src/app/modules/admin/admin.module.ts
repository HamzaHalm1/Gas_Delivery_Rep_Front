import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostGasComponent } from './components/post-gas/post-gas.component';
import { NgZorroImportsModule } from 'src/app/NgZorroImportsModule';
import { UpdateGasComponent } from './components/update-gas/update-gas.component';
import { GetPurchasesComponent } from './components/get-purchases/get-purchases.component';
import { SearchGasComponent } from './components/search-gas/search-gas.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PostDriverComponent } from './components/post-driver/post-driver.component';
import { UpdateDriverComponent } from './components/update-driver/update-driver.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostGasComponent,
    UpdateGasComponent,
    GetPurchasesComponent,
    SearchGasComponent,
    LocationPageComponent,
    PostDriverComponent,
    UpdateDriverComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { NgZorroImportsModule } from 'src/app/NgZorroImportsModule';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchCarComponent } from './components/search-gas/search-gas.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PostDriverComponent } from './components/post-driver/post-driver.component';
import { UpdateDriverComponent } from './components/update-driver/update-driver.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostCarComponent,
    UpdateCarComponent,
    GetBookingsComponent,
    SearchCarComponent,
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

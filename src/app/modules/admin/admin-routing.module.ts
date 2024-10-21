import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetGasComponent } from './components/get-gas/get-gas.component';
import { PostGasComponent } from './components/post-gas/post-gas.component';
import { UpdateGasComponent } from './components/update-gas/update-gas.component';
import { GetPurchasesComponent } from './components/get-purchases/get-purchases.component';
import { SearchGasComponent } from './components/search-gas/search-gas.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { PostDriverComponent } from './components/post-driver/post-driver.component';
import { UpdateDriverComponent } from './components/update-driver/update-driver.component';
import { GetDriverComponent } from './components/get-driver/get-driver.component';
import { PostTruckComponent } from './components/post-truck/post-truck.component';
import { UpdateTruckComponent } from './components/update-truck/update-truck.component';
import { GetTruckComponent } from './components/get-truck/get-truck.component';


const routes: Routes = [
  {path:"list/gas", component: GetGasComponent},
  {path:"list/trucks", component: GetTruckComponent},
  {path:"list/drivers", component: GetDriverComponent},
  {path:"post/gas", component: PostGasComponent},
  {path:"post/gas/:id", component: UpdateGasComponent},
  {path:"purchases", component: GetPurchasesComponent},
  {path:"search", component: SearchGasComponent},
  {path:"post/driver", component: PostDriverComponent},
  {path:"post/truck/:id", component: UpdateTruckComponent},
  {path:"post/truck", component: PostTruckComponent},
  {path:"gas/location/:id", component: LocationPageComponent},
  {path:"post/driver/:id", component: UpdateDriverComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

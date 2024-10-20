import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostGasComponent } from './components/post-gas/post-gas.component';
import { UpdateGasComponent } from './components/update-gas/update-gas.component';
import { GetPurchasesComponent } from './components/get-purchases/get-purchases.component';
import { SearchGasComponent } from './components/search-gas/search-gas.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { PostDriverComponent } from './components/post-driver/post-driver.component';
import { UpdateDriverComponent } from './components/update-driver/update-driver.component';


const routes: Routes = [
  {path:"dashboard", component: AdminDashboardComponent},
  {path:"post/gas", component: PostGasComponent},
  {path:"post/gas/:id", component: UpdateGasComponent},
  {path:"purchases", component: GetPurchasesComponent},
  {path:"search", component: SearchGasComponent},
  {path:"post/driver", component: PostDriverComponent},
  {path:"gas/location/:id", component: LocationPageComponent},
  {path:"driver/:id", component: UpdateDriverComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import { DeletePageComponent } from './components/delete-page/delete-page.component';
import { SaleComponent } from './components/sale/sale.component';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { AvailableMedicineComponent } from './components/available-medicine/available-medicine.component';


const routes: Routes = [
  { path: "", component: GetPageComponent },
  { path: "insert", component: InsertPageComponent },
  { path: "update", component: UpdatePageComponent },
  { path: "delete", component: DeletePageComponent },
  { path: "sale", component: SaleComponent},
  { path: "add-medicine", component: AddMedicineComponent},
  { path: "available-medicine", component: AvailableMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

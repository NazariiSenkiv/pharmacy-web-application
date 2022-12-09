import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import { DeletePageComponent } from './components/delete-page/delete-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaleComponent } from './components/sale/sale.component';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { AvailableMedicineComponent } from './components/available-medicine/available-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertPageComponent,
    GetPageComponent,
    UpdatePageComponent,
    DeletePageComponent,
    SaleComponent,
    AddMedicineComponent,
    AvailableMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

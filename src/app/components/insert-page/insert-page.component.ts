import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.css']
})
export class InsertPageComponent {
  public constructor(private medicineService: MedicineService) {}

  submit() {
    this.medicineService.insert({
      name: this.form.value.name as string,
      brand: this.form.value.brand as string,
      category: this.form.value.category as string,

      productionYear: this.form.value.productionYear as number,
      price: this.form.value.price as number
    }).subscribe();
  }

  form = new FormGroup({
    name: new FormControl<string>(''),
    brand: new FormControl<string>(''),
    category: new FormControl<string>(''),

    productionYear: new FormControl<number>(0),
    price: new FormControl<number>(0)
  })

  get name() { return this.form.controls.name; }
  get brand() { return this.form.controls.brand; }
  get category() { return this.form.controls.category; }
  get productionYear() { return this.form.controls.productionYear; }
  get price() { return this.form.controls.price; }
}

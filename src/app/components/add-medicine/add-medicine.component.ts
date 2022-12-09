import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AvailableMedicineService } from 'src/app/core/services/available-medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {
  constructor(private medicineService: AvailableMedicineService) {}

  submit() {
    this.medicineService.addMedicine(this.form.value.id as number, this.form.value.count as number)
                        .subscribe();
  }

  form = new FormGroup({
    id: new FormControl<number>(0),
    count: new FormControl<number>(0)
  });

  get id() { return this.form.value.id; }
  get count() { return this.form.value.count; }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css']
})
export class DeletePageComponent {
  public constructor(private medicineService: MedicineService) {}

  submit() {
    this.medicineService.delete(this.form.value.id as number)
        .subscribe(res => console.log(res));
  }

  form = new FormGroup({
    id: new FormControl<number>(0)
  })

  get id() {
    return this.form.controls.id;
  }
}

import { Component } from '@angular/core';
import { AvailableMedicineService } from 'src/app/core/services/available-medicine.service';

@Component({
  selector: 'app-available-medicine',
  templateUrl: './available-medicine.component.html',
  styleUrls: ['./available-medicine.component.css']
})
export class AvailableMedicineComponent {
  constructor(public medicineService: AvailableMedicineService) {}

  ngOnInit(): void {
    this.medicineService.getAll().subscribe();
  }
}

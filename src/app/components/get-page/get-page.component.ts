import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.css']
})
export class GetPageComponent implements OnInit {
  constructor(public medicineService: MedicineService) {}

  ngOnInit(): void {
    this.medicineService.getAll().subscribe();
  }
}

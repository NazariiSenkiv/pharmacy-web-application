import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAvailableMedicine } from '../model/IAvailableMedicine';

@Injectable({
  providedIn: 'root'
})
export class AvailableMedicineService {

  constructor(private http: HttpClient) { }

  public availableMedicines: IAvailableMedicine[] = [];

  getAll(): Observable<IAvailableMedicine[]> {
    return this.http.get<IAvailableMedicine[]>('https://localhost:7150/api/AvailableMedicine')
    .pipe(
      tap(availableMedicines => this.availableMedicines = availableMedicines)
    );
  }

  sellMedicine(medicineId: number, medicineCount: number) {
    return this.http.get('https://localhost:7150/api/AvailableMedicine/Sell/' 
              + medicineId + ',' + medicineCount);
  }

  addMedicine(medicineId: number, medicineCount: number) {
    return this.http.get('https://localhost:7150/api/AvailableMedicine/Add/' 
              + medicineId + ',' + medicineCount);
  }
}

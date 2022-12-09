import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IMedicine } from '../model/IMedicine';
import { IMedicineDTO } from '../model/IMedicineDTO';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  public medicines: IMedicine[] = [];

  getAll(): Observable<IMedicine[]> {
    return this.http.get<IMedicine[]>('https://localhost:7150/api/Medicine')
    .pipe(
      tap(medicines => this.medicines = medicines)
    );
  }

  getById(id: number): Observable<IMedicine> {
    return this.http.get<IMedicine>('https://localhost:7150/api/Medicine/' + id).pipe();
  }

  insert(medicine: IMedicineDTO): Observable<IMedicineDTO> {
    return this.http.post<IMedicineDTO>('https://localhost:7150/api/Medicine', medicine);
  }

  update(id: number, newMedicine: IMedicineDTO) {
    return this.http.put('https://localhost:7150/api/Medicine/' + id, newMedicine);
  }

  delete(id: number) {
    return this.http.delete<IMedicine>('https://localhost:7150/api/Medicine/' + id);
  }
}

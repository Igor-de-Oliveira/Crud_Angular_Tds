import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

import { Local } from '../model/local';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  private readonly API = 'http://localhost:8080/api/locais';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Local[]>(this.API)
    .pipe(
      //delay(5000)
    );
  }

  loadById(id: number){
    return this.httpClient.get<Local>(`${this.API}/${id}`);
  }

  save(record: Partial<Local>) {
    if (record.id_Local){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Local>) {
    return this.httpClient.post<Local>(this.API, record);
  }

  private update(record: Partial<Local>){
    return this.httpClient.put<Local>(`${this.API}/${record.id_Local}`, record);
  }

  remove(id: number){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}

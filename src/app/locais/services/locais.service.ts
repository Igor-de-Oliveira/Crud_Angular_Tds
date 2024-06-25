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
}

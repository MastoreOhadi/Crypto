import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coincap.io/v2/assets';

  constructor(private http: HttpClient) { }


  getCryptos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getCryptoHistory(cryptoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cryptoId}/history?interval=d1`);
  }
}

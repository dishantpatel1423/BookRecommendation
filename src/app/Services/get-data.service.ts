import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = 'http://localhost:5000/recommend_books';

  constructor(private http: HttpClient) {}

  sendData(data: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.apiUrl, JSON.stringify(data), { headers });
  }
}

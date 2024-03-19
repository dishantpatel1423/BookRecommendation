import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';
@Injectable({
  providedIn: 'root'
})
export class GetBookService {

  private csvData: any[] = [];

  constructor(private http: HttpClient) { }

  fetchCSVData(): Observable<any> {
    return this.http.get('assets/output_file.csv', { responseType: 'text' }).pipe(
      map((csvData) => {
        this.csvData = Papa.parse(csvData, { header: true }).data;
        return this.csvData;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import * as Papa from 'papaparse';
@Injectable({
  providedIn: 'root'
})
export class Top50Service {

  constructor(private http:HttpClient) { }
  getCSVData():Observable<any>{
    return this.http.get('assets/AllBooks.csv', { responseType: 'text' }).pipe(
      map((csvData)=>{
        const parseData =Papa.parse(csvData,{header:true}).data;
        return parseData
      })
    );
  }
}

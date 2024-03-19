import { Component } from '@angular/core';
import { GetDataService } from '../Services/get-data.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  data: any[];
  bookName: string = "";

  constructor(private service: GetDataService) { }

  sendData() {
    this.service.sendData(this.bookName).subscribe(response => {
      console.log('Response from server', response);
      this.data = response;
    });
  }
}

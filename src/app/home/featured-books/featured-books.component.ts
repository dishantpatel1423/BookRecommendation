import { Component } from '@angular/core';
import { AllBooksService } from 'src/app/Services/all-books.service';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})
export class FeaturedBooksComponent {
  csvData:any[]=[];
  get firstTenBooks(): any[] {
    // Slice the array to get the first 10 books
    return this.csvData.slice(0, 10);
  }
  constructor(private allbooks:AllBooksService){}
  ngOnInit() {
    
    this.allbooks.getCSVData().subscribe(data => {
      this.csvData = data;
      console.log(this.csvData.length);
      console.log(this.csvData);
      this.firstTenBooks
    });
  }
}

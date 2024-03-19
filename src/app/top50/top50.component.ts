import { Component, OnInit } from '@angular/core';
import { AllBooksService } from '../Services/all-books.service';
import { Top50Service } from '../Services/top50.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-top50',
  templateUrl: './top50.component.html',
  styleUrls: ['./top50.component.css']
})
export class Top50Component implements OnInit {
  csvData: any[] = [];
  filterData: any[] = [];
  newData:any[]=[];
  constructor(private allBooks: Top50Service,private router: Router) { }

  ngOnInit(): void {
    this.allBooks.getCSVData().subscribe((data) => {
      this.csvData = data;
      // console.log("my data", this.csvData); 
      this.SortedBooks();
      this.filterTopBooks();
      // console.log("my newdata", this.csvData); 
    });
  }

  SortedBooks() {
    this.csvData.sort((a, b) =>{
      const raitngA=parseFloat(a.bookRating)
      const raitngB=parseFloat(b.bookRating)
      return raitngB-raitngA
    });
  }

  filterTopBooks() {
    this.csvData = this.csvData.filter((book) => book.reviewCount > 5000);
    this.newData = this.csvData.slice(0, 50);
    console.log(this.newData);
  }
 

  viewBookDetails(item: any) {
    if (item && item.bookTitle) { // Check if book object and id property are defined
      this.router.navigate(['/book', item.bookTitle]);
  } else {
      console.error('Invalid book object:', item);
  }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllBooksService } from '../Services/all-books.service';
import { GetBookService } from '../Services/get-book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  originalTitle: string;
  book: any;
  csvData: any[];
  bookDisplayed: boolean = false;
  constructor(private route: ActivatedRoute,private getbook:GetBookService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.originalTitle = params['original_title'];
      console.log(this.originalTitle);
      this.getbook.fetchCSVData().subscribe((data) => {
        this.csvData = data;
        this.book = this.csvData.find(book => book.bookTitle === this.originalTitle);
        console.log(this.book);
        this.bookDisplayed = true; // Set to true to display the book details
      });
    });
  }
}

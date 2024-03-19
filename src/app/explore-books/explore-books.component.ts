import { Component } from '@angular/core';
import { AllBooksService } from '../Services/all-books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explore-books',
  templateUrl: './explore-books.component.html',
  styleUrls: ['./explore-books.component.css']
})
export class ExploreBooksComponent {
  csvData: any[] = [];
  filteredBooks: any[] = [];
  booksToShow = 50;
  searchTerm = ''; // Provide a default value to searchTerm

  constructor(private allbooks: AllBooksService ,private router:Router) { }

  ngOnInit() {
    this.allbooks.getCSVData().subscribe(data => {
      this.csvData = data;
      console.log(this.csvData.length);
      this.filteredBooks = this.csvData;
      this.filterBooks(); 
    });
  }

  showMore() {
    this.booksToShow += 50; 
  }

  filterBooks() {
    if (this.csvData && this.searchTerm.trim() !== '') {
      this.filteredBooks = this.csvData.filter(book =>
        (book.bookTitle && book.bookTitle.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (book.bookAuthors && book.bookAuthors.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    } else {
      // If searchTerm is empty, show all books
      this.filteredBooks = this.csvData;
    }
  }
  viewBookDetails(item: any) {
    if (item && item.bookTitle) { // Check if book object and id property are defined
      this.router.navigate(['/book', item.bookTitle]);
  } else {
      console.error('Invalid book object:', item);
  }
  }
}
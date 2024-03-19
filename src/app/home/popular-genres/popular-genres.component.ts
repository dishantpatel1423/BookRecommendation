import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-genres',
  templateUrl: './popular-genres.component.html',
  styleUrls: ['./popular-genres.component.css']
})
export class PopularGenresComponent {
  popularGenres = [
    { name: 'Mystery', imageUrl: '../../../assets/Mystery.png' },
    { name: 'Science Fiction', imageUrl: '../../../assets/ScienseFiction.png' },
    { name: 'Fantasy', imageUrl: '../../assets/Fantasy.png' },
    { name: 'Adventure', imageUrl: '../../assets/Adventure.png' },
    { name: 'Horror', imageUrl: '../../assets/Horror.png' },
    { name: 'Romance', imageUrl: '../../assets/Romance.png' },
    // Add more genres as needed
  ];
}

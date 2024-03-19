import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreBooksComponent } from './explore-books/explore-books.component';
import { Top50Component } from './top50/top50.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'ExploreBooks',component:ExploreBooksComponent},
  {path:'Top50',component:Top50Component},
  {path:'Recommendations',component:RecommendationsComponent},
  {path:'book/:original_title',component:BookComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

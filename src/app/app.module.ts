import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExploreBooksComponent } from './explore-books/explore-books.component';
import { Top50Component } from './top50/top50.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { FeaturedBooksComponent } from './home/featured-books/featured-books.component';
import { PopularGenresComponent } from './home/popular-genres/popular-genres.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreBooksComponent,
    Top50Component,
    RecommendationsComponent,
    NavbarComponent,
    WelcomeComponent,
    AboutUsComponent,
    FeaturedBooksComponent,
    PopularGenresComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

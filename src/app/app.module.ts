import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AppHttpService } from './app-http.service';
import { OrderByPipe,MapToIterable } from './orderby.pipe';
import { HouseDetailsComponent } from './houses/house-details/house-details.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { AppHelpers } from './app-helpers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderByPipe,
    MapToIterable,
    HouseDetailsComponent,
    BookDetailsComponent,
    CharacterDetailsComponent,
    ErrorPageComponent,
    HomeComponent,
    MenuBarComponent,
    HousesComponent,
    BooksComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppHttpService, AppHelpers],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HouseDetailsComponent } from './houses/house-details/house-details.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';

export const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'houses', component: HousesComponent, children:[
        {path: ':id', component:HouseDetailsComponent}
    ]},
    {path: 'books', component:BooksComponent, children:[
        {path: ':id', component:BookDetailsComponent}
    ]},
    {path: 'characters', component:CharactersComponent, children:[
        {path: ':id', component:CharacterDetailsComponent}
    ]},
    {path: 'not-found', component:ErrorPageComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}
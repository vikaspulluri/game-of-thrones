import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from '../app-http.service';
import { AppHelpers } from '../app-helpers.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private route: ActivatedRoute,private xhrService:AppHttpService,private router: Router,private helperService:AppHelpers) { }
  books;
  ngOnInit() {
    this.xhrService
        .getDetails('books')
        .subscribe((rawData) => {
          this.books = this.helperService.modifyData(rawData);
        },
          (error) => console.log(error)
        )
  }
  isArray(arr){
    return Array.isArray(arr);
  }


}

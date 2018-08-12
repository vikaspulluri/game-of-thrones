import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private xhrService:AppHttpService,private router: Router) { }
  bookDetails;
  ngOnInit() {
    if(this.route.snapshot.params && this.route.snapshot.params.id){
      this.xhrService
          .getDetails('books',this.route.snapshot.params.id)
          .subscribe((data) => {
            this.bookDetails = data;
            console.log(data);
          },
            (error) => console.log(error)
          )
    }
  }

  objectToArray(obj){
    const arr = Object.keys(obj).map(function(key){return obj[key]})
    return arr;
  }

  isArray(arr){
    return Array.isArray(arr);
  }
}

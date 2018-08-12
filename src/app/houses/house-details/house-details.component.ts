import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from '../../app-http.service';
@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private xhrService:AppHttpService,private router: Router) { }
  houseDetails;
  ngOnInit() {
    if(this.route.snapshot.params && this.route.snapshot.params.id){
      this.xhrService
          .getDetails('houses',this.route.snapshot.params.id)
          .subscribe((data) => {
            this.houseDetails = data;
            console.log(data);
          },
            (error) => console.log(error)
          )
    }
  }

  isArray(arr){
    return Array.isArray(arr);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from '../app-http.service';
import { AppHelpers } from '../app-helpers.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(public route: ActivatedRoute,private xhrService:AppHttpService,private router: Router,private helperService:AppHelpers) { }
  houses;
  ngOnInit() {
    this.xhrService
        .getDetails('houses')
        .subscribe((rawData) => {
          this.houses = this.helperService.modifyData(rawData);
        },
          (error) => console.log(error)
        )
  }

}

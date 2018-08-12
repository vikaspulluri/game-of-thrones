import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from '../app-http.service';
import { AppHelpers } from '../app-helpers.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private route: ActivatedRoute,private xhrService:AppHttpService,private router: Router,private helperService:AppHelpers) { }
  characters;
  ngOnInit() {
    this.xhrService
        .getDetails('characters')
        .subscribe((rawData) => {
          this.characters = this.helperService.modifyData(rawData);
        },
          (error) => console.log(error)
        )
  }

}

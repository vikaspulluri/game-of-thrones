import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from '../../app-http.service';
import { AppHelpers } from '../../app-helpers.service';
import { isArray } from '../../../../node_modules/rxjs/internal/util/isArray';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private xhrService:AppHttpService,private router: Router,private helperService:AppHelpers) { }
  characterDetails;
  ngOnInit() {
    if(this.route.snapshot.params && this.route.snapshot.params.id){
      this.xhrService
          .getDetails('characters',this.route.snapshot.params.id)
          .subscribe((data) => {
            this.characterDetails = data;
            console.log(this.characterDetails);
          },
            (error) => console.log(error)
          )
    }
  }
  isArray(arr){
    return Array.isArray(arr);
  }


}

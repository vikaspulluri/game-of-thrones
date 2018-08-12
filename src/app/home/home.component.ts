import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { config } from '../app.config';
import { AppHelpers } from '../app-helpers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private xhrService: AppHttpService, private helperService:AppHelpers){}
  filters = [
    {name:'Books',value:'books',id:1,selected:true},
    {name:'Characters',value:'characters',id:3,selected:true},
    {name:'Houses',value:'houses',id:2,selected:true}
  ];

  filteredData;

  ngOnInit(){
    this.xhrService.getAllData(this.filters).subscribe(
      (rawData) => {
        // Done:: filter the data and organize it into single array with additional property type="books/chars/houses"
        this.filteredData = this.helperService.filterData(rawData);
      },
      (error) => console.log(error)
    )
  }

  onFiltersChange($filterValues){
    this.xhrService.getData($filterValues).subscribe(
      (rawData) => {
        this.filteredData = this.helperService.filterData(rawData);
      },
      (error) => console.log(error)
    )
  }

}

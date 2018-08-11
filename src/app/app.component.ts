import { Component, OnInit } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { config } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private xhrService: AppHttpService){}
  filters = [
    {name:'Books',value:'books',id:1,selected:true},
    {name:'Characters',value:'characters',id:3,selected:true},
    {name:'Houses',value:'houses',id:2,selected:true}
  ];

  data;

  ngOnInit(){
    this.xhrService.getAllData(this.filters).subscribe(
      (rawData) => {
        // Done:: filter the data and organize it into single array with additional property type="books/chars/houses"
        this.data = this.filterData(rawData);
      },
      (error) => console.log(error)
    )
  }

  onFiltersChange($filterValues){
    this.xhrService.getData($filterValues).subscribe(
      (rawData) => {this.data = this.filterData(rawData);console.log(this.data);},
      (error) => console.log(error)
    )
  }

  filterData(data){
    let filteredData = [];
    for(let items of data){
      let filteredItems = items.map((item)=>{
        item._type = this.getProperty(item.url);
        item.name = item.name == "" ? "N/A" : item.name;
        return item;
      });
      filteredData = filteredData.concat(filteredItems);
    }

    return filteredData;
  }

  getProperty(str:string){
    str = str.slice(config.hostUrl.length+1);
    str = str.split('/')[0];
    //console.log(str);
    return str;
  }

}

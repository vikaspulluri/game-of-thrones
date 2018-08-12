import { config } from './app.config';

export class AppHelpers{
    filterData(data){
        let filteredData = [];
        for(let items of data){
          let filteredItems = items.map((item)=>{
            item._type = this.getProperty(item.url);
            item.name = item.name == "" ? item.aliases[0] : item.name;
            item._detailsLink = this.getProperty(item.url, 'detailsLink'); 
            return item;
          });
          filteredData = filteredData.concat(filteredItems);
        }
    
        return filteredData;
    }
    getProperty(str:string,params?:any){
        str = str.slice(config.hostUrl.length+1);
        if(params && params === 'detailsLink'){
          return str;
        }
        str = str.split('/')[0];
        //console.log(str);
        return str;
    }
    modifyData(data){
        let modArr = data.map((item)=>{
            item._type = this.getProperty(item.url);
            item.name = item.name == "" ? item.aliases[0] : item.name;
            item._detailsLink = this.getProperty(item.url, 'detailsLink'); 
            return item;
        })
        return modArr;
    }
    objectToArray(obj){
        let arr = [];
        for(let key in obj){
            arr[key] = obj[key];
        }
        return arr;
    }
}
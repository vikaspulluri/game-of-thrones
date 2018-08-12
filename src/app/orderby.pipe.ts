import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "orderby"
})
export class OrderByPipe implements PipeTransform{
    transform(arr: any, key:string){
        if(arr && Array.isArray(arr)){    
            return arr.sort(function(a,b){
                return (a[key] > b[key]) ? 1 : (b[key] > a[key]) ? -1 : 0;
            });
        }
    }
}

@Pipe({
    name: 'mapToIterable'
})
export class MapToIterable implements PipeTransform {
    transform(dict: Object) {
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({key: key, val: dict[key]});
            }
        }
        return a;
    }
}
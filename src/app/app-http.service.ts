import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/forkJoin';

import { config } from './app.config';
import { throwError } from 'rxjs';
@Injectable()
export class AppHttpService{
    constructor(private http:Http){}

    getAllData(filters){
        let hostUrl = config.hostUrl;
        let observableBatch = [];
        for(let filter of filters){
            observableBatch.push(
                this.http
                    .get(`${hostUrl}/${filter.value}`)
                    .pipe(map(
                        (res:Response)=>res.json())
                    )
                    .pipe(catchError(
                        (error:Response) => {
                            console.log(error);
                            return Observable.throw(error);
                        })
                    )
                );
        }
        return Observable.forkJoin(observableBatch);
    }

    getData(filters:string[]){
        let hostUrl = config.hostUrl;
        let observableBatch = [];
        for(let filter in filters){
            if(filters[filter]){
                observableBatch.push(
                    this.http
                        .get(`${hostUrl}/${filter}`)
                        .pipe(map(
                            (res:Response)=>res.json())
                        )
                        .pipe(catchError(
                            (error:Response) => {
                                console.log(error);
                                return Observable.throw(error);
                            })
                        )
                    );
            }
        }
        return Observable.forkJoin(observableBatch);
    }

    getDetails(type:string,id?:number){
        let hostUrl = id ? `${config.hostUrl}/${type}/${id}` : `${config.hostUrl}/${type}`;
        return this.http
            .get(hostUrl)
            .pipe(map((res:Response) => res.json()))
    }
}
import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StockModel } from '../model/StockModel'
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataService {

    private StockModel :StockModel[];
    private Url:string ='http://localhost:90/stocks';
    
    sharedData=new Subject();

    constructor(private http: Http) { 
       this.StockModel=[];
    }
    GetStock():Observable<StockModel[]>{
       return this.http
             .get(this.Url)
             .map((response: Response) => {
                 return <StockModel[]>response.json();
             })
             .catch(this.handleError);
    }



    

    AddStock(newStock:StockModel):Observable<StockModel[]>{

        let _body= JSON.stringify(newStock);
        let _headers= new Headers({'Content-Type':'application/json'});
        let _options= new RequestOptions({headers: _headers}); 
        let _url=this.Url;
        return this.http.post(_url,_body,_options)
                      .map( (response:Response) => {
                        return response.json();

                      })
                    .catch(this.handleError);
    }



     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }



    
}
import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/DataService";
import { StockModel } from "../../model/StockModel";
import {Observable} from 'rxjs/Rx';
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";


@Component({
    selector: 'my-app',
    templateUrl: './AppComponent.html'
})

export class AppComponent implements OnInit {

    private CriteriaList:StockModel[];
    private myName:string;
    private model=new StockModel(0,'',0);
    sharedNameInfo:string="swap";

    numberSubscription :Subscription;
    customSubscription :Subscription


    constructor(private _DataService: DataService) {  
        console.dir(new StockModel(0,'',0));
        console.log('Parent Constructor');      
        this.CriteriaList=[];
         

        const myNumber= Observable.interval(2000)
        .map((data:number)=>{
            return data*2;
        });

        this.numberSubscription= myNumber.subscribe((number:Number)=>{
            console.log(number);
        });


        const myObservable=Observable.create((observer:Observer<string>)=>{
                setTimeout(()=>{
                    observer.next('first package');
                },2000);
                setTimeout(()=>{
                observer.next('second package');
                },4000);
                setTimeout(()=>{
                    observer.complete();
                },5000);
        });

        this.customSubscription=  myObservable.subscribe(
            (data:string)=>{
                console.log(data);
            },
            (error:string)=>{
                console.log(error);
            },
            ()=>{
                console.log('Completed');
            }
            );

    }

    loadStock(){
        this._DataService.GetStock()
        .subscribe(
            response=>this.CriteriaList=response,
            error=>console.log('Error' ,error)
        )
    }

    addStock(){
        let addOperation : Observable<StockModel[]>;
        addOperation=this._DataService.AddStock(this.model);
        addOperation.subscribe(
            response=>{ 
                this.model=new StockModel(0,'',0); 
                this.loadStock();
                
            },
             error=>console.log('Error....' ,error)
        )
        
    }


    Save(){
        this.addStock();  
    }

    ngOnInit() { 
        console.log('Parent OnInit');
        this.myName='Swapnil';
        this.loadStock();
        
        this._DataService.sharedData.subscribe((name:string)=>{
            this.sharedNameInfo=name;
        });
    }
}
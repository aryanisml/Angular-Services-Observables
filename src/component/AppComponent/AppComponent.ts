import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/DataService";
import { StockModel } from "../../model/StockModel";
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'my-app',
    templateUrl: './AppComponent.html'
})

export class AppComponent implements OnInit {

    private CriteriaList:StockModel[];
    private myName:string;
    private model=new StockModel(0,'',0);

    constructor(private _DataService: DataService) {  
        console.dir(new StockModel(0,'',0));
        console.log('Parent Constructor');      
        this.CriteriaList=[];
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
        
    }
}
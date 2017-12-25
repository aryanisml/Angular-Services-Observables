import {
    Component, OnInit, Input, OnChanges
    , SimpleChanges
} from '@angular/core';
import { StockModel } from "../../model/StockModel";
import { DataService } from "../../services/DataService";

@Component({
    selector: 'child-app',
    templateUrl: './ChildComponent.html'
})

export class ChildComponent implements OnInit, OnChanges {
    @Input() criterialist: StockModel[];
    @Input() myname: string;
    criteriaListAsync:any;
    //criteriaListAsync=this._DataService.GetStock();

    citeriaTest:StockModel[];

    private myModifiedName: string;
    constructor(private _DataService: DataService) {
        console.log('Child Constructor');
        this.criterialist = [];
        this.myname = '';
        this.myModifiedName = '';
       
    }

    ngOnInit() {
        console.log('Child OnInit');
        this._DataService.sharedStockData.subscribe((response:any)=>{
          this.citeriaTest=response;
        });        
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Child OnChanges');
        if (changes['myname']) {
            this.myModifiedName = 'Hello ' + changes['myname'].currentValue;
        }
         this.criteriaListAsync=this._DataService.GetStock();

    }
    childClick(name:string){
       this._DataService.sharedData.next(name);
    }





}
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'input-child',
    templateUrl: './InputChildTemplate.html'
})

export class InputChildComponent implements OnInit {

private _name:string='';
private _modelArray:string[];

@Input('myName')
set inputModel(myName:string){
   this._name=(myName && myName.trim()) || '<no-string>';
}

get inputModel(){
    return this._name;
}


@Input('myArray')
set modelArray(myArray:string[]){
    this._modelArray=[
        ...myArray
    ]
}

get modelArray(){
    return this._modelArray;
}

    constructor() {
//        this.inputModel='';
     }

    ngOnInit() { }
}
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'input-child',
    templateUrl: './InputChildTemplate.html'
})

export class InputChildComponent implements OnInit {

private _name:string='';
private _modelArray:string[];

@Input('myName')
set inputModel(inputModel:string){
   this._name=(inputModel && inputModel.trim()) || '<no-string>';
}

get inputModel(){
    return this._name;
}


@Input('myArray')
set modelArray(inputModel:string[]){
    this._modelArray=[
        ...inputModel
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
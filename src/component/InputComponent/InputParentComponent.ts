import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'input-parent',
    templateUrl: './InputParetntTemplate.html'
})

export class InputParentComponent implements OnInit {
    private myModels:string[]=["A1","A2"];
    private myName:string='Hello world';
    private myArray:string[]=[
        ...this.myModels
    ]
    constructor() { }
    ngOnInit() { }
}
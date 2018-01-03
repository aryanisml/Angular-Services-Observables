import { Component, OnInit } from '@angular/core';

@Component({
    //selector: 'selector-name',
    templateUrl: './ParentSliderTemplate.html'
})

export class ParentSliderComponent implements OnInit {
    private selectedValue :any;
    constructor() {
        this.selectedValue='Hello Slider';
     }
    ngOnInit() { }


    onSelectionChange(data:any){
        console.log(data);
            this.selectedValue='From ' + data.from + ' To' + data.to;
    }


}
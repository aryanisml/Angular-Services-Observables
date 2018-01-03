import { Component, EventEmitter, Output, OnInit, NgZone, ElementRef } from '@angular/core';
import * as jQuery from "jquery";

@Component({
    selector: 'slider-example',
    templateUrl: './MySliderTemplate.html',

})
export class MySliderComponent {

    @Output() selection: EventEmitter<any> = new EventEmitter<any>();
    private _ngZone: NgZone;
    private el: ElementRef;
    private inputElem: any;
    private initialized = false;

    constructor(el: ElementRef) {
        this.el = el;
    }

    private initSlider() {

        let that = this;
        (<any>jQuery(this.inputElem)).ionRangeSlider({
            type: "single",
            min: 0,
            step: 1,
            max: 6,
            grid: true,
            grid_num: 6,
            values: [
                "0", "1",
                "2", "3",
                "4", "5",
                "6"
            ],
            onChange: function (data:any) {
                  let responseData = {
                from: data.from,
                to: data.to
                }
                that.selection.emit(responseData);
            },
            
            

        });
        this.initialized = true;

    }

    ngOnInit() {
        this.inputElem = this.el.nativeElement.getElementsByTagName('input')[0];
        this.initSlider();
    }



}

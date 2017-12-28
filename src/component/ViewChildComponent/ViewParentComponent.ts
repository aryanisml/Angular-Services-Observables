import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from "./ViewChildComponent";

@Component({
    selector: 'view-parent',
    templateUrl: './ViewParentTemplate.html'
})

export class ViewParentComponent implements OnInit {

    @ViewChild(ViewChildComponent)
    private ViewChildComponent :ViewChildComponent

    constructor() { }

    ngOnInit() { }

    Increase(){
        this.ViewChildComponent.IncreaseBy();
    }
    Decrease(){
        this.ViewChildComponent.DecreaseBy();
    }
}

//https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d
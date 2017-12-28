import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'view-child',
    templateUrl: './ViewChildTemplate.html'
})

export class ViewChildComponent implements OnInit {
    message:string='';
    count:number=0;
    constructor() { }
    ngOnInit() { 

    }
    IncreaseBy(){
       this.count = this.count + 1;
       this.message = "Counter Increase by " + this.count ;

    }
    DecreaseBy(){
       this.count = this.count - 1;
       this.message = "Counter Decrease by " + this.count ;

    }


}
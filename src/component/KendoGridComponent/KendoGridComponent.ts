import { Component, OnInit } from '@angular/core';

import { products  } from "../../model/products";

@Component({
    selector: 'my-grid',
    templateUrl: './KendoGridTemplate.html'
})

export class KendoGridComponent implements OnInit {
    public productArray:any[]=[
        {
          field: 'ProductID',
          title :'ID'  
        },
        {
          field: 'ProductName',
          title :'Name'  
        },
        {
          field: 'UnitPrice',
          title :'Price'  
        },
    ]
    public gridData: any[] = products;

    constructor() { }

    ngOnInit() { }
}
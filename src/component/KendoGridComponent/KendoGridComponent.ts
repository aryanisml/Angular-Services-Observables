import { Component, OnInit } from '@angular/core';

import { products  } from "../../model/products";

@Component({
    selector: 'my-grid',
    templateUrl: './KendoGridTemplate.html'
})

export class KendoGridComponent implements OnInit {
    public gridData: any[] = products;

    constructor() { }

    ngOnInit() { }
}
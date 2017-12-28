
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import { RouterModule } from "@angular/router";

import {AppComponent} from "../component/AppComponent/AppComponent";
import {ParentComponent} from "../component/ParentComponent/ParentComponent"
import {ChildComponent} from "../component/ChildComponent/ChildComponent"
import { ReactiveFormComponent } from "../component/FormComponent/ReactiveFormComponent";
import {ViewParentComponent} from "../component/ViewChildComponent/ViewParentComponent";
import {ViewChildComponent} from "../component/ViewChildComponent/ViewChildComponent";

import {KendoGridComponent} from  '../component/KendoGridComponent/KendoGridComponent';

import { DataService } from "../services/DataService";
import { GridModule } from '@progress/kendo-angular-grid';

import GlobalRoutes from '../routings/globalroutes'

@NgModule({
    imports: [
        BrowserModule,
       FormsModule,
       HttpModule,
       ReactiveFormsModule,
      GridModule ,
    RouterModule.forRoot(GlobalRoutes),
      ],
    exports: [],
    declarations: [
         AppComponent
        ,ParentComponent
        ,ChildComponent
        ,ReactiveFormComponent
        ,KendoGridComponent
        ,ViewParentComponent
        ,ViewChildComponent
    ],
    providers: [DataService],
    bootstrap:[AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from "../component/AppComponent/AppComponent";
import { ParentComponent } from "../component/ParentComponent/ParentComponent"
import { ChildComponent } from "../component/ChildComponent/ChildComponent"
import { ReactiveFormComponent } from "../component/FormComponent/ReactiveFormComponent";
import { ViewParentComponent } from "../component/ViewChildComponent/ViewParentComponent";
import { ViewChildComponent } from "../component/ViewChildComponent/ViewChildComponent";
import { InputParentComponent } from "../component/InputComponent/InputParentComponent";
import { InputChildComponent } from "../component/InputComponent/InputChildComponent";

import { KendoGridComponent } from '../component/KendoGridComponent/KendoGridComponent';

import { DataService } from "../services/DataService";
import { GridModule } from '@progress/kendo-angular-grid';

import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { ParentSliderComponent  } from "../component/sliderComponent/ParentSliderComponent"
import { MySliderComponent  } from "../component/sliderComponent/MySliderComponent"

import GlobalRoutes from '../routings/globalroutes'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        GridModule,
      //  BrowserAnimationsModule,
       // UpgradeModule,
       IonRangeSliderModule,
      
        RouterModule.forRoot(GlobalRoutes),
    ],
    exports: [],
    declarations: [
        AppComponent
        , ParentComponent
        , ChildComponent
        , ReactiveFormComponent
        , KendoGridComponent
        , ViewParentComponent
        , ViewChildComponent
        , InputParentComponent
        , InputChildComponent
        , MySliderComponent 
        ,ParentSliderComponent
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
    // constructor(private upgrade: UpgradeModule) {
    // }
    // ngDoBootstrap() {
    //    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
    // }

}

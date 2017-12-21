
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";

import {AppComponent} from "../component/AppComponent/AppComponent";
import {ChildComponent} from "../component/ChildComponent/ChildComponent"
import { ReactiveFormComponent } from "../component/FormComponent/ReactiveFormComponent";

import { DataService } from "../services/DataService";

@NgModule({
    imports: [
        BrowserModule,
       FormsModule,
       HttpModule,
       ReactiveFormsModule],
    exports: [],
    declarations: [AppComponent,ChildComponent,ReactiveFormComponent],
    providers: [DataService],
    bootstrap:[AppComponent]
})
export class AppModule { }

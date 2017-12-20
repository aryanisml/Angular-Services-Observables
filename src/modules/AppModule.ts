
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";

import {AppComponent} from "../component/AppComponent/AppComponent";
import {ChildComponent} from "../component/ChildComponent/ChildComponent"

import { DataService } from "../services/DataService";

@NgModule({
    imports: [
        BrowserModule,
       FormsModule,
       HttpModule],
    exports: [],
    declarations: [AppComponent,ChildComponent],
    providers: [DataService],
    bootstrap:[AppComponent]
})
export class AppModule { }

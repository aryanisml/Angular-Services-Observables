//http://localhost/ =>
//http://localhost/inventory 
//http://localhost/common
//404 

import {ParentComponent} from "../component/ParentComponent/ParentComponent";
import {ChildComponent} from "../component/ChildComponent/ChildComponent";
import {ReactiveFormComponent} from "../component/FormComponent/ReactiveFormComponent";
import {KendoGridComponent} from  '../component/KendoGridComponent/KendoGridComponent';
import {ViewParentComponent} from "../component/ViewChildComponent/ViewParentComponent";
import { InputParentComponent } from "../component/InputComponent/InputParentComponent";
import { ParentSliderComponent } from "../component/sliderComponent/ParentSliderComponent"

const GlobalRoutes: any[] = [
    //Default Case
    ///http://localhost/
    {
        path: '', //forward
        pathMatch: 'full',
        component: ParentComponent
    },
    ///http://localhost/Common
    {
        path: 'parent', //forward path
        component: ParentComponent
    },
     {
        path: 'reactiveform', //forward path
        component: ReactiveFormComponent
    },
     {
        path: 'kendogrid', //forward path
        component: KendoGridComponent
    },
     {
        path: 'viewchild', //forward path
        component: ViewParentComponent
    }
    ,
    {
        path: 'inputparent', //forward path
        component: InputParentComponent
    },
    {
        path: 'ionslider', //forward path
        component: ParentSliderComponent
    }
    ,
    ///404
    {
        path: '*', //forward path
        redirectTo:'parent'
    }
];

export default GlobalRoutes
import {Component, ViewChild, EventEmitter,Output} from '@angular/core';
import {IonRangeSliderComponent} from "ng2-ion-range-slider";

@Component({
  selector: 'slider-example',
  templateUrl: './MySliderTemplate.html',
  //styleUrls: ['./myslider.component.css']
})
export class MySliderComponent {

  @ViewChild('advancedSliderElement') advancedSliderElement: IonRangeSliderComponent;

  @Output() selection : EventEmitter<any>;

  constructor(){
      this.selection=new EventEmitter<any>();
  }

  min: number = 1;
  max: number = 10;

  simpleSlider = {name: "Simple Slider", onUpdate: Event, onFinish: Event};
  advancedSlider = {name: "Advanced Slider", onUpdate: Event, onFinish: Event};

  update(slider:any, event:any) {
    console.log("Slider updated: " + slider.name);
    slider.onUpdate = event;
    console.log(event.from);
let responseData={
    from: event.from,
    to:event.to
}
    this.selection.emit(responseData);

  }

  finish(slider:any, event:any) {
    console.log("Slider finished: " + slider.name);
    slider.onFinish = event;
  }

  setAdvancedSliderTo(from:any, to:any) {
    this.advancedSliderElement.update({from: from, to:to});
  }
}

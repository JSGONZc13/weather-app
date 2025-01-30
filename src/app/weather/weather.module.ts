import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';



@NgModule({
  declarations: [
    WeatherDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WeatherModule { }

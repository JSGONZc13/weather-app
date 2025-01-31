import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    WeatherDisplayComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [WeatherDisplayComponent]
})
export class WeatherModule { }

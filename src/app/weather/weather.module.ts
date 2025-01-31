import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    WeatherDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [WeatherDisplayComponent]
})
export class WeatherModule { }

import { Component, OnInit } from "@angular/core";
import { Age } from "../../domain/entities/age";
import { AgeApiServiceService } from "../../infrastructure/age-api-service.service";
import { AgeService } from "../../application/age.handler";

@Component({
  selector: "app-weather-display",
  standalone: false,

  templateUrl: "./weather-display.component.html",
  styleUrl: "./weather-display.component.scss",
})

export class WeatherDisplayComponent {
  ageData!: Age;
  name: string = '';

  constructor(private ageService: AgeService) {}

  async getAge(): Promise<void> {
    if (this.name.trim()) {
      this.ageData = await this.ageService.getAge(this.name);
    }
  }
}

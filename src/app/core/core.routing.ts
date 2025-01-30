import { Routes } from "@angular/router";
import { WeatherDisplayComponent } from "../weather/components/weather-display/weather-display.component";

export const coreRouting: Routes = [
  {
    path: "",
    redirectTo: "weather",
    pathMatch: "full",
  },
  {
    path: "weather",
    component: WeatherDisplayComponent,
    loadChildren: () =>
      import("../weather/weather.module").then((m) => m.WeatherModule),
  },

];

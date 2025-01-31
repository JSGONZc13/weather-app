import { AgeRepository } from './../domain/interfaces/age.repository';
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/env";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Age } from '../domain/entities/age';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AgeApiServiceService implements AgeRepository {
  private apiUrl = environment.ageApiUrl;
  constructor(private http: HttpClient) {}

  async getAge(name: string): Promise<Age> {
    const url = new URL(this.apiUrl);
    url.searchParams.append('name', name);

    const response = await fetch(url.toString());
    const data = await response.json();
    return {
      count: data.count,
      name: data.name,
      age: data.age
    };
  }
}

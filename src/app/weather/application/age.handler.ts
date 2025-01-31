import { AgeRepository } from './../domain/interfaces/age.repository';
import { Injectable } from '@angular/core';
import { Age } from '../domain/entities/age';
import { AgeApiServiceService } from '../infrastructure/age-api-service.service';

@Injectable({
  providedIn: 'root',
})
export class AgeService {
  private ageRepository_: AgeRepository;
  constructor(private ageRepository: AgeApiServiceService) {
    this.ageRepository_ = ageRepository;
  }

  getAge(name: string): Promise<Age> {
    return this.ageRepository.getAge(name);
  }
}

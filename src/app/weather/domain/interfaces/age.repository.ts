import { Age } from "../entities/age";

export interface AgeRepository {
  getAge(name: string): Promise<Age>;
}

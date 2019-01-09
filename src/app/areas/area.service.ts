import { Injectable } from '@angular/core';
import { Area } from './area/area.model';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  areas: Area[] = [
    new Area('rectangle', {a: 1, b: 2}, true),
    new Area('rectangle', {a: 3, b: 2}, false),
    new Area('rectangle', {a: 3, b: 6}, true),
    new Area()
  ];

  total: number = 0;

  constructor() {
   }

  getAreas() {
    return this.areas;
  }

  getTotal() {
    return this.total;
  }

  addToTotal(result: number) {
    this.total += result;
  }
}

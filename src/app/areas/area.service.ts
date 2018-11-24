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

  constructor(private fb: FormBuilder) {
   }

  getAreas() {
    return this.areas;
  }

  createAreaForm(area: Area) {
    const type = area.type;
    const values = area.values;
    const added = area.added;

    return this.fb.group({
      type: type,
      values: this.fb.group({
        a: values.a,
        b: values.b
      }),
      added: added
    });
  }
}

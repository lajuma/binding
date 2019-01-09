import { Component, OnInit } from '@angular/core';
import { Area } from './area/area.model';
import { AreaService } from './area.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areas: Area[];
  areasForm: FormGroup;
  total: number;

  constructor(
    private as: AreaService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.areas = this.as.getAreas();
    this.initAreasForm();
    if (this.areas.length > 0) {
      this.createAreasFormArray();
    }
    this.total = this.as.getTotal();
  }

  initAreasForm() {
    this.areasForm = this.fb.group({
      areas: this.fb.array([])
    });
  }

  createAreasFormArray() {
    this.areas.forEach((area) => {
      
      const group = this.fb.group({
        type: area.type,
        added: area.added,
        values: this.fb.group({
          a: area.values.a,
          b: area.values.b
        })
      });
      this.areasForm.controls.areas.value.push(group);
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AreaService } from '../../area.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  @Input() values: any;
  valuesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private as: AreaService) { }

  ngOnInit() {
    this.valuesForm = this.fb.group({
      a: this.values.a,
      b: this.values.b,
      result: this.values.a * this.values.b
    });
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AreaService } from '../../area.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  @Input() values: FormGroup;
  result: number;

  constructor(
    private as: AreaService) { }

  ngOnInit() {
    this.calculateResult();
    this.addToTotal();
  }

  calculateResult() {
    const a = this.values.value.a;
    const b = this.values.value.b;
    this.result = a * b;
  }

  addToTotal() {
    this.as.addToTotal(this.result);
  }

}

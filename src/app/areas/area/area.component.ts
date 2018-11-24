import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AreaService } from '../area.service';
import { Area } from './area.model';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() area: Area;
  @Input() index: number;
  
  areaForm: FormGroup;

  constructor(private as: AreaService) { }

  ngOnInit() {
    this.areaForm = this.as.createAreaForm(this.area);
  }

}

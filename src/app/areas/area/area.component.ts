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

  @Input() area: FormGroup;
  @Input() index: number;
  
  constructor(private as: AreaService) { }

  ngOnInit() {
  }

}

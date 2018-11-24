import { Component, OnInit } from '@angular/core';
import { Area } from './area/area.model';
import { AreaService } from './area.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areas: Area[];

  constructor(private as: AreaService) { }

  ngOnInit() {
    this.areas = this.as.getAreas();
  }

}

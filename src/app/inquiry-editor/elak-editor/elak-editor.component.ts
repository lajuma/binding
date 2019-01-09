import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elak-editor',
  templateUrl: './elak-editor.component.html',
  styleUrls: ['./elak-editor.component.css']
})
export class ElakEditorComponent implements OnInit {

  @Input() elak: string;
  @Output() elakChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  // on primitive types double binding: this needs to be done inside the child component to really emit the data to the outside
  onElakChange() {
    this.elakChange.emit(this.elak);
  }

}

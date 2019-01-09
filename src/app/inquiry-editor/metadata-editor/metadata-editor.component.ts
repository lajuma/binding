import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';

export class Person {
  id: number;
  personId: number;
  roleId: number;

  constructor() {
    this.id = null;
    this.personId = null;
    this.roleId = null;
  }
}

@Component({
  selector: 'app-metadata-editor',
  templateUrl: './metadata-editor.component.html',
  styleUrls: ['./metadata-editor.component.css']
})
export class MetadataEditorComponent implements OnInit, AfterViewInit {

  // Output name has to be inputNameChange
  @Input() persons: Person[];
  @Output() personsChange = new EventEmitter();

  // @ViewChild('form') personForm: NgForm;

  constructor() { }

  ngOnInit() {
    if (!this.persons.length) {
      this.addPerson();
    }
  }
  
  ngAfterViewInit() {
    // this.personForm.valueChanges.subscribe((change) => {
      // console.log(change);
      // watch on value changes and do something with them
    //  });
  }

  addPerson() {
    this.persons.push(new Person());
  }

}
